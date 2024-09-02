import image from '/image1.png';
import cancel from '/cancel.png';
import { useRef } from 'react';
import ContactATM from '../components/ContactATM';

function ATMCreativity() {
  const dialog = useRef();

  
  const openModal = () => {
    dialog.current.open();
  };
  
  return (
    <section className=' inset-0 z-50 flex items-center justify-center w-full  h-[140vh] bg-white'>
      {/* Cancel Icon */}
      <img
        src={cancel}
        alt="cancel page"
        className='absolute top-8 right-6 w-6 h-6  cursor-pointer'
      />

      {/* Main Content */}
      <div className='flex flex-col items-center top-[125px] gap-[32px] w-[513px] h-[730px] '>
        <div className='w-[464px] h-[648px] rounded-[4px] '>
          <img
            src={image}
            alt="image"
            className='w-full h-full object-cover rounded'
          />
        </div>

        <div className='flex flex-col space-y-4  md:space-y-0 md:flex-row items-center  w-[513px] h-[50px] gap-[16px] mt-8 mx-auto'>
          <span className=' border  border-borderGrey rounded-lg px-8  py-[13px] gap-[8px] text-lg leading-[23px] font-medium text-nowrap'>
           <span className='font-normal'>by</span> ATM Creativity • May 2023
          </span>
          <button className=' bg-btnBg mr-4  py-3 px-7 rounded-[100px] text-md gap-[8px]  transition-opacity duration-300 hover:opacity-80' onClick={openModal}>
           <span className='text-white text-nowrap font-medium text-lg leading-[23px]'>Talk to ATM Creativity</span> 
          </button>
        </div>
      </div>
    <ContactATM ref={dialog}/>
    </section>
  );
}

export default ATMCreativity;
