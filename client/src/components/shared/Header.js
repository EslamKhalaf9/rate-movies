import { Link } from "react-router-dom";

const Header = () => {
  return ( 
    <header className="text-center bg-blue-600 py-4 flex justify-between px-8 items-end">
      <h1 className="text-white text-4xl font-bold">Rate Movies</h1>
      <ul className="flex text-2xl">
        <li className="mx-4 text-white">
          <Link className="hover:text-gray-800" to='/search'>Search</Link>
        </li>
        <li className="mx-4 text-white">
          <Link className="hover:text-gray-800" to='/'>Login</Link>
        </li>
      </ul>
    </header>
  );
}
 
export default Header;