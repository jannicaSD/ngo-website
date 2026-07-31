// "use client";

// import { useEffect, useRef, useState } from "react";

// type Props = {
//   src: string;
//   onClose?: () => void;
//   autoPlay?: boolean;
// };

// export default function VoicePlayer({ src, onClose, autoPlay }: Props) {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [playing, setPlaying] = useState(false);
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const a = new Audio(src);
//     a.preload = "auto";
//     audioRef.current = a;

//     const onPlay = () => setPlaying(true);
//     const onPause = () => setPlaying(false);
//     const onTime = () => setTime(a.currentTime || 0);

//     a.addEventListener("play", onPlay);
//     a.addEventListener("pause", onPause);
//     a.addEventListener("timeupdate", onTime);

//     if (autoPlay) a.play().catch(() => {});

//     return () => {
//       a.pause();
//       a.removeEventListener("play", onPlay);
//       a.removeEventListener("pause", onPause);
//       a.removeEventListener("timeupdate", onTime);
//     };
//   }, [src, autoPlay]);

//   const toggle = () => {
//     const a = audioRef.current;
//     if (!a) return;
//     if (playing) a.pause(); else a.play().catch(() => {});
//   };

//   const close = () => {
//     const a = audioRef.current;
//     a?.pause();
//     onClose?.();
//   };

//   const format = (s: number) => {
//     const m = Math.floor(s / 60);
//     const sec = Math.floor(s % 60).toString().padStart(2, "0");
//     return `${m}:${sec}`;
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur rounded-full shadow-lg px-4 py-2 flex items-center gap-3 max-w-xs">
//       <button aria-label={playing ? "Pause" : "Play"} onClick={toggle} className="rounded-full bg-blue-800 text-white w-10 h-10 flex items-center justify-center hover:scale-105 transition">
//         {playing ? "▮▮" : "▶"}
//       </button>
//       <div className="text-sm text-slate-800">
//         <div className="font-semibold">Voice Guide</div>
//         <div className="text-xs">{format(time)}</div>
//       </div>
//       <button aria-label="Close player" onClick={close} className="ml-2 text-slate-600 hover:text-slate-900">✕</button>
//     </div>
//   );
// }
