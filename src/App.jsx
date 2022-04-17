import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";

import { useProducts } from './context/product/context'
import Header from "./components/Header/Header";
import Products from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";
import RequireAuth from "./RequireAuth";

function Home() {

  const { productState} = useProducts()

  // console.log(productState)

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <div className="app__body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Products />} />
        <Route path="cart" 
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            } />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
