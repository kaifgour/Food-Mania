import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestrauntMenu = () => {
  const [resInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log(json);
    setRestInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    costForTwoMessage,
  } = resInfo?.cards[2].card.card.info;

  const {
    itemCards,
  } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
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
