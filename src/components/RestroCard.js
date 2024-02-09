import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
  } = resData?.info;

  return (
    <div className="card">
      <img alt="food-1" src={CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <em>{cuisines.join(",")}</em>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestroCard;
