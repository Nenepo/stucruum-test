
function FormInput({label, placeholder, type, marginTop}) {
  return (
    <div className={`${marginTop && 'mt-8'} h-[80px] flex flex-col gap-[16px] `}>
      <label className="font-normal text-lg text-[#000] leading-4" htmlFor={label}>{label}</label>
      <input type={type} id={label} placeholder={placeholder} className=" py-4 pl-4 rounded-lg border-[0.4px] outline-none border-textGrey bg-[#fafafa] font-thin text-lg placeholder:text-[#A5A5A5] "/>
    </div>
  )
}

export default FormInput