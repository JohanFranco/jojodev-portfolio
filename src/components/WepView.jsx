

export const WepView = ({ title, description, url, pathImage }) => {
  return (
    <div className="flex justify-center items-center h-screen relative">
       <div className="image w-96 h-96 overflow-hidden">
           <img src={pathImage} alt="Jojo" className="w-full h-full object-cover" />
       </div>
       <div className="text-info flex items-center p-8">
         <div>
                <h2 className="text-white font-bold text-4xl mb-8">{title}</h2>
                <p className="text-white text-xl max-w-96 mb-8">
                    {description}
                </p>
                <button className="rounded-full bg-emerald-600 text-black font-extrabold px-7 py-2 hover:scale-110 transition-all duration-300 text-black hover:text-white" href={url}>VISIT</button>
         </div>
       </div>
   </div>
  )
}
