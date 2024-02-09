import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";

const Body = () => {
  const [listofrestro, setListofrestro] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListofrestro(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (listofrestro.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listofrestro.filter((res) => res.info.avgRating > 4);
            setListofrestro(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {listofrestro.map((restaurants) => {
          return <RestroCard resData={restaurants} key={restaurants.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
