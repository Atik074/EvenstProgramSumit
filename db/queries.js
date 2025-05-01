import { userModel } from "@/models/event.user";
import { eventModel } from "@/models/eventModels";
import { replaceMongoIdArray, replaceMongoIdObj } from "@/utils/data-util";
import mongoose from "mongoose";





async function getAllEvents() {
  const allEvents = await eventModel.find().lean()

  return replaceMongoIdArray(allEvents);
}

async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean()
    return replaceMongoIdObj(event)  ;
    
}

async function createdUser(user) {
  return await userModel.create(user)
  
}

async function findUserBycredentials(credentials) {
    const user = await userModel.findOne(credentials).lean()

         
    if(user){
      return replaceMongoIdObj(user)
    }
    return  null;
}


async function updateInterest(eventId, authId) {

  const event = await eventModel.findById(eventId);




  if (event) {
      const foundUsers = event.interested_ids.find(id => id.toString() === authId);

      if(foundUsers) {
          event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
      } else {
          event.interested_ids.push(new mongoose.Types.ObjectId(authId));
      }


      event.save();
      

  }


}


async function updateGoing(eventId , authId) {
  const event = await eventModel.findById(eventId)
  event.going_ids.push(new mongoose.Types.ObjectId(authId))
  event.save()
  
}


export { getAllEvents ,getEventById ,createdUser,findUserBycredentials ,updateInterest ,updateGoing};
