import axios from "axios";
import { APIResponse, OtherImages } from "../types/interfaces";

const http = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  headers: {
    "x-api-key": process.env.API_KEY || "",
  },
});

export const catWikiRepository = {
  getTop10Breeds: async (): Promise<APIResponse[]> => {
    const { data } = await http.get("breeds?limit=10");
    return data;
  },
  getTop4Breeds: async (): Promise<APIResponse[]> => {
    const { data } = await http.get("breeds?limit=4");
    return data;
  },
  searchByName: async (name: string): Promise<APIResponse[]> => {
    const { data } = await http.get(`breeds/search?q=${name}`);
    return data;
  },
  getOtherPhotosByBreedId: async (breedId: string): Promise<OtherImages[]> => {
    const { data } = await http.get(`images/search?breed_id=${breedId}`);
    return data;
  },
};
