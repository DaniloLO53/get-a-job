import api from './api';

export async function listJobs() {
  const response = await api.get("/jobs");
  return response.data;
}

export async function searchBar(searchQuery: string) {
  const response = await api.get("/jobs/search", {
    params: {
      searchQuery
    }
  });
  return response.data;
}

export async function searchBarMore(searchQuery: string) {
  const response = await api.get("/jobs/search/more", {
    params: {
      searchQuery
    }
  });
  return response.data;
}