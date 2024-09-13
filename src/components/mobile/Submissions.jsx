import { useState } from "react";
import collapseIcon from "/collapse.svg";
import infoCircle from "/Info-circle.svg";
import collapsedIcon from "/collapsedIcon.svg";

function Submissions() {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to manage collapse

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev); // Toggle the collapse state
  };

  const containerClass = isCollapsed
    ? 'h-[64px] px-4 mt-[8px] rounded-lg flex items-center justify-center'
    : 'h-[320px] p-4 rounded-2xl mt-[24px]';

  return (
    <div className={`bg-white dark:bg-[#000] w-full ${containerClass}`}>
      <div className="flex justify-between items-center w-full">
        <h4 className={`font-normal text-[20px] tracking-tight text-[#000] dark:text-white`}>Submissions</h4>
        <img
          src={isCollapsed ? collapsedIcon : collapseIcon}
          alt="collapse"
          className="w-4 h-4 cursor-pointer"
          onClick={toggleCollapse}
        />
      </div>

      {!isCollapsed && (
        <p className="font-thin text-[14px] leading-[16px] tracking-tight text-center text-[#808080] dark:text-[#A5A5A5] flex justify-center mt-[118px]">
          <span>
            <img src={infoCircle} alt="info-circle" className="mr-2 w-4 h-4" />
          </span>
          All submissions will appear here
        </p>
      )}
    </div>
  );
}

export default Submissions;
