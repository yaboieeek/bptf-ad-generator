export const token = localStorage.getItem("userToken") || null;

export const getToken = () => localStorage.getItem("userToken");
export const setToken = (token) => localStorage.setItem("userToken", token);
export const removeToken = () => localStorage.removeItem("userItem");
