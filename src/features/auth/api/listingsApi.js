import axios from "axios";
import { getToken } from "../lib/tokenStorage";

export const api = axios.create({
  baseURL: "https://backpack.tf/api",
});

export const fetchUserData = (token) =>
  api.get("/", {
    params: { token: token },
  });
