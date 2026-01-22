
import { Link } from "react-router-dom";

const CTAButton = ({ children, active, linkto }) => {
  return (
    <div
      className={` text-center text-[13px] px-6 py-3 rounded-md font-bold ${
        active
          ? "bg-yellow-50 text-black shadow-yellow-300"
          : " bg-richblack-800 shadow-richblack-800"
      } hover:scale-95 transition-all duration-200`}
      style={{
        boxShadow: `${
          active
            ? "rgb(255, 235, 135) 1px 1px 0px 1px"
            : "rgb(36 49 70) 1px 1px 0px 1px"
        }`,
      }}
    >
      <Link to={linkto}>{children}</Link>
    </div>
  );
};

export default CTAButton;
