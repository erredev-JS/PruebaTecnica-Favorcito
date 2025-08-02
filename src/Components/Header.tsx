import { SearchBar } from "./SearchBar"


export const Header = () => {
  return (
    <div className="bg-blue-950 h-[8vh] flex items-center px-4 justify-between">
        <h1 className="text-2xl text-white font-bold cursor-pointer">Weather.io</h1>
        <SearchBar/>
    </div>
  )
}
