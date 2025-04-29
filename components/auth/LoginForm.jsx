const LoginForm = () => {
    return (
        <form className="login-form">
      
        <div className="relative w-full">
          <label htmlFor="email">Email Address</label>
          <input className="peer w-full border-0 outline-none pb-2 text-base" type="email" name="email" id="email" />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-sky-700 transition-all duration-500 ease-in-out peer-focus:w-full peer-focus:h-[3px]"></span>
        </div>
       
        <div className="relative w-full">
          <label  htmlFor="password">Password</label>
          <input  className="peer w-full border-0 outline-none pb-2 text-base" type="password" name="password" id="password" />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-sky-700 transition-all duration-500 ease-in-out peer-focus:w-full peer-focus:h-[3px]"></span>
        </div>



        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    );
};

export default LoginForm;