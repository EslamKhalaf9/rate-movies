import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../redux/features/user/userSlice';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.user) {
      navigate('/');
    }
  }, [user, navigate]);
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ username, email, password }));
  };

  return (
    <div className='text-center mt-8'>
      <h1 className='text-5xl'>Register</h1>
      <form
        className='flex flex-col md:w-1/2 mx-auto my-8'
        onSubmit={handleRegister}
      >
        <input
          className='border border-gray-400 p-2 my-2 rounded'
          type='text'
          name='username'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          Register
        </button>
        <p className=''>
          Already have an account ?{' '}
          <Link className='text-blue-500' to='/login'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
