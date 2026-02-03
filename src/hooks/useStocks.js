import { useQuery } from '@tanstack/react-query';
import { fetchStockData } from '../api/marketstack';

export function useStocks(symbol) {
  return useQuery({
    queryKey: ['stocks', symbol], 
    queryFn: () => fetchStockData(symbol),
    staleTime: 1000 * 60 * 5,
  });
}