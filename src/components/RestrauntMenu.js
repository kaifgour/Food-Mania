import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_API } from "../utils/constants";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);
  const {
    name,
    cuisines,
    costForTwoMessage,
  } = resInfo?.cards[0].card.card.info;

  console.log(name);

  const {
    itemCards,
  } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item.card.info.name}
            {" - Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
