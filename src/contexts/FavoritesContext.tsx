import React, { createContext, useCallback, useEffect, useMemo } from "react";
import { getFavorites, storeFavorites } from "../utils/localStorage";

export const FavoritesContext = createContext({
  favorites: [],
  addFavorite: (name: string) => {},
  removeFavorite: (name: string) => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = React.useState<string[]>([]);

  useEffect(() => {
    const getFavoritesFromStorage = async () => {
      const favorites = await getFavorites();
      setFavorites(favorites);
    };

    getFavoritesFromStorage();
  }, []);

  const addFavorite = useCallback(async (name: string) => {
    const newFavorites = await getFavorites();
    storeFavorites([...newFavorites, name]);
    setFavorites([...newFavorites, name]);
  }, []);

  const removeFavorite = useCallback(async (name: string) => {
    const newFavorites = await getFavorites();
    storeFavorites(newFavorites.filter((item) => item !== name));
    setFavorites(newFavorites.filter((item) => item !== name));
  }, []);

  const values = useMemo(
    () => ({ favorites, addFavorite, removeFavorite }),
    [favorites, setFavorites]
  );

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
};
