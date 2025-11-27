"use client";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#pricing", label: "Pricing" },
  { href: "#locations", label: "Drop-off & Pickup" },
  { href: "#order", label: "Order Form" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/70 bg-slate-900/70">
              <div className="h-6 w-6 rounded-full border border-emerald-400 relative overflow-hidden">
                <span className="absolute left-[-40%] top-1/2 h-[2px] w-[180%] -translate-y-1/2 rotate-[-18deg] bg-emerald-400" />
              </div>
            </div>
            <div className="text-sm font-semibold text-slate-50">
              Affordable Stringing of Tennis Rackets
            </div>
          </div>
          <nav className="hidden gap-4 text-xs font-medium text-slate-300 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1 hover:bg-slate-800 hover:text-emerald-300 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:pt-10">
        {/* HERO */}
        <section
          id="home"
          className="grid gap-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-6 shadow-xl ring-1 ring-slate-800/60 md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] md:p-8"
        >
          <div>
            <p className="mb-2 inline-block rounded-full border border-emerald-400/40 bg-slate-950/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300/90">
              Lakewood Ranch · Bradenton
            </p>
            <h1 className="mb-3 text-2xl font-semibold leading-tight text-slate-50 md:text-3xl">
              Fast &amp; reliable tennis racket stringing in Lakewood Ranch
            </h1>
            <p className="mb-4 text-sm text-slate-300 md:text-[15px]">
              High-quality racket stringing for local tennis players in Lakewood
              Ranch and Bradenton. Consistent tension, clean work, and quick
              turnaround.
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                From $15 per racket (labor)
              </span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] font-medium text-slate-200">
                24-hour turnaround when possible
              </span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] font-medium text-slate-200">
                Drop-off &amp; pickup by appointment
              </span>
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <a
                href="#order"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-[13px] font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Submit stringing request
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-emerald-500/70 px-4 py-2 text-[13px] font-medium text-emerald-200 hover:bg-slate-900/70"
              >
                View pricing
              </a>
            </div>

            <p className="text-[12px] text-slate-300">
              Call or text:{" "}
              <span className="font-semibold text-slate-50">
                +1 941 226 9305
              </span>{" "}
              · Email:{" "}
              <span className="font-semibold text-slate-50">
                affordable.stringing.tennis@gmail.com
              </span>
            </p>
          </div>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-200 shadow-xl">
            <h2 className="mb-3 text-sm font-semibold tracking-wide text-emerald-300">
              Service at a glance
            </h2>
            <dl className="space-y-2 text-[13px]">
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 text-slate-400">Location</dt>
                <dd>
                  Westbrook Circle area, Lakewood Ranch (Bradenton, FL 34211)
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 text-slate-400">Drop-off</dt>
                <dd>By appointment only</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 text-slate-400">Strings</dt>
                <dd>
                  Use your own strings, or request strings to be supplied on
                  request.
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 text-slate-400">Experience</dt>
                <dd>Club and tournament stringing experience.</dd>
              </div>
            </dl>
            <p className="mt-3 text-[11px] text-slate-400">
              Exact apartment number is provided after confirming your
              appointment.
            </p>
          </aside>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mt-12 space-y-3">
          <header>
            <h2 className="text-xl font-semibold text-slate-50">Pricing</h2>
            <p className="text-sm text-slate-400">
              Clear and straightforward pricing for local players.
            </p>
          </header>

          <div className="mt-4 max-w-xl rounded-2xl border border-emerald-500/60 bg-slate-900/80 p-5 shadow-lg shadow-emerald-500/10">
            <div className="flex items-end gap-3">
              <div className="text-4xl font-bold text-emerald-300">$15</div>
              <div className="pb-1 text-xs uppercase tracking-wide text-slate-300">
                per racket · stringing labor
              </div>
            </div>

            <ul className="mt-4 space-y-1 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-[3px] h-[6px] w-[6px] rounded-full bg-emerald-400" />
                <span>Professional stringing for tennis rackets.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[3px] h-[6px] w-[6px] rounded-full bg-emerald-400" />
                <span>Consistent tension across mains and crosses.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[3px] h-[6px] w-[6px] rounded-full bg-emerald-400" />
                <span>Most rackets completed within 24 hours.</span>
              </li>
            </ul>

            <p className="mt-3 text-[12px] text-slate-400">
              If you provide your own strings, there is no additional charge. If
              you prefer strings to be supplied, this can be arranged on request
              with an additional cost depending on string type.
            </p>
          </div>
        </section>

        {/* LOCATIONS & PROCESS */}
        <section id="locations" className="mt-12 space-y-3">
          <header>
            <h2 className="text-xl font-semibold text-slate-50">
              Drop-off &amp; Pickup
            </h2>
            <p className="text-sm text-slate-400">
              Convenient locations for players in Lakewood Ranch, Bradenton, and
              nearby areas.
            </p>
          </header>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-200">
              <h3 className="text-sm font-semibold text-emerald-300">
                Primary location – Lakewood Ranch
              </h3>
              <p className="mt-2 text-slate-200">
                Westbrook Circle area, Lakewood Ranch (Bradenton, FL 34211)
              </p>
              <p className="mt-1 text-[12px] text-slate-400">
                Exact apartment number is provided after your appointment is
                confirmed.
              </p>

              <h3 className="mt-5 text-sm font-semibold text-emerald-300">
                Optional location – Palm Aire
              </h3>
              <p className="mt-2 text-slate-200">
                Palm Aire Tennis Club, Palm Aire Country Club (drop-off only
                with prior coordination).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-200">
              <h3 className="text-sm font-semibold text-emerald-300">
                How it works
              </h3>
              <ol className="mt-3 space-y-3 text-[13px]">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-semibold text-slate-950">
                    1
                  </span>
                  <span>
                    Submit the order form with your racket details and preferred
                    timing.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-semibold text-slate-950">
                    2
                  </span>
                  <span>
                    Receive confirmation with exact drop-off instructions and
                    apartment number.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-semibold text-slate-950">
                    3
                  </span>
                  <span>
                    Drop off your racket at the agreed time and place.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-semibold text-slate-950">
                    4
                  </span>
                  <span>
                    Receive a message when your racket is ready and pick it up
                    at the arranged time.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ORDER FORM */}
        <section id="order" className="mt-12 space-y-3">
          <header>
            <h2 className="text-xl font-semibold text-slate-50">Order form</h2>
            <p className="text-sm text-slate-400">
              Submit your details so your racket can be scheduled for stringing.
            </p>
          </header>

          <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-200">
              <h3 className="text-sm font-semibold text-emerald-300">
                Information collected
              </h3>
              <ul className="mt-3 space-y-2 text-[13px]">
                <li>• Your name and contact details</li>
                <li>• Racket brand and model</li>
                <li>• Desired tension (mains and crosses)</li>
                <li>
                  • Whether you provide strings or prefer strings supplied
                </li>
                <li>• Preferred drop-off location and timing</li>
                <li>• Any notes or preferences</li>
              </ul>
              <p className="mt-4 text-[12px] text-slate-400">
                Once your form is received, you’ll get a confirmation message
                with exact instructions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-2 text-sm text-slate-200">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeZJ93oBmGS-CenW6zc0XkEyPJ-QQ9ZYN-4TWhD-DBD4lI_0Q/viewform?embedded=true"
                className="h-[950px] w-full rounded-xl bg-slate-950"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="mt-12 space-y-3">
          <header>
            <h2 className="text-xl font-semibold text-slate-50">Reviews</h2>
            <p className="text-sm text-slate-400">
              A few examples of how players describe the stringing service.
            </p>
          </header>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-emerald-400/80 bg-slate-900/80 p-4 text-sm text-slate-200">
              “Consistent, clean stringing and very reasonable pricing.
              Turnaround has always been fast.”
              <div className="mt-2 text-[11px] text-slate-400">
                – Local club player
              </div>
            </div>
            <div className="rounded-2xl border-l-4 border-emerald-400/80 bg-slate-900/80 p-4 text-sm text-slate-200">
              “Tension feels exactly as requested every time. Reliable
              communication and easy drop-off and pickup.”
              <div className="mt-2 text-[11px] text-slate-400">
                – Adult league player
              </div>
            </div>
          </div>

          <p className="mt-3 text-[12px] text-slate-400">
            As more players use the service, recent feedback can be added here.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12 space-y-3">
          <header>
            <h2 className="text-xl font-semibold text-slate-50">Contact</h2>
            <p className="text-sm text-slate-400">
              Get in touch to schedule stringing, ask a question, or confirm
              timing.
            </p>
          </header>

          <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-200">
              <p className="mb-3">
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Phone / Text
                </span>
                <a
                  href="tel:+19412269305"
                  className="text-[15px] font-semibold text-emerald-300"
                >
                  +1 941 226 9305
                </a>
              </p>
              <p className="mb-3">
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Email
                </span>
                <a
                  href="mailto:affordable.stringing.tennis@gmail.com"
                  className="text-[15px] font-semibold text-emerald-300"
                >
                  affordable.stringing.tennis@gmail.com
                </a>
              </p>
              <p className="mb-3">
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Location
                </span>
                Westbrook Circle area, Lakewood Ranch (Bradenton, FL 34211)
                <br />
                <span className="text-[12px] text-slate-400">
                  Exact apartment number is provided after your appointment is
                  confirmed.
                </span>
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Availability
                </span>
                By appointment only.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 text-sm text-slate-200">
              <h3 className="text-sm font-semibold text-emerald-300">
                Serving Lakewood Ranch &amp; Bradenton
              </h3>
              <p className="mt-2 text-[13px] text-slate-200">
                The service is based near Westbrook Circle in Lakewood Ranch,
                conveniently located for players from Lakewood Ranch, Bradenton,
                and nearby communities.
              </p>
              <p className="mt-3 text-[13px] text-slate-300">
                Once your request is received, you will receive detailed
                instructions for the exact drop-off location and timing.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-slate-800 pt-4 text-[11px] text-slate-500">
          <div className="flex flex-col gap-2 py-3 md:flex-row md:items-center md:justify-between">
            <span>
              © {new Date().getFullYear()} Affordable Stringing of Tennis
              Rackets – Lakewood Ranch, Bradenton.
            </span>
            <span>Local tennis racket stringing – by appointment only.</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
