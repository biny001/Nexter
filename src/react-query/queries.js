import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/api";

export function useGetMovie() {
  return useQuery({
    queryKey: ["trending-movies"],
    queryFn: fetchData,
  });
}
