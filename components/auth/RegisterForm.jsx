import { registerUser } from "@/app/action";

const RegisterForm = () => {
    return (
        <form className="login-form" action={registerUser}>
         
         <div className="relative w-full">
          <label htmlFor="name">Full name</label>
          <input className="peer w-full border-0 outline-none pb-2 text-base" type="name" name="name" id="name" />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-sky-700 transition-all duration-500 ease-in-out peer-focus:w-full peer-focus:h-[3px]"></span>
        </div>
        <div className="relative w-full">
          <label htmlFor="Email">Email</label>
          <input className="peer w-full border-0 outline-none pb-2 text-base" type="email" name="email" id="email" />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-sky-700 transition-all duration-500 ease-in-out peer-focus:w-full peer-focus:h-[3px]"></span>
        </div>
      
        <div className="relative w-full">
          <label  htmlFor="password">Password</label>
          <input  className="peer w-full border-0 outline-none pb-2 text-base" type="password" name="password" id="password" />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-sky-700 transition-all duration-500 ease-in-out peer-focus:w-full peer-focus:h-[3px]"></span>
        </div>
      
        <div className="relative w-full">
          <label  htmlFor="phone">Phone number</label>
          <input  className="peer w-full border-0 outline-none pb-2 text-base" type="number" name="phone" id="phone" />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-sky-700 transition-all duration-500 ease-in-out peer-focus:w-full peer-focus:h-[3px]"></span>
        </div>
       
        <div className="relative w-full">
          <label  htmlFor="bio">Bio</label>
          <input  className="peer w-full border-0 outline-none pb-2 text-base" type="text" name="bio" id="bio" />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-sky-700 transition-all duration-500 ease-in-out peer-focus:w-full peer-focus:h-[3px]"></span>
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Register
        </button>
      </form>
    );
};

export default RegisterForm;