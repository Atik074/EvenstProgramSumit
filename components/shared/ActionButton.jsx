 "use client"
import { addInterest } from "@/app/action";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const ActionButton = ({eventId , interestedUserIds,goingUserIds, formDetails}) => {
  const {auth} = useAuth()

  const isInterested = interestedUserIds.find(id => id === auth?.id)
  const isGoing = goingUserIds.find(id => id === auth?.id)


  const [interested , setInterested] = useState(isInterested)
  const [going , setGoing] = useState(isGoing)
  const [isPending , startTransition] = useTransition()
  const router = useRouter()


 

  

   
  async function toggleInterest() {

    if(auth){
      await addInterest(eventId , auth?.id)
      setInterested(!interested)
    }else{
      router.push("/login")
    }
  }

  const markGoing =()=>{
    if(auth){
      router.push(`/payment/${eventId}`)
    }else{
      router.push("/login")
    }
  }

    return (
        <div className={`w-full flex gap-4 mt-4 ${formDetails && "flex-1"}`}>
        <button onClick={()=>startTransition(()=>{
          toggleInterest()
        })} className={`w-full ${interested && "bg-indigo-600  hover:bg-indigo-800"}`}>Interested</button>

        <button 
           disabled={auth && going}
        onClick={markGoing} className="w-full text-center p-2 bg-[#464849] rounded-md border border-[#5f5f5f]/50 shadow-md cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1">Going</button>
      </div>
    );
};

export default ActionButton;