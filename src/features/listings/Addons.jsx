import styles from "./Addons.module.css";
export const Addons = ({ spells }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "11px",
          borderLeft: spells.length > 1 ? "4px solid red" : "4px solid green",
          padding: "5px",
          position: "relative",
        }}
      >
        {spells.map((spell, index) => (
          <>
            <span key={index}>{spell}</span>
          </>
        ))}
      </div>
    </>
  );
};
