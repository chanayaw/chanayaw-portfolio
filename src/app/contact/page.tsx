'use client';

import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import SocialLinks from '@/src/components/nav/SocialLinks';
import PageHeader from '@/src/components/shared/PageHeader';
import { GlassCard, Card, CardWithGlow } from '@/src/components/ui/Cards';
import { ChipThinBorder, ChipRegBorder } from '@/src/components/ui/Chips';
import { SocialIcons } from '@/src/data/navData';
import { SectionLabel } from '@/src/components/projects/SectionLabel';

export default function ContactPage() {
  const [state, handleSubmit] = useForm('xwvrbwvq');

  return (
    <main className="mx-auto w-full max-w-360 space-y-12 px-6 pb-24 md:px-10">
      <PageHeader
        eyebrow="Contact"
        heading="Let’s connect around women’s health equity, digital health, and patient-centered tools"
        description={
          <>
            I’m open to opportunities and conversations across Women’s Health Equity Advocacy &
            Informatics, health information, digital health, healthcare data analytics, patient
            education, care navigation, research-aligned work, and advocacy-centered digital tools.
          </>
        }
        supportingText={
          <>
            Use the form below for professional inquiries, project opportunities, speaking or
            workshop conversations, research-aligned collaborations, or thoughtful outreach. I
            review messages carefully and respond where there is a strong fit.
          </>
        }
      />

      <section className="mt-16 md:mt-20">
        <div className="mx-auto grid w-full gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <GlassCard>
              <div className="space-y-6">
                <div>
                  <SectionLabel>Best For</SectionLabel>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <ChipRegBorder>Women’s Health Equity</ChipRegBorder>
                    <ChipRegBorder>Digital Health</ChipRegBorder>
                    <ChipRegBorder>Health Information</ChipRegBorder>
                    <ChipRegBorder>Healthcare Data Analytics</ChipRegBorder>
                    <ChipRegBorder>Patient Education</ChipRegBorder>
                    <ChipRegBorder>Care Navigation</ChipRegBorder>
                    <ChipRegBorder>Research-Aligned Work</ChipRegBorder>
                    <ChipRegBorder>Speaking & Workshops</ChipRegBorder>
                  </div>
                </div>

                <div>
                  <SectionLabel>Current Interest Areas</SectionLabel>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <ChipThinBorder>Biomedical Informatics</ChipThinBorder>
                    <ChipThinBorder>Health Information Management</ChipThinBorder>
                    <ChipThinBorder>Data Analytics</ChipThinBorder>
                    <ChipThinBorder>EHR Workflows</ChipThinBorder>
                    <ChipThinBorder>Early Detection</ChipThinBorder>
                    <ChipThinBorder>Delayed Diagnosis</ChipThinBorder>
                    <ChipThinBorder>Precision Health</ChipThinBorder>
                    <ChipThinBorder>Clinical Decision Support</ChipThinBorder>
                    <ChipThinBorder>Patient-Centered Tools</ChipThinBorder>
                    <ChipThinBorder>Whole-Body Women’s Health</ChipThinBorder>
                  </div>
                </div>

                <div>
                  <SectionLabel>Notes</SectionLabel>

                  <p className="text-muted mt-3 text-sm leading-relaxed">
                    I’m most interested in opportunities and conversations that align with women’s
                    health equity, digital health, healthcare data, patient education, care
                    navigation, biomedical informatics, research translation, and patient-centered
                    tools.
                  </p>
                </div>
              </div>
            </GlassCard>

            <Card>
              <div className="space-y-3">
                <SectionLabel>Response Expectations</SectionLabel>

                <p className="text-muted text-sm leading-relaxed">
                  I may not be able to respond to every inquiry, but I review messages thoughtfully
                  and prioritize relevant professional outreach.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-6 lg:col-span-8">
            <Card>
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-16 text-center">
                  <div className="border-default bg-surface shadow-glow max-w-md rounded-[2rem] border px-8 py-10">
                    <p className="font-mono-brand text-accent text-xs font-semibold tracking-[0.24em] uppercase">
                      Message Sent
                    </p>

                    <h2 className="font-heading text-primary mt-3 text-3xl leading-tight font-normal">
                      Message received
                    </h2>

                    <p className="text-muted mt-4 text-sm leading-relaxed">
                      Thank you for reaching out. Your message has been submitted successfully. I
                      review professional, advocacy, research-aligned, and project inquiries
                      carefully and respond where there is a clear fit.
                    </p>

                    <Link
                      href="/projects"
                      className="ring-brand bg-cta text-cta-foreground shadow-card mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold tracking-wide transition hover:-translate-y-0.5 hover:brightness-105"
                    >
                      View Projects
                    </Link>

                    <div className="mt-6 flex justify-center">
                      <SocialLinks icons={SocialIcons} />
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <SectionLabel>Inquiry Form</SectionLabel>

                    <h2 className="font-heading text-primary text-3xl leading-tight font-normal">
                      Send a message
                    </h2>

                    <p className="text-muted max-w-2xl text-sm leading-relaxed">
                      For professional outreach, it helps to include the role, organization, project
                      context, audience, topic, or kind of collaboration you have in mind.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className={inputClasses}
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
                        className={inputClasses}
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
                        className={inputClasses}
                        placeholder="Company, team, or organization"
                      />
                      <ValidationError
                        prefix="organization"
                        field="organization-affiliation"
                        errors={state.errors}
                      />
                    </Field>

                    <Field label="Reason for Contact" htmlFor="reason">
                      <div className="relative">
                        <select
                          required
                          name="reason"
                          id="reason"
                          aria-label="Reason for contact"
                          title="Reason for contact"
                          className={inputClasses}
                          defaultValue=""
                          style={{
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            MozAppearance: 'none',
                            backgroundImage: 'none',
                          }}
                        >
                          <option value="" disabled>
                            Select a reason
                          </option>
                          <option value="employment">Employment Opportunity</option>
                          <option value="collaboration">Collaboration</option>
                          <option value="advocacy">Advocacy Inquiry</option>
                          <option value="speaking-workshop">Speaking or Workshop Inquiry</option>
                          <option value="digital-health">Digital Health Inquiry</option>
                          <option value="health-data-informatics">
                            Health Data or Informatics Inquiry
                          </option>
                          <option value="patient-education">
                            Patient Education or Care Navigation
                          </option>
                          <option value="research">Research-Aligned Conversation</option>
                          <option value="technical">Technical Question</option>
                          <option value="other">Other</option>
                        </select>

                        <span
                          aria-hidden="true"
                          className="text-subtle pointer-events-none absolute top-1/2 right-5 -translate-y-1/2"
                        >
                          ▾
                        </span>
                      </div>

                      <ValidationError prefix="reason" field="reason" errors={state.errors} />
                    </Field>
                  </div>

                  <Field label="Message" htmlFor="message">
                    <textarea
                      required
                      name="message"
                      id="message"
                      rows={8}
                      className={`${inputClasses} min-h-44 py-3`}
                      placeholder="Tell me a bit about your inquiry, role, project, or reason for reaching out."
                    />
                    <ValidationError prefix="message" field="message" errors={state.errors} />
                  </Field>

                  <div className="border-default flex flex-wrap items-center justify-between gap-4 border-t pt-5">
                    <p className="text-subtle max-w-xl text-sm leading-relaxed">
                      I review messages carefully and prioritize aligned professional, academic,
                      advocacy, and digital health conversations.
                    </p>

                    <button
                      className={`${
                        state.submitting
                          ? 'bg-cta text-cta-foreground opacity-disabled cursor-not-allowed'
                          : 'ring-brand bg-cta text-cta-foreground shadow-card hover:-translate-y-0.5 hover:brightness-105'
                      } inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold tracking-wide transition md:text-base`}
                      type="submit"
                      disabled={state.submitting}
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </Card>

            <CardWithGlow>
              <div className="space-y-3">
                <SectionLabel>Elsewhere</SectionLabel>

                <p className="font-heading text-primary text-2xl leading-tight">
                  Pink, precise, and patient-centered.
                </p>

                <p className="text-muted text-sm leading-relaxed">
                  You can also find me across GitHub, LinkedIn, Substack, and social platforms.
                </p>

                <div className="pt-2">
                  <SocialLinks icons={SocialIcons} />
                </div>
              </div>
            </CardWithGlow>
          </div>
        </div>
      </section>
    </main>
  );
}

const inputClasses =
  'ring-brand border-default bg-surface/80 text-foreground placeholder:text-subtle h-12 w-full rounded-2xl border px-4 text-sm outline-none transition focus:border-strong focus:bg-surface';

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
      <label htmlFor={htmlFor} className="text-foreground text-sm font-bold">
        {label}
      </label>

      <div className="mt-2">{children}</div>
    </div>
  );
}
