import AsyncStorage from "@react-native-async-storage/async-storage";

const storeFavorites = async (value: string[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("favorites", jsonValue);
  } catch (e) {
    console.log("error", e);
  }
};

const getFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("favorites");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log("error", e);
  }
};

export { storeFavorites, getFavorites };
