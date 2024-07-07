import { CDN_SRC } from "../Utils/constants";
import "./RestaurantCard.css";
// import React, { useContext } from "react";
// import UserContext from "../Utils/UserContext";

const RestaurantCard = (props) => {
  // yeh line mai batayenge ki jo resData humne pass kiya hai woh kya hai, wo ek prop hai jo humne pass kiya hai
  const { resData } = props;

  // const{loggedInUser} = useContext(UserContext);

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
         {/* <h1>{loggedInUser}</h1> */}
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
          Open
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
