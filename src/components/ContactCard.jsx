const ContactCard = ({ icon, title, detail }) => {
  return (
    <div className="flex flex-col h-[315px] min-w-[300px] md:min-w-[445px] bg-white rounded-[30px] p-[45px] transition-transform duration-500 hover:translate-y-[-10px] shadow-md hover:shadow-lg">
      {/* icon */}
      <div className="text-li-blue text-[30px]">{icon}</div>

      {/* line */}
      <div className="relative h-[1px] bg-li-gray opacity-20 rounded my-[15px]"></div>

      {/* title */}
      <div className="font-[Sora] text-dark-blue text-[26px]">{title}</div>

      {/* details */}
      <div className="mt-[80px] text-li-gray text-lg">{detail}</div>
    </div>
  );
};

export default ContactCard;
