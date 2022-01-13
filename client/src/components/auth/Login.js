const Login = () => {
    return ( 
        <form className="flex flex-col md:w-1/2 mx-auto my-8">
            <input className="border border-gray-400 p-2 my-2 rounded" type= 'text' name= 'username' placeholder= 'Username' />
            <input className="border border-gray-400 p-2 my-2 rounded" type= 'password' name= 'password' placeholder= 'Password' />
            <button className="p-2 my-2 rounded bg-blue-500 text-white text-lg font-bold" type="submit">Login</button>
            <p className="">Already have an acount <a className="text-blue-500" href="#">login</a></p>
        </form>
     );
}
 
export default Login;