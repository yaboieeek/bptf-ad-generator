import { useEffect, useState } from "react";
import { getToken, setToken } from "../lib/tokenStorage";

export const TokenInputForm = () => {
  const [token, setAlertToken] = useState(() => getToken());
  useEffect(() => {
    if (!token) {
      const tokenAlert = prompt("Set your token");
      if (tokenAlert) {
        setToken(tokenAlert);
        setAlertToken(tokenAlert);
        alert(`Your token is: '${tokenAlert}'`);
      }
    }
  }, [token]);
  return null;
};
