import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Cart from "./components/Cart.jsx";
import Foot from "./components/Foot.jsx";

import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { Routes, Route } from "react-router-dom";
import UserContext from "./Utils/UserContext.jsx";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore.jsx";


function App() {
  // Authentication Logic
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Fetching data for Verification/authentication
    const data = { name: "Guest Login", setUserName }; // Assuming "Hasir" is a string
    setUserName(data.name);
  }, []);

  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            {/* dynamic Routing */}
            <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
            {/* This Route with 'path="*"' will act as a catch-all for 404 */}
            <Route path="*" element={<Error />} />
          </Routes>
          <Foot />
        </UserContext.Provider>
      </Provider>
    </>
  );
}

export default App;
