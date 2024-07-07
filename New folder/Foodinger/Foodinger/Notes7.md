# ROUTES UseEffects , useState

## UseEffects

- every time when my components render useEffect is called but because we have put dependency array so it change the behaviour of its render and its optional
- if no dependenacy array useEffect is called on every render

### cases:

1. If no dependencyr array then use Effect is called on every render [default Behaviour]

```
 useEffect(() => {
    fetchData();
  }, []);
```

2.

```If dependency array is empty then use Effect is called on only initil render and just once when the component is render for the diest time
useEffect(() => {
    fetchData();
  }, []);
```

3. if we put something in dependeany array so it is only be called when the dependancy changes

```
useEffect(() => {
    fetchData();
  }, [searchText]);
```

## UseState

- never use usestate , never create state variable outside of your components[component ke andar use karna hai]
- try to make useState on Top
- never use your use state hooks inside a (condition)if else , for loop and functions

```
if(){
    const[z,setZ]=useState(")
}
```

- create inconsistency

# ROUTER

- use react router dom

```
 npm i react-router-dom
```

## Steps

1. go to app.js( route level app)
2. create routing configuration for that import browser router
   `import { createBrowserRouter } from 'react-router-dom';` it willl create routing configuration
3.

```
function App() {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
}
const appRouter = createBrowserRouter()
[we are creating a router (appRouter) and pass configuration ]
[configuration tells browser what will happen what will happen on specific path(routes)]

```

- createBrowserRouter will take a list of path
- and will contain two things path and element
  // array of object 1)define path and 2)what should happen on that path⬇️

- when we have vreated configutaion then we have to provide to someone to render it so we need RouterProvider

```
import React from 'react'
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import { createBrowserRouter } from 'react-router-dom';



function App() {
 return (
   <div>
     <Header/>
     <Body/>
   </div>
 )
}
const appRouter = createBrowserRouter([
 // array of object define path and what should happen on that path⬇️
 {
   path: "/",
   element: <App />
 },
 {
    path: "/about",
    element: <About />
 },
 {
   path: "/contact",
   element : <Contact/>
 }
])

     export default App

```

# HOW TO

1.  npm i react-router-dom

# EXTRA

App BrowserRouter Routes Route

(App)(BR)(R)aa ka Dabb (RR)A

- [ghar]: A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.

> Browser Router
> Imagine your React app is like a house with different rooms. BrowserRouter is like the front door with an address. When someone (like a user or a link) wants to enter a specific room (page) in your house, they use the address on the front door.
> In React, BrowserRouter helps your app understand the different addresses (URLs) people might type into their browser. It's like a map for your React app, telling it which room (component or page) to show when someone goes to a certain address (URL).

So, if your app is at http://yourwebsite.com, and someone goes to http://yourwebsite.com/about, BrowserRouter helps your app figure out that it should show the "About" room (or component) to the user.

> Routes:
> Routes is like a collection of many Route instructions. It's a way to organize and define multiple routes for your application. Each Route inside Routes helps your app understand what to display for different parts of your website.

For example, you might have a Routes component that contains several Route components. Each Route corresponds to a different page or section of your app. Together, they make up the various pages or views of your application.

> Route:
> Think of a Route as a set of instructions for your app. It says, "Hey, if the URL matches a certain pattern, show a specific component."

For instance, you might have a Route that says, "If the URL is /home, display the Home component." It's like a rulebook for your app to determine what to show when the user goes to different URLs.

## App

```
import React from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      {/* routes ke upar jo common component rahega wo dalna hai aur routes ke neeche jo jo raste hai usko dalna hai*/}
      <!-- jaise agar https://localhost1234/ pe pahuch jaynge hmlog HOME PE -->
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

## navbar

> NavLink is a component provided by the React Router library that is specifically designed for navigation links in a React application. It's an enhanced version of the traditional Link component with additional features. Here's the use of NavLink

```
import React from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [loginText, setLoginText] = useState("Login");

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="logo Image" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Conact Us</NavLink>
            </li>
            <li className="cart">
              <NavLink to="/cart">
                <img src={cart} alt="" />
              </NavLink>
            </li>

            <button
              className="loginBtn"
              onClick={() => {
                if (loginText === "Login") {
                  setLoginText("Logout");
                } else {
                  setLoginText("Login");
                }
              }}
            >
              {loginText}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

```

- or similiar method
- use "https://www.youtube.com/watch?v=8DRq5nPC7ak"

## main.jsx

```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

## APP.jsx

```
import React from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      {/* routes ke upar jo common component rahega wo dalna hai aur routes ke neeche jo jo raste hai usko dalna hai*/}
      <Routes>
        <Route path="/" element={<Body />} errorElement={Error} />
        <Route path="/contact" element={<Contact />} errorElement={Error} />
        <Route path="/about" element={<About />} errorElement={Error}  />
      </Routes>
    </>

  );
}

export default App;
```

