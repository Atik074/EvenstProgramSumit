import Image from "next/image";
import ActionButton from "../shared/ActionButton";
import { generateBlurImg } from "@/utils/getBlurImg";

const HeroSection = async({ eventInfo }) => {
  const {base64} =await generateBlurImg(eventInfo?.imageUrl)
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={eventInfo?.imageUrl}
          width={500}
          height={500}
          alt="Event 1"
          className=" mx-auto"
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>

      {/* <!-- Details --> */}
      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{eventInfo?.name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{eventInfo?.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{eventInfo?.interested_ids.length} Interested</span>
            <span className="mx-2">|</span>
            <span>{eventInfo?.going_ids.length} Going</span>
          </div>
        </div>

        <ActionButton
          eventId={eventInfo?.id}
          interestedUserIds={eventInfo?.interested_ids}
          going_ids={eventInfo?.going_ids}
          formDetails={true}
        />
      </div>
    </section>
  );
};

export default HeroSection;
