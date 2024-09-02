import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import ModalHeader from "./ModalHeader";
import ContactInput from "./ContactInput";
import { contactFields } from "..";

const ContactATM = forwardRef(function ContactATM({}, ref) {
  const modalRef = useRef();
  const backdropRef = useRef();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    if (modalRef.current) {
      setIsClosing(true); // Trigger the slideout animation

      // Wait for the animation to complete before hiding the modal
      setTimeout(() => {
        modalRef.current.style.display = "none";
        setIsClosing(false); // Reset the closing state
      }, 800); // Duration matches the slideout animation
    }

    if (backdropRef.current) {
      backdropRef.current.style.display = "none";
    }
  };

  useImperativeHandle(ref, () => ({
    open() {
      if (modalRef.current && backdropRef.current) {
        modalRef.current.style.display = "block";
        backdropRef.current.style.display = "block";
        modalRef.current.classList.remove('slideout');
        modalRef.current.classList.add('slidein');
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
    console.log("Form submitted:", contactData);
    handleClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        style={{ display: "none" }}
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div >
        <div
          ref={modalRef}
          className={`absolute right-0 top-0 md:w-[656px] h-[140vh] bg-white shadow-lg overflow-y-auto border-none transition-transform duration-300 ease-in-out z-50 ${isClosing ? 'animate-slideout' : 'animate-slidein'}`}
          style={{ display: "none", scrollbarWidth: "none" }}
        >
          <ModalHeader text="Contact ATM Creativity" handleClose={handleClose} className="pt-8 pb-[29px]" marginLeft="ml-[44px]" marginRight="mr-[44px]" fontSize="md:text-2xl" fontWeight="font-thin" />

          <form onSubmit={handleSubmit} className="mt-[80px] space-y-10 px-10">
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
              <label htmlFor="shoot-detail" className="font-medium text-xl leading-[20px] text-btnBg">Shoot detail</label>
              <textarea
                id="shoot-detail"
                name="detail"
                placeholder="e.g. Pre-wedding shoot, Birthday shoot, Single portrait"
                value={contactData.detail}
                onChange={handleChange}
                className="w-full outline-none h-[88px] mt-4 border-b placeholder:text-lg placeholder:font-thinner placeholder:text-textGrey"
              />
            </div>
            <div className="w-full flex">
              <button
                type='submit'
                className='bg-btnBg mt-10 text-white rounded-[100px] py-3 px-8 w-[175px] h-[48px] text-nowrap mx-auto transition-opacity duration-300 hover:opacity-80'
              >
                Submit request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
});

export default ContactATM;
