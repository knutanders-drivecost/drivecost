import { Car, Gauge, LineChart, ShieldCheck, Sparkles, TrendingDown, Wallet } from "lucide-react";

const metrics = [
  { label: "Monthly Cost", value: "$742", note: "estimated" },
  { label: "Annual Cost", value: "$8,904", note: "all-in" },
  { label: "Cost / Mile", value: "$0.41", note: "based on usage" },
  { label: "Ownership Score", value: "92/100", note: "excellent" },
];

const costs = [
  ["Financing", "$298", "40%"],
  ["Fuel / Energy", "$164", "22%"],
  ["Insurance", "$128", "17%"],
  ["Maintenance", "$72", "10%"],
  ["Depreciation", "$80", "11%"],
];

function Logo() {
  return <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-2xl bg-dcBlue shadow-glow"><Gauge size={22}/></div><div className="text-xl font-black tracking-tight">Drive<span className="text-dcBlue">Cost</span></div></div>;
}

function MetricCard({ label, value, note }: { label: string; value: string; note: string }) {
  return <div className="glass rounded-3xl p-5"><p className="text-sm text-dcMuted">{label}</p><p className="mt-2 text-3xl font-black">{value}</p><p className="mt-1 text-xs uppercase tracking-widest text-dcMuted">{note}</p></div>;
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,.28),_transparent_30%),radial-gradient(circle_at_20%_10%,_rgba(22,163,74,.10),_transparent_28%),#0B1220]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-dcMuted md:flex">
          <a href="#calculator" className="hover:text-white">Calculator</a>
          <a href="#dashboard" className="hover:text-white">Dashboard</a>
          <a href="#compare" className="hover:text-white">Compare</a>
          <a href="#beta" className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/15">Join Beta</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.05fr_.95fr] md:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-dcLine bg-white/5 px-4 py-2 text-sm text-dcMuted"><Sparkles size={16} className="text-dcBlue"/>Vehicle ownership cost platform</div>
          <h1 className="max-w-4xl text-5xl font-black leading-[.98] tracking-tight md:text-7xl">Know what your car really costs.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-dcMuted md:text-xl">DriveCost helps car buyers and owners calculate financing, fuel, insurance, maintenance, depreciation and true 5-year ownership cost in under 60 seconds.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#calculator" className="rounded-2xl bg-dcBlue px-6 py-4 text-center font-bold text-white shadow-glow hover:bg-blue-500">Start Free Calculation</a>
            <a href="#beta" className="rounded-2xl border border-dcLine bg-white/5 px-6 py-4 text-center font-bold text-white hover:bg-white/10">Join Beta</a>
          </div>
        </div>
        <div className="glass rounded-[2rem] p-5 shadow-glow">
          <div className="rounded-[1.5rem] bg-dcCard2 p-5">
            <div className="mb-5 flex items-center justify-between"><div><p className="text-sm text-dcMuted">Financial Verdict</p><p className="text-2xl font-black text-dcGreen">Smart Buy</p></div><div className="rounded-full bg-dcGreen/15 px-4 py-2 text-sm font-bold text-dcGreen">92/100</div></div>
            <div className="grid grid-cols-2 gap-4">{metrics.map((m) => <MetricCard key={m.label} {...m} />)}</div>
            <div className="mt-5 rounded-3xl bg-dcCard p-5"><p className="mb-4 font-bold">Cost breakdown</p>{costs.map(([name, amount, width]) => <div key={name} className="mb-4 last:mb-0"><div className="mb-2 flex justify-between text-sm"><span className="text-dcMuted">{name}</span><span>{amount}</span></div><div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-dcBlue" style={{width}} /></div></div>)}</div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-4xl font-black">A dashboard for every car decision.</h2>
        <p className="mt-3 text-dcMuted">See the real monthly cost, long-term cost and ownership quality in one place.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="glass rounded-3xl p-6"><Wallet className="text-dcBlue"/><h3 className="mt-4 text-xl font-bold">Financing</h3><p className="mt-2 text-sm leading-6 text-dcMuted">Loan, APR, term and total interest.</p></div>
          <div className="glass rounded-3xl p-6"><TrendingDown className="text-dcOrange"/><h3 className="mt-4 text-xl font-bold">Depreciation</h3><p className="mt-2 text-sm leading-6 text-dcMuted">Forecast value loss over time.</p></div>
          <div className="glass rounded-3xl p-6"><ShieldCheck className="text-dcGreen"/><h3 className="mt-4 text-xl font-bold">Hidden costs</h3><p className="mt-2 text-sm leading-6 text-dcMuted">Insurance, tires, service and tolls.</p></div>
          <div className="glass rounded-3xl p-6"><LineChart className="text-dcBlue"/><h3 className="mt-4 text-xl font-bold">Ownership Score™</h3><p className="mt-2 text-sm leading-6 text-dcMuted">A simple verdict before you buy.</p></div>
        </div>
      </section>

      <section id="calculator" className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-[.9fr_1.1fr]">
        <div><h2 className="text-4xl font-black">Calculate in under 60 seconds.</h2><p className="mt-3 text-dcMuted">This is the first MVP calculator. Full interactive logic comes in v0.2.</p></div>
        <div className="glass rounded-3xl p-6"><div className="grid gap-4 md:grid-cols-2"><input className="input" placeholder="Purchase price"/><input className="input" placeholder="Down payment"/><input className="input" placeholder="Interest rate %"/><input className="input" placeholder="Loan term"/><input className="input" placeholder="Insurance / month"/><input className="input" placeholder="Annual mileage"/></div><button className="mt-5 w-full rounded-2xl bg-dcBlue px-6 py-4 font-bold text-white hover:bg-blue-500">Calculate Ownership Cost</button></div>
      </section>

      <section id="compare" className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-4xl font-black">Compare before you buy.</h2><p className="mt-3 text-dcMuted">DriveCost turns vehicle comparison into a simple financial decision.</p>
        <div className="mt-6 overflow-hidden rounded-3xl border border-dcLine bg-dcCard">
          <div className="grid grid-cols-4 border-b border-dcLine bg-white/5 p-4 text-sm font-bold text-dcMuted"><div>Metric</div><div>Tesla Model Y</div><div>Volvo XC60</div><div>Winner</div></div>
          {[["Monthly Cost","$695","$860","Tesla"],["Fuel / Energy","$85","$230","Tesla"],["Insurance","$145","$135","Volvo"],["Maintenance","$45","$110","Tesla"],["5-Year Cost","$41,700","$51,600","Tesla"]].map((row) => <div key={row[0]} className="grid grid-cols-4 border-b border-dcLine p-4 text-sm last:border-b-0">{row.map((cell,i)=><div key={i} className={i===3 ? "font-bold text-dcGreen" : ""}>{cell}</div>)}</div>)}
        </div>
      </section>

      <section id="beta" className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="glass rounded-[2rem] p-8 md:p-12"><Car className="mx-auto mb-5 text-dcBlue" size={42}/><h2 className="text-4xl font-black">Join the DriveCost beta.</h2><p className="mx-auto mt-4 max-w-2xl text-dcMuted">Be among the first to test the car finance dashboard built for real ownership decisions.</p><div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"><input className="input" placeholder="Email address"/><button className="rounded-2xl bg-dcBlue px-7 py-4 font-bold text-white hover:bg-blue-500">Join Beta</button></div></div>
      </section>
      <footer className="border-t border-dcLine px-6 py-8 text-center text-sm text-dcMuted">© 2026 DriveCost. Know what your car really costs.</footer>
    </main>
  );
}
