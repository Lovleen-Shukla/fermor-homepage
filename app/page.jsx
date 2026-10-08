import Projection from "../components/Projection";

const pillars = [
  ["01", "Understand", "See all your money in one calm view. Spending, savings and goals explained in plain language, not jargon."],
  ["02", "Act", "Clear next steps instead of endless dashboards. Know what to do this month, and why it matters."],
  ["03", "Grow", "Build habits and invest with confidence. Watch small, steady choices compound over time."],
];
const steps = [
  ["Tell us where you are", "Share your income, goals and what feels confusing. It takes about two minutes."],
  ["Get a plan that fits", "Fermor turns your situation into a simple plan with priorities in the right order."],
  ["Keep moving forward", "Nudges, progress tracking and clear answers keep you on course as life changes."],
];
const faqs = [
  ["Who is Fermor for?", "Anyone who wants to feel more in control of their money, from first-time earners to people planning bigger goals, without needing a finance background."],
  ["Do I need to know about investing?", "No. Fermor explains every concept in plain language and only suggests steps that match your goals and comfort level."],
  ["Is my data safe?", "Your data is encrypted and never sold. You decide what to share and can remove it at any time."],
  ["Does it cost anything to start?", "Getting started is free. Any paid features are shown clearly up front, with no hidden fees."],
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-28">
        <p className="fade-up mb-6 inline-block rounded-full border border-moss/30 bg-lime/40 px-4 py-1.5 text-xs font-medium tracking-wide text-moss">FINANCE, SIMPLIFIED</p>
        <h1 className="fade-up max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-8xl" style={{ animationDelay: ".08s" }}>
          Money, made <em className="text-moss">clear</em>.
        </h1>
        <p className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-ink/70 md:text-xl" style={{ animationDelay: ".16s" }}>
          Fermor helps you understand where you stand, decide what to do next, and grow with confidence, without the jargon.
        </p>
        <div className="fade-up mt-9 flex flex-wrap gap-3" style={{ animationDelay: ".24s" }}>
          <a href="#cta" className="rounded-full bg-ink px-7 py-3.5 font-medium text-paper transition hover:bg-moss">Get started free</a>
          <a href="#projection" className="rounded-full border border-ink/20 px-7 py-3.5 font-medium transition hover:border-ink">See what growth looks like</a>
        </div>
      </section>

      {/* Pillars */}
      <section id="product" className="border-y border-mist bg-white/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="max-w-2xl font-serif text-4xl tracking-tight md:text-5xl">Three simple ideas behind everything we build.</h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map(([n, t, d]) => (
              <article key={n} className="group rounded-3xl border border-mist bg-paper p-8 transition hover:-translate-y-1 hover:border-moss/40 hover:shadow-xl hover:shadow-moss/5">
                <span className="font-serif text-sm text-moss">{n}</span>
                <h3 className="mt-10 font-serif text-3xl">{t}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive */}
      <section id="projection" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h2 className="max-w-2xl font-serif text-4xl tracking-tight md:text-5xl">Small steps add up. Try it.</h2>
        <p className="mb-10 mt-4 max-w-xl text-ink/70">Move the sliders and see how steady monthly saving can compound over time.</p>
        <Projection />
      </section>

      {/* How */}
      <section id="how" className="bg-moss py-20 text-paper md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">How it works</h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map(([t, d], i) => (
              <li key={t} className="border-t border-paper/25 pt-6">
                <span className="font-serif text-5xl text-lime">{i + 1}</span>
                <h3 className="mt-4 text-xl font-medium">{t}</h3>
                <p className="mt-2 leading-relaxed text-paper/70">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <h2 className="font-serif text-4xl tracking-tight md:text-5xl">Questions, answered.</h2>
        <div className="mt-10 divide-y divide-mist border-y border-mist">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-medium">
                {q}<span className="text-2xl text-moss transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink/70">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="px-5 pb-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink px-6 py-16 text-center text-paper md:py-24">
          <h2 className="mx-auto max-w-2xl font-serif text-4xl tracking-tight md:text-6xl">Start understanding your money today.</h2>
          <form className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row" action="#">
            <input type="email" required placeholder="you@email.com" aria-label="Email" className="flex-1 rounded-full bg-paper/10 px-5 py-3.5 text-paper outline-none ring-lime placeholder:text-paper/40 focus:ring-2" />
            <button className="rounded-full bg-lime px-7 py-3.5 font-medium text-ink transition hover:brightness-95">Get started</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-mist px-5 py-8 text-center text-sm text-ink/50">
        © {new Date().getFullYear()} Fermor. Projections are illustrative and not financial advice.
      </footer>
    </main>
  );
}
