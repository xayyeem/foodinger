# Hooks

> Q.1 every thing we can do can be also done by HTML CSS JS but why we use React??

> A.1 The Beauty of using React is make developer life easy less code > more work ,coding experience fast,optiize web page.

> Now from here we will se the power of React

>> Making web Page Dynamic
-- React increase DOM manipulation very verty fast with lee code with the help of HOOKS 
- In React, components are the building blocks of your user interface. Traditionally, functional components couldn't hold or manage their own state or lifecycle events, but with hooks, they can.
- React do Fast DOM Manipulation


> for example: Now we have added a button in our page ,namely "Top Rated Restaurant" which will give restaurant with restaurant with rating over 4.5 stars.

- Now we will change the Body.jsx a little. by adding a button and using a filter 
````
function Body() {
  return (
    <>
      <div className="body">
        <div className="search-container">
          <h1 className="headingf">Order Your Favourite Food</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your favourite Resaurant Name"
            />
            <button className="btn">Search</button>
          </div>
        </div>
      </div>

      <button
        className="btn2"
       <button
        className="btn2"
        onMouseOver={() => {
          const filteredResObj = resObj.filter((e) => e.avgRating > 4.5);
          console.log(filteredResObj);
        }}
      >
        Top Rated Restaurants
      </button>
      >
        Top Rated Restaurants
      </button>

      <div className="res-container">
        {/* <RestaurantCard resData={resObj[3]} /> */}
        {/* use map reduce */}
        {resObj.map((e) => {
          return <RestaurantCard key={e.id} resData={e} />;
        })}
      </div>
    </>
  );
}

export default Body;


````

but the card will not change as it has Simple javascript variable cant cahnge the state of an object where Hook Help US 

- Normal JS variable
```
let resObj = [
    {},
    {},
    .
    .
]
```
-  React State Variable
```
const [resObj(yeh wala paramter update hoga) , set_nameofFunction(eg setResObj)] = useState([//jo yaha pe pass karenge wo default or intial value hogi]);
```
- ResObj will be updated by setResObj and the default/initial value will be useState[{}]


----
## Important Line
- Whenever a state variable is updated , react will re rendered my components(Body Components poora re rendered ho jayega )

# Now Our New Code with React Hook 
````
import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import resObj from "../Utils/mockData";
import { useState } from "react";


function Body() {
  // scope of state variable is only in this component
  const [filteredResObj, setFilteredResObj] = useState(resObj);
  // array destructuring⬆️
  const [z, setz] = useState(filteredResObj);

  return (
    <>
      <div className="body">
        <div className="search-container">
          <h1 className="headingf">Order Your Favourite Food</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your favourite Resaurant Name"
            />
            <button className="btn">Search</button>
          </div>
        </div>
      </div>

      <button
        className="filtered-btn"
        onClick={() => {
          const filteredResObj = resObj.filter((e) => e.avgRating > 4.5);
          setFilteredResObj(filteredResObj);
        }}
        onDoubleClick={() => {
          setFilteredResObj(resObj);
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="res-container">
        {/* <RestaurantCard resData={resObj[3]} /> */}
        {/* use map reduce */}
        {filteredResObj.map((e) => {
          return <RestaurantCard key={e.id} resData={e} />;
        })}
      </div>
    </>
  );
}

export default Body;
````





# How Does React do this?

- React use Reconciliation Algorithm also known as React-Fiber, how
- REs container has 15 restaurant card , now my use changes from filtering 15 cards to 3 filter card,what react do?
- React create virtual DOM of it , virual dom is Represntation of actual Dom
- when you console.log(<body/>) you will get a objectl, that is virtual dom

## Dif Alfortihm 
- it used to tell differnece between dom virtual dom and updated virtual dom that is (15-3=12)

## In Short
- props - argument parameter
- Reacr functional component - js function
- React element - js object
- React Hook - nomral js function where the functionality is already defined(pre build/logic alread wriiten by Facebook Developer / Utility function ). so we have to import from node_modules
some of Hook are:
-- useState() [it is "use" to create "State" Variable ]
-- useEffect() 
there are many but these two are generally we use
 




















# Extra

- ways to export NAMED EXPORT
1) 
```
const CDN_SRC1 = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

const CDN_SRC2 =  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

export default CDN_SRC1;
export default CDN_SRC2;
```
2) 

const CDN_SRC1 = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

const CDN_SRC2 =  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

export default {CDN_SRC1 , CDN_SRC2}

3) Most easy
```
export  const CDN_SRC1 = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

export const CDN_SRC2 =  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

```
> How to  Import NAMED EXPORT is done by 

```
import {CDN_SRC1 , CDN_SRC2} from "../Utils/constants";
and NOT
import constant from "../Utils/constants";
``` 
---
# IMPORTANT NOTE

- Default Export/ Import
```
export default Component;
import Component fron "path";
```
- Named Export/lmport
```
export const Component;
import {Component} fron "path";
```
---

## FILE KE BAHAR JANA 

- "../" ek folder bahar
- "../../" Do folder bahar and so on