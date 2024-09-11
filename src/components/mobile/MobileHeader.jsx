import lightLogo from '/light-logo.svg';
import darkLogo from '/dark-logo.svg';

function MobileHeader({ isDarkMode }) {
  return (
    <header className={`h-[72px] px-4 flex justify-between items-center w-full py-[16px] ${isDarkMode ? 'dark' : ''}`}>
      {/* Swap logos based on the isDarkMode prop */}
      <div className="flex items-center">
        <img
          src={isDarkMode ?  lightLogo : darkLogo}
          alt="stucruum logo"
          className="w-[40px] h-[40px]"
        />
        <h4 className={`text-[20px] font-normal tracking-tight  ml-[4px] ${isDarkMode ? 'text-white' : 'text-[#000]'}`}>
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
