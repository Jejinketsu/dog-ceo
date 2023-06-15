import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getAllDogs } from "../api";
import CardList from "../components/templates/CardList";

const Home = () => {
  const { data, refetch, isFetching } = useQuery({
    ...getAllDogs,
  });

  const breedList = Object.keys(data?.message || {});

  return (
    <CardList
      title="Breeds"
      breedList={breedList}
      isFetching={isFetching}
      refetch={refetch}
    />
  );
};

export default Home;
