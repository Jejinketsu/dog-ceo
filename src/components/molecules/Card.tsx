import { View, Text, Image } from "react-native";

import React from "react";
import { getRandomBreedPic } from "../../api";
import Button from "../atoms/Button";
import { useQuery } from "@tanstack/react-query";

type CardProps = {
  name: string;
  isFavorite: boolean;
};

const Card = ({ name, isFavorite }: CardProps) => {
  const { data, isLoading } = useQuery(["getRandomBreedPic", name], () =>
    getRandomBreedPic.queryFn(name)
  );

  const [favorite, setFavorite] = React.useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <View className="bg-white p-2 rounded-lg mt-2">
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
    </View>
  );
};

export default Card;
