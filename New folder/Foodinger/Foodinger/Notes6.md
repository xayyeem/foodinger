# MONOLITH AND MICROSERVICE ARCHITECTURE AND USE EFFECT HOOKS

## Monolith Architecture:

### What is it?

- A monolith is like a big, single book that contains everything.
  In the context of software, a monolith is an application where all the components (front-end, back-end, database, etc.) are tightly connected and packaged together.
- Think of a bookstore where all the sections (fiction, non-fiction, children's books) are in one giant bookshelf.
  If you want to change something in the fiction section, you have to touch the entire bookshelf.
- Challenges => Maintenance: Changing something in one section might affect the entire bookshelf, making updates trickier.

## Microservice Architecture:

### What is it?

- Microservices are like separate books, each covering a specific topic.
- In software, microservices architecture breaks down an application into smaller, independent services that can operate on their own.

- Think of a library where each genre (e.g., fiction, non-fiction) has its own section.
  If you want to change something in the fiction section, you only need to update that section without affecting others.

### Advantages:

- Scalability: Each section can grow independently. If fiction becomes popular, you can expand only the fiction section.
- Flexibility: Easier to update and deploy because changes in one microservice don't impact others.

# Part 6

## In this we will fetch Data from Swiggy API

### there are Two Approaches

1. As Soon as our page load , we will make an API call and wait for data to come and then render the UI.

2. As Soon as our page load , we will just render a UI , after we will render then we will make API call and then we will render our API once again.[In react we will using this approach] but we are rendering twice but react rendering mechanism is fast, this is better approach it gives better UX? HOW.. => we can see the skeleton .

- it is done by useEffect

# USE EFFECTS HOOK

- use effect is a normal function with a call back function and a dependeny array
- useEffect( ()=>{} , [] )
- this will be called after your components render, when render cycle is finished then it will call the useEffect.
- In short pehle body render hogi uske baad useEffect wala part render hoga

- use kaha hua?

- |Loads|-> |Render| ->|API | -> |Re Render |
- API fetch hogi wo useEffect mai hogi
- and fetching is same as javascript

```
const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4272113&lng=81.805925&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json
    );

    setFilteredResObj(
      <!-- json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants -->
      <!-- not a good way so we do optiona chaining -->
            json?.data?.cards[4]?card?.card?.gridElements?.infoWithStyle?.restaurants

    );
  };
  useEffect(() => {
    fetchData();
  }, []);


```

use this to fetch Swiggy API

- and i want the new fetch data on my app and not the Ui made by mock data

# Cros

- Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers to restrict webpages from making requests to a different domain than the one that served the original web page. It is a security measure to prevent potential malicious attacks, such as cross-site request forgery.

---

# Making Search Text

```
const [searchText , setSearchText] = useState("");
.
.
.

            <input
              type="text"
              placeholder="Enter Your favourite Resaurant Name"
              value={searchText}
            />
```

- Now input box is not working. But why?????
- cuz value of input box is tied(or fixed) to "" , it is due to value is bined to Search text[local state variable] and value of search text is "".
  > it is fixed by onChange Handler

```
 <input
              type="text"
              placeholder="Enter Your favourite Resaurant Name"
              value={searchText}
              onChange={(e)=>{
                setSearchText(e.target.value)
              }}
```

## Note : whenever you change local state varaible react triggered Re-conciliation Cycle(or we can say react re-render the components)
- react render the whole body componet but updating only input tag use dif algo/reconcilation cycle
- DOM manipuation Badshah👑


# Extra

- Q: When we create a button usnig useState() , if i click on it it renders the button or whole component ?
- A: It will re render the whole header component use dif algorithm
- imp : the conceptual idea is that the entire component is considered for re-render. but React efficiently updates only the parts of the DOM that need to be changed.


```
import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import resObj from "../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function Body() {
  const [filteredResObj, setFilteredResObj] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [buttonText, setButtonText] = useState("top Rated Restaurants");
  const [searchText, setSearchText] = useState("");

  const handleToggle = () => {
    if (buttonText === "top Rated Restaurants") {
      setButtonText("All Restaurants");
      const filteredResObj = resObj.filter((e) => e.info.avgRating > 4.5);
      setFilteredResObj(filteredResObj);
    } else {
      setButtonText("top Rated Restaurants");
      setFilteredResObj(resObj);
    }
  };

  const [z, setz] = useState(filteredResObj);
  // scope of state variable is only in this component
  // array destructuring⬆️

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredResObj(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // conditional rendering : rendering on the basis of condition
  // if(filteredResObj.length === 0){
  //   return <Shimmer/>
  // }

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
              placeholder="Enter Your favourite Resaurant Name"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="btn"
              onClick={() => {
                const filteredRestaurant = filteredResObj.filter((e) =>
                e.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
                
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
        {filteredRestaurant.map((e) => {
          return <RestaurantCard key={e.info.id} resData={e} />;
        })}
      </div>
    </>
  );
}

export default Body;

```