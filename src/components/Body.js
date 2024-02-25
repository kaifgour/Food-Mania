import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const Body = () => {
  const [listofrestro, setListofrestro] = useState([]);
  const [filteredRestro, setfilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2083953&lng=72.8334541&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListofrestro(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredRestro(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //conditional rendering-rendering based on condition
  if (listofrestro.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestro = listofrestro.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestro(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestro.map((restaurants) => {
          return (
            <Link
              key={restaurants.info.id}
              to={"/restaurants/" + restaurants.info.id}
            >
              <RestroCard resData={restaurants} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
