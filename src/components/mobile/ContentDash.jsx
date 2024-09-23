import { useState, useEffect, useRef } from "react";

import lightUserImg from "/light-user.svg";
import darkUserImg from "/dark-user.svg";
import dropdownicon from "/dropdown-icon.svg";
import infoCircle from "/Info-circle.svg";
import collapseIcon from "/collapse.svg";
import collapsedIcon from "/collapsedIcon.svg";

const submittedData = [{
  submissions: 47,
  art: 14,
  approved: 34,
  pending: 19,
  unapproved: 6,
}];

const generateSubmissionDetails = (data) => {
  return [
    { status: 'Submissions', number: data.submissions, emoji: '📂' },
    { status: 'Art', number: data.art, emoji: '🖼' },
    { status: 'Approved', number: data.approved, emoji: '👍🏾' },
    { status: 'Pending', number: data.pending, emoji: '⏳' },
    { status: 'Unapproved', number: data.unapproved, emoji: '❌' }
  ];
};

function ContentDash({ isDarkMode }) {
  let submissions = true

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);


  // Ref for dropdown container
  const dropDownRef = useRef(null);


  // Handle click outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleCollapse = () => setIsCollapsed(prev => !prev);
  const toggleDropdown = () => setDropDownOpen(prev => !prev);

  const containerClass = isCollapsed
    ? 'h-[64px] py-[23px] rounded-lg'
    : 'h-auto pt-[16px] pb-[50px] rounded-2xl';

  const submissionDetails = generateSubmissionDetails(submittedData[0]);

  return (
    <div className={`w-full ${containerClass}  relative flex items-center flex-col justify-between bg-white dark:bg-[#0D0D0D]  `}>

      {isCollapsed &&
        <CollapsedHeader onClick={toggleCollapse} />}
      {!isCollapsed && !submissions && < ExpandedContent onClick={toggleCollapse} isDarkMode={isDarkMode} isCollapsed={isCollapsed} dropDown={toggleDropdown} dropDownOpen={dropDownOpen}
        dropDownRef={dropDownRef} />}

      {!isCollapsed && submissions > 0 &&
        <ExpandedContentData submissionDetails={submissionDetails} isDarkMode={isDarkMode} onClick={toggleCollapse} isCollapsed={isCollapsed} dropDown={toggleDropdown} dropDownOpen={dropDownOpen}
          dropDownRef={dropDownRef} />
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

const ExpandedHeader = ({ isDarkMode, dropDown, dropDownOpen, dropDownRef }) => {
  return <div className="space-y-[16px] relative">
    <div className="flex items-center justify-center relative">
      <img
        src={isDarkMode ? lightUserImg : darkUserImg}
        alt="profile"
        className="w-[24px] h-[24px]"
      />
      <img src={dropdownicon}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        alt="dropdown"
        className="w-[12px] h-[6px]"
        onClick={dropDown}
        role="button"
      />
      {dropDownOpen && <div ref={dropDownRef} className="absolute top-4 w-[185px] h-[100px] border border-[#f2f2f2] rounded-lg bg-white dark:bg-[#1a1a1a] text-[#000] dark:text-white">
        <ol className="flex flex-col justify-center mt-4   gap-[12px] px-4">
          <li><button className="font-thin font-kanit text-lg tracking-tight hover:text-[#808080] transition-[hover] duration-300 ease-in-out">Change your password</button></li>
          <li><button className="font-thin font-kanit text-lg tracking-tight hover:text-[#808080] transition-[hover] duration-300 ease-in-out">Delete account</button></li>
        </ol>
      </div>
      }
    </div>
    <h4 className="font-medium text-[32px] tracking-tighter text-center leading-[24px]  dark:text-white">Fiifi Junior</h4>

    <p className="font-thin text-[18px] text-center text-[#808080] leading-[16px] ">Good afternoon!</p>
  </div>
}
const ExpandedContent = ({ onClick, isDarkMode, isCollapsed, dropDown ,  dropDownOpen, dropDownRef}) => (
  <div className="h-[320px] flex flex-col justify-between">

    <ExpandedHeader isDarkMode={isDarkMode} dropDown={dropDown}  dropDownOpen={dropDownOpen}
      dropDownRef={dropDownRef} />

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

const ExpandedContentData = ({ submissionDetails, isDarkMode, onClick, isCollapsed, dropDown,  dropDownOpen, dropDownRef }) => {
  return <>
    <ExpandedHeader isDarkMode={isDarkMode} dropDown={dropDown}  dropDownOpen={dropDownOpen}
      dropDownRef={dropDownRef}/>
    <div className="flex flex-wrap justify-center items-center  gap-4 px-[29px] my-[32px]">
      {submissionDetails.map((data, index) => {
        return <div className="flex justify-center flex-col items-center gap-3" key={index}>
          <div className={`w-[104px] h-[96px] rounded-2xl flex flex-col items-center justify-center gap-2 border border-[#f2f2f2] ${index === 0 ? 'bg-[#000] dark:bg-white text-white dark:text-[#000]' : 'bg-[#F8F8F8] dark:bg-[#161616] text-[#000] dark:text-white '} `}>
            <p className={`font-medium text-[40px] leading-8 tracking-tight text-center `}>{data.number}</p>
            <p className={`font-thin text-[14px] leading-4 tracking-tight text-center`}>{data.status}</p>
          </div>
          <p>{data.emoji}</p>
        </div>
      })}
    </div>
    <img
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      onClick={onClick}
      src={collapseIcon}
      alt="collapse"
      role="button"
      aria-label={isCollapsed ? "Expand section" : "Collapse section"}
      className="absolute right-6 top-7 cursor-pointer" />
  </>


}
export default ContentDash