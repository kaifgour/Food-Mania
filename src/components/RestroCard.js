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
    <div className="m-2 p-2 w-[234px] bg-slate-200 overflow-hidden h-[480px] hover:border hover:border-black hover:shadow-inner">
      <img alt="food-1" src={CDN_URL + cloudinaryImageId}></img>
      <h2 className="text-l font-semibold">{name}</h2>
      <h4 className="text-m font-light">{cuisines.slice(0, 3).join(",")}</h4>
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
