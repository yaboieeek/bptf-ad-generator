export const userData = JSON.parse(localStorage.getItem("userData")) || null;

export const setUserData = (userData) =>
  localStorage.setItem("userData", JSON.stringify(userData));

export const removeUserData = () => localStorage.removeItem("userData");
