import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import PhotoList from "../../components/templates/PhotoList";
import { useQuery } from "@tanstack/react-query";
import { getDogsByBreed } from "../../api";

const BreedPage = () => {
  const { breed } = useLocalSearchParams<{ breed: string }>();
  const { data, refetch, isFetching } = useQuery({
    queryKey: getDogsByBreed.queryKey,
    queryFn: () => getDogsByBreed.queryFn(breed),
  });

  return <PhotoList name={breed} photos={data?.message} />;
};

export default BreedPage;
