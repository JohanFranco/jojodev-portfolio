import jojo from '../assets/jojo.jpeg';

export const Home = () => {
  return (
   <div className="flex justify-center items-center h-screen">
       <div className="image w-64 h-64 rounded-full overflow-hidden">
           <img src={jojo} alt="Jojo" className="w-full h-full object-cover" />
       </div>
       <div className="text-info flex items-center font-bold text-4xl p-8">
         <div>
                <h2 className="text-white">I AM SOFTWARE</h2>
                <h2 className="text-emerald-600">DEVELOPER</h2>
                <div>
                 <i className="p-2 hover:scale-110 transition-all duration-300 text-3xl text-white fa-brands fa-linkedin"></i>
                 <i className="p-2 hover:scale-110 transition-all duration-300 text-3xl text-white fa-brands fa-github"></i>
                 <i className="p-2 hover:scale-110 transition-all duration-300 text-3xl text-white fa-brands fa-tiktok"></i>
                 <i className="p-2 hover:scale-110 transition-all duration-300 text-3xl text-white fa-brands fa-instagram"></i>                
                 </div>
         </div>
       </div>
   </div>
  )
}
