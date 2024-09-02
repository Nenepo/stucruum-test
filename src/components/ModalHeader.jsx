import closeBtn from "/close-btn.svg";

function ModalHeader({ text, handleClose, className , marginLeft, marginRight, fontSize, fontWeight }) {
  return <div className={`flex justify-between items-center  border-b-2 py-4 border-b-borderGrey ${className}`}>
    <h4 className={`${marginLeft ? marginLeft : 'ml-8'}  h-7 font-medium   -tracking-wide ${fontSize ? fontSize : 'text-xl'}`}>{text}</h4>

    <button className={` ${marginRight ? marginRight : 'mr-8'} flex   items-center   outline-none h-4  transition-opacity  duration-300 hover:opacity-80 `} onClick={handleClose}>
      <span className={` ${fontWeight ? fontWeight : 'font-normal'} text-lg  leading-[14px] -tracking-wide`}>Exit</span>
      <img src={closeBtn} alt="close modal" className={`ml-1.5 w-4 h-4  `}/>
    </button>


  </div>
}

export default ModalHeader;


