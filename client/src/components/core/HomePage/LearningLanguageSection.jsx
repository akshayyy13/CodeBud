import React from 'react'
import HighlightText from './HighlightText'
import Know_your_progress from "../../../assets/Images/Know_your_progress.svg";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";
import CTAButton from './CTAButton';
const LearningLanguageSection = () => {
  return (
    <div className=' mt-[130px] mb-[100px]'>
      <div className="flex flex-col gap-5 items-center">
        <div className=" lg:text-4xl text-3xl text-center font-semibold">
          Your Swiss Knife For
          <HighlightText>learning any language</HighlightText>
        </div>
        <div className=' text-center text-richblack-600 mx-auto text-base w-[70%]'>
            Using spin making learning multiple languages easy. with 20+
            languages realistic voice-over, progress tracking, custom schedule
            and more.
        </div>
        <div className=' flex lg:flex-row flex-col items-center justify-center mt-5'>
            <img src={Know_your_progress} alt="knowYourProgress" className=' object-contain lg:-mr-32'/>
            <img src={Compare_with_others} alt="compareWithOthers" className=' object-contain lg:-mr-32'/>
            <img src={Plan_your_lessons} alt="planYourLessons" className=' object-contain'/>
        </div>
        <div className=' w-fit '>
            <CTAButton active={true} linkto={"/signup"} ><div>Learn More</div></CTAButton>
        </div>
      </div>
    </div>
  );
}

export default LearningLanguageSection
