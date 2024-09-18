import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import ContentDash from "./ContentDash";
import SubmitPhotos from "./SubmitPhotos";
import Submissions from "./Submissions";
import Footer from "./Footer";
import UploadPhotoContextProvider from "../../store/Upload-Photo-Context";

function Upload() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1020);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1020);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    isMobile && (

      <section className="bg-[#EFEFEF] dark:bg-[#161616] min-h-screen flex flex-col transition-colors">
        <MobileHeader isDarkMode={isDarkMode} />
        <div className="px-4 flex-grow">
          <UploadPhotoContextProvider>
            <ContentDash isDarkMode={isDarkMode} />
            <SubmitPhotos isDarkMode={isDarkMode} />
            <Submissions isDarkMode={isDarkMode}/>
          </UploadPhotoContextProvider>
        </div>
        <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </section>
    )
  );
}

export default Upload;
