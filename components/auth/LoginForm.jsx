"use client"

import { performLogin } from "@/app/action";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error ,setError] = useState('')
  const {setAuth} = useAuth()
  const router = useRouter()

  async function onSubmit(e) {
    e.preventDefault()

    try{
         const formData = new FormData(e.currentTarget)
      const found =  await performLogin(formData)

      if(found){
        setAuth(found)
        router.push("/")

      }else{
          setError("Please enter with valid credentials")
      }

    }catch(err){
      setError(err.message)
    }

    
  }


    return (
      <>
      {
        error &&  <div className="text-xl text-red-500">{error}</div>
      }
      
   
        <form className="login-form" onSubmit={onSubmit}>
      
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

      </>
    );
};

export default LoginForm;