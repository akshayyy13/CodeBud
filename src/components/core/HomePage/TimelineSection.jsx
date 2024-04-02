import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
const TimelineSection = () => {
    const timeline = [
      {
        Logo: Logo1,
        Heading: "Leadership",
        Description: "Fully committed to the success company",
      },
      {
        Logo: Logo2,
        Heading: "Responsibility",
        Description: "Students will always be our top priority",
      },
      {
        Logo: Logo3,
        Heading: "Flexibility",
        Description: "The ability to switch is an important skills",
      },
      {
        Logo: Logo4,
        Heading: "Solve The Problem",
        Description: "Code your way to a solution",
      },
    ];
  return (
    <div className="relative ">
      <div className="invisible border-2-2 md:visible absolute border-dashed border-richblack-300 h-[40px] border lg:left-[2.7%] lg:top-[22%] top-[8%] left-[31.65%]"></div>
      <div className="invisible border-2-2 md:visible absolute border-dashed border-richblack-300 h-[40px] border lg:left-[2.7%] lg:top-[46%] top-[21%] left-[31.65%]"></div>
      <div className="invisible border-2-2 md:visible absolute border-dashed border-richblack-300 h-[40px] border lg:left-[2.7%] lg:top-[70%] top-[33.4%] left-[31.65%]"></div>
      <div className=" flex lg:flex-row flex-col gap-15 items-center">
        <div className="w-[45%] flex flex-col gap-14">
          {timeline.map((element, index) => {
            return (
              <div key={index} className=" flex flex-row items-center">
                <div className=" min-w-[60px] aspect-square bg-white flex items-center rounded-full justify-center shadow-lg">
                  <img src={element.Logo} width={20} height={21} alt="" />
                </div>
                <div className=" ml-6">
                  <h2 className=" font-semibold text-[18px]">
                    {element.Heading}
                  </h2>
                  <p className=" text-base">{element.Description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="relative z-10"
          style={{ "boxShadow": "15px 15px 0px 2px white" }}
        >
          <img
            src={TimeLineImage}
            alt="timeLineImage"
            className=" shadow-white object-cover lg:mt-0 mt-8"
          />
          <div className="absolute w-0 h-0 top-[30%] left-[43%] shadow-mine shadow-blue-100 -z-10"></div>
          <div className="x-20 absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className=" flex flex-row gap-5 items-center border-caribbeangreen-300 px-7">
              <p className=" text-3xl font-bold">10</p>
              <p className=" text-caribbeangreen-300 text-sm">
                Years Of Experience
              </p>
            </div>
            <div className=" flex flex-row gap-5 items-center px-7">
              <p className=" text-3xl font-bold">250</p>
              <p className=" text-caribbeangreen-300 text-sm">
                Type Of Courses
              </p>
            </div>
          </div>

          {/* <div className="absolute rounded-full lg:w-[640px] lg:h-[480px] bg-gradient-to-b from-white via-blue-25 to-white shadow-mine shadow-blue-400 top-0 "></div> */}
        </div>
      </div>
    </div>
  );
}

export default TimelineSection
