import { eventModel } from "@/models/eventModels";
import { replaceMongoIdArray, replaceMongoIdObj } from "@/utils/data-util";



async function getAllEvents() {
  const allEvents = await eventModel.find().lean()

  return replaceMongoIdArray(allEvents);
}

async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean()
    return replaceMongoIdObj(event)  ;
    
}




export { getAllEvents ,getEventById };
