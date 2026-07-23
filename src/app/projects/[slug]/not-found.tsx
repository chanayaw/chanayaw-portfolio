import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="mx-auto flex min-h-[70svh] w-full max-w-360 items-center px-6 py-20 md:px-10">
      <div className="max-w-2xl">
        <p className="font-mono-brand text-accent text-xs font-semibold tracking-[0.24em] uppercase">
          Project Not Found
        </p>

        <h1 className="font-heading text-primary mt-4 text-4xl leading-tight font-extrabold tracking-[-0.03em] text-balance md:text-6xl">
          This case study isn't available.
        </h1>

        <p className="text-muted mt-5 max-w-xl text-base leading-relaxed md:text-lg">
          The project may have moved, may still be in development, or may not have a published case
          study yet.
        </p>

        <Link
          href="/projects"
          className="bg-accent text-on-accent hover:bg-accent-strong mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
        >
          Return to Projects
        </Link>
      </div>
    </main>
  );
}
