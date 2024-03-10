import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const HandleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <span className="py-2">{item.card.info.name}</span>
            <span>
              {" "}
              - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs font-light">{item.card.info.description}</p>
          </div>
          <div
            className="w-3/12 p-4"
            onClick={(e) => {
              return e.stopPropagation();
            }}
          >
            <button
              className=" bg-yellow-400 px-2 py-1  content-center rounded-sm hover:text-yellow-500 hover:bg-black absolute"
              onClick={() => HandleAddItems(item)}
            >
              Add+
            </button>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-32 rounded-md"
            />
          </div>
        </div>
      ))}
    </div>

    //   {items.map((item) => (
    //     <li>{item.card.info.name}</li>
    //   ))}
  );
};
export default ItemList;
