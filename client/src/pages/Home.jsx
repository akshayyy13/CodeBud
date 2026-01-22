
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ReviewSlider from "../components/common/ReviewSlider"
import ExploreMore from "../components/core/HomePage/ExploreMore";
const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
        <div
          className="group mt-16 p-1 mx-auto rounded-full font-bold bg-richblack-800 text-richblack-200 transition-all duration-200 hover:scale-95  w-fit"
          style={{ boxShadow: "rgb(36 ,49, 70) 1px 1px 0px 1px" }}
        >
          <Link to={"/signup"}>
            <div className=" flex items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become a Instructor</p>
              <FaArrowRight></FaArrowRight>
            </div>
          </Link>
        </div>

        <div className=" text-center lg:text-4xl text-3xl font-semibold mt-8">
          Empower Your Future with <HighlightText>Coding Skills</HighlightText>
        </div>
        <div className="mt-4 text-center w-[75%] text-lg font-medium text-richblack-300 ">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="flex flex-row mt-8 gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a demo
          </CTAButton>
        </div>
        <div className=" mx-3 my-12 max-w-[1035px] max-h-[515px] relative z-10 shadow-border">
          <video muted loop autoPlay className=" max-h-[515px]">
            <source src={Banner} type="video/mp4" />
          </video>
          <div className="absolute w-1 h-1 bg-black top-[30%] left-[43%] shadow-mine shadow-blue-400  -z-10"></div>
        </div>

        {/* Code Section 1 */}
        <div className=" min-w-full">
          <CodeBlocks
            position={"lg:flex-row flex-col"}
            heading={
              <div className=" lg:text-4xl text-3xl font-semibold">
                Unlock Your{" "}
                <HighlightText text={"coding potential"}>
                  coding potential
                </HighlightText>{" "}
                with our online courses.
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try It Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head><Example</\ntitle><linkrel="stylesheet"\n<a href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1><nav><a href="one/">One</a><ahref="two/\n">Two</a><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-yellow-25"}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div className=" min-w-full">
          <CodeBlocks
            position={"lg:flex-row-reverse flex-col"}
            heading={
              <div className=" lg:text-4xl text-3xl font-semibold lg:max-w-[250px]">
                Start{" "}
                <HighlightText text={"coding in seconds"}>
                  coding in seconds
                </HighlightText>
              </div>
            }
            subHeading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Block Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}

      <div className=" bg-pure-greys-5 text-richblack-500">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className=" flex flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className=" mx-auto w-11/12 flex flex-col justify-around items-center max-w-maxContent gap-7">
          <div className="flex flex-row gap-5 mb-10 mt-[95px] ">
            <div className=" lg:text-4xl text-3xl font-semibold">
              Get the skills you need for a{" "}
              <HighlightText>job that is in demand.</HighlightText>
            </div>
            <div className="flex flex-col gap-5  items-start">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className=" w-11/12 mx-auto max-w-maxContent flex flex-col justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection />
        <ReviewSlider />
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
