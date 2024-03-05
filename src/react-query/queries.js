import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/api";
import { fetchDetails } from "../api/api";

export function useGetMovie() {
  return useQuery({
    queryKey: ["trending-movies"],
    queryFn: fetchData,
  });
}

export function useGetDetails(id) {
  return useQuery({
    queryKey: ["details", id],
    queryFn: () => fetchDetails(id),
  });
}
