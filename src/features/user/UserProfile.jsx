import { userData } from "../auth/lib/userDataStorage";
import styles from "./UserProfile.module.css";
import { useUserColor } from "./useUserColor";
export const UserProfile = () => {
  console.log(userData);
  return (
    <>
      <div className={styles.container} style={{ borderColor: useUserColor() }}>
        <img
          src={userData.avatar}
          alt={userData.name + `'s profile picture`}
          height="100px"
        />
        <h2 style={{ color: useUserColor() }}>{userData.name}'s listings</h2>
      </div>
    </>
  );
};
