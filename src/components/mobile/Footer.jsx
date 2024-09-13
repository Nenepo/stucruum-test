import React from 'react'

function Footer({isDarkMode, setIsDarkMode}) {

  const toggleMode = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <div className="flex justify-between items-center mt-[76px] px-4 pb-4">

    <button className={` rounded-full w-[48px] h-[24px] left-4 p-1 ${isDarkMode ? "bg-[#000]" : "bg-white"}`} onClick={toggleMode}>
      <div className={`w-4 h-4 rounded-full  ${isDarkMode ? "bg-white translate-x-[24px]" : "bg-[#000] translate-x-0"}  duration-500`} ></div>
    </button>

    <p className="text-[#000] dark:text-white text-sm font-thin">2024 © PHOTORUUM FACILITY </p>
  </div>
  )
}

export default Footer