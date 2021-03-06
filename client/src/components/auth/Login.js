import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/features/user/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState('eslamkhalaf@mail.com');
  const [password, setPassword] = useState('123456');
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.user) {
      navigate('/');
    }
  }, [user, navigate]);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className='text-center mt-8'>
      <h1 className='text-5xl'>Login</h1>
      <form
        className='flex flex-col md:w-1/2 mx-auto my-8'
        onSubmit={handleLogin}
      >
        <input
          className='border border-gray-400 p-2 my-2 rounded'
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='border border-gray-400 p-2 my-2 rounded'
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='p-2 my-2 rounded bg-blue-500 text-white text-lg font-bold'
          type='submit'
        >
          Login
        </button>
        <p className=''>
          New User ?{' '}
          <Link className='text-blue-500' to='/register'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
