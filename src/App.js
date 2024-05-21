import React, { useState, useEffect } from "react";
import "./componets/style.css";
import CardView from "./componets/cardview";
import CardData from "./componets/cardData";

// set opertor give the unique element
const categoryList = [
  ...new Set(
    CardData.map((item) => {
      return item.category;
    })
  ),
  "All",
];

const App = () => {
  const [ListData, setListData] = useState([]);
  const [ActiveButton, setActiveButton] = useState(categoryList.length - 1);

  const getButtonClass = (buttonNo) => {
    return buttonNo === ActiveButton
      ? "rounded-t-md border-blue-500 px-9 py-3 border-b-4 "
      : "rounded-t-md border-blue-500 px-9 py-3 hover:border-b-4 ";
  };

  const filterData = () => {
    categoryList.map((item, index) => {
      if (item === "All" && ActiveButton == index) {
        setListData(CardData);
      } else if (ActiveButton == index) {
        setListData(CardData.filter((itemdata) => itemdata.category === item));
      }
    });
  };

  useEffect(() => {
    filterData();
  }, [ActiveButton]);

  return (
    <div className="flex h-full flex-col items-center gap-10 bg-red-50">
      <div className="flex w-full justify-center pt-12">
        <div className="grid grid-cols-5 justify-between rounded-lg bg-white py-1 shadow-xl sm:w-full lg:w-7/12">
          {categoryList.map((item, index) => (
            <button
              key={index}
              className={getButtonClass(index)}
              onClick={() => setActiveButton(index)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="grid w-10/12 grid-cols-3 items-center gap-7 px-3 py-4">
        {ListData.map((card) => (
          <div>
            <CardView key={card.id} data={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
