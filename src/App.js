import React, { useState, useEffect } from "react";
import "./componets/style.css";
import CardView from "./componets/cardview";
import CardData from "./componets/cardData";
const App = () => {
  const [ListData, setListData] = useState([]);
  const [ActiveButton, setActiveButton] = useState(5);

  const getButtonClass = (buttonNo) => {
    return buttonNo === ActiveButton
      ? "rounded-t-md border-blue-500 px-9 py-3 border-b-4 "
      : "rounded-t-md border-blue-500 px-9 py-3 hover:border-b-4 ";
  };

  const filterData = () => {
    if (ActiveButton == 1) {
      setListData(CardData.filter((item) => item.category === "breakfast"));
    } else if (ActiveButton == 2) {
      setListData(CardData.filter((item) => item.category === "evening"));
    } else if (ActiveButton == 3) {
      setListData(CardData.filter((item) => item.category === "lunch"));
    } else if (ActiveButton == 4) {
      setListData(CardData.filter((item) => item.category === "dinner"));
    } else {
      setListData(CardData);
    }
  };

  useEffect(() => {
    filterData();
  }, [ActiveButton]);

  return (
    <div className="flex h-full flex-col items-center gap-10 bg-red-50">
      <div className="flex w-full justify-center pt-12">
        <div className="grid grid-cols-5 justify-between rounded-lg bg-white py-1 shadow-xl sm:w-full lg:w-7/12">
          <button
            className={getButtonClass(1)}
            onClick={() => {
              setActiveButton(1);
            }}
          >
            Breakfast
          </button>
          <button
            className={getButtonClass(2)}
            onClick={() => {
              setActiveButton(2);
            }}
          >
            Evening
          </button>
          <button
            className={getButtonClass(3)}
            onClick={() => {
              setActiveButton(3);
            }}
          >
            Lunch
          </button>
          <button
            className={getButtonClass(4)}
            onClick={() => {
              setActiveButton(4);
            }}
          >
            Dinner
          </button>
          <button
            className={getButtonClass(5)}
            onClick={() => {
              setActiveButton(5);
            }}
          >
            All
          </button>
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
