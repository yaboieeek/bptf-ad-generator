import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../../../pages/HomePage";
import { LoginPage } from "../../../pages/LoginPage";
import { useContext } from "react";
import { AuthContext } from "../../../features/auth/ui/AuthProvider";

export const RouterProvider = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuth ? <HomePage /> : <LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
