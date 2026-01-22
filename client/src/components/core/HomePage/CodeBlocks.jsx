
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subHeading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} my-20 justify-around gap-10`}>
      {/* {Side 1} */}
      <div className="lg:w-[50%] w-full flex flex-col gap-8">
        {heading}
        <div className="text-richblack-300 font-bold max-w-[550px]">
          {subHeading}
        </div>

        <div className="flex gap-7 mt-7 justify-center lg:justify-start  ">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>
      {/* {side 2} */}
      <div className=" flex flex-row h-fit lg:w-[500px] relative code-border px-3 py-4  ">
        {/* Bg gradient */}
        {backgroundGradient}

        <div className=" text-center items-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
        </div>
        <div
          className={`lg:w-[90%] flex flex-col font-mono gap-2 ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            repeat={Infinity}
            cursor={true}
            // omitDeletionAnimation={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          ></TypeAnimation>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
