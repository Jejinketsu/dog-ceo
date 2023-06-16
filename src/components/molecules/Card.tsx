import { View, Text, Image, Pressable } from "react-native";

import React, { useContext, useMemo } from "react";
import { getRandomBreedPic } from "../../api";
import Button from "../atoms/Button";
import { useQuery } from "@tanstack/react-query";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { useRouter } from "expo-router";

type CardProps = {
  name: string;
  isFavorite: boolean;
};

const Card = ({ name, isFavorite }: CardProps) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  const { data, isLoading } = useQuery(["getRandomBreedPic", name], () =>
    getRandomBreedPic.queryFn(name)
  );
  const router = useRouter();

  const favorite = useMemo(() => favorites.includes(name), [favorites]);

  const handleFavorite = async () => {
    if (favorite) removeFavorite(name);
    else addFavorite(name);
  };

  const handleCardPress = () => {
    router.push(`/breed/${name}`);
  };

  return (
    <Pressable
      className="bg-white p-2 rounded-lg mt-2 active:opacity-70"
      onPress={handleCardPress}
    >
      {!data && isLoading ? (
        <View className="h-56 w-40 bg-gray-500 rounded-lg justify-center items-center">
          <Text className="font-bold text-white text-lg">Loading...</Text>
        </View>
      ) : (
        <Image
          className="h-56 w-40 rounded-lg"
          source={{ uri: data?.message }}
        />
      )}
      <View className="mt-2 justify-between flex-row items-center">
        <Text className="font-bold text-sm text-gray-600 capitalize">
          {name}
        </Text>

        <Button
          className="bg-gray-100 w-10 items-center justify-center rounded-lg"
          IconProps={{
            name: "hearth",
            size: 24,
            color: favorite ? "red" : "gray",
          }}
          PressableProps={{ onPress: handleFavorite }}
        />
      </View>
    </Pressable>
  );
};

export default Card;
