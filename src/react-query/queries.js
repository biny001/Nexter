import { useQuery } from "@tanstack/react-query";
import { fetchData, searchMovies } from "../api/api";
import { fetchDetails } from "../api/api";

//trending movies
export function useGetMovie() {
  return useQuery({
    queryKey: ["trending-movies"],
    queryFn: fetchData,
  });
}
//movie details
export function useGetDetails(id) {
  return useQuery({
    queryKey: ["details", id],
    queryFn: () => fetchDetails(id),
  });
}
//search movies
export function useSearchMovie(query) {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => searchMovies(query),
  });
}
