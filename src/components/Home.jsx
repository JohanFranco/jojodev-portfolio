
export const Home = () => {
  return (
   <div className="flex justify-center items-center h-screen">
       <div className="image w-64 h-64 rounded-full overflow-hidden">
           <img src="../../images/jojo.jpeg" alt="Jojo" className="w-full h-full object-cover" />
       </div>
       <div className="text-info flex items-center font-bold text-center p-8">
         <div>
                <h2 className="text-white text-4xl mb-3">JOHAN FRANCO</h2>
                <h4 className="text-emerald-600 text-xl mb-3">I AM SOFTWARE DEVELOPER</h4>
                <div>
                  <i className="cursor-pointer p-2 hover:scale-110 transition-all duration-300 text-3xl text-white fa-brands fa-linkedin"></i>
                  <i className="cursor-pointer p-2 hover:scale-110 transition-all duration-300 text-3xl text-white fa-brands fa-github"></i>
                  <i className="cursor-pointer p-2 hover:scale-110 transition-all duration-300 text-3xl text-white fa-brands fa-tiktok"></i>
                  <i className="cursor-pointer p-2 hover:scale-110 transition-all duration-300 text-3xl text-white fa-brands fa-instagram"></i>                
                </div>
         </div>
       </div>
       <i className="fa-solid fa-chevron-down absolute bottom-10 left-50 text-white hover:scale-110 transition-all duration-300 cursor-pointer"></i>
   </div>
  )
}