## navbar yeh same rahega

```
import React from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [loginText, setLoginText] = useState("Login");

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <NavLink to="/" className="nav-link">
            <img src={logo} alt="logo Image" />
          </NavLink>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <NavLink to="/" className="nav-link" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">Conact Us</NavLink>
            </li>
            <li className="cart">
              <NavLink to="/cart" className="nav-link">
                <img src={cart} alt="" />
              </NavLink>
            </li>

            <button
              className="loginBtn"
              onClick={() => {
                if (loginText === "Login") {
                  setLoginText("Logout");
                } else {
                  setLoginText("Login");
                }
              }}
            >
              {loginText}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
```

- it doesnt reload the whole page just chang(refresh)e the component thats why it is called single page application.it is not reloading page
- pehi baar mai saare component reload kardeta hai

# 2 types of Routing in web apps

- Client Side Routing (jo padhe hai)
- Server side Routing (Old method)

## useRouterError

- GIve detail about the error

# Dynamic Routing

- differnt page for differnt restaurant
- localhost5300/restaurant/meghnafoods
- and it use another api called for differnt types of hotel

>    <Route path="/restaurants/:resId" element={RestaurantMenu}/>
> > here :resId is use for dynamic rouing

# useParam
- In React, useParams is a hook provided by the React Router library. It is used to extract parameters from the current URL in a route.
```
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();

  // Now, `userId` contains the value from the URL
  // e.g., if the URL is "/users/123", `userId` will be "123"

  // Rest of your component logic...
}
```
----
## ResutaurantMenu
```
 const { resId } = useParams();

  useEffect(() => {
    fetchMenu(); //callbac function
  }, []); //dependancy array

  const fetchMenu = async () => {
      const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&");
  ```


##  body.jsx
````
<div className="res-container">
        {filteredResObj.map((e) => (
          <Link key={e.info.id} to={"/restaurants/"+e.info.id}>
          <RestaurantCard  resData={e} />
          </Link>
        ))}
      </div>
````


# whole code

## restaurantMenu
```
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../Utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu(); //callbac function
  }, []); //dependancy array

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&");



      const json = await data.json();
      // console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (resInfo === null) return <Shimmer />;

  // ? use graphQL this structre become easy
  //  const info = resInfo?.cards[0]?.card?.card?.info || {};
  //  const { name, costForTwo, cuisines, avgRating, locality, areaName } = info;
  const { name, costForTwo, cuisines, avgRating, locality, areaName } =
    resInfo?.cards[0]?.card?.card?.info;
  // const info1 =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
  // const { itemCards } = info1;
  const itemCardz =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  // console.log(itemCardz);

  return (
    <div className="menu">
      <h1>{name || "not available"}</h1>
      <h3>{costForTwo || "not available"}</h3>
      <p>{cuisines || "not available"}</p>
      <h3>{avgRating || "not available"}</h3>
      <h3>{locality || "not available"}</h3>
      <h3>{areaName || "not available"}</h3>
      {/* itemCardz[0]?.card?.info?.name */}
      <h1>Menu</h1>
      <ul>
        {itemCardz?.map((item) => (
          <li key={item?.card?.info?.id}>
            ----
            {item?.card?.info?.name} ------
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
            Rs
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
```

##body.jsx

```
import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import resObj from "../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body(props) {
  const [filteredResObj, setFilteredResObj] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [buttonText, setButtonText] = useState("top Rated Restaurants");
  const [searchText, setSearchText] = useState("");

  const handleToggle = () => {
    if (buttonText === "top Rated Restaurants") {
      setButtonText("All Restaurants");
      setFilteredResObj(resObj.filter((e) => e.info.avgRating > 4.5));
    } else {
      setButtonText("top Rated Restaurants");
      setFilteredResObj(filteredRestaurant);
    }
  };

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D26.87560%26lng%3D80.91150%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json);
      setFilteredRestaurant(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilteredResObj(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return filteredResObj.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search-container">
          <h1 className="headingf">Order Your Favourite Food</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your favourite Restaurant Name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="btn"
              onClick={() => {
                const filteredRestaurant = filteredResObj.filter((e) =>
                  e.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredResObj(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <button className="filtered-btn" onClick={handleToggle}>
          {buttonText}
        </button>
      </div>

      <div className="res-container">
        {filteredResObj.map((e) => (
          <Link key={e.info.id} to={"/restaurants/"+e.info.id}>
          <RestaurantCard  resData={e} />
          </Link>
        ))}
      </div>
    </> 
  );
}

export default Body;
```