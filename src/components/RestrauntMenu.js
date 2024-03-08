import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }
  // console.log(resInfo);
  const {
    name,
    cuisines,
    costForTwoMessage,
  } = resInfo?.cards[0].card.card.info;

  console.log(name);

  const {
    itemCards,
  } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="font-semibold text-xl">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card?.card}
        />
      ))}
    </div>
  );
};

export default RestrauntMenu;
