import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import ModalHeader from "./ModalHeader";
import ContactInput from "./ContactInput";
import { contactFields } from "..";
const ContactATM = forwardRef(function ContactATM({ }, ref) {
  const modalRef = useRef();
  const backdropRef = useRef();

  const handleClose = () => {
    if (modalRef.current && backdropRef.current) {
      modalRef.current.style.display = "none";
      backdropRef.current.style.display = "none";
    }
  };

  useImperativeHandle(ref, () => ({
    open() {
      if (modalRef.current && backdropRef.current) {
        modalRef.current.style.display = "block";
        backdropRef.current.style.display = "block";
      }
    },
  }));


  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    detail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // api
    console.log("Form submitted:", contactData);
    handleClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed right-0 top-0 w-[60%] md:w-[100%] h-[100vh] max-w-[400px] bg-white shadow-lg overflow-y-auto border-none transition-transform duration-500 ease-in-out z-50"
      >
        <ModalHeader text="Contact ATM Creativity" handleClose={handleClose} className="pt-6 pb-4 " />
        <form onSubmit={handleSubmit} className="px-6 py-10 space-y-6">
          {contactFields.map((field) => (
            <ContactInput
              key={field.name}
              label={field.label}
              htmlFor={field.htmlFor}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={contactData[field.name]}
              onChange={handleChange}
            />
          ))}
            <div className="w-full">
            <label htmlFor="shoot-detail" className="font-normal">Shoot detail</label>
            <textarea
              id="shoot-detail"
              name="detail"
              
              placeholder="e.g. Pre-wedding shoot, Birthday shoot, Single portrait"
              value={contactData.detail}
              onChange={handleChange}
              className="w-full outline-none mt-4  border-b  placeholder:text-md placeholder:font-thin placeholder:text-grey/60 "
            />
          </div>
          <div className="w-full flex ">
          <button
            type='submit'
            className='bg-black text-white rounded-full py-2 px-4 w-[50%] mx-auto mt-8 transition-opacity duration-300 hover:opacity-80'
          >
            Submit request
          </button>
          </div>
          

        </form>
      </div>
    </>
  );
});

export default ContactATM;
