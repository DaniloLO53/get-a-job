import { useEffect, useState } from "react";

export default function useAsync(handler: any, immediate = true) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState(null);

  const act = async (...args: any[]) => {
    setLoading(true);

    try {
      const data = await handler(...args);
      setData(data);
      setLoading(false);

      return data;
    } catch (error: any) {
      setErrors(error);
      setLoading(false);
      throw error;
    }
  }

  useEffect(() => {
    immediate && act();
  }, [])

  return {
    data,
    errors,
    loading,
    act
  }
}