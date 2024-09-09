function MobileHeader({ isDarkMode }) {
  return (
    <header className={`h-[72px] flex justify-between items-center w-full py-[16px] ${isDarkMode ? 'dark' : ''}`}>
      {/* Swap logos based on the isDarkMode prop */}
      <div className="flex items-center">
        <img
          src={isDarkMode ? '/light-logo.svg' : '/dark-logo.svg'}
          alt="stucruum logo"
          className="w-[35px] h-[35px]"
        />
        <h4 className={`text-md font-normal tracking-tight ml-[4px] ${isDarkMode ? 'text-white' : 'text-[#000]'}`}>
          STUCRUUM
        </h4>
      </div>
      <nav className="w-[24px] h-[8px] flex flex-col justify-between cursor-pointer">
        <div className={`w-full h-[2px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
        <div className={`w-full h-[2.5px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
      </nav>

    </header>
  );
}

export default MobileHeader;
