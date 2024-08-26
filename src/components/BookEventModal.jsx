// react hooks
import { useRef, useEffect, useState } from 'react';

// images
import profilePic from "/profile-pic.png"

// mapping arrays
import { eventDetails } from '..';
import { formFields } from '..';

// reusable components
import EventDetailItem from './EventDetailItem';
import FormInput from './FormInput';
import ModalHeader from './ModalHeader';

function BookEventModal() {
  const dialog = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phoneNumber: '',
    instagram: ''
  });

  useEffect(() => {
    // Ensure the dialog element is available
    if (dialog.current) {
      // Open the dialog as a modal if it's not already open
      if (!dialog.current.open) {
        dialog.current.showModal();
      }
    }
  }, []);

  const handleClose = () => {
    if (dialog.current) {
      dialog.current.close();
    }
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
    // api
    console.log("Form submitted:", formData);
    handleClose();
  };


  return (

    <dialog ref={dialog} className="bg-lightGrey  rounded-md booking-modal" >
     <ModalHeader text="Event registration" handleClose={handleClose}/>
      <div className='flex px-6 mt-6'>
        <div className='w-[50%]'>
          <div className='pb-2 border-b-2 border-b-borderGrey'>
            <p className='text-grey/80 text-sm'>PHOTORUUM EVENT</p>
            <h4 className='uppercase text-lg font-medium leading-5 '>How Building Your Personal
              Brand Can Boost Your
              Photography Business</h4>
          </div>
          <div className='pb-2 border-b-2 border-b-borderGrey'>
            {eventDetails.map((item, index) => {
              return <EventDetailItem key={index} text={item.text} alt={item.alt}
                icon={item.icon} />
            })}

          </div>
          <div className='flex items-center mt-4'><img src={profilePic} alt="" />
            <span className='ml-2'><p className='text-grey/60 text-sm'>Guest</p> <p className='text-md'>Rahama Abdulkadir</p></span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='ml-10 w-[50%]'>
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

          <button type='submit' className='bg-black text-white rounded-full py-2 px-4 my-4 transition-opacity duration-300 hover:opacity-80'>Book a seat</button>
        </form>
      </div>
    </dialog>
  )
}

export default BookEventModal;