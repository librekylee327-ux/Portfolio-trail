"use client";

import { Component as InfiniteGrid } from "@/components/ui/the-infinite-grid";

const projects = [
  {
    year: "2026",
    title: "Handoff",
    description:
      "A hands-on collaboration service where, instead of an AI that simply provides answers, you work alongside AI colleagues specialized by role — growing your project from planning and design to development at a 'professional, real-world scale.",
    tags: ["Startup Founding, Service", "Planning, UX Design"],
    card: "handoff",
  },
  {
    year: "2025",
    title: "Deltai",
    description:
      "A hands-on collaboration service where, instead of an AI that simply provides answers, you work alongside AI colleagues specialized by role — growing your project from planning and design to development at a 'professional, real-world scale.",
    tags: ["Startup Founding, Service", "Planning, UX Design"],
    card: "deltai",
  },
  {
    year: "2024",
    title: "Classu",
    description:
      "A hands-on collaboration service where, instead of an AI that simply provides answers, you work alongside AI colleagues specialized by role — growing your project from planning and design to development at a 'professional, real-world scale.",
    tags: ["Startup Founding, Service", "Planning, UX Design"],
    card: "university",
  },
  {
    year: "2024",
    title: "RideHailing\nService",
    description:
      "A hands-on collaboration service where, instead of an AI that simply provides answers, you work alongside AI colleagues specialized by role — growing your project from planning and design to development at a 'professional, real-world scale.",
    tags: ["Startup Founding, Service", "Planning, UX Design"],
    card: "university",
  },
];

function HandoffCard() {
  return (
    <div className="w-full h-[240px] md:h-[340px] rounded-2xl overflow-hidden bg-[radial-gradient(ellipse_at_60%_40%,#7dd8c8_0%,#3aab9a_25%,#1d7f8a_50%,#174e6e_75%,#0d2f4a_100%)]" />
  );
}

function DeltaiCard() {
  return (
    <div className="w-full h-auto md:h-[340px] rounded-2xl bg-[#111827] flex flex-col items-center justify-center gap-4 md:gap-5 px-4 md:px-8 py-10 md:py-0">
      <p className="text-[#a78bfa] text-xl md:text-2xl font-bold tracking-tight text-center">
        쉽게, 나만의 AI를 만들어보세요
      </p>
      <div className="w-full max-w-[380px] bg-[#1f2937] border border-[#374151] rounded-xl px-4 py-3 flex justify-between items-center">
        <span className="text-[#9ca3af] text-xs">나만의 AI를 만드세요</span>
        <div className="w-7 h-7 rounded-full bg-[#7c3aed]" />
      </div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {[
          "적합한 맞춤 맞맞맞 플레이너",
          "음성 기반 태스크 리마인드 에이전트",
          "UX/AI 디자인 트렌드 자동 수집 및 뉴스레터 시스템",
        ].map((text, i) => (
          <div
            key={i}
            className="bg-[#1f2937] border border-[#374151] rounded-lg px-3.5 py-2.5 w-36 text-[10px] text-[#9ca3af] leading-relaxed"
          >
            {text}
            <br />
            <span className="text-[#6b7280] text-[9px]">1 mo ago</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function UniversityCard() {
  return (
    <div className="w-full h-[240px] md:h-[340px] rounded-2xl bg-[#eef2ff] grid grid-cols-[100px_1fr_36px] md:grid-cols-[160px_1fr_48px] overflow-hidden">
      <div className="p-4 md:p-8 flex flex-col justify-between">
        <div className="text-[9px] md:text-[10px] text-[#666] leading-loose">
          Graphic Design
          <br />
          Digital Media Design
          <br />
          Service Design
          <br />
          UX/Ui Design
        </div>
        <div className="text-[60px] md:text-[96px] font-bold text-[#1d3fcc] leading-none">
          1<span className="text-[50px] md:text-[80px] align-bottom">)</span>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 120px 200px at 30% 60%, #93c5fd 0%, transparent 70%),
              radial-gradient(ellipse 160px 140px at 60% 40%, #3b82f6 0%, #1d4ed8 60%, transparent 100%),
              radial-gradient(ellipse 100px 180px at 75% 70%, #bfdbfe 0%, transparent 70%)
            `,
          }}
        />
        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 text-[80px] md:text-[120px] text-[#1d3fcc] opacity-35 leading-none select-none">
          ✳
        </div>
      </div>
      <div
        className="flex items-center justify-center text-[7px] md:text-[9px] font-semibold tracking-[0.12em] text-[#1d3fcc] uppercase"
        style={{ writingMode: "vertical-rl" }}
      >
        Handong Global University
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero */}
      <InfiniteGrid />

      {/* Header */}
      <header id="works" className="flex flex-col gap-6 px-4 pt-6 pb-16 md:flex-row md:items-start md:px-12 md:pt-9 md:pb-[200px]">
        <div className="text-lg font-medium md:w-[260px] md:shrink-0">Designer Jaekyo</div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-[60px]">
          <p className="text-sm leading-relaxed text-[#333]">
            3-year product designer with experience working across various company
            types, including agencies, in-house teams, and R&amp;D organizations,
            as well as experience ranging from large corporations to startups
          </p>
          <nav className="flex gap-7 text-sm md:shrink-0">
            {["Email", "Linkdedin", "Resume"].map((label) => (
              <a
                key={label}
                href="#"
                className="hover:opacity-60 transition-opacity"
                onClick={label === "Linkdedin" ? (e) => { e.preventDefault(); window.open("http://linkedin.com/in/jaekyolee", "_blank"); } : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <hr className="border-black mx-4 md:mx-12" />

      {/* Projects */}
      <main className="px-4 md:px-12">
        {projects.map((project, i) => (
          <section key={i} className="pt-8 md:pt-12">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr_240px] gap-4 md:gap-10 mb-6 md:mb-9">
              <div>
                <div className="text-sm text-[#888] mb-1 md:mb-2">{project.year}</div>
                <div className="text-3xl md:text-4xl font-semibold leading-tight whitespace-pre-line">
                  {project.title}
                </div>
              </div>
              <p className="text-sm leading-loose text-[#333] md:pt-1">
                {project.description}
              </p>
              <div className="text-sm text-[#888] lg:text-right leading-loose md:pt-1">
                {project.tags.map((tag, j) => (
                  <div key={j}>{tag}</div>
                ))}
              </div>
            </div>

            {project.card === "handoff" && <HandoffCard />}
            {project.card === "deltai" && <DeltaiCard />}
            {project.card === "university" && <UniversityCard />}

            {i < projects.length - 1 && <hr className="border-black mt-8 md:mt-12" />}
          </section>
        ))}
      </main>

      <footer className="flex flex-col gap-1 md:flex-row md:justify-between px-4 md:px-12 py-6 md:py-7 text-sm text-[#555] border-t border-black mt-8 md:mt-12">
        <span>Lee Jaekyo</span>
        <span>© 2026 All rights reserved</span>
      </footer>
    </div>
  );
}
