import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import handData from "./hand_data.json";

import "./hand_rank.css";

const HandRankSlider = () => {
  const [percentage, setPercentage] = useState(30);

  return (
    <div className="justify-center items-center">
      <WholeRangeChart percentage={percentage} />
      <RangeText value={percentage} />
      <Box className="mx-auto" sx={{ width: 300 }}>
        <Slider
          onChange={(value) => {
            setPercentage(value.target.value);
          }}
          defaultValue={30.0}
          step={0.5}
          min={0.5}
          max={100}
        />
      </Box>
    </div>
  );
};
const RangeText = (props) => {
  return (
    <div className="flex justify-center text-2xl mb-5">
      상위
      <div className="flex justify-center w-20 font-extrabold">
        {" "}
        {props.value}{" "}
      </div>
      % 핸드
    </div>
  );
};

const WholeRangeChart = (props) => {
  const get169Hands = () => {
    const numList = [
      "a",
      "k",
      "q",
      "j",
      "t",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
    ];
    var tempList = [];
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 13; j++) {
        if (i == j) {
          tempList = [...tempList, `${numList[i]}${numList[i]}p`];
        } else if (i > j) {
          tempList = [...tempList, `${numList[j]}${numList[i]}o`];
        } else {
          tempList = [...tempList, `${numList[i]}${numList[j]}s`];
        }
      }
    }
    return tempList;
  };

  const getCardData = (value) => {
    for (let i = 0; i < handData.length; i++) {
      if (handData[i].card === value) {
        return handData[i];
      }
    }
    return null;
  };

  return (
    <div className="rangeGrid">
      {get169Hands().map((v, i) => {
        const card = getCardData(v);
        console.log(card);
        if (card.sum <= props.percentage) {
          return (
            <div
              className={
                v.charAt(0) === v.charAt(1)
                  ? "containItemPocket"
                  : "containItem"
              }
              key={i}
            >
              {`${v.substring(0, 2).toUpperCase()}${v.charAt(2)}`}
            </div>
          );
        } else {
          return (
            <div className="notContainItem" key={i}>
              {`${v.substring(0, 2).toUpperCase()}${v.charAt(2)}`}
            </div>
          );
        }
      })}
    </div>
  );
};
export default HandRankSlider;
