import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Zap, Github, Linkedin, Mail, Check, Calendar } from "lucide-react";
import type { CSSProperties } from "react";
import type { ReactNode } from "react";
import { Nav, StickyContact, Footer } from "@/components/SiteChrome";
import { BentoCard } from "@/components/BentoCard";
import { FadeIn, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { TechLogo } from "@/components/TechLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parv Khandelwal — Freelance Java Backend Developer" },
      { name: "description", content: "Freelance backend engineer building event-driven microservices with Spring Boot, Kafka, Redis & PostgreSQL. Available for new projects." },
    ],
  }),
  component: Home,
});

const TOOLKIT = [
  { slug: "openjdk", name: "Java", color: "EA2D2E" },
  { slug: "spring", name: "Spring Boot", color: "6DB33F" },
  { slug: "apachekafka", name: "Kafka", color: "231F20" },
  { slug: "redis", name: "Redis", color: "DC382D" },
  { slug: "postgresql", name: "PostgreSQL", color: "4169E1" },
  { slug: "docker", name: "Docker", color: "2496ED" },
  { slug: "prometheus", name: "Prometheus", color: "E6522C" },
  { slug: "grafana", name: "Grafana", color: "F46800" },
  { slug: "python", name: "Python", color: "3776AB" },
  { slug: "mongodb", name: "MongoDB", color: "47A248" },
  { slug: "githubactions", name: "GitHub Actions", color: "2088FF" },
  { slug: "linux", name: "Linux", color: "000000" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <StickyContact />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20">
        {/* Hero */}
        <section className="mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs text-muted-foreground mb-6">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-500 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
              </span>
              Available for freelance work
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="text-foreground mb-8"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1 }}
            >
              Parv Khandelwal
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-6">
              I'm a freelance Java backend developer building scalable, event-driven microservices for startups and product teams.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              I help teams ship high-concurrency systems with{" "}
              <span className="inline-flex items-center gap-1.5 align-middle">
                <img src="https://cdn.simpleicons.org/spring/6DB33F" className="w-5 h-5 inline" alt="" />
                <span className="text-foreground font-medium">Spring Boot</span>
              </span>
              ,{" "}
              <span className="inline-flex items-center gap-1.5 align-middle">
                <img src="https://cdn.simpleicons.org/apachekafka/231F20" className="w-5 h-5 inline" alt="" />
                <span className="text-foreground font-medium">Kafka</span>
              </span>{" "}
              and{" "}
              <span className="inline-flex items-center gap-1.5 align-middle">
                <img src="https://cdn.simpleicons.org/redis/DC382D" className="w-5 h-5 inline" alt="" />
                <span className="text-foreground font-medium">Redis</span>
              </span>
              . <span className="text-foreground">Currently available.</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:parv10046@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
              >
                <Mail className="w-4 h-4" />
                Hire me
              </a>
              <div className="transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium hover:bg-muted transition-colors"
                >
                  About
                </Link>
              </div>
              <a
                href="https://cal.com/parv-oo1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Book a call
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Bento grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
{/* Flash Sale */}
          <BentoCard href="https://github.com/PARVoo1/high-concurrency-flash-sale-system" className="md:col-span-2">
            <div className="flex flex-col h-full">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">FEATURED PROJECT</div>
                  <h3 className="text-2xl font-semibold">High-Concurrency Flash Sale System</h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[oklch(0.92_0.12_140)] text-[oklch(0.3_0.1_140)] whitespace-nowrap">
                  600+ RPS
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Stateless JWT auth eliminating per-request DB roundtrips, decoupled checkout via a Kafka order queue, and an atomic Token Bucket rate-limiter in Redis using Lua scripting. Cut DB load by 40%.
              </p>
              <Stagger className="flex flex-wrap gap-2 mt-auto">
                {[
                  { slug: "openjdk", name: "Java 21", color: "EA2D2E" },
                  { slug: "spring", name: "Spring Boot", color: "6DB33F" },
                  { slug: "apachekafka", name: "Kafka", color: "231F20" },
                  { slug: "redis", name: "Redis", color: "DC382D" },
                  { slug: "postgresql", name: "PostgreSQL", color: "4169E1" },
                  { slug: "prometheus", name: "Prometheus", color: "E6522C" },
                  { slug: "docker", name: "Docker", color: "2496ED" },
                ].map((t) => (
                  <StaggerItem key={t.slug}>
                    <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground">
                      <img src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`} className="w-3.5 h-3.5" alt="" />
                      {t.name}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </BentoCard>

          {/* Fraud detection */}
          <BentoCard href="https://github.com/PARVoo1/FinTech-Fraud-Pipeline" delay={0.05}>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Project</div>
            <h3 className="text-xl font-semibold mb-4">Real-Time Fraud Detection Pipeline</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Kafka-backed engine processing 500+ TPS at sub-100ms latency, Hibernate optimistic locking, and live alerts via WebSockets in under 200ms.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { slug: "spring", color: "6DB33F", name: "Spring Boot" },
                { slug: "python", color: "3776AB", name: "Python ML" },
                { slug: "apachekafka", color: "231F20", name: "Kafka" },
                { slug: "docker", color: "2496ED", name: "Docker" },
              ].map((t) => (
                <span key={t.slug} className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                  <img src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`} className="w-3 h-3" alt="" />
                  {t.name}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Ticket Reservation Engine */}
          <BentoCard href="https://github.com/PARVoo1/reservation-engine" delay={0.06}>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Project <span className="ml-3 text-xs px-2.5 py-1 rounded-full bg-[oklch(0.92_0.12_140)] text-[oklch(0.3_0.1_140)] whitespace-nowrap">Zero Double-Bookings</span></div>
            <h3 className="text-xl font-semibold mb-4">Ticket Reservation Engine</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Distributed seat reservation backend handling 500 concurrent users with zero double-bookings. Redis distributed locks as the first line of defense, PostgreSQL pessimistic locking (SELECT FOR UPDATE) as the vault, and Kafka Transactional Outbox Pattern to prevent dual-write failures. Background sweeper eliminates zombie locks after Redis crashes.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { slug: "openjdk", color: "EA2D2E", name: "Java 21" },
                { slug: "spring", color: "6DB33F", name: "Spring Boot" },
                { slug: "redis", color: "DC382D", name: "Redis" },
                { slug: "postgresql", color: "4169E1", name: "PostgreSQL" },
                { slug: "apachekafka", color: "231F20", name: "Apache Kafka" },
                { slug: "docker", color: "2496ED", name: "Docker" },
                { slug: "testcontainers", color: "000000", name: "Testcontainers" },
              ].map((t) => (
                <span key={t.slug} className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                  <img src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`} className="w-3 h-3" alt="" />
                  {t.name}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Services */}
          <BentoCard delay={0.1}>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-6">What I can ship for you</div>
            <ul className="space-y-3">
              {[
                "Event-driven microservices with Kafka",
                "REST APIs with Spring Boot & JPA",
                "Redis caching & rate limiting",
                "Observability with Prometheus/Grafana",
                "Dockerised deployments & CI/CD",
                ].map((s, index) => (
                <li key={s} className="flex items-start gap-3 text-sm vp-fade-up" style={{ ["--vp-delay"]: `${index * 0.08}s` } as CSSProperties}>
                  <span className="grid place-items-center w-5 h-5 rounded-full bg-foreground text-background mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* Toolkit with logos */}
          <BentoCard className="md:col-span-2" delay={0.05}>
            <div className="flex items-center justify-between mb-8">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">My toolkit</div>
              <Zap className="w-4 h-4 text-muted-foreground" />
            </div>
            <Stagger className="flex flex-wrap gap-3 pb-6">
              {TOOLKIT.map((t) => (
                <StaggerItem key={t.slug}>
                  <div className="transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.05]">
                    <TechLogo slug={t.slug} name={t.name} color={t.color} />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal>
              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-4 border-t border-border">
                <span>...and whatever your stack needs.</span>
              </div>
            </Reveal>
          </BentoCard>

          {/* Process */}
          <BentoCard className="md:col-span-2" delay={0.1}>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-8">How we'll work together</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
              {[
                { n: "01", t: "Discovery call", d: "30 min to understand the system, the bottleneck, and the timeline." },
                { n: "02", t: "Scoped proposal", d: "Fixed-scope plan with milestones, deliverables and a clear price." },
                { n: "03", t: "Ship & handover", d: "Iterative delivery on a private repo, with docs and deployment guides." },
              ].map((step, i) => (
                <Reveal key={step.n} delay={i * 0.1}>
                  <div>
                    <div className="text-3xl font-semibold mb-3 text-muted-foreground/60" style={{ fontFamily: "var(--font-display)" }}>
                      {step.n}
                    </div>
                    <div className="font-medium mb-1">{step.t}</div>
                    <div className="text-sm text-muted-foreground">{step.d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </BentoCard>

          {/* CTA */}
          <BentoCard className="md:col-span-2" delay={0.05}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-md">
                <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  Got a backend problem worth solving?
                </h3>
                <p className="text-muted-foreground">
                  Tell me about your system. I'll come back within 24 hours with a take.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <ConnectLink href="mailto:parv10046@gmail.com" icon={<Mail className="w-4 h-4" />} label="Email" />
                <ConnectLink href="https://github.com/PARVoo1" icon={<Github className="w-4 h-4" />} label="GitHub" />
                <ConnectLink href="https://www.linkedin.com/in/parv001/" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              </div>
            </div>
          </BentoCard>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ConnectLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border text-sm hover:bg-muted transition-[transform,background-color] duration-200 hover:-translate-y-0.5"
    >
      {icon}
      {label}
      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
    </a>
  );
}
