# single responsibilty principle

- The Single Responsibility Principle (SRP) is one of the SOLID principles of object-oriented design and programming. It suggests that a class should have only one reason to change, meaning that a class should have only one responsibility or job.
- which make the code more reusable , maintainable and testable

# CustomHooks

-A custom hook typically encapsulates some reusable logic and can include state, effect hooks, or any other React hook. The name of a custom hook conventionally starts with the word "use" to indicate that it follows the rules of React hooks.

- example restaurantMenu has two responsibility fetching the data and displaying the data but we need to use RestaurantMenu just for displaying the data

- so i want fetching of data to be done by a custom hook name useRestaurantMenu.jsx

```
import { useEffect , useState} from "react"
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo , setResinfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResinfo(json.data);
    };


    return resInfo;
}
export default useRestaurantMenu
```

and my new code for restaurant Menu will be like the line i have commented is shift on useRestaurantMenu

```
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";
import { MENU_API, MENU_IMG } from "../Utils/constants";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu(); //callbac function
  // }, []); //dependancy array

  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&");

  //     const json = await data.json();
  //     console.log(json);
  //     setResInfo(json.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  if (resInfo === null) return <Shimmer />;

  // ? use graphQL this structre become easy

  const {
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    locality,
    areaName,
    city,
    cloudinaryImageId,
  } = resInfo?.cards[0]?.card?.card?.info;

  const itemCardz =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  // console.log(itemCardz);

  return (
    <>
      <div className="hotel-info">
        <div className="hotel">
          <div className="MenuS1">
            <h1>{name}</h1>
            <div className="MenuS1-right">
              <h3>{avgRatingString}⭐ out of 5 Stars </h3>
              <img src={MENU_IMG + cloudinaryImageId} />
            </div>
          </div>
          <div className=" MenuS2">
            <span>Cusines: {cuisines.join(",")}</span>
            <p>
              {locality} , {areaName} , {city}
            </p>
          </div>
          {/* itemCardz[0]?.card?.info?.name */}
          <div className="menu">
            <h1>Menu</h1>
            <div className="items">
              <ul>
                {itemCardz?.map((item) => (
                  <li key={item?.card?.info?.id}>
                    <div className="img">
                      <img src={MENU_IMG + item?.card?.info?.imageId || item?.card?.info?.image} />
                    </div>
                    <div className="info">
                      <h1>{item?.card?.info?.name}</h1>
                      <h3>

                      {item?.card?.info?.description}
                      </h3>
                      <h2>
                        {item?.card?.info?.defaultPrice / 100 ||
                          item?.card?.info?.price / 100} Rs
                      </h2>
                      {/*<button className="btn1">Order Now</button> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
```

# Optimizing Project

## Lazy Loading , On demand Loading , Chunking, Code Splitting and Dynamoc Bundling all these are same things for the same process.

## PROCESS :- to breakdown your app into smaller chnks .you have to mmake your application in smaller chunk or split the code so it can load faster

1. Code Splitting:

Code splitting is a technique used to optimize the performance of a web application by splitting the JavaScript code into smaller, more manageable pieces. This is particularly useful for large applications where loading the entire JavaScript bundle upfront can lead to slower initial page loads.

2. Chunking:

Chunking is closely related to code splitting. A "chunk" is a small, self-contained piece of code that represents a portion of your application. When you apply code splitting, your code is divided into these chunks.

Webpack, a popular JavaScript bundler, is commonly used for code splitting and generating these chunks. It creates separate files (chunks) for different parts of your application, and these files are loaded on-demand.

3. Lazy Loading

- Lazy loading is a technique to defer the loading of certain parts of your JavaScript code until they are actually needed. It is commonly used with code splitting to optimize the performance of web applications.

> Example:

> > Let's say you have a large React application, and you want to split the code for each route. Instead of including all the code for all routes in the initial bundle, you can create a separate chunk for each route. When a user navigates to a specific route, only the corresponding chunk is loaded.

```
// Without Code Splitting
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

// With Code Splitting
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
```

- In this example, import() is a dynamic import syntax supported by modern JavaScript and Webpack. It allows you to load modules asynchronously, creating separate chunks for each imported module. The components are loaded lazily, meaning they are fetched only when needed.

- we will not import grocery like this in our APP.jsx

```
import Grocery from ./components/Grocery.jsx'
```

instead we will use lazy funcrion and we have to import lazy function like use State
import{lazy } from "react";

```
const Grocery = lazy(()=import("./components/Grocery));
```

- but there is a catch so wh have index.js and grocery.js is not loaded , but when we clickk on grocery then it shows "not found " as react is so fast that it see grocery and see it is empty so it render oops but it take some tmime to make an api call.
  so to fix it we need Suspense components

```
import{lazy , Suspense } from "react";
```

and
elemt

```
in route wala part
< Suspense fallback={shimmer}> > <Grocery/> </Suspense>
or
< Suspense fallback={<h1>Loading...</h1>}> > <Grocery/> </Suspense>
```
