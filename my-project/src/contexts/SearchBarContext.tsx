"use client"

import { searchBar, searchBarMore } from '@/services/jobsApi';
import { createContext, ReactElement, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface ISearchBarContext {
  searchBarData: any;
  setSearchBarData: any;
  searchHandlerMore: any;
  searchHandler: any;
  search: string;
  setSearch: any;
}

const SearchBarContext = createContext<ISearchBarContext | null>(null);

export function useSearchBarContext(): ISearchBarContext {
  const context = useContext(SearchBarContext);
  if (!context) {
    throw new Error('useSearchBarContext must be used within a UserProvider');
  }
  return context;
}

export function SearchBarProvider({ children }: any): ReactElement {
  const [searchBarData, setSearchBarData] = useState(null);
  const [search, setSearch] = useState("");

  async function searchHandlerMore() {
    const response = await searchBarMore(search);
    setSearchBarData(response);
    console.log('Query from search bar MORE: ', response);
  }

  async function searchHandler({ target }: any) {
    console.log('SEARCH: ', target.value)
    if (target.value.length !== 0) {
      const response = await searchBar(target.value);
      setSearchBarData(response);
      console.log('Query from search bar: ', response);
    } else {
      setSearchBarData(null);
    }
  }

  const contextValues = {
    searchBarData,
    setSearchBarData,
    searchHandlerMore,
    searchHandler,
    search,
    setSearch,
  }

  return (
    <SearchBarContext.Provider value={contextValues}>
      {children}
    </SearchBarContext.Provider>
  );
}
