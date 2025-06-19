import { RouterProvider } from "./providers/RouterProvider";
import { AuthProvider } from "../features/auth/ui/AuthProvider";
import { Footer } from "../shared/footer/Footer";
export const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider></RouterProvider>
      </AuthProvider>
      <Footer />
    </>
  );
};
