import React from "react";

const MarkButton = ({ markerKey, selectedMark, handleClick, customStyle }) => {
  return (
    <button
      onClick={() => handleClick(markerKey)}
      className={`border-2 rounded-lg bg-white border-black w-32 h-32  ${customStyle}`}
    >
      {selectedMark}
    </button>
  );
};

export default MarkButton;
