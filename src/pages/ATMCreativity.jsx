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
    <section className='w-full h-screen flex flex-col items-center justify-center bg-gray-100 relative'>
      {/* Cancel Icon */}
      <img
        src={cancel}
        alt="cancel page"
        className='absolute top-4 right-6 w-4 h-4  cursor-pointer'
      />

      {/* Main Content */}
      <div className='flex flex-col items-center max-w-[450px] w-full'>
        <div className='w-[300px] h-[420px] mb-4'>
          <img
            src={image}
            alt="image"
            className='w-full h-full object-cover rounded'
          />
        </div>

        <div className='flex items-center justify-between w-full mt-6 '>
          <p className=' border border-grey rounded-lg px-4 py-2 text-lg '>
            by ATM Creativity • May 2023
          </p>
          <button className=' rounded-full bg-black text-white font-medium py-2 px-4 text-lg transition-opacity duration-300 hover:opacity-80' onClick={openModal}>
            Talk to ATM Creativity
          </button>
        </div>
      </div>
    <ContactATM ref={dialog}/>
    </section>
  );
}

export default ATMCreativity;
