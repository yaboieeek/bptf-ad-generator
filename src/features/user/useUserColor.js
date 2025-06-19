import { userData } from "../auth/lib/userDataStorage";
export const useUserColor = () => {
  const colorArray = {
    awesome: "#888",
    awesome1: "#31708f",
    awesome2: "#3c763d",
    awesome3: "#333",
    awesome4: "#24985e",
    awesome5: "#cc31a2",
    awesome6: "#b99e12",
    xmas: "#cc495b",
  };

  return colorArray[userData.customNameStyle];
};
