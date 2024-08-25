
function FormInput({ label, htmlFor, ...props }) {
 
  return  <div className='flex flex-col'>
      <label htmlFor={htmlFor} className='font-normal'>{label}</label>
      <input className='w-full outline-none my-2 p-1.5 rounded-sm placeholder:text-md placeholder:font-thin placeholder:text-grey/60 '  id={htmlFor} 
        {...props}
      />
    </div>
  
}

export default FormInput