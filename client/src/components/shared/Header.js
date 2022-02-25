import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../../redux/features/user/userSlice';
import { useEffect, useState } from 'react';

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const [username, setUsername] = useState(user ? user.username : null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);
  const handleLogout = () => {
    dispatch(reset());
    setUsername(null);
  };
  return (
    <header className='text-center bg-blue-600 py-4 flex justify-between px-8 items-end'>
      <h1 className='text-white text-4xl font-bold'>Rate Movies</h1>
      <ul className='flex text-2xl'>
        <li className='mx-4 text-white'>
          <Link className='hover:text-gray-800' to='/'>
            Search
          </Link>
        </li>

        {username ? (
          <>
            <li className='mx-4 text-white'>
              <Link className='hover:text-gray-800' to='/login'>
                {username}
              </Link>
            </li>
            <li className='mx-4 text-white'>
              <button onClick={handleLogout} className='hover:text-gray-800'>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li className='mx-4 text-white'>
            <Link className='hover:text-gray-800' to='/login'>
              Login
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
