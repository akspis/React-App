import ItemList from "./itemList";

const RestaurantCategory = ({ data, toggleOpen, setShowIndex }) => {
  // controlled component

  return (
    <div className="bg-gray-100 my-3 shadow-lg cursor-pointer">
      <div className="flex justify-between p-4" onClick={() => setShowIndex()}>
        <span className="font-bold">
          {data?.card?.title} ({data?.card?.categories[0]?.itemCards.length})
        </span>
        <span>{toggleOpen ? "UP" : "DOWN"}</span>
      </div>
      {toggleOpen && (
        <div className="py-2">
          {data?.card?.categories[0]?.itemCards?.map((data) => (
            <ItemList data={data?.card} key={data.card.info.id} />
          ))}
        </div>
      )}
    </div>
  );
};
export default RestaurantCategory;
