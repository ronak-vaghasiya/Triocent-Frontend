const Heading = ({ name, title, align, BG }) => {

  const alignmentClass = align === "center" ? "items-center" : "items-start";
  const bgClass = BG === "blue" ? "bg-field" : "bg-white";

  return (
    <div className={`flex flex-col ${alignmentClass} gap-y-2`}>
      <div>
        <span className={`font-[Ubuntu] ${bgClass} rounded-full text-blue text-[12px] font-semibold tracking-widest px-[20px] py-[5px] uppercase`}>
          {name}
        </span>
      </div>

      <div className="font-[Sora] text-[34px] md:text-[48px] text-dark-blue">{title}</div>
    </div>
  );
};

export default Heading;
