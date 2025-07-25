import { useEffect } from 'react';
import useTimeOut from './useTimeOut';

const useDebounce = (
  callback: () => void,
  delay: number,
  dependencies: any[]
) => {
  const { reset, clear } = useTimeOut(callback, delay);
  const [page] = dependencies;
  useEffect(reset, [...dependencies, reset]);
  useEffect(() => {
    clear();
    callback();
  }, [clear, page]);
};

export default useDebounce;
