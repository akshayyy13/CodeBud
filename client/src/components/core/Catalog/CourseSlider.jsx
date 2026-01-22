/* eslint-disable */

import { register } from "swiper/element/bundle";

import Course_Card from "./Course_Card";
register();
const CourseSlider = ({ Courses }) => {
  return (
    <>
      {Courses?.length ? (
        <swiper-container
          // ref={swiperElRef}
          space-between="30"
          slides-per-view="3"
          navigation="true"
          pagination="true"
          autoplay="true"
          // loop="true"
          // speed="100"
          className="max-h-[30rem]"
        >
          {Courses?.map((course, index) => (
            <swiper-slide key={index}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </swiper-slide>
          ))}
        </swiper-container>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  );
};

export default CourseSlider;
