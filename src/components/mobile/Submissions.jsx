import { useEffect, useState } from "react";
import collapseIcon from "/collapse.svg";
import infoCircle from "/Info-circle.svg";
import collapsedIcon from "/collapsedIcon.svg";
import placeholderPic from "/picture.svg";

// left pagination
import whiteChevronLeft from "/white-chevron-left.svg"
import blackChevronLeft from "/chevron-left-black.svg"
import blackChevronsLeft from "/chevrons-left-black.svg"
import whiteChevronsLeft from "/chevrons-left-white.svg"



import chevronRight from "/chevron-right.svg"
import chevronsRight from "/chevrons-right.svg"



// add submissions via context
function Submissions({ isDarkMode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [submissions, setSubmissions] = useState([]);


  // Simulating submission data fetching
  useEffect(() => {
    setTimeout(() => {
      const fetchedSubmissions = [
        { id: 1, name: "Afro Hair Styling.jpg", size: "8.2 MB", status: "⏳" },
        { id: 2, name: "Afro Hair Styling.jpg", size: "8.2 MB", status: "⏳" },
        { id: 3, name: "Afro Hair Styling.jpg", size: "8.2 MB", status: "❌" },
        { id: 4, name: "Afro Hair Styling.jpg", size: "8.2 MB", status: "👍🏾" },
        { id: 5, name: "Afro Hair Styling.jpg", size: "8.2 MB", status: "👍🏾" },
        { id: 6, name: "Afro Hair Styling.jpg", size: "8.2 MB", status: "⏳" },
        { id: 7, name: "Afro Hair Styling.jpg", size: "8.2 MB", status: "⏳" }
      ]; // Mock data, replace with API data.
      setSubmissions(fetchedSubmissions);
    }, 2000);
  }, []);


  // pagination
  const imagesPerPage = 6;
  const totalPages = Math.ceil(submissions.length / imagesPerPage);

  const currentImages = submissions.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const changePage = (page) => {
    console.log(`Attempting to change to page: ${page}`);

    if (page >= 1 && page <= totalPages) {
      console.log(`Page changed to: ${page}`);

      setCurrentPage(page);
      console.log(currentPage)
    } else {
      console.log(`Already on page ${currentPage}, no change.`);
    }
  };


  // collapse
  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  };




  const containerClass = isCollapsed
    ? 'h-[64px] px-4 mt-[8px] rounded-lg flex items-center justify-center'
    : ` ${submissions ? 'h-auto' : 'h-[320px]'} p-4 rounded-2xl mt-[24px]`;


  return (
    <div className={`bg-white dark:bg-[#0D0D0D] w-full ${containerClass}`}>
      <div className="flex justify-between items-center w-full">
        <h4 className={`font-normal text-[20px] tracking-tight text-[#000] dark:text-white`}>Submissions</h4>
        <div className="flex items-center justify-end w-[137px] gap-[32px]">
          {submissions && <div className="flex items-center gap-[6px]">
            <p className="font-thin text-lg  tracking-tight text-[#000] dark:text-white">Filter by</p>
            <img src={collapsedIcon} alt="" />
          </div>}
          <img
            src={isCollapsed ? collapsedIcon : collapseIcon}
            alt="collapse"
            className="w-4 h-4 cursor-pointer "
            onClick={toggleCollapse}
          />
        </div>

      </div>

      {!isCollapsed && !submissions && (
        <p className="font-thin text-[14px] leading-[16px] tracking-tight text-center text-[#808080] dark:text-[#A5A5A5] flex justify-center mt-[118px]">
          <span>
            <img src={infoCircle} alt="info-circle" className="mr-2 w-4 h-4" />
          </span>
          All submissions will appear here
        </p>
      )}

      {!isCollapsed && submissions && (
        <>
          <ul className="space-y-[32px]">

            {currentImages.map((submission) => (
              <li key={submission.id} className="flex items-center justify-between mt-[32px]">
                <div className="flex gap-[14px] items-center">
                  <img
                    src={placeholderPic}
                    alt={submission.name}
                    className="w-[64px] h-[64px] object-cover rounded-lg transform scale-x-[-1]"
                  />
                  <div className="block">
                    <p className="font-thin text-lg leading-4 tracking-tight text-[#000] dark:text-white">
                      {submission.name}
                    </p>
                    <p className="font-thin text-md leading-4 tracking-tight text-[#A5A5A5]">{submission.size}</p>
                  </div>
                </div>
                <p>{submission.status}</p>
              </li>
            ))}
          </ul>
          {/* pagination */}
          <div className="mt-[46px] flex justify-between items-center">
            {/* pagination-icon, add functions */}
            <div className="flex items-center gap-[32px]">
              {/* left page */}
              <div className="flex gap-[16px] items-center">
                <button>{isDarkMode ?
                  <img src={whiteChevronsLeft} alt="previous page" className="w-6 h-6" /> :
                  <img src={blackChevronsLeft} alt="previous page" className="w-6 h-6" />}
                </button>
                <button>{isDarkMode ?
                  <img src={whiteChevronLeft} alt="previous page" className="w-5 h-3" /> :
                  <img src={blackChevronLeft} alt="previous page" className="w-5 h-5" />}
                </button>


              </div>
              {/* right page */}
              {/* use the left icons, rotate it using scale, like the images in the upload image page */}
              <div className="flex gap-[16px] items-center">
                <button><img src={chevronRight} alt="previous page" className="w-5 h-[13px]" /></button>
                <button> <img src={chevronsRight} alt="previous page" className="w-6 h-6" /></button>


              </div>
            </div>

            {/* numbered pagination, add functions */}
            <div className="flex justify-center  gap-[16px]">
              {/* Pagination Numbers */}
              {/*( _): The first parameter is for the current element, but since it’s not needed, an underscore is used as a placeholder. */}
              {Array.from({ length: totalPages }, (_, index) => {
                const page = (index + 1).toString().padStart(2, '0');
                console.log(`Rendering button for page: ${page}, currentPage: ${currentPage}`);

                return (
                  <button
                    key={page}
                    onClick={() => changePage(Number(page))}
                    className={`text-lg rounded-sm tracking-tight font-thin font-kanit  w-[27px] h-[24px] 
                    ${currentPage === Number(page)
                        ? 'bg-[#000] text-white dark:bg-white dark:text-[#000] '
                        : ' text-[#000] dark:text-white'
                      }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
          </div>
        </>

      )}
    </div>
  );
}

export default Submissions;
