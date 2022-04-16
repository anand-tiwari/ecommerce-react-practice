import { Navigate, useLocation } from "react-router-dom";
import { useProducts } from "./context/product/context";

export default function RequireAuth({ children}) {
  const { productState } = useProducts();
  let location = useLocation()
  return productState.isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} replace />;
}