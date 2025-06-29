export default function MoreForYou() {
  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-16" style={{ backgroundColor: '#e2ff27' }}>
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-geist-mono font-bold text-[32px] md:text-[52px] text-[#080c1b] text-center tracking-[-2.08px] leading-[0.9] mb-12">
          More for you
        </h2>
        
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