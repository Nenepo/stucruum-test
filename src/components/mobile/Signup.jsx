import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import flagImg from "/flag.png";
import FormInput from "./FormInput";
import image from "/signup-img.svg"; // Using import as you did originally

function Signup() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    window.addEventListener("resize", handleResize);

    // Preload the image
    const img = new Image();
    img.src = image;
    img.onload = () => setImageLoaded(true); // Mark image as loaded once it’s done

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) {
    return <p className="flex w-full h-screen justify-center items-center text-[40px]">Yikes....... use a mobile device</p>;
  }

  return (
    isMobile && (
      <section className="">
        {/* Mobile Header */}
        <MobileHeader isDarkMode={false} />

        {/* Image and Caption */}
        <div className="relative h-[312px] w-full">
          {imageLoaded ? (
            <img src={image} alt="signup visual" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex justify-center items-center">Loading...</div>
          )}
          <p className="absolute bottom-6 left-0 right-0 flex justify-start items-center font-thin text-md tracking-tight px-4 text-white">
            <span>Work by <span className="font-normal">Kenneth Gueke</span></span>
            <span><img src={flagImg} alt="flag" className="w-4 h-4 ml-[3px]" /></span>
          </p>
        </div>

        {/* Signup Form */}
        <div className=" w-full">
          <div className="px-[15px] py-[48px] w-[400px]">
            <div className="flex justify-start items-center text-[#000] space-x-2">
              <h2 className="font-medium text-2xl tracking-tight ">Sign up</h2>
              <div className="w-1 bg-[#000] rounded-full mt-1  h-1"></div>
              <p className="text-xl font-thin tracking-tight ">Already have an account? <a className="font-medium underline">Login</a></p>
            </div>
            <p className="text-lg font-thin tracking-tight text-[#808080] text-wrap">Create your account to unlock your creative potential with our photography community</p>
          </div>
          <hr className="bg-textGrey h-[0.5px]" />

          <form action="submit" className="mt-[48px] px-[15px] ">
            <FormInput type="text" label="First name" placeholder="Your name" />
            <FormInput type="text" label="Last name" placeholder="Your last name" marginTop={true} />
            <FormInput type="email" label="Email" placeholder="Your email address" marginTop={true} />
            <FormInput type="password" label="Create password " placeholder="Enter password" marginTop={true} />
            <button className="font-normal text-lg rounded-lg bg-[#000] h-[48px] text-center w-full mt-10 text-white ">Let’s go!</button>
          </form>
          <p className="text-center mt-[78px] mb-[16px] font-thin text-[#000] text-sm">2024 © PHOTORUUM FACILITY</p>
        </div>
      </section>
    )
  );
}

export default Signup;
