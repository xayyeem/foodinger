import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory.jsx";
import Shimmer from "./Shimmer";

import "./RestaurantMenu.css";
import { MENU_IMG } from "../Utils/constants";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // Ensure the structure of resInfo is correctly accessed
  const restaurantInfo = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info || {};

  const {
    name,
    cuisines,
    avgRatingString,
    locality,
    areaName,
    city,
    cloudinaryImageId,
  } = restaurantInfo;

  // Ensure the structure of categories is correctly accessed and provide a fallback
  const categories =
    resInfo?.cards?.find(
      (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => {
      return (
        e.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    }) || [];

  return (
    <>
      <div className="hotel-info">
        <div className="hotel">
          <div className="MenuS1">
            <h1>{name}</h1> {/* Ensure restaurant name is displayed */}
            <div className="MenuS1-right">
              <h3>{avgRatingString}⭐ out of 5 Stars </h3> {/* Ensure rating is displayed */}
              <img src={MENU_IMG + cloudinaryImageId} alt={`${name} menu`} />
            </div>
          </div>
          <div className="MenuS2">
            <span>Cuisines: {cuisines?.join(", ")}</span> {/* Ensure cuisines are displayed */}
            <p>
              {locality} , {areaName} , {city} {/* Ensure location details are displayed */}
            </p>
          </div>
          <div className="menu">
            <h1>Menu</h1>
            <div className="items">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>
                ))
              ) : (
                <p>No categories available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
