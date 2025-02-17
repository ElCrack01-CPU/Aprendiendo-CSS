import { useState, useEffect } from 'react';

export const useFetch = (fetchFunction, page = 1, limit = 5) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    let isMounted = true; // Variable to track the mounted state

    const fetchData = async () => {
      try {
        const result = await fetchFunction(currentPage, limit);
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup function to handle unmounted state
    };
  }, [fetchFunction, currentPage, limit]);

  return { data, loading, error, currentPage, setCurrentPage };
};
