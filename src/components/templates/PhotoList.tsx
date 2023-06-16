import React, { useContext, useMemo } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { FlashList } from "@shopify/flash-list";

import Button from "../atoms/Button";
import PhotoPreviewer from "../atoms/PhotoPreviewer";

type PhotoListProps = {
  name: string;
  photos: string[];
  isFetching?: boolean;
  refetch?: () => void;
};

const PhotoList = ({ name, photos, isFetching, refetch }: PhotoListProps) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const favorite = useMemo(() => favorites.includes(name), [favorites]);

  const handleFavorite = async () => {
    if (favorite) removeFavorite(name);
    else addFavorite(name);
  };

  return (
    <SafeAreaView className="flex-1 mt-10 pl-4 pr-4">
      <View className="flex-row justify-between items-center bg-white p-2 rounded-lg">
        <Text className="text-xl font-bold">{name}</Text>

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

      <View className="flex-1 mt-2">
        <FlashList
          data={photos}
          keyExtractor={(item, index) => item + index}
          estimatedItemSize={240}
          numColumns={2}
          refreshing={isFetching}
          onRefresh={refetch}
          renderItem={({ item }) => {
            return <PhotoPreviewer uri={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PhotoList;
