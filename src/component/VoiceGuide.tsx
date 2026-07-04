"use client";

import { useEffect, useRef, useState } from "react";
import VoicePlayer from "./VoicePlayer";

export default function VoiceGuide() {
  const [show, setShow] = useState(false);
  const [playerOpen, setPlayerOpen] = useState(false);
  const [dontShow, setDontShow] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    try {
      const suppressed = localStorage.getItem("voiceGuideSuppressUntil");
      const seen = localStorage.getItem("voiceGuideSeen");
      const now = Date.now();
      if (suppressed && Number(suppressed) > now) return; // suppressed
      if (seen) return; // already shown

      // wait until 5s after load
      timerRef.current = window.setTimeout(() => setShow(true), 5000);
      return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    } catch (e) {
      // ignore storage errors
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    // mark seen so it won't auto-show again
    try { localStorage.setItem("voiceGuideSeen", "1"); } catch {}
  }, [show]);

  const close = (suppressFor30Days = false) => {
    setShow(false);
    if (suppressFor30Days) {
      const until = Date.now() + 30 * 24 * 60 * 60 * 1000;
      try { localStorage.setItem("voiceGuideSuppressUntil", String(until)); } catch {}
    }
  };

  const openPlayer = () => {
    setShow(false);
    setPlayerOpen(true);
  };

  // keyboard accessibility: ESC closes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShow(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!show && !playerOpen) return null;

  return (
    <>
      {show && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-400" aria-hidden />

          <div role="dialog" aria-modal="true" aria-labelledby="vg-heading" className="relative z-50 max-w-[520px] w-full mx-4 rounded-[24px] bg-white/60 backdrop-blur-md shadow-2xl p-6 text-slate-900" style={{transition: 'transform 500ms ease, opacity 500ms ease', transform: 'scale(1)', opacity: 1}}>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-blue-900/10 flex items-center justify-center text-blue-900 text-2xl">🤝</div>
              <div className="text-sm text-slate-700 uppercase">Welcome</div>
              <h2 id="vg-heading" className="text-2xl font-extrabold">Welcome to Parakletus</h2>
              <div className="text-xs text-slate-600">Christian Lawyers &amp; Churches of Pakistan</div>
              <div className="text-[13px] text-slate-700 mt-2">Justice • Compassion • Hope • Service</div>

              <p className="text-sm text-slate-700 mt-2">Thank you for visiting Parakletus. We would love to personally introduce our organization and share how we have been serving communities across Pakistan through justice, legal advocacy, education, humanitarian assistance, and faith-driven community development since 2017. Take a moment to hear our story and discover the mission that inspires our work.</p>

              <div className="flex items-center gap-3 mt-4">
                <button onClick={openPlayer} className="flex items-center gap-2 bg-blue-900 text-white px-5 py-3 rounded-full shadow hover:scale-105 transition">
                  <span>🎙 Listen to Our Story</span>
                </button>
                <button onClick={() => close(false)} className="px-4 py-3 rounded-full border border-slate-300 text-slate-800">Continue Browsing</button>
              </div>

              <label className="mt-3 text-sm text-slate-600 flex items-center gap-2"><input aria-label="Don't show again" type="checkbox" checked={dontShow} onChange={(e)=>setDontShow(e.target.checked)} className="accent-blue-800"/> Don't show this again</label>

              <div className="text-xs text-slate-500 mt-3">Need assistance? Our Voice Guide is always available from the bottom-right corner.</div>
            </div>
          </div>
        </div>
      )}

      {playerOpen && (
        <VoicePlayer src="/voice.mp3" autoPlay onClose={() => setPlayerOpen(false)} />
      )}
    </>
  );
}
