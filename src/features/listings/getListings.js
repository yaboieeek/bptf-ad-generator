import { api } from "../auth/api/listingsApi";
import { getToken } from "../auth/lib/tokenStorage";
export const fetchUserListings = async (token) => {
  try {
    const response = await api.get("/v2/classifieds/listings", {
      params: { token: getToken() },
    });
    return response.data.results.filter((item) => item.intent === "sell");
  } catch (e) {
    return null;
  }
};
