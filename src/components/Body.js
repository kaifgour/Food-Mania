import RestroCard from "./RestroCard";
import resList from "../utils/mockDaata";
import { useState } from "react";

const Body = () => {
  const [listofrestro, setListofrestro] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listofrestro.filter((res) => res.data.avgRating > 4);
            setListofrestro(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {listofrestro.map((restaurant) => {
          return <RestroCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
