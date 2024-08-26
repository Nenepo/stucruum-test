import closeBtn from "/close-btn.png";

function ModalHeader({text, handleClose, className }) {
  return <div className={`flex justify-between items-center py-2 border-b-2 border-b-borderGrey ${className}`}>
  <h4 className='px-6'>{text}</h4>
  <button className={`flex items-center outline-none px-6 transition-opacity duration-300 hover:opacity-80 `} onClick={handleClose}>Exit <img src={closeBtn} alt="close modal" className="ml-1" /></button>
</div>
}

export default ModalHeader;