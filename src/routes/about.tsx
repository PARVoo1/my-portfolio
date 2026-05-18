import { createFileRoute } from "@tanstack/react-router";
import { Nav, StickyContact, Footer } from "@/components/SiteChrome";
import { Award, MapPin, Sparkles, Code2, GraduationCap } from "lucide-react";
import type { CSSProperties } from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Parv Khandelwal" },
      { name: "description", content: "Freelance Java backend developer based in Jaipur, India." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#1a1a1a] overflow-x-hidden">
      <Nav />
      <StickyContact />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 relative flex flex-col items-center">
        {/* The Lanyard Strap */}
        <div className="w-[12px] h-[100px] bg-[#1a1a1a] rounded-b-md z-20 relative shadow-sm">
          {/* The metal clip */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-6 border-2 border-[#888] rounded-full z-10" />
        </div>

        {/* The Swinging ID Card */}
        <div className="vp-swing-card relative mt-2 w-full max-w-[480px] bg-[#e5e5e5] rounded-[24px] shadow-xl overflow-hidden border border-[#d4d4d4]" style={{ transformOrigin: "top center" }}>
          {/* Vertical Text on the Left Edge */}
          <div className="absolute left-0 top-0 bottom-0 hidden w-12 bg-[#d4d4d4] items-center justify-center sm:flex">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#888] uppercase -rotate-90 whitespace-nowrap">
              Freelance Engineer
            </span>
          </div>

          {/* Card Content Wrapper */}
          <div className="flex flex-col gap-5 px-4 py-6 sm:flex-row sm:items-start sm:gap-6 sm:pl-16 sm:pr-8 sm:py-8">
            {/* Profile Picture Placeholder */}
            <div className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full bg-gradient-to-br from-[#00d4ff] to-[#00ff88] shrink-0 border-2 border-white shadow-sm flex items-center justify-center text-white text-2xl font-bold font-serif mx-auto sm:mx-0">
              PK
            </div>

            {/* Details */}
            <div className="flex-1 text-center sm:text-left">
              <div className="mb-5 sm:mb-6">
                <h1 className="text-[20px] sm:text-[22px] font-semibold leading-none mb-1 text-[#1a1a1a]" style={{ fontFamily: "var(--font-sans)" }}>
                  Parv Khandelwal
                </h1>
                <p className="text-[13px] sm:text-[14px] text-[#666] font-medium">Java Backend Developer</p>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2">
                <div className="flex items-center gap-2 text-[13px] text-[#555]">
                  <span className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <Code2 className="w-2.5 h-2.5" />
                  </span>
                  Java / Spring Boot
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#555]">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Sparkles className="w-2.5 h-2.5" />
                  </span>
                  PostgreSQL / Redis
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#555]">
                  <span className="w-4 h-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Award className="w-2.5 h-2.5" />
                  </span>
                  Apache Kafka
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#555]">
                  <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    <MapPin className="w-2.5 h-2.5" />
                  </span>
                  Jaipur, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Text Below Card */}
        <div className="vp-reveal max-w-2xl mt-16 text-[#444] text-[15px] leading-relaxed space-y-5" style={{ ["--vp-delay"]: "0.8s" } as CSSProperties}>
          <p>
            Hi, I'm Parv - a freelance Java backend developer working with startups and product teams to build scalable,
            event-driven systems. Based in Jaipur, India and open to working remotely with clients worldwide.
          </p>
          <p>
            I live in the Spring Boot ecosystem - designing services around Kafka, tightening concurrency with Redis, and
            squeezing real performance out of PostgreSQL. I care about the unglamorous parts: idempotency, backpressure,
            observability, the kind of work that decides whether a system survives Black Friday or not.
          </p>
          <p>
            Most of what I know I've learned by building. A flash-sale system that holds up at 600+ RPS. A
            fraud-detection pipeline routing 500+ TPS through Kafka and a Python ML consumer in under 100ms. I bring
            that same hands-on rigor to client work.
          </p>
          <p>
            I'm currently taking on freelance backend projects - short engagements, longer retainers, or one-off
            audits. If you have a system that needs to scale, I'd love to hear about it.
          </p>
        </div>

        {/* Education */}
        <section className="w-full max-w-2xl mt-16">
          <h2 className="mb-6 text-xl font-semibold text-[#1a1a1a]">Education</h2>
          <div className="space-y-4">
            <EduItem
              school="Vivekananda Global University, Jaipur"
              degree="Master of Computer Applications - AI & Data Science"
              dates="Jul 2023 - Jun 2026 (expected)"
              relevant="Distributed Systems, Machine Learning, DBMS, Cloud Computing, DSA"
            />
            <EduItem
              school="University of Technology, Jaipur"
              degree="Bachelor of Computer Applications"
              dates="Jul 2020 - Jun 2023"
              relevant="OOP, Operating Systems, Computer Networks, DBMS"
            />
          </div>
        </section>

        {/* Certifications */}
        <section className="w-full max-w-2xl mt-16">
          <h2 className="mb-6 text-xl font-semibold text-[#1a1a1a]">Certifications</h2>
          <div className="space-y-4">
            <CertItem
              title="Docker Foundations Professional Certificate"
              issuer="LinkedIn Learning - Mar 2026"
              note="Containerisation, image layering, and Docker Compose deployment for microservices."
            />
            <CertItem
              title="Advanced Software Engineering Virtual Job Simulation"
              issuer="JPMorgan Chase & Co. via Forage"
              note="Testing, debugging, and agile delivery in an enterprise banking context."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function EduItem({ school, degree, dates, relevant }: { school: string; degree: string; dates: string; relevant: string }) {
  return (
    <div className="rounded-2xl bg-white border border-[#e4e4e7] p-6">
      <div className="flex items-start gap-3">
        <div className="grid place-items-center w-9 h-9 rounded-lg bg-[#f3f4f6] shrink-0">
          <GraduationCap className="w-4 h-4 text-[#4b5563]" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-[#1f2937]">{school}</div>
          <div className="text-sm text-[#6b7280]">{degree}</div>
          <div className="text-xs text-[#6b7280] mt-1">{dates}</div>
          <div className="text-xs text-[#6b7280] mt-3 italic">Relevant: {relevant}</div>
        </div>
      </div>
    </div>
  );
}

function CertItem({ title, issuer, note }: { title: string; issuer: string; note: string }) {
  return (
    <div className="rounded-2xl bg-white border border-[#e4e4e7] p-6">
      <div className="flex items-start gap-3">
        <div className="grid place-items-center w-9 h-9 rounded-lg bg-[#f3f4f6] shrink-0">
          <Award className="w-4 h-4 text-[#4b5563]" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-[#1f2937]">{title}</div>
          <div className="text-sm text-[#6b7280]">{issuer}</div>
          <div className="text-sm text-[#6b7280] mt-2">{note}</div>
        </div>
      </div>
    </div>
  );
}
