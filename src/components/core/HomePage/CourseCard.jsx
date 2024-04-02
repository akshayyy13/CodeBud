import React from "react";
import { HiUsers } from "react-icons/hi2";
import { BiNetworkChart } from "react-icons/bi";
const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {

  return (
    <div
      className={`w-[300px] h[300px] ${
        currentCard === cardData.heading
          ? "bg-white shadow-border shadow-[#FFD60A]"
          : " bg-richblack-800"
      } cursor-pointer duration-200 transition-all`}
      //   "15px 15px 0px 2px #FFD60A"

      onClick={() => setCurrentCard(cardData.heading)}
    >
      <div className="mt-6 mx-5">
        <div className=" flex flex-col gap-14">
          <div className=" flex flex-col">
            <div
              className={`${
                currentCard === cardData.heading
                  ? "text-richblack-900"
                  : "text-white"
              } text-[16px]`}
            >
              {cardData.heading}
            </div>
            <div className=" text-[12px] text-richblack-300 mt-3">
              {cardData.description}
            </div>
          </div>
          <div
            className={` flex border-t border-richblack-600 border-dashed justify-between mb-5 ${
              currentCard === cardData.heading
                ? " text-richblue-300"
                : " text-richblack-300"
            }`}
          >
            <div className=" flex items-center mt-4 gap-2">
              <div>
                <HiUsers />
              </div>
              <div>{cardData.level}</div>
            </div>
            <div className=" flex items-center mt-4 gap-2">
              <div>
                <BiNetworkChart />
              </div>
              <div>{cardData.lessionNumber} lessons</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
