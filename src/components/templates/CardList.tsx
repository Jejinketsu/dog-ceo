import { Text, SafeAreaView } from "react-native";
import React from "react";
import Search from "../molecules/Search";
import Card from "../molecules/Card";
import { FlashList } from "@shopify/flash-list";

type CardListProps = {
  title: string;
  breedList: string[];
  isFetching?: boolean;
  refetch?: () => void;
};

const CardList = ({ title, breedList, isFetching, refetch }: CardListProps) => {
  const [breedsSearch, setBreedsSearch] = React.useState("");

  return (
    <SafeAreaView className="flex-1 mt-10 pl-4 pr-4">
      <Text className="text-xl font-bold">{title}</Text>
      <Text className="text-sm text-gray-500 text-center mt-2">
        Click on the cards below to see more pictures of each breeds or search
        for one you want.
      </Text>
      <Search
        className="mt-2"
        InputTextProps={{
          placeholder: "Search a breed...",
          value: breedsSearch,
          onChangeText: setBreedsSearch,
        }}
        ButtonProps={{
          PressableProps: {
            onPress: () => {
              console.log("search", breedsSearch);
            },
          },
        }}
      />

      <FlashList
        className="mt-2"
        data={breedList.filter((breed) =>
          breed.includes(breedsSearch.toLowerCase())
        )}
        keyExtractor={(item, index) => item + index}
        estimatedItemSize={240}
        refreshing={isFetching}
        numColumns={2}
        onRefresh={refetch}
        renderItem={({ item }) => {
          return <Card name={item} isFavorite={false} />;
        }}
      />
    </SafeAreaView>
  );
};

export default CardList;
