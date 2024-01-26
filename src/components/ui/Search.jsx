import { MagnifyingGlass } from "@phosphor-icons/react"

export const Search = ({ value, onChange }) => {

  return (
    <form>   
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <MagnifyingGlass size={20}/>
          </div>
          <input 
            type="search" 
            id="default-search"
            placeholder="Search By Name" 
            value={value}
            onChange={onChange}
            className="flex w-full p-4 ps-10 text-sm text-gray-900 border-none rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-gray-50 focus:border-blue-500" 
            required 
          />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 border-none bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
      </div>
    </form>
  )
}