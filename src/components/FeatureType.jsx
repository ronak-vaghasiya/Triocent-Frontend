const FeatureType = ({icon, title, subtitle}) => {
  return (
    <div className="flex flex-col md:flex-row items-center lg:justify-center gap-4 md:gap-6">
        <div className="flex items-center justify-center text-white bg-li-green h-[80px] w-[80px] rounded-full text-4xl shadow-md">
          {icon}
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="text-[22px] font-medium text-dark-blue">
            {title}
          </div>
          <div className="text-li-gray mt-1 text-[15px]">
            {subtitle}
          </div>
        </div>
    </div>
  )
}

export default FeatureType