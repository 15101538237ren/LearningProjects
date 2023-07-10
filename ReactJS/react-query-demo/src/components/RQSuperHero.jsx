import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const RQSuperHero = () => {
  const onSuccess = (data) => {
    console.log({ data });
  };

  const onError = (error) => {
    console.log({ error });
  };

  const { isLoading, data, isError, error } = useSuperHeroesData(
    onSuccess,
    onError
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>RQ - Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>
              {hero.id} {hero.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RQSuperHero;
