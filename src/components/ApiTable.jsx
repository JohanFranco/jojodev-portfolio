

export const ApiTable = () => {
  return (
<div className="p-6 flex justify-center h-screen items-center">
<div className="max-w-3xl ">
<h2 className="text-white text-4xl font-bold mb-8">API REST</h2>
<table className="table-auto bg-stone-800 rounded text-neutral-400">
    <thead>
      <tr className="border-neutral-400 border-b-2">
        <th className="px-4 py-2">Project</th>
        <th className="px-4 py-2">Description</th>
        <th className="px-4 py-2">Repo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2">API Movies</td>
        <td className="px-4 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Quo iusto minus accusantium sunt tempora, vero earum voluptas repellat molestias, 
                                    necessitatibus accusamus. Id hic, suscipit architecto error dolores, magnam corrupti fugit, 
                                    consectetur culpa explicabo odio.</td>
        <td className="px-4 py-2">                
            <a className="rounded-full bg-emerald-600  font-bold text-white px-7 py-2 hover:scale-110 transition-all duration-300" 
               href="">VISIT</a>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2">API Movies</td>
        <td className="px-4 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Quo iusto minus accusantium sunt tempora, vero earum voluptas repellat molestias, 
                                    necessitatibus accusamus.</td>
        <td className="px-4 py-2">                
            <a className="rounded-full bg-emerald-600  font-bold text-white px-7 py-2 hover:scale-110 transition-all duration-300" 
               href="">VISIT</a>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2">API Movies</td>
        <td className="px-4 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Quo iusto minus accusantium sunt tempora, vero earum voluptas repellat molestias, 
                                   </td>
        <td className="px-4 py-2">                
            <a className="rounded-full bg-emerald-600  font-bold text-white px-7 py-2 hover:scale-110 transition-all duration-300" 
               href="">VISIT</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>


  )
}
