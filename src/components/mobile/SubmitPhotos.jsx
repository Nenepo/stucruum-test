import { useState } from "react";

import lightUploadIcon from "/light-upload-icon.svg";
import darkUploadIcon from "/dark-upload-icon.svg";
import collapseIcon from "/collapse.svg";
import collapsedIcon from "/collapsedIcon.svg";


function SubmitPhotos({ isDarkMode }) {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to manage collapse

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev); // Toggle the collapse state
  };

  const containerClass = isCollapsed
  ? 'h-[64px] mt-[8px] px-4 py-[23px] rounded-lg'
  : 'h-[282px] p-4 rounded-2xl mt-[24px]';

  return (
    <div className={`w-full ${containerClass}  bg-white dark:bg-[#000]`}>
      <SubmitPhotosHeader onClick={toggleCollapse} isCollapsed={isCollapsed} /> 

      {!isCollapsed && (
        <div>
          <p className="font-thin text-[14px] leading-[20px] tracking-tight text-[#808080] dark:text-[#A5A5A5] mt-6">
            Submit your works for review for our <span className="font-medium">STUCRUUM</span> project. Remember to tick ☑ the ‘ARTRUUM’ checkbox if you’re also submitting for our <span className="font-medium">ARTRUUM</span> project.
          </p>
          <UploadButton isDarkMode={isDarkMode} />
        </div>
      )}
    </div>
  );
}

const SubmitPhotosHeader = ({ onClick, isCollapsed }) => (
  <div className="flex justify-between items-center ">
    <h4 className="font-normal text-[20px] leading-[18px] tracking-tight text-[#000] dark:text-white">Submit photos</h4>
    {isCollapsed ? <img
      src={collapsedIcon}
      alt="collapsed"
      className="cursor-pointer w-4 h-4"
      aria-label="Expand content"
      role="button"
      onClick={onClick}
    /> : <img
      src={collapseIcon}
      alt="collapse"
      className="cursor-pointer w-4 h-4"
      onClick={onClick}
      aria-label={isCollapsed ? "Expand section" : "Collapse section"}
      role="button"
    />}

  </div>
);

const UploadButton = ({ isDarkMode }) => (
  <div className="w-full h-[56px] mt-[92px] relative cursor-pointer">
    <button className="w-full bg-[#000] dark:bg-white text-white dark:text-[#000] py-4 rounded-lg flex items-center justify-center">
      {isDarkMode ? (
        <img src={darkUploadIcon} alt="upload" className="w-6 h-6 mr-2" />
      ) : (
        <img src={lightUploadIcon} alt="upload" className="w-6 h-6 mr-2" />
      )}
      Upload Photos
    </button>
    <input type="file" className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" />
  </div>
);

export default SubmitPhotos;
