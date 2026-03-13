'use client';

import SocialLinks from '@/src/components/nav/SocialLinks';
import PageHeader from '@/src/components/shared/PageHeader';
import { GlassCard, Card } from '@/src/components/ui/Cards';
import { ChipThinBorder, ChipRegBorder } from '@/src/components/ui/Chips';
import { SocialIcons } from '@/src/data/navData';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';

export default function ContactPage() {
  const [state, handleSubmit] = useForm('xwvrbwvq');

  return (
    <main className="pb-24">
      <PageHeader
        eyebrow="Contact"
        heading="Get in touch"
        description={
          <>
            I&apos;m open to roles, collaborations, and thoughtful conversations related to software
            engineering, data systems, analytics workflows, and health technology.
          </>
        }
        supportingText={
          <>
            Use the form below for professional inquiries, project opportunities, or technical
            conversations. I review messages carefully and respond where there is a strong fit.
          </>
        }
      />

      <section className="mt-16 md:mt-20">
        <div className="mx-auto md:grid w-full max-w-7xl gap-8 px-6 space-y-6 lg:space-y-0 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <GlassCard>
              <div className="space-y-5">
                <div>
                  <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
                    Best For
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <ChipRegBorder>Software Roles</ChipRegBorder>
                    <ChipRegBorder>HealthTech</ChipRegBorder>
                    <ChipRegBorder>Data Systems</ChipRegBorder>
                    <ChipRegBorder>Collaboration</ChipRegBorder>
                  </div>
                </div>

                <div>
                  <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
                    Current Interest Areas
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <ChipThinBorder>Full-Stack Engineering</ChipThinBorder>
                    <ChipThinBorder>Analytics Workflows</ChipThinBorder>
                    <ChipThinBorder>Operational Tools</ChipThinBorder>
                    <ChipThinBorder>Health Data Systems</ChipThinBorder>
                  </div>
                </div>

                <div>
                  <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
                    Notes
                  </p>
                  <p className="text-muted mt-3 text-sm leading-relaxed">
                    I&apos;m most interested in opportunities and conversations that align with
                    software engineering, data-informed systems, and the growing intersection of
                    technology and healthcare.
                  </p>
                </div>
              </div>
            </GlassCard>

            <Card>
              <div className="space-y-3">
                <p className="text-poetic-soft text-xs font-medium tracking-[0.24em] uppercase">
                  Response Expectations
                </p>
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
                    <p className="text-foreground text-lg font-medium">Message received</p>

                    <p className="text-muted mt-3 text-sm leading-relaxed">
                      Thank you for reaching out. Your message has been successfully submitted. I
                      review inquiries carefully and respond where there is a strong fit or relevant
                      conversation.
                    </p>

                    <Link
                      href="/projects"
                      className="ring-brand bg-cta text-cta-foreground shadow-card inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition hover:brightness-105 mt-10"
                    >
                      Explore Projects
                    </Link>
                    <div className='flex flex-row justify-center mt-6'>
                      <SocialLinks icons={SocialIcons} />
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="ring-brand border-default bg-surface text-foreground placeholder:text-subtle h-12 rounded-xl border px-4"
                        placeholder="Your name"
                      />
                      <ValidationError prefix="text" field="text" errors={state.errors} />
                    </Field>

                    <Field label="Email" htmlFor="email">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="ring-brand border-default bg-surface text-foreground placeholder:text-subtle h-12 rounded-xl border px-4"
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
                          <span className="text-poetic-soft">(optional)</span>
                        </>
                      }
                      htmlFor="organization-affiliation"
                    >
                      <input
                        type="text"
                        name="organization-affiliation"
                        id="organization-affiliation"
                        className="ring-brand border-default bg-surface text-foreground placeholder:text-subtle h-12 rounded-xl border px-4"
                        placeholder="Company, team, or organization"
                      />
                      <ValidationError prefix="text" field="text" errors={state.errors} />
                    </Field>

                    <Field label="Reason for Contact" htmlFor="reason">
                      <select
                        name="reason"
                        id="reason"
                        aria-label="Reason for contact"
                        title="Reason for contact"
                        className="ring-brand border-default bg-surface text-foreground h-12 rounded-xl border pl-4"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a reason
                        </option>
                        <option value="employment">Employment Opportunity</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="health-tech">HealthTech or Data Systems Inquiry</option>
                        <option value="technical">Technical Question</option>
                        <option value="other">Other</option>
                      </select>
                      <ValidationError prefix="select" field="select" errors={state.errors} />
                    </Field>
                  </div>

                  <Field label="Message" htmlFor="message">
                    <textarea
                      name="message"
                      id="message"
                      rows={8}
                      className="ring-brand border-default bg-surface text-foreground placeholder:text-subtle min-h-40 w-full rounded-xl border px-4 py-3"
                      placeholder="Tell me a bit about your inquiry, role, project, or reason for reaching out."
                    />
                    <ValidationError prefix="textarea" field="textarea" errors={state.errors} />
                  </Field>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                    <p className="text-subtle max-w-xl text-sm leading-relaxed">
                      For professional outreach, it helps to include the role, team, company,
                      project context, or the kind of collaboration you have in mind.
                    </p>

                    <button
                      className={`${state.submitting ? 'bg-cta text-cta-foreground opacity-disabled cursor-not-allowed' : 'ring-brand bg-cta text-cta-foreground shadow-card hover:brightness-105'} inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition md:text-base`}
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
      <label htmlFor={htmlFor} className="text-foreground text-sm font-medium">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
