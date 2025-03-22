import React from "react";
import Navbar from "./components/Navbar";
import Restaurants from "./components/Restaurants";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useOnline from "./utils/useOnline";
import "remixicon/fonts/remixicon.css";

import { Outlet, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Internet from "./components/Internet";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartPage from "./components/CartPage";
const App = () => {
  const isOnline = useOnline();
  if (!isOnline) return <Internet />;
  return (
    <Provider store={store}>
      <div className="w-full min-h-screen bg-zinc-900">
        <Navbar />
        <Outlet />
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/menu/:id" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
