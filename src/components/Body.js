import RestroCard, { withPromotionLabel } from "./RestroCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Contact from "./Contact";

const Body = () => {
  const [listofrestro, setListofrestro] = useState([]);
  const [filteredRestro, setfilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const PromotedRestaurant = withPromotionLabel(RestroCard);

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

  //check online status by using custom hooks
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You are offline,check your connection </h1>;

  //conditional rendering-rendering based on condition
  if (listofrestro.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="m-2 p-2">
          <input
            type="text"
            className="border border-black rounded-md p-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className=" bg-yellow-400 px-3 py-1 m-2 rounded-md hover:text-yellow-500 hover:bg-black"
            onClick={() => {
              const filteredRestro = listofrestro.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestro(filteredRestro);
            }}
          >
            Search
          </button>
          <button
            className=" bg-yellow-400 px-3 py-1 m-2 rounded-md hover:text-yellow-500 hover:bg-black"
            onClick={() => {
              filteredList = listofrestro.filter(
                (res) => res.info.avgRating > 4.2
              );
              setfilteredRestro(filteredList);
              // console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap overflow-auto">
        {filteredRestro.map((restaurants) => {
          return (
            <Link
              key={restaurants.info.id}
              to={"/restaurants/" + restaurants.info.id}
            >
              {restaurants.info.promotion ? (
                <PromotedRestaurant resData={restaurants} />
              ) : (
                <RestroCard resData={restaurants} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
