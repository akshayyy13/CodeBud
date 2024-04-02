import React from 'react'
import "./HighlightText.css"
const HighlightText = ({children}) => {
  return (
    <span className=" font-bold highlightBlue ">
      {" "}
      {children}
    </span>
  );
}

export default HighlightText
