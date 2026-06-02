import Image from "next/image";
import type { TeamMember } from "@/content/team";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Props {
  members: TeamMember[];
}

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <ScrollReveal delay={index * 0.07}>
      <div className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--border-accent)] hover:shadow-[0_0_30px_rgba(255,85,0,0.07)]">
        {/* Avatar */}
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="64px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[rgba(255,85,0,0.12)] font-[family-name:var(--font-jakarta-var)] text-xl font-bold text-[var(--accent)]">
              {member.initials}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-[family-name:var(--font-jakarta-var)] text-base font-semibold text-[var(--text-primary)]">
            {member.name}
          </h3>
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
            {member.role}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{member.bio}</p>
      </div>
    </ScrollReveal>
  );
}

export default function Team({ members }: Props) {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <ScrollReveal className="mb-14">
          <SectionHeading
            badge="El equipo"
            title="Las personas detrás de cada envío"
            subtitle="Profesionales especializados que trabajan cada día para que tu carga llegue a tiempo y en perfectas condiciones."
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
