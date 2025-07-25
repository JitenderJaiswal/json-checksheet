import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export function useQuery(key: string) {
  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search, key]);
  return query.get(key) || '';
}
