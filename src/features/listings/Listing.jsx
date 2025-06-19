import { Addons } from "./Addons";
import styles from "./Listing.module.css";

export const Listing = ({
  effectImage,
  effectName,
  itemImage,
  itemName,
  itemQuality,
  price,
  spells = null,
}) => {
  return (
    <>
      <div
        className={styles.container}
        style={{
          border: `1px solid ${itemQuality.color}`,
        }}
      >
        <div
          className="imageContainer"
          style={{
            flex: 1,
          }}
        >
          <div
            className="imgContainer"
            style={{
              backgroundImage: `url('https://tf2.kresenko.com${effectImage}')`,
              height: `min-content`,
              width: "min-content",
              backgroundSize: "cover",
            }}
          >
            <img
              src={itemImage}
              alt={effectName + ` ${itemName}`}
              height="100px"
            />
          </div>
        </div>
        <div className={styles.priceContainer}>
          <h2>{price.keys} keys</h2>
          {price.metal ? <span>{price.metal} ref</span> : null}
          {spells ? <Addons spells={spells} /> : null}
        </div>
        <div className={styles.namingContainer}>
          <span>
            <b style={{ color: itemQuality.color, filter: "brightness(1.2)" }}>
              {effectName}{" "}
            </b>
          </span>
          <span>{itemName.replace("Unusual ", "")}</span>
        </div>
      </div>
    </>
  );
};
