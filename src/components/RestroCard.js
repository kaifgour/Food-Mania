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
    <div className="m-2 p-2 w-[230px] bg-slate-200 overflow-hidden h-[480px]">
      <img alt="food-1" src={CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <em>{cuisines.slice(0, 3).join(",")}</em>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withPromotionLabel = () => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
