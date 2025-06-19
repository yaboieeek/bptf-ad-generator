import { Listing } from "./Listing";
import { useListings } from "./useListings";
import styles from "./ListingList.module.css";

export const ListingList = () => {
  const listings = useListings();

  return (
    <>
      <div className={styles.listingsContainer}>
        {listings.map((listing) => {
          const { item } = listing;
          return (
            <Listing
              itemName={item.quality === 5 ? item.baseName : item.marketName}
              itemImage={item.imageUrl}
              effectImage={`${
                item?.particle?.imageUrl.replace(
                  "images/440/particles",
                  "assets/particles"
                ) ?? null
              }`}
              effectName={item?.particle?.name ?? ""}
              itemQuality={item.quality}
              price={listing.currencies}
              spells={
                item.spells ? item.spells.map((spell) => spell.name) : null
              }
            />
          );
        })}
      </div>
    </>
  );
};
