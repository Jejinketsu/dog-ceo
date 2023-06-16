import React, { useContext } from "react";
import CardList from "../components/templates/CardList";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return <CardList title="Favorite Breeds" breedList={favorites} />;
};

export default Favorites;
