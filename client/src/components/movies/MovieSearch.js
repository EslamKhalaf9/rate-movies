import { useState } from "react"; 
const MovieSearch = ({ onSearch, name, setName }) => {
  return ( 
    <form onSubmit={e => onSearch(e)}>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="p-2 my-2 rounded mx-1" placeholder="ex:Avatar"/>
      <button className="p-2 my-2 rounded bg-blue-500 text-white text-lg font-bold" type="submit">Search</button>
    </form>
   );
}
 
export default MovieSearch;