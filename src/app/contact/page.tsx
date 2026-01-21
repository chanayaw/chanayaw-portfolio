import PageHeader from '@/src/components/shared/PageHeader';

export default function Contact() {
  return (
    <main>
      <PageHeader
        heading="Contact"
        subtext={
          <>
            I am open to roles, collaborations, and conversations related to software engineering,
            research-adjacent tooling, and health or public-interest technology.
            <br />
            <br />
            Please use the form below to get in touch.
          </>
        }
      />

      <section className="mx-auto w-full max-w-7xl p-10">
        <form action="" className="space-y-5 *:flex *:flex-col p-8">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-default bg-surface ring-brand mt-2 h-10 rounded-md border p-2"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-default bg-surface ring-brand mt-2 h-10 rounded-md border p-2"
            />
          </div>
          <div>
            <label htmlFor="organization-affiliation">
              Organization or Affiliation <span className="text-poetic-soft">(optional)</span>
            </label>
            <input
              type="text"
              name="organization-affiliation"
              id="organization-affiliation"
              className="border-default bg-surface ring-brand mt-2 h-10 rounded-md border p-2"
            />
          </div>
          <div>
            <label htmlFor="reason">Reason For Contact</label>
            <select
              name="reason"
              id="reason"
              className="border-default bg-surface ring-brand mt-2 h-10 rounded-md border p-2"
            >
              <option value="employment">Employment Opportunity</option>
              <option value="collaboration">Collaboration</option>
              <option value="research-tech-inquiry">Research or Technical Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="border-default bg-surface ring-brand mt-2 h-10 rounded-md border p-2"
            ></textarea>
          </div>
          <div className='mt-10'>
            <input
              type="submit"
              value="Send Message"
              className="ring-brand bg-cta text-cta-foreground rounded-lg px-4 py-2 transition"
            />
          </div>
        </form>
        <aside className="text-poetic-soft text-center">
          Please note that I may not be able to respond to all inquiries, but I do review messages
          thoughtfully.
        </aside>
      </section>
    </main>
  );
}
