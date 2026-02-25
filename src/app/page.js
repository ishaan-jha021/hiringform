import Link from "next/link";

export default function HiringPortal() {
  return (
    <div className="bg-[#0f1015] text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white pb-20">
      {/* Header */}
      <nav className="p-6 border-b border-[#1f2136] flex justify-between items-center max-w-7xl mx-auto w-full">
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter cursor-pointer transition-colors">
          <span className="text-[#a855f7]">TSS</span> <span className="text-gray-500 font-normal">/ CAREERS</span>
        </h1>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase">
          JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d946ef]">MISSION.</span>
        </h2>
        <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
          We don't hire employees. We hire <strong className="text-white">builders</strong> who have the <span className="italic text-[#a855f7] font-semibold tracking-wide">"Himmat"</span> to change the ecosystem.
        </p>
      </section>

      {/* Jobs Grid */}
      <section className="max-w-6xl mx-auto p-6 md:p-10">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-4xl font-bold tracking-tight">Open Roles</h3>
          <div className="h-px bg-[#1f2136] flex-1 ml-8"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <JobCard
            title="Video Editor"
            type="Internship"
            description="Focus on storytelling, fast-paced cuts (reels/shorts), and understanding the 'Founder's Fire'."
            link="/jobs/video-editor"
          />
          <JobCard
            title="HR Intern"
            type="Internship"
            description="Focus on culture building and finding 'Builders,' not just 'Employees'."
            link="/jobs/hr-intern"
          />
          <JobCard
            title="Outreach Intern"
            type="Internship"
            description="Focus on community growth and 'The Spark' ignition."
            link="/jobs/outreach-intern"
          />
        </div>
      </section>

      {/* Open Role Section (The Google Integration Part) */}
      <section className="bg-[#131420] border border-[#1f2136] rounded-3xl p-12 mt-16 text-center relative overflow-hidden max-w-5xl mx-auto mx-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#a855f7]/10 to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold mb-4 tracking-tight">Don't see a role?</h3>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">If you have the <span className="italic text-[#a855f7] font-semibold border-b border-[#a855f7]/50 pb-1">"Himmat,"</span> we'll find a place for you.</p>
          <a
            href="https://tally.so/r/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#a855f7] to-[#d946ef] text-white px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            Drop your Profile in our Talent Pool
          </a>
        </div>
      </section>
    </div>
  );
}

function JobCard({ title, type, description, link }) {
  return (
    <Link href={link} className="group border border-[#1f2136] bg-[#131420]/50 p-8 rounded-2xl hover:border-[#a855f7] hover:bg-[#131420] transition-all duration-300 relative overflow-hidden flex flex-col h-full cursor-pointer block">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#a855f7]/10 rounded-full blur-3xl group-hover:bg-[#a855f7]/20 transition-all duration-500"></div>
      <h3 className="text-2xl font-bold mb-2 relative z-10 text-white group-hover:text-purple-50 transition-colors">{title}</h3>
      <p className="text-[#a855f7] font-semibold mb-5 relative z-10 tracking-wider text-xs uppercase">{type}</p>
      <p className="text-gray-400 mb-8 relative z-10 flex-grow leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
      <div
        className="inline-flex items-center text-sm font-bold text-gray-300 group-hover:text-[#a855f7] transition-colors mt-auto relative z-10 w-max"
      >
        View JD & Apply
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </div>
    </Link>
  );
}
