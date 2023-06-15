import axios from "axios";

export const getAllDogs = {
  queryKey: ["all-dogs"],
  queryFn: async () => {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/list/all");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export const getDogsByBreed = {
  queryKey: ["dogs-by-breed"],
  queryFn: async (breed: string) => {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export const getRandomBreedPic = {
  queryKey: ["random-breed-pic"],
  queryFn: async (breed: string) => {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
