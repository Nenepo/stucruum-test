import { useEffect, useState } from "react"
import MobileHeader from "./MobileHeader"
import lightUserImg from "/light-user.svg"
import darkUserImg from "/dark-user.svg"
import dropdownicon from "/dropdown-icon.svg"
import collapseIcon from "/collapse.svg"
import infoCircle from "/Info-circle.svg"
import lightUploadIcon from "/light-upload-icon.svg"
import darkUploadIcon from "/dark-upload-icon.svg"
function Upload() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMode = () => {
    setIsDarkMode(prev => !prev)
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);


  if (!isMobile) {
    return <p className="flex w-full h-screen justify-center items-center text-[40px]">Yikes....... use a mobile device</p>;
  }

  return (
    isMobile && (<section className="bg-[#EFEFEF] dark:bg-[#161616]  pb-4">
      <MobileHeader isDarkMode={isDarkMode} />

      <div className="px-4">
        <div className="w-full h-[320px] rounded-2xl relative flex items-center flex-col justify-between bg-white dark:bg-[#000] px-[44px] pt-[16px] pb-[50px]">
          <div>
            <div className="flex items-center justify-center">
              {isDarkMode ? <img src={lightUserImg} alt="profile" className="w-[24px] h-[24px]" /> : <img src={darkUserImg} alt="profile" className="w-[24px] h-[24px]" />}
              <img src={dropdownicon} alt="dropdown" className="w-[12px] h-[6px]" />
            </div>
            <h4 className="font-medium text-[32px] tracking-tighter text-center leading-[16px] mt-[16px] dark:text-white">Fiifi Junior</h4>

            <p className="font-thin text-[18px] text-center text-[#808080] leading-[16px] mt-[16px]">Good afternoon!</p>
          </div>


          <p className="font-thinner text-[14px] leading-[16px] tracking-tight text-center text-[#808080] dark:text-[#A5A5A5] mt-[16px] flex items-center "><span><img src={infoCircle} alt="info-circle" className="mr-2  w-[18px] h-[18px]" /></span> Content data appears here</p>

          <img src={collapseIcon} alt="collapse" className="absolute right-6 top-7" />
        </div>

        <div className="w-full h-[282px] rounded-2xl mt-[24px] bg-white dark:bg-[#000] p-4">
          <div className="flex justify-between items-center">
            <h4 className="font-normal text-[20px] leading-[18px] tracking-tight  text-[#000] dark:text-white">Submit photos</h4>
            <img src={collapseIcon} alt="collapse" className="" />
          </div>
          <p className="font-thin text-[14px] leading-[20px] tracking-tight  text-[#808080] dark:text-[#A5A5A5]  mt-6">Submit your works for review for our <span className="font-medium">STUCRUUM</span> project. Remember to tick ☑ the ‘ARTRUUM’ checkbox if you’re also submitting for our <span className="font-medium">ARTRUUM</span> project.</p>

          <div className="w-full h-[56px] mt-[92px] relative  cursor-pointer">
            <button className="w-full bg-[#000] dark:bg-white text-white dark:text-[#000] py-4 rounded-lg flex items-center justify-center">
              {isDarkMode ? <img src={darkUploadIcon} alt="" className="w-6 h-6 mr-2" /> : <img src={lightUploadIcon} alt="" className="w-6 h-6 mr-2" />}
              Upload Photos
            </button>
            <input type="file" name="" id="" className="absolute inset-0 opacity-0  w-full h-full cursor-pointer" />
          </div>
        </div>

        <div className=" h-[320px] rounded-2xl mt-[24px] bg-white dark:bg-[#000] w-full p-4 flex flex-col">
          <h4 className="font-normal text-[20px] tracking-tight text-[#000] dark:text-white">Recent uploads</h4>
          <p className="font-thinner  text-[14px] leading-[16px] tracking-tight text-center text-[#808080] dark:text-[#A5A5A5]  flex items-center mx-auto mt-[118px]"><span><img src={infoCircle} alt="info-circle" className="mr-2  w-[18px] h-[18px]" /></span>All submissions will appear here</p>

        </div>

        <div className="flex justify-between items-center mt-[76px]">

          <button className={` rounded-full w-[48px] h-[24px] left-4 p-1 ${isDarkMode ? "bg-[#000]" : "bg-white"}`} onClick={toggleMode}>
            <div className={`w-4 h-4 rounded-full ${isDarkMode ? "bg-white translate-x-[24px]" : "bg-[#000] translate-x-0"} `} ></div>
          </button>

          <p className="text-[#000] dark:text-white text-sm font-thin">2024 © PHOTORUUM FACILITY </p>
        </div>
      </div>


    </section>)
  )
}

export default Upload