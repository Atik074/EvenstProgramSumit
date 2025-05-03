import Image from "next/image";
import Link from "next/link";
import ActionButton from "../shared/ActionButton";
import eventIo from "/public/google-io-2023-1.png"
import EventSchema from "../meta/EventSchema";


const EventCard = ({event}) => {
  const {name,
    id,
    location,
    imageUrl,
    interested_ids,
    going_ids,
   
} = event
    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
     
       <EventSchema event={event}/>

        <Image src={ imageUrl} width={500}
        height={500} alt="Event 1"/>

        <div className="p-3">
          <Link href={`/details/${id}` }className="font-bold text-lg">{name}</Link>
          <p className="text-[#9C9C9C] text-sm mt-1">{location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{interested_ids?.length} Interested</span>
            <span className="mx-1">|</span>
            <span>{going_ids?.length} Going</span>
          </div>

       
          <div className="w-full flex gap-4 mt-4">
       
          <ActionButton 
           eventId={id} 
           interestedUserIds={interested_ids}
           goingUserIds={going_ids}
           />
          </div>
        </div>
      </div>
    );
};

export default EventCard;