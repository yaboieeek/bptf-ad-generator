import { useState, useContext } from "react";
import { AuthContext } from "../../features/auth/ui/AuthProvider";
import { fetchUserData } from "../../features/auth/api/listingsApi";
import { setUserData } from "../../features/auth/lib/userDataStorage";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const serverValidation = async (token) => {
    try {
      const response = await fetchUserData(token);
      if (response.status !== 200) throw new Error("Failed to fetch data!");
      return response.data.user;
    } catch (err) {
      return null;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleKeyPress = async (e) => {
    if (e.code !== `Enter`) return;
    const validData = await serverValidation(e.target.value);
    if (!validData) {
      alert("Invalid token was provided!");
      return;
    }
    login(e.target.value);
    setUserData(validData);
    alert("Login successfull!");

    setInput("");
  };
  return (
    <>
      <div className={styles.container}>
        <h1 style={{ marginBottom: 20 }}>Ad generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Input your backpack.tf token here..."
            onKeyDown={handleKeyPress}
          />
        </form>
      </div>
    </>
  );
};
