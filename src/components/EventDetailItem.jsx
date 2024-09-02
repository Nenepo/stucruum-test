function EventDetailItem({ text, icon, alt, highlight, index }) {
  const highlightColor = highlight || 'text-grey/60';

  // Split text by " (Twitter) " and render parts separately
  const splitText = text.split(" (Twitter) ");
  const beforeText = splitText[0];
  const afterText = splitText[1] ? ` (Twitter) ${splitText[1]}` : "";

  return (
    <span className='flex items-center my-2 ' key={index}>
      <img src={icon} alt={alt} className="mr-2 w-[15px] h-[15px]" />
      <span className="w-[114px] h-[26px] font-normal text-md  leading-[26px]">
        {beforeText}
        <span className={highlightColor}>
          {' '}
          {afterText.startsWith(" (Twitter)") ? "(Twitter)" : ""}
          {' '}

        </span>
        {afterText.replace(" (Twitter)", "")}
      </span>
    </span>
  );
}

export default EventDetailItem;
