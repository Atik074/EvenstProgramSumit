"use server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const { createdUser, findUserBycredentials, updateInterest, updateGoing } = require("@/db/queries")

async function registerUser(formData) {
    const user = Object.fromEntries(formData)
    const created= await createdUser(user)
    redirect("/login")
   
}


async function performLogin(formData){
   

    try{
        const credentials = {}
    
        credentials.email = formData.get("email")
        credentials.password = formData.get("password")
        const found = await findUserBycredentials(credentials)

        return found

    }catch(err){
        throw err
    }

   

}

async function addInterest (eventId , authId){
    try{

      await updateInterest(eventId , authId)

    }catch(error){

          throw error
    }

    revalidatePath('/')
}

async function addGoingEvent(eventId, user) {
    try{
        await updateGoing(eventId , user?.id)
    }catch(err){throw err}


    revalidatePath("/")
    redirect("/")
    
}



export {
    registerUser ,
    performLogin ,
    addInterest ,
    addGoingEvent
}