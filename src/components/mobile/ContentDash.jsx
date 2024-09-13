import { useState } from "react";

import lightUserImg from "/light-user.svg";
import darkUserImg from "/dark-user.svg";
import dropdownicon from "/dropdown-icon.svg";
import infoCircle from "/Info-circle.svg";
import collapseIcon from "/collapse.svg";
import collapsedIcon from "/collapsedIcon.svg";

function ContentDash({ isDarkMode }) {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to manage collapse

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev); // Toggle the collapse state
  };

  const containerClass = isCollapsed
    ? 'h-[64px] py-[23px] rounded-lg'
    : 'h-auto pt-[16px] pb-[50px] rounded-2xl';

  return (
    <div className={`w-full ${containerClass}  relative flex items-center flex-col justify-between bg-white dark:bg-[#000]  `}>

      {isCollapsed ?
        <CollapsedHeader onClick={toggleCollapse} /> :
        < ExpandedContent onClick={toggleCollapse} isDarkMode={isDarkMode} isCollapsed={isCollapsed} />
      }
    </div>

  )
}

const CollapsedHeader = ({ onClick }) => (
  <div className="flex justify-between items-center w-full px-4 h-full">
    <h4 className="font-normal text-[20px] leading-[18px] tracking-tight text-[#000] dark:text-white">
      Content Dash
    </h4>
    <img
      src={collapsedIcon}
      alt="collapsed"
      className="cursor-pointer w-4 h-4 "
      aria-label="Expand content"
      role="button"
      onClick={onClick}
    />
  </div>
);

const ExpandedContent = ({ onClick, isDarkMode, isCollapsed }) => (
  <div className="h-[320px] flex flex-col justify-between">
    <div className="space-y-[16px]">
      <div className="flex items-center justify-center">
        {isDarkMode ? <img src={lightUserImg} alt="profile" className="w-[24px] h-[24px]" /> : <img src={darkUserImg} alt="profile" className="w-[24px] h-[24px]" />}
        <img src={dropdownicon} alt="dropdown" className="w-[12px] h-[6px]" />
      </div>
      <h4 className="font-medium text-[32px] tracking-tighter text-center leading-[24px]  dark:text-white">Fiifi Junior</h4>

      <p className="font-thin text-[18px] text-center text-[#808080] leading-[16px] ">Good afternoon!</p>
    </div>

    <p className="font-thin text-[14px] leading-[16px] tracking-tight text-center text-[#808080] dark:text-[#A5A5A5] mt-[16px] flex items-center ">
      <span>
        <img src={infoCircle} alt="info-circle" className="mr-2  w-[18px] h-[18px]" />
      </span> Content data appears here
    </p>

    <img
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      onClick={onClick}
      src={collapseIcon}
      alt="collapse"
      role="button"
      aria-label={isCollapsed ? "Expand section" : "Collapse section"}
      className="absolute right-6 top-7 cursor-pointer" />
  </div>
);
export default ContentDash