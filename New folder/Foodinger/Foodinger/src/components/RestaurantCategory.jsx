import React from 'react';
import './RestaurantCategory.css';
import ItemLists from './ItemLists';
import { useState } from 'react';


const RestaurantCategory = ({ data }) => {
  // console.log(data);
  const [showItems ,setShowItems] = useState(false);
  const handleClick =()=>{
    setShowItems(!showItems);
  }


  return (
    <div className="accordian">
      <div className="top" onClick ={handleClick}>
        <div className="title">
          {data.title} ({data.itemCards.length})
        </div>
        <div className="arrow">⬇️</div>
      </div>
      <div className="itemLists">
        {/* Pass the 'data' prop to the 'ItemLists' component */}
        {showItems && <ItemLists items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
