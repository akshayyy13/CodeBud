
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";
const InstructorSection = () => {
  return (
    <div className=" mt-16">
      <div className=" flex lg:flex-row flex-col gap-20 items-center">
        <div className=" w-[50%]">
          <img src={Instructor} alt="" className="shadow-white" />
        </div>
        <div className=" w-[50%] flex flex-col gap-10 lg:text-left lg:items-start items-center text-center">
          <div className=" lg:text-4xl text-3xl font-semibold lg:w-[60%]">
            Become an <HighlightText>instructor </HighlightText>
          </div>
          <p className=" font-medium text-[16px] w-[80%] text-richblack-300  lg:text-left">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className=" w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className=" flex items-center gap-3">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
