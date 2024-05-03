
export const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen relative">
       <div className="image w-96 h-96 overflow-hidden rounded-full">
           <img src="../../images/chimu.svg" alt="CHIMU" className="w-full h-full object-cover" />
       </div>
       <div className="text-info flex items-center p-8">
         <div>
                <input type="text" />
                <input type="text" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>SEND MESSAGE</button>
         </div>
       </div>
   </div>
  )
}
