import React, { useState } from "react";
import ItemList from "./ItemList";

export const RestaurantCategory = (data) => {
  const [showItem, setshowItem] = useState(false);
  const handleClick = () => {
    setshowItem(!showItem);
  };
  //   console.log(data);
  return (
    <div>
      <div
        className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.data.title}({data.data.itemCards.length})
          </span>
          {!showItem && <span>🔽</span>}
        </div>
        {showItem && <ItemList items={data.data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
