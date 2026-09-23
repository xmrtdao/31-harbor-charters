import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import hero from "@/assets/hero.jpg";
import surf from "@/assets/surf.jpg";
import forest from "@/assets/forest.jpg";
import river from "@/assets/river.jpg";
import {
  BUCKETS, EXPERIENCES, REGIONS, STYLES, TIERS, pad,
  type Experience, type Style,
} from "@/lib/experiences";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "31 Harbor — 31 Handpicked Sanctuaries Across Costa Rica" },
      { name: "description", content: "Anchor in paradise. A curated matrix of 31 private charters, expeditions and sanctuaries across Costa Rica." },
      { property: "og:title", content: "31 Harbor — Anchor in Paradise" },
      { property: "og:description", content: "Not hundreds of stays. Just the right 31 private Costa Rican experiences." },
    ],
  }),
  component: Index,
});

const IMG: Record<Style, string> = {
  "Ocean & Yacht": hero,
  "Surf & Coast": surf,
  "Aerial & Heli": hero,
  "Wilderness & Wildlife": forest,
  "Volcano & Thermal": forest,
  "Whitewater & Canyon": river,
};

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M20 9v20M14 13h12M11 23c2 5 5 7 9 7s7-2 9-7" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="20" cy="9" r="1.8" fill="currentColor" />
    </svg>
  );
}

