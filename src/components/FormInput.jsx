
function FormInput({ label, htmlFor, ...props }) {
 
  return  <div className='flex flex-col gap-[19px] w-[323px] h-[83px] rounded-[4px] '>
      <label htmlFor={htmlFor} className='font-normal leading-4 text-lg text-textDark'>{label}</label>
      <input className='w-[323px] h-[48px] outline-none bg-white border border-inputBorder  p-4 rounded-[4px] placeholder:text-lg placeholder:leading-[16px] placeholder:font-thin placeholder:text-textGrey '  id={htmlFor} 
        {...props}
      />
    </div>
  
}



export default FormInput;