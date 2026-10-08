"use client";
import { useMemo, useState } from "react";

const CURRENCY = "₹"; // change to "$", "£" etc.
const fmt = (n) => CURRENCY + Math.round(n).toLocaleString(CURRENCY === "₹" ? "en-IN" : "en-US");

export default function Projection() {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(10);

  const { pts, total, put } = useMemo(() => {
    const r = rate / 100 / 12;
    const pts = Array.from({ length: years + 1 }, (_, y) => {
      const n = y * 12;
      return r === 0 ? monthly * n : monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    });
    return { pts, total: pts[years], put: monthly * years * 12 };
  }, [monthly, years, rate]);

  const W = 600, H = 200, max = Math.max(...pts, 1);
  const xy = (v, i) => [(i / years) * W, H - (v / max) * (H - 10)];
  const line = pts.map((v, i) => xy(v, i).join(",")).join(" ");
  const contrib = pts.map((_, i) => xy(monthly * i * 12, i).join(",")).join(" ");

  const Slider = ({ label, value, set, min, max, step, show }) => (
    <label className="block">
      <div className="mb-2 flex justify-between text-sm"><span className="text-ink/70">{label}</span><span className="font-medium">{show}</span></div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(+e.target.value)} />
    </label>
  );

  return (
    <div className="grid gap-8 rounded-3xl bg-ink p-6 text-paper shadow-2xl shadow-ink/20 md:grid-cols-5 md:p-10">
      <div className="space-y-7 md:col-span-2 [&_input]:bg-paper/20">
        <Slider label="Invest every month" value={monthly} set={setMonthly} min={1000} max={100000} step={1000} show={fmt(monthly)} />
        <Slider label="For how long" value={years} set={setYears} min={1} max={30} step={1} show={`${years} years`} />
        <Slider label="Expected yearly return" value={rate} set={setRate} min={0} max={15} step={0.5} show={`${rate}%`} />
        <p className="text-xs leading-relaxed text-paper/50">Illustration only, not a guarantee. Real returns vary and can be negative.</p>
      </div>
      <div className="md:col-span-3">
        <p className="text-sm text-paper/60">You could have</p>
        <p className="font-serif text-5xl tracking-tight text-lime md:text-6xl">{fmt(total)}</p>
        <p className="mt-2 text-sm text-paper/70">
          {fmt(put)} from you · <span className="text-lime">{fmt(total - put)}</span> from compounding
        </p>
        <svg viewBox={`0 0 ${W} ${H}`} className="mt-6 w-full" role="img" aria-label="Projected growth chart">
          <polygon points={`0,${H} ${line} ${W},${H}`} fill="#C8F169" opacity="0.18" />
          <polyline points={line} fill="none" stroke="#C8F169" strokeWidth="3" strokeLinejoin="round" />
          <polyline points={contrib} fill="none" stroke="#F6F3EC" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
        </svg>
        <div className="mt-2 flex gap-5 text-xs text-paper/60">
          <span className="flex items-center gap-2"><i className="h-0.5 w-5 bg-lime" />Value</span>
          <span className="flex items-center gap-2"><i className="h-0.5 w-5 border-t-2 border-dashed border-paper/50" />What you put in</span>
        </div>
      </div>
    </div>
  );
}
