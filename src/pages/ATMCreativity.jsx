import image from '/image1.png';
import { useRef } from 'react';
import ContactATM from '../components/ContactATM';
import { CancelIcon } from '../components/CancelIcon';

function ATMCreativity() {
  const dialog = useRef();


  const openModal = () => {
    dialog.current.open();
  };

  return (
    <section className='relative inset-0 z-50 flex items-center justify-center w-full  h-screen px-[3%] bg-white'>
      {/* Cancel Icon */}
      <div className='absolute flex items-center justify-end w-full px-3 pb-2 top-2'>
        <button type='button' className='transitiom duration-300 border-0 outline-none text-neutral-500 hover:text-black'>
          <CancelIcon />
        </button>
      </div>


      {/* Main Content */}
      <div className=' fixed flex flex-col justify-center items-center w-full !overflow-visible'>
        <div className='w-[400px] relative h-[600px] max-h-[600px] flex justify-center items-center !overflow-visible  rounded-[4px] '>
          <img
            srcset={image}
            src={image}
            alt="image"
            className='w-full h-full object-cover rounded'
          />
        </div>

        <div className='flex justify-center space-x-2  py-3 pb-6  items-center  w-full overflow-hidden mt-[17px] mx-auto md:w-fit  md:gap-2  md:mt-6   md:flex-row'>
          <span className=' border  border-borderGrey rounded-lg px-8  py-[13px] gap-[8px] text-lg leading-[23px] font-medium text-nowrap'>
            <span className='font-normal'>by</span> ATM Creativity • May 2023
          </span>
          <button className=' bg-btnBg mr-4  py-2 px-7 rounded-[100px] text-md gap-[8px]  transition-opacity duration-300 hover:opacity-80' onClick={openModal}>
            <span className='text-white text-nowrap font-normal text-lg leading-[23px]'>Talk to ATM Creativity</span>
          </button>
        </div>
      </div>
      <ContactATM ref={dialog} />
    </section>
  );
}

export default ATMCreativity;
