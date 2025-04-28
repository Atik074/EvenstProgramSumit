import EventDetails from '@/components/details/EventDetails'
import EvenVenue from '@/components/details/EvenVenue'
import HeroSection from '@/components/details/HeroSection'
import { getEventById } from '@/db/queries'


export default async function EventDetailsPage({params:{id}}) {
  const eventInfo = await getEventById(id)



  
  return (
    <>
     <HeroSection  eventInfo={eventInfo} />
     <section className="container">
      <div className="grid grid-cols-5 gap-12 my-12">
        <EventDetails 
        details={eventInfo?.details} 
        swags={eventInfo?.swags} />
        <EvenVenue location={eventInfo?.location}/>
       </div>
       </section>

    </>
   
  )
}
