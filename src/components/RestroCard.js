import { CDN_URL } from "../utils/constants";

const RestroCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img alt="food-1" src={CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestroCard;
