# higher Order Components

- Higher order componet is function that takes a component and resturrns a componennts
- just a normal javascript function.
- takes a components enhance it and return its

eg:

```
import React from "react";
import { CDN_SRC } from "../Utils/constants";
import "./RestaurantCard.css";

const RestaurantCard = (props) => {
  // yeh line mai batayenge ki jo resData humne pass kiya hai woh kya hai, wo ek prop hai jo humne pass kiya hai
  const { resData } = props;

  return (
    <div>
      <div className="res-card">
        <img src={CDN_SRC + resData.info.cloudinaryImageId} alt="" />
        <h3>{resData.info.name}</h3>
        <h5>
          {resData.info.avgRating}⭐{resData.locality}
        </h5>
        <h5>{resData.info.cuisines.join(" ,")}</h5>
        <h4>{resData.info.costForTwo}</h4>
        <button className="btn-1">Order Now</button>
      </div>
    </div>
  );
};

// higher Order Component
// input - RestaurantCard and output enhance version of RestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="open-label">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
```

Body

```

import useRestaurant from "../Utils/useRestaurant";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
.
.
.
.
.

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  .
  .
  .
  .
  .
  .


          <!-- change hehre -->
            {e.info.promoted ? (
              <RestaurantCardPromoted resData={e} />

            ) : (
              <RestaurantCard resData={e} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Body;
```

# Prop Drilling

- Prop drilling, also known as "prop passing" or "component chaining," is a term used in the context of React or other component-based frameworks. It refers to the practice of passing data from one component to another through a chain of intermediary components, even if some of these components don't directly use the data.

- A -> B-> C-> D ->E ->F or we can do
- A-> F with the help of React Context

-UserContext.jsx

```
import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"Default User",
});

export default UserContext;
```

-Headr.jsx

```
  const data = useContext(UserContext);
```

or

- RestaurantCard

```
import React, { useContext } from "react";
import { CDN_SRC } from "../Utils/constants";
import "./RestaurantCard.css";
import UserContext from "../Utils/UserContext";

const RestaurantCard = (props) => {
  // yeh line mai batayenge ki jo resData humne pass kiya hai woh kya hai, wo ek prop hai jo humne pass kiya hai
  const { resData } = props;

  const{loggedInUser} = useContext(UserContext);

  return (
    <div>
      <div className="res-card">
        <img src={CDN_SRC + resData.info.cloudinaryImageId} alt="" />
        <h3>{resData.info.name}</h3>
        <h5>
          {resData.info.avgRating}⭐{resData.locality}
        </h5>
        <h5>{resData.info.cuisines.join(" ,")}</h5>
        <h4>{resData.info.costForTwo}</h4>
        <button className="btn-1">Order Now</button>
         <h1>{loggedInUser}</h1>
      </div>
    </div>
  );
};
```



inside APp
```
import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { Routes, Route } from "react-router-dom";
import UserContext from "./Utils/UserContext.jsx";

function App() {
  // Authentication Logic
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Fetching data for Verification/authentication
    const data = { name: "Hasir Ali" }; // Assuming "Hasir" is a string
    setUserName(data.name);
  }, []);

  return (
    <>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* dynamic Routing */}
          <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
          {/* This Route with 'path="*"' will act as a catch-all for 404 */}
          <Route path="*" element={<Error />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
```
