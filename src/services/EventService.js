import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://rest.bandsintown.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getAllEvents = async () => {
  return apiClient.get(
    "/artists/john%20legend/events?app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe"
  );
};
