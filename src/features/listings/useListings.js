import { useEffect, useState } from "react";
import { fetchUserListings } from "./getListings";

export const useListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const loadedListings = await fetchUserListings();
      if (!!loadedListings) setListings(loadedListings);
    };
    fetchListings();
  }, []);
  return listings;
};
