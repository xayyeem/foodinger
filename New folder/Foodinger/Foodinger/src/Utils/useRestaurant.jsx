import { RESTAURANT_API } from "../Utils/constants";
// import RESTAURANT_API from "../Utils/mockData";
import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_API);
      const json = await data.json();
      const res = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setOriginalData(res);
      setFilteredRestaurant(res);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      // Handle the error, e.g., set an error state or display a message to the user
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);
  

  return { originalData, filteredRestaurant, setFilteredRestaurant};
};

export default useRestaurant;
