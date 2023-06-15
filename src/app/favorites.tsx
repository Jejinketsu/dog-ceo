import React from "react";
import CardList from "../components/templates/CardList";
import { useQuery } from "@tanstack/react-query";
import { getAllDogs } from "../api";

const Favorites = () => {
  const { data, refetch, isFetching } = useQuery({
    ...getAllDogs,
  });

  const breedList = Object.keys(data?.message || {});

  return (
    <CardList
      title="Favorite Breeds"
      breedList={breedList}
      isFetching={isFetching}
      refetch={refetch}
    />
  );
};

export default Favorites;
