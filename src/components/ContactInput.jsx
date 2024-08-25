import React from 'react'

function ContactInput({ label, htmlFor, ...props }) {
  return  <div className='flex flex-col'>
  <label htmlFor={htmlFor} className='font-normal'>{label}</label>
  <input  className='w-full outline-none py-2  border-b  placeholder:text-md placeholder:font-thin placeholder:text-grey/60 '  id={htmlFor} 
    {...props}
  />
</div>
}

export default ContactInput