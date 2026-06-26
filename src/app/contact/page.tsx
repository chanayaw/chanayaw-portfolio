'use client';

import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import SocialLinks from '@/src/components/nav/SocialLinks';
import PageHeader from '@/src/components/shared/PageHeader';
import { GlassCard, Card } from '@/src/components/ui/Cards';
import { ChipThinBorder, ChipRegBorder } from '@/src/components/ui/Chips';
import { SocialIcons } from '@/src/data/navData';

export default function ContactPage() {
  const [state, handleSubmit] = useForm('xwvrbwvq');

  return (
    <main className="mx-auto w-full max-w-360 space-y-10 px-6 pb-24 md:px-10">
      <PageHeader
        eyebrow="Contact"
        heading="Let’s connect around health-tech software, digital health, and women’s health equity"
        description={
          <>
            I’m open to health information roles, digital health opportunities, health-tech software
            work, product-oriented engineering, research-aligned collaborations, and thoughtful
            conversations across biomedical informatics, patient education, care navigation, and
            women’s health equity.
          </>
        }
        supportingText={
          <>
            Use the form below for professional inquiries, project opportunities, or technical
            conversations.{' '}
            <span className="block">
              I review messages carefully and respond where there is a strong fit.
            </span>
          </>
        }
      />

      <section className="mt-16 md:mt-20">
        <div className="mx-auto w-full gap-8 space-y-6 md:grid lg:grid-cols-12 lg:space-y-0">
          <div className="space-y-6 lg:col-span-4">
            <GlassCard>
              <div className="space-y-5">
                <div>
                  <SectionLabel>Best For</SectionLabel>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <ChipRegBorder>Health Information Roles</ChipRegBorder>
                    <ChipRegBorder>Digital Health</ChipRegBorder>
                    <ChipRegBorder>Health-Tech Software</ChipRegBorder>
                    <ChipRegBorder>Patient Education Tools</ChipRegBorder>
                    <ChipRegBorder>Care Navigation</ChipRegBorder>
                    <ChipRegBorder>Health Data</ChipRegBorder>
                    <ChipRegBorder>Women&apos;s Health Equity</ChipRegBorder>
                    <ChipRegBorder>Research-Aligned Conversations</ChipRegBorder>
                  </div>
                </div>

                <div>
                  <SectionLabel>Current Interest Areas</SectionLabel>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <ChipThinBorder>Biomedical Informatics</ChipThinBorder>
                    <ChipThinBorder>Health Information Management</ChipThinBorder>
                    <ChipThinBorder>Data Analytics</ChipThinBorder>
                    <ChipThinBorder>EHR Workflows</ChipThinBorder>
                    <ChipThinBorder>Clinical Decision Support Concepts</ChipThinBorder>
                    <ChipThinBorder>Patient-Centered Tools</ChipThinBorder>
                    <ChipThinBorder>Whole-Body Women&apos;s Health</ChipThinBorder>
                  </div>
                </div>

                <div>
                  <SectionLabel>Notes</SectionLabel>

                  <p className="text-muted mt-3 text-sm leading-relaxed">
                    I’m most interested in opportunities and conversations that align with software
                    engineering, digital health products, healthcare systems, product thinking, and
                    women’s health equity.
                  </p>
                </div>
              </div>
            </GlassCard>

            <Card>
              <div className="space-y-3">
                <SectionLabel>Response Expectations</SectionLabel>

                <p className="text-muted text-sm leading-relaxed">
                  I may not be able to respond to every inquiry, but I do review messages
                  thoughtfully and prioritize relevant professional outreach.
                </p>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <Card>
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-16 text-center">
                  <div className="border-default bg-surface shadow-glow max-w-md rounded-2xl border px-8 py-10">
                    <p className="font-heading text-foreground text-lg font-semibold">
                      Message received
                    </p>

                    <p className="text-muted mt-3 text-sm leading-relaxed">
                      Thank you for reaching out. Your message has been submitted successfully. I
                      review professional inquiries carefully and respond where there is a clear fit
                      or relevant conversation.
                    </p>

                    <Link
                      href="/projects"
                      className="ring-brand bg-cta text-cta-foreground shadow-card mt-10 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition hover:brightness-105"
                    >
                      Explore Projects
                    </Link>

                    <div className="mt-6 flex flex-row justify-center">
                      <SocialLinks icons={SocialIcons} />
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="ring-brand border-default bg-surface text-foreground placeholder:text-subtle h-12 w-full rounded-xl border px-4"
                        placeholder="Your name"
                      />
                      <ValidationError prefix="name" field="name" errors={state.errors} />
                    </Field>

                    <Field label="Email" htmlFor="email">
                      <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="ring-brand border-default bg-surface text-foreground placeholder:text-subtle h-12 w-full rounded-xl border px-4"
                        placeholder="you@example.com"
                      />
                      <ValidationError prefix="email" field="email" errors={state.errors} />
                    </Field>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field
                      label={
                        <>
                          Organization or Affiliation{' '}
                          <span className="text-subtle">(optional)</span>
                        </>
                      }
                      htmlFor="organization-affiliation"
                    >
                      <input
                        type="text"
                        name="organization-affiliation"
                        id="organization-affiliation"
                        className="ring-brand border-default bg-surface text-foreground placeholder:text-subtle h-12 w-full rounded-xl border px-4"
                        placeholder="Company, team, or organization"
                      />
                      <ValidationError
                        prefix="organization"
                        field="organization-affiliation"
                        errors={state.errors}
                      />
                    </Field>

                    <Field label="Reason for Contact" htmlFor="reason">
                      <select
                        required
                        name="reason"
                        id="reason"
                        aria-label="Reason for contact"
                        title="Reason for contact"
                        className="ring-brand border-default bg-surface text-foreground h-12 w-full rounded-xl border px-4"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a reason
                        </option>
                        <option value="employment">Employment Opportunity</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="digital-health">Digital Health Inquiry</option>
                        <option value="health-tech">Health Tech Inquiry</option>
                        <option value="product-systems">Product or Systems Inquiry</option>
                        <option value="research">Research-Aligned Conversation</option>
                        <option value="technical">Technical Question</option>
                        <option value="other">Other</option>
                      </select>
                      <ValidationError prefix="reason" field="reason" errors={state.errors} />
                    </Field>
                  </div>

                  <Field label="Message" htmlFor="message">
                    <textarea
                      required
                      name="message"
                      id="message"
                      rows={8}
                      className="ring-brand border-default bg-surface text-foreground placeholder:text-subtle min-h-40 w-full rounded-xl border px-4 py-3"
                      placeholder="Tell me a bit about your inquiry, role, project, or reason for reaching out."
                    />
                    <ValidationError prefix="message" field="message" errors={state.errors} />
                  </Field>

                  <div className="border-default flex flex-wrap items-center justify-between gap-4 border-t pt-4">
                    <p className="text-subtle max-w-xl text-sm leading-relaxed">
                      For professional outreach, it helps to include the role, team, company,
                      project context, or the kind of collaboration you have in mind.
                    </p>

                    <button
                      className={`${
                        state.submitting
                          ? 'bg-cta text-cta-foreground opacity-disabled cursor-not-allowed'
                          : 'ring-brand bg-cta text-cta-foreground shadow-card hover:brightness-105'
                      } inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition md:text-base`}
                      type="submit"
                      disabled={state.submitting}
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono-brand text-accent text-xs font-semibold tracking-[0.24em] uppercase">
      {children}
    </p>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: React.ReactNode;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className="text-foreground text-sm font-semibold">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
