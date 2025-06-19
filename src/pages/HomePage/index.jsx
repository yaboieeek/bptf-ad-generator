import { useContext } from "react";
import { AuthContext } from "../../features/auth/ui/AuthProvider";
import { ListingList } from "../../features/listings/ListingList";
import { UserProfile } from "../../features/user/UserProfile";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className={styles.mainWindow}>
      <UserProfile />
      <div className={styles.container}>
        <ListingList />
      </div>
    </div>
  );
};
