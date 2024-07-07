# REDUX

- redux is not mandatory
- use it when only required
- redux is not a part of react
- react is separate library and redux is another separated library
- zustand is another library similar to redux

## why do we use

- handling data
- managing store
- easy to debug

> Two Library offer by Redux
>
> > ReactRedux library
> > Redux toolkit

- Redux TOol kit : latest way of writing redux
- react redux : bridge gap between these two

# Redux Tool Kit

-The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

1. "Configuring a Redux store is too complicated"
2. "I have to add a lot of packages to get Redux to do anything useful"
3. "Redux requires too much boilerplate code"

when i say redux it means reduxtoolkit

## Architecture

- redux store is like a very big js object and licated in central place globally any component can access it. and contain most of major data
- and it is a good practice but we have slices so it doesnt get messed up
- we use slices to make data organize by creating multiple slice(logical partition)
- eg there can be cart slice , user slice , loign slice etc..

> here we create cart slice

## WRITE PART

- so when we click in add+ so the food should be aded in the cart. but we can directly modify the cart. we have to "DISPATCHES AND ACTION"
- it calls a function
- and the function modify the cart

```
| Header 1 |                                              | Cart     |
|----------|                                              |----------|
| ADD+ ------->|  A  |------------>function()-----------> | Data 2   |
| ADD+     |    dispatch             Reducer fn           | Data 4   |
|          |    (action)
```

- when i click on add button it dispacthes a action A that calls a function(Reduce), and function internally modifies the slice or cart.
- then item will be added to the cart
- what is this function, actually it is knows as REDUCER.

- so this part is write data now we will se read data means that cart logo will have number beside it indiacting how much item is added. means we will get data from the slice or cart and show on the header

# READ PART

- for this we use SELECTOR and selector will give data to header.
- and this phenomenon is called "subscribing to the store".
- means header component is subscribe to the slice through selector and the cart and header would get updated 39:00;

# Steps REDUX TOOL KIT

- install libraries @reduxjs/toolkit and react-redux.

```
npm i @reduxjs/toolkit
npm i react-redux
```

- build our store
- connrect our store to app
  -we will create a cart slice
- dispatch (Action)
- read the data through selector

## Lets get started

> App.jsx

```
import {provider} from 'react-redux';
.
.
.
 return (
    <>
    <provider store={appStore}>

      <UserContext.Provider value={{ loggedInUser: userName ,setUserName }}>
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
    </provider>
```

> create sice cartSlice.jsx
> and create reducer function

```

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // we have crated a cart and initally it is empty and it will be filled and delt with the help of reducer function
  name: "cart",
  initailState: {
    item: [],
  },
  reducer: {
    // reducer function and hae two parameter state and action
    addItems: (state, action) => {
        //  modifying the state
      state.item.push(action.payload);
    },
    removeItem:(state, action) => {
        state.items.pop();
    },
    clearCart: (state) => {
        state.items.length = 0;
    },
  },
});

// exporting action and reducer function
export const {addItems , removeItems , clearCart } = cartSlice.actions;
export default cartSlice.reducer;


```

> appStore (dukan)

```
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        // if any other slice is there then we can add it here
        // user : userReducer,
    },
})

export default appStore;
```

> subscribing to the store using selector
````
import { useSelector } from "react-redux";
.
.
.
.
.

 // selector Hook ( subscribing to the store usig selector)
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <>
    
            <li className="cart">
              <NavLink to="/cart" className="nav-link">
                <img src={cart} alt="" />({cartItems.length})
              </NavLink>
            </li>
            ```
````
