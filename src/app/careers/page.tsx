"use client";

import PageShell from "@/components/PageShell";

export default function CareersPage() {
  return (
    <PageShell title="Careers" subtitle="Join the Orient family — where performance meets purpose.">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <p className="text-[18px] font-medium text-near-black/50 leading-[1.6] mb-8">
            At Orient, we believe in nurturing talent through continuous training, performance-based rewards, and a culture that values innovation. Our team spans 10 Indian cities and 35+ countries.
          </p>
          <p className="text-[18px] font-medium text-near-black/50 leading-[1.6]">
            Interested in joining us? Submit your resume below and our HR team will reach out if there is a fit.
          </p>
        </div>
        <div className="w-full max-w-md bg-black/[0.03] rounded-xl p-8">
          <h3 className="text-[20px] font-medium text-near-black mb-6">Submit Your Resume</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full Name" className="input-field" />
            <input type="email" placeholder="Email Address" className="input-field" />
            <textarea placeholder="Cover Letter / Message" className="input-field" style={{ height: 120, paddingTop: 16, resize: "none" }} />
            <button type="submit" className="btn btn-cream text-[16px] w-full justify-center">Submit Application</button>
          </form>
        </div>
      </div>
    </PageShell>
  );
}