function Index() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("");
  const [style, setStyle] = useState("");
  const [tier, setTier] = useState("");
  const [bucket, setBucket] = useState("");
  const [view, setView] = useState<"matrix" | "grid">("matrix");
  const [open, setOpen] = useState<Experience | null>(null);

  const list = useMemo(() => {
    const s = q.toLowerCase();
    return EXPERIENCES.filter(
      (e) =>
        (!region || e.region === region) &&
        (!style || e.style === style) &&
        (!tier || e.tier === tier) &&
        (!bucket || e.bucket === bucket) &&
        (!s || `${e.name} ${e.subtitle} ${e.operator}`.toLowerCase().includes(s)),
    );
  }, [q, region, style, tier, bucket]);

  const reset = () => { setQ(""); setRegion(""); setStyle(""); setTier(""); setBucket(""); };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative h-[92vh] min-h-[560px] overflow-hidden">
        <img src={hero} alt="Catamaran anchored in a secluded Costa Rican bay at dusk" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background" />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <div className="flex items-center gap-3 text-primary">
            <Mark className="h-9 w-9 shrink-0" />
            <span className="font-display text-2xl tracking-[0.2em] text-foreground">31 HARBOR</span>
          </div>
          <a href="#matrix" className="hidden border border-primary/50 px-5 py-2 text-xs uppercase tracking-[0.25em] text-primary transition hover:bg-primary hover:text-primary-foreground sm:block">The 31</a>
        </nav>
        <div className="relative z-10 mx-auto flex h-[calc(100%-96px)] max-w-7xl flex-col justify-end px-5 pb-20 sm:px-8">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-primary">Costa Rica · Curated Sanctuaries</p>
          <h1 className="max-w-4xl font-display text-5xl font-light leading-[0.95] sm:text-7xl lg:text-8xl">
            Anchor in Paradise.
            <span className="block italic text-sand">31 Handpicked Sanctuaries.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">Not hundreds of stays. Just the right 31 — private charters, pelagic dives and wilderness vigils from Papagayo to Tortuguero.</p>
          <a href="#matrix" className="mt-9 w-fit bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-sand">31 Places to Drop Anchor</a>
        </div>
      </header>

      {/* Zones strip */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-px border-y bg-border sm:grid-cols-3 lg:grid-cols-6">
        {REGIONS.map((r) => {
          const c = EXPERIENCES.filter((e) => e.region === r).length;
          return (
            <button key={r} onClick={() => { setRegion(region === r ? "" : r); document.getElementById("matrix")?.scrollIntoView({ behavior: "smooth" }); }}
              className={`bg-background p-5 text-left transition hover:bg-card ${region === r ? "bg-card" : ""}`}>
              <div className="font-display text-3xl text-primary">{pad(c)}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{r}</div>
            </button>
          );
        })}
      </section>

      {/* Matrix */}
      <main id="matrix" className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">The Register</p>
            <h2 className="font-display text-4xl sm:text-5xl">The 31 Harbors</h2>
          </div>
          <div className="flex shrink-0 border border-primary/40">
            {(["matrix", "grid"] as const).map((v) => (
              <button key={v} onClick={() => setView(v)}
                className={`px-3 py-2 text-[11px] uppercase tracking-widest transition sm:px-4 ${view === v ? "bg-primary text-primary-foreground" : "text-primary"}`}>
                {v === "matrix" ? "Matrix" : "Grid"}
              </button>
            ))}
          </div>
        </div>

        {/* Sticky filters */}
        <div className="sticky top-0 z-30 -mx-4 border-b bg-background/95 px-4 py-3 backdrop-blur sm:-mx-8 sm:px-8">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search experience or operator…"
            className="mb-2 w-full border bg-card px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary" />
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
            <Select value={region} onChange={setRegion} label="All regions" opts={REGIONS} />
            <Select value={style} onChange={setStyle} label="All styles" opts={STYLES} />
            <Select value={tier} onChange={setTier} label="Any tier" opts={TIERS} />
            <Select value={bucket} onChange={setBucket} label="Any duration" opts={BUCKETS} />
            <button onClick={reset} className="shrink-0 px-3 text-[11px] uppercase tracking-widest text-primary">Reset</button>
          </div>
          <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{list.length} of 31 harbors</p>
        </div>

        {list.length === 0 && <p className="py-20 text-center text-muted-foreground">No harbors match these waters. Try widening your filters.</p>}

        {view === "matrix" ? (
          <>
            {/* Desktop table */}
            <div className="mt-6 hidden overflow-x-auto lg:block">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <tr className="border-b">
                    {["#", "Experience", "Region", "Operator & Hub", "Duration", "Private", "Tier", "Season"].map((h) => <th key={h} className="px-3 py-3 font-medium">{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {list.map((e) => (
                    <tr key={e.n} onClick={() => setOpen(e)} className="cursor-pointer border-b align-top transition hover:bg-card">
                      <td className="px-3 py-4"><Badge n={e.n} /></td>
                      <td className="max-w-xs px-3 py-4"><div className="font-display text-lg leading-tight">{e.name}</div><div className="mt-1 text-xs text-muted-foreground">{e.subtitle}</div></td>
                      <td className="px-3 py-4 text-xs">{e.region}</td>
                      <td className="max-w-[200px] px-3 py-4 text-xs text-muted-foreground">{e.operator}</td>
                      <td className="px-3 py-4 text-xs">{e.duration}</td>
                      <td className="max-w-[140px] px-3 py-4 text-xs text-muted-foreground">{e.privateGroups}</td>
                      <td className="px-3 py-4"><span className="text-primary">{e.tier}</span><div className="text-[11px] text-muted-foreground">{e.price}</div></td>
                      <td className="max-w-[170px] px-3 py-4 text-xs text-muted-foreground">{e.season}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile compact cards */}
            <ul className="mt-4 divide-y border-y lg:hidden">
              {list.map((e) => (
                <li key={e.n}>
                  <button onClick={() => setOpen(e)} className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] gap-3 py-4 text-left active:bg-card">
                    <Badge n={e.n} />
                    <div className="min-w-0">
                      <div className="truncate font-display text-lg leading-tight">{e.name}</div>
                      <div className="truncate text-[11px] uppercase tracking-wider text-muted-foreground">{e.region}</div>
                      <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
                        <Chip>{e.duration.split(" (")[0]}</Chip>
                        <Chip>{e.style}</Chip>
                        <Chip>{e.season.split(" (")[0]}</Chip>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-primary">{e.tier}</div>
                      <div className="mt-1 text-[10px] text-muted-foreground">Private</div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((e) => (
              <button key={e.n} onClick={() => setOpen(e)} className="group overflow-hidden border bg-card text-left transition hover:border-primary/60">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={IMG[e.style]} alt={e.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute left-3 top-3"><Badge n={e.n} solid /></div>
                  <span className="absolute right-3 top-3 bg-background/80 px-2 py-1 text-xs text-primary">{e.tier}</span>
                </div>
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-primary">{e.region}</p>
                  <h3 className="mt-2 font-display text-2xl leading-tight">{e.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{e.subtitle}</p>
                  <div className="mt-4 flex justify-between text-xs text-muted-foreground"><span>{e.duration}</span><span>{e.price.split(" /")[0]}</span></div>
                </div>
              </button>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t py-12 text-center">
        <Mark className="mx-auto h-10 w-10 text-primary" />
        <p className="mt-4 font-display text-xl italic text-sand">Not Hundreds of Stays. Just the Right 31.</p>
        <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">31 Harbor · Costa Rica</p>
      </footer>

      {open && <Drawer e={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

function Select({ value, onChange, label, opts }: { value: string; onChange: (v: string) => void; label: string; opts: readonly string[] }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}
      className={`shrink-0 border bg-card px-3 py-2 text-xs outline-none focus:border-primary ${value ? "border-primary text-primary" : ""}`}>
      <option value="">{label}</option>
      {opts.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

function Badge({ n, solid }: { n: number; solid?: boolean }) {
  return (
    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary font-display text-lg text-primary ${solid ? "bg-background/85" : ""}`}>
      {pad(n)}
    </span>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="border px-1.5 py-0.5 text-muted-foreground">{children}</span>;
}

function Drawer({ e, onClose }: { e: Experience; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [date, setDate] = useState("");
  const [size, setSize] = useState(2);
  const [email, setEmail] = useState("");
  useEffect(() => {
    const k = (ev: KeyboardEvent) => ev.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);

  const highlights = [
    `Private departure from ${e.operator.split(",").pop()?.trim()}`,
    e.subtitle,
    `Timed for ${e.season.toLowerCase()}`,
    "Concierge-arranged transfers and refreshments",
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal>
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm animate-in fade-in" onClick={onClose} />
      <aside className="relative h-full w-full max-w-xl overflow-y-auto border-l bg-card animate-in slide-in-from-right duration-300">
        <div className="relative aspect-[16/10]">
          <img src={IMG[e.style]} alt={e.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-primary">✕</button>
          <div className="absolute bottom-4 left-6"><Badge n={e.n} solid /></div>
        </div>
        <div className="space-y-7 p-6 sm:p-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{e.region} · {e.style}</p>
            <h2 className="mt-2 font-display text-4xl leading-tight">{e.name}</h2>
            <p className="mt-2 text-muted-foreground">{e.subtitle}</p>
          </div>
          <dl className="grid grid-cols-2 gap-px bg-border text-sm">
            {[["Duration", e.duration], ["Tier", `${e.tier} · ${e.price}`], ["Private groups", e.privateGroups], ["Best timing", e.season]].map(([k, v]) => (
              <div key={k} className="bg-card p-3"><dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</dt><dd className="mt-1">{v}</dd></div>
            ))}
          </dl>
          <section>
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary">Itinerary Highlights</h3>
            <ul className="mt-3 space-y-2 text-sm">{highlights.map((h) => <li key={h} className="flex gap-3"><span className="text-primary">—</span>{h}</li>)}</ul>
          </section>
          <section>
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary">What's Included</h3>
            <p className="mt-3 text-sm text-muted-foreground">Private guide or captain, all permits and park fees, safety equipment, curated refreshments and hotel transfers within the zone.</p>
          </section>
          <section>
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary">Operator Credentials</h3>
            <p className="mt-3 text-sm">{e.operator}</p>
            <p className="mt-1 text-xs text-muted-foreground">Licensed by the Costa Rica Tourism Board (ICT) · Fully insured · Vetted by 31 Harbor.</p>
          </section>
          <section className="border border-primary/40 p-5">
            <h3 className="font-display text-2xl">Drop Anchor</h3>
            {sent ? (
              <p className="mt-3 text-sm text-sand">Your charter request for #{pad(e.n)} is logged. A 31 Harbor concierge will confirm availability within 24 hours.</p>
            ) : (
              <form className="mt-4 space-y-3" onSubmit={(ev) => { ev.preventDefault(); setSent(true); }}>
                <div className="grid grid-cols-2 gap-3">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Date
                    <input required type="date" value={date} onChange={(ev) => setDate(ev.target.value)} className="mt-1 w-full border bg-background px-3 py-2 text-sm text-foreground" />
                  </label>
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Group size
                    <input required type="number" min={1} max={25} value={size} onChange={(ev) => setSize(+ev.target.value)} className="mt-1 w-full border bg-background px-3 py-2 text-sm text-foreground" />
                  </label>
                </div>
                <input required type="email" placeholder="Email" value={email} onChange={(ev) => setEmail(ev.target.value)} className="w-full border bg-background px-3 py-2 text-sm" />
                <button className="w-full bg-primary py-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-sand">Request Charter</button>
              </form>
            )}
          </section>
        </div>
      </aside>
    </div>
  );
}
