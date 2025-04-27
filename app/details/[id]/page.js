import EventDetails from '@/components/details/EventDetails'
import EvenVenue from '@/components/details/EvenVenue'
import HeroSection from '@/components/details/HeroSection'


export default function page() {
  return (
    <>
     <HeroSection/>
     <section className="container">
      <div className="grid grid-cols-5 gap-12 my-12">
        <EventDetails/>
        <EvenVenue/>
       </div>
       </section>

    </>
   
  )
}
