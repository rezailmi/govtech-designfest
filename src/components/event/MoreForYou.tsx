import Image from "next/image"

export default function MoreForYou() {
  return (
    <section className="relative py-24 px-6" style={{ backgroundColor: '#e2ff27' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Image
            src="/assets/icons/star-1.svg"
            alt="Star Icon"
            width={40}
            height={40}
            className="mr-3 flex-shrink-0"
          />
          <h2 className="text-4xl lg:text-5xl font-bold text-black leading-none">
            More for you
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Service Design Week Card */}
          <div className="rounded-[44px] p-8" style={{ backgroundColor: '#cceb05' }}>
            <h3 className="font-geist font-extrabold text-[36px] md:text-[48px] text-black leading-[48px] tracking-[-0.576px] mb-11">
              Service Design Week
            </h3>
            
            <div className="space-y-6">
              <p className="font-geist font-semibold text-lg md:text-2xl text-black leading-[32px] tracking-[-0.144px]">
                Explore how service design shapes seamless, human-centered experiences across industries. Join talks, workshops, and behind-the-scenes journeys that reveal how systems, touchpoints, and people connect to create meaningful impact.
              </p>
              
              <div className="space-y-2">
                <p className="font-geist font-semibold text-xs text-black leading-4">
                  Please look for the tag below in the Agenda.
                </p>
                <span className="inline-block px-2.5 py-0.5 border border-black rounded-md text-xs font-geist font-semibold leading-4">
                  Service Design Week
                </span>
              </div>
            </div>
          </div>
          
          {/* Inclusive Design Week Card */}
          <div className="rounded-[44px] p-8" style={{ backgroundColor: '#cceb05' }}>
            <h3 className="font-geist font-extrabold text-[36px] md:text-[48px] text-black leading-[48px] tracking-[-0.576px] mb-11">
              Inclusive Design Week
            </h3>
            
            <div className="space-y-6">
              <p className="font-geist font-semibold text-lg md:text-2xl text-black leading-[32px] tracking-[-0.144px]">
                Designing for diversity means designing for everyone. Inclusive Design Week spotlights practices, perspectives, and projects that remove barriers and expand access—online and offline—for all abilities, backgrounds, and communities.
              </p>
              
              <div className="space-y-2">
                <p className="font-geist font-semibold text-xs text-black leading-4">
                  Please find the tag below in the Agenda.
                </p>
                <span className="inline-block px-2.5 py-0.5 border border-black rounded-md text-xs font-geist font-semibold leading-4">
                  Inclusive Design Week
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}