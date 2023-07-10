import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:3001/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("superheroes", fetchSuperHeroes, {
    onSuccess,
    onError,
  });
};
