import { useRef, useEffect, useState } from 'react';
import profilePic from "/profile-pic.svg";
import { eventDetails, formFields } from '..';
import EventDetailItem from './EventDetailItem';
import FormInput from './FormInput';
import ModalHeader from './ModalHeader';

function BookEventModal() {
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phoneNumber: '',
    instagram: ''
  });

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleClose();
  };

  // <div
  //         className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-grey/40"
  //         ref={modalRef}
  //       >
  //         <div className="bg-lightGrey rounded-lg   max-h-[90vh]  h-auto p-8 overflow-auto modal"></div>
  return (
    <>
      {isModalOpen && (
        <div
          className=" inset-0 z-50 flex items-center justify-center w-full h-full bg-grey/40"
          ref={modalRef}
        >
          <div className="bg-lightGrey rounded-lg  ">
            <ModalHeader text="Event registration" handleClose={handleClose} />
            <div className='flex m-8 gap-12 items-start  justify-center'>
              <div className='w-[251px]  gap-5'>
                <div className='gap-1 w-[228px] h-auto'>
                  <p className='text-textGrey text-sm font-thin w-[110px] h-[20px]'>PHOTORUUM EVENT</p>
                  <h4 className='w-[228px] h-[60px] uppercase text-lg font-medium leading-5 tracking-tight'>
                    How Building Your Personal Brand Can Boost Your Photography Business
                  </h4>
                </div>
                <hr className='w-full mt-5 h-[0.5px]  bg-textGrey' />
                <div className='my-5 gap-4'>
                  {eventDetails.map((item, index) => (
                    <EventDetailItem
                      key={index}
                      text={item.text}
                      alt={item.alt}
                      icon={item.icon}
                    />
                  ))}
                </div>
                <hr className='w-full h-[0.5px]  bg-textGrey' />
                <div className='flex items-center mt-5'>
                  <img src={profilePic} alt="" className='w-16 h-16' />
                  <span className='ml-2'>
                    <p className='text-textGrey text-sm font-thin leading-[22px]'>Guest</p>
                    <p className='text-md font-medium leading-[22px]'>Rahama Abdulkadir</p>
                  </span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className=' w-[323px]  space-y-5'>
                {formFields.map((field) => (
                  <FormInput
                    key={field.name}
                    label={field.label}
                    htmlFor={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                ))}
                <div className='mt-5 mb-[20px]'>
                  <button type='submit' className=' bg-btnBg rounded-[100px] py-3 px-10  transition-opacity duration-300 hover:opacity-80 '>
                    <span className='text-white text-lg font-medium leading-[10px] tracking-[-3%] '>Book a seat</span>
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookEventModal;
