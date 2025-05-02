"use server"
import EmailTemplate from "@/components/payments/EmailTemplate";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";
const { createdUser, findUserBycredentials, updateInterest, updateGoing, getEventById } = require("@/db/queries")

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
        await sendEmail(eventId, user)

    }catch(err){throw err}


    revalidatePath("/")
    redirect("/")
    
}


 async function sendEmail(eventId , user) {
   try{
    const event = await getEventById(eventId)
    const resend = new Resend(process.env.RESEND_API_KEY) 
    const message =`Dear ${user?.name} , you have been successfully register for event, ${event.name}, Please carry this email with official id to the venue.We are excited to have you here`
    
    const sent = await resend.emails.send({
        from:"onboarding@resend.dev" ,
        to: user?.email,
        subject: "Successfully registered for the event",
        react:EmailTemplate({message})

    })




   }catch(err){throw err}

    
 }




export {
    registerUser ,
    performLogin ,
    addInterest ,
    addGoingEvent ,
    sendEmail
}