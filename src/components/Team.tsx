import React from "react";
import SectionHeader from "./SectionHeader";

const TEAM_MEMBERS = [
  {
    initials: "ZA",
    role: "Product Lead & Founder",
    specialty: "Product Strategy & Architecture",
    stack: "React · Next.js · Cloud Architecture"
  },
  {
    initials: "AR",
    role: "Lead Systems Engineer",
    specialty: "Backend Dev & Integrations",
    stack: "Node.js · PostgreSQL · Supabase"
  },
  {
    initials: "MK",
    role: "Automation Specialist",
    specialty: "Process Mapping & n8n",
    stack: "n8n · Make.com · APIs"
  },
  {
    initials: "SA",
    role: "Frontend Engineer",
    specialty: "UI Performance & UX",
    stack: "React · TailwindCSS · Custom Liquid"
  }
];

export default function Team() {
  return (
    <section className="py-24 border-b border-gray-200 bg-[#faf9f9]" id="team">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-start gap-8 mb-16">
          <div>
            <SectionHeader label="Our squad" />
            <h2 className="font-display-scale text-gray-950">
              Built by engineers. <br />
              Managed like a studio.
            </h2>
          </div>
          <div className="lg:pt-16">
            <p className="font-sans font-light text-sm text-gray-500 leading-relaxed max-w-sm">
              We operate as a distributed product studio. Every client partner is assigned an dedicated engineering squad — not a single developer balancing five other active queues.
            </p>
          </div>
        </div>

        {/* Squad Members panel sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-200 pt-8 gap-y-12">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.initials}
              className="border-l border-gray-200 pl-6 flex flex-col justify-between min-h-[140px] text-left"
            >
              <div>
                <span className="font-mono text-xs text-gray-400 block mb-4">
                  // {member.initials}
                </span>
                
                <h3 className="font-display font-medium text-lg text-gray-950 mb-1">
                  {member.role}
                </h3>
                
                <span className="font-sans text-xs text-gray-500 block mb-3">
                  {member.specialty}
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block mt-2">
                  {member.stack}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Squad Disclaimer footer */}
        <p className="font-mono text-[11px] text-gray-400 text-center mt-16 block select-none">
          + extended network of testing engineers and design specialists engaged per-engagement.
        </p>

      </div>
    </section>
  );
}
