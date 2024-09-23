import { useContext, useState } from "react";

import lightUploadIcon from "/light-upload-icon.svg";
import darkUploadIcon from "/dark-upload-icon.svg";


import { UploadContext } from "../../store/Upload-Photo-Context";
import SubmitPhotosHeader from "./SubmitPhotosHeader";



function SubmitPhotos({ isDarkMode }) {
  // manage the collapse state
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { uploads } = useContext(UploadContext);

  const slicedUploads = uploads.slice(0, 12);
  const remainingUploadedImage = uploads.slice(12);

  // Toggle the collapse state
  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  };
  const hasUploads = uploads.length > 0;

  const containerClass = isCollapsed
    ? 'h-[64px] mt-[8px] px-4 py-[23px] rounded-lg'
    : `${hasUploads ? 'h-auto' : 'h-[282px]'} p-4 rounded-2xl mt-[24px]`;



  return (
    <div className={`w-full ${containerClass}  bg-white dark:bg-[#0D0D0D]`}>

      {isCollapsed &&
        <SubmitPhotosHeader headerText="Submit Photos" onClick={toggleCollapse} isCollapsed={isCollapsed}
        />
      }

      {!isCollapsed && !hasUploads && (
        <>
          <SubmitPhotosHeader headerText="Submit Photos" onClick={toggleCollapse} isCollapsed={isCollapsed} />
          <div>
            <p className="font-thin text-[14px] leading-[20px] tracking-tight text-[#808080] dark:text-[#A5A5A5] mt-6">
              Submit your works for review for our <span className="font-medium">STUCRUUM</span> project. Remember to tick ☑ the ‘ARTRUUM’ checkbox if you’re also submitting for our <span className="font-medium">ARTRUUM</span> project.
            </p>
            <UploadButton isDarkMode={isDarkMode} />
          </div>
        </>
      )}

      {!isCollapsed && hasUploads && (
        <>
          {/* the pause and cancel functions havent been done yet */}
          <SubmitPhotosHeader headerText={`Uploading ${uploads.length} ${uploads.length === 1 ? "image" : "images"}`} hasUploads={hasUploads} isDarkMode={isDarkMode} />
          {/* value would be changed based on the number */}
          <progress max={17} value={uploads.length} className="  h-2 w-full progress-bar" />
          <p className="text-lg font-normal leading-[14px] tracking-tight text-[#A5A5A5]">{`${uploads.length} of 17`}</p>

          <ul className="flex flex-wrap mx-auto mt-[50px] gap-[6px] w-full">
            {slicedUploads.map((images, index) => (

              <li key={images.id} className="rounded-lg relative w-[56px] h-[56px] overflow-hidden">
                
                <img src={images.image} alt={images.name} className="w-full h-full object-cover  transform scale-x-[-1] z-[1]" />
                {index === slicedUploads.length - 1 && (
                  <div className="font-kanit  bg-black bg-opacity-85 top-0 text-xl leading-[14px] tracking-tight font-medium flex justify-center items-center text-white absolute w-full h-full z-[2]">
                    +{remainingUploadedImage.length}
                  </div>
                )}
              </li>

            ))}
          </ul>
        </>
      )}


    </div>
  );
}



const UploadButton = ({ isDarkMode }) => {
  const { uploadImage } = useContext(UploadContext);

  return (<div className="w-full h-[56px] mt-[92px] relative cursor-pointer">
    <button className="w-full bg-[#000] dark:bg-white text-white dark:text-[#000] py-4 rounded-lg flex items-center justify-center">
      {isDarkMode ? (
        <img src={darkUploadIcon} alt="upload" className="w-6 h-6 mr-2" />
      ) : (
        <img src={lightUploadIcon} alt="upload" className="w-6 h-6 mr-2" />
      )}
      Upload Photos
    </button>
    {/* Hidden file input , allows selecting multiple files */}
    <input
      type="file"
      multiple
      onChange={uploadImage}
      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
    />
  </div>)
};

export default SubmitPhotos;
