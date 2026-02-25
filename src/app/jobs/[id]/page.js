import { jobsData } from "@/data/jobs";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function JobDescriptionPage({ params }) {
    const { id } = await params;
    const job = jobsData[id];

    if (!job) {
        notFound();
    }

    return (
        <div className="bg-[#0f1015] text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white pb-20">
            {/* Header */}
            <nav className="p-6 border-b border-[#1f2136] flex justify-between items-center max-w-4xl mx-auto w-full">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-2">
                    ← Back
                </Link>
                <h1 className="text-xl md:text-2xl font-bold tracking-tighter cursor-pointer transition-colors block text-center">
                    THE <span className="text-[#a855f7]">STARTUP</span> SCHOOL <span className="text-gray-500 font-normal">/ CAREERS</span>
                </h1>
            </nav>

            {/* JD Content */}
            <main className="max-w-4xl mx-auto px-6 py-12">
                <header className="mb-12 border-b border-[#1f2136] pb-8">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">{job.title}</h1>
                    <p className="text-[#a855f7] font-bold text-xl uppercase tracking-wider mb-6">{job.type}</p>
                    <a
                        href="#apply"
                        className="inline-block bg-gradient-to-r from-[#a855f7] to-[#d946ef] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    >
                        Apply Now
                    </a>
                </header>

                <section className="mb-10 text-lg leading-relaxed text-gray-300">
                    <h2 className="text-2xl font-bold text-white mb-4">Role Overview</h2>
                    <p>{job.roleOverview}</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#1f2136] inline-block pb-1 border-white/20">Major Responsibilities</h2>
                    <div className="space-y-6">
                        {job.responsibilities.map((req, idx) => (
                            <div key={idx}>
                                <h3 className="text-lg font-semibold text-[#a855f7] mb-3">{req.category}</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                                    {req.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-10 mb-10">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 border-b border-[#1f2136] inline-block pb-1">Skills Required</h2>
                        <p className="text-gray-300 leading-relaxed">{job.skillsRequired}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 border-b border-[#1f2136] inline-block pb-1">Other Requirements</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            {job.otherRequirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                <section className="mb-10 bg-[#131420] border border-[#1f2136] p-6 rounded-2xl">
                    <h2 className="text-xl font-bold text-white mb-4">Who can apply</h2>
                    <p className="text-gray-400 mb-3 text-sm border-b border-[#1f2136] pb-2">Only those candidates can apply who:</p>
                    <ul className="list-decimal list-inside space-y-2 text-gray-300">
                        {job.whoCanApply.map((item, idx) => (
                            <li key={idx} className={item.startsWith('*') ? "text-[#d946ef] font-medium list-none -ml-4 mt-4" : ""}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-12 border border-[#1f2136] bg-[#a855f7]/5 p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#a855f7]/10 rounded-full blur-3xl pointer-events-none"></div>
                    <h2 className="text-2xl font-bold text-white mb-6">Additional Information</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-[#a855f7] mb-2">Stipend Structure</h3>
                            <p className="text-gray-300"><span className="font-bold text-white">Fixed pay:</span> {job.stipend.fixed}</p>
                            <p className="text-gray-300"><span className="font-bold text-white">Variable / Incentive pay:</span> {job.stipend.variable}</p>
                            {job.stipend.details && <p className="text-sm text-gray-400 mt-2 italic">{job.stipend.details}</p>}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#a855f7] mb-2">Internship Details</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                {job.internshipDetails.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Application Form Section */}
                <section id="apply" className="bg-[#131420] border border-[#a855f7]/30 rounded-3xl p-10 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4 tracking-tight text-white">Ready to join the Mission?</h3>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">Fill out the general application form and make sure to specify exactly why you are the perfect fit for the <strong>{job.title}</strong> role.</p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSftFAj6AOvxd-LYhseVsEEPY_mNbzgb69J7vBJVQdOxk8cFrA/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-[#a855f7] to-[#d946ef] text-white px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                        >
                            Apply via Form Now
                        </a>
                    </div>
                </section>

            </main>
        </div>
    );
}
