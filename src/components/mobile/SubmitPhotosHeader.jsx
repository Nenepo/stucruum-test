import collapseIcon from "/collapse.svg";
import collapsedIcon from "/collapsedIcon.svg";
import darkPauseIcon from "/pause-circle.svg";
import darkCancelIcon from "/cancel-circle.svg";
import lightCancelIcon from "/white-cancel-circle.svg";
import lightPauseIcon from "/white-pause-circle.svg";

function SubmitPhotosHeader({
  onClick,
  isCollapsed,
  headerText,
  pause,
  hasUploads,
  cancel,
  isDarkMode
}) {
  return (
    <div className="flex justify-between items-center ">
    <h4 className="font-normal text-[20px] leading-[18px] tracking-tight text-[#000] dark:text-white">{headerText}</h4>

    {/* if its collapsed show the expand icon */}
    {isCollapsed && <img
      src={collapsedIcon}
      alt="collapsed"
      className="cursor-pointer w-4 h-4"
      aria-label="Expand content"
      role="button"
      onClick={onClick}
    />}

    {/* if not collapsed show the collapse icon */}

    {!isCollapsed && !hasUploads && <img
      src={collapseIcon}
      alt="collapse"
      className="cursor-pointer w-4 h-4"
      onClick={onClick}
      aria-label={isCollapsed ? "Expand section" : "Collapse section"}
      role="button"
    />}

    {/* if its not collapsed and has uploads show the pause and cancel icons */}
    {!isCollapsed && hasUploads && <div className="flex gap-2">
      {isDarkMode ? <img
        src={lightPauseIcon}
        alt="pause upload"
        className="cursor-pointer w-7 h-7"
        onClick={pause}
        aria-label="pause upload"
        role="button"
      /> : <img
        src={darkPauseIcon}
        alt="pause upload"
        className="cursor-pointer w-7 h-7"
        onClick={pause}
        aria-label="pause upload"
        role="button"
      />}

      {isDarkMode ? <img
        src={lightCancelIcon}
        alt="cancel upload"
        className="cursor-pointer w-7 h-7"
        onClick={cancel}
        aria-label="cancel upload"
        role="button"
      /> : <img
        src={darkCancelIcon}
        alt="cancel upload"
        className="cursor-pointer w-7 h-7"
        onClick={cancel}
        aria-label="cancel upload"
        role="button"
      />}
    </div>}

    {/* if its not collapsed and has uploads show the pause and cancel icons */}
  </div>
  )
}

export default SubmitPhotosHeader
