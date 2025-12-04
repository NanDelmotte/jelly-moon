"use client";

export default function Home() {
return (
<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-900 via-black to-indigo-950 text-purple-200 px-6">
<h1 className="text-6xl font-extrabold tracking-tight drop-shadow-[0_0_25px_rgba(180,0,255,0.7)]">
🌙 JellyMoon is aLive and David can make updates
</h1>

  <p className="mt-4 text-xl opacity-90">
    A cosmic playground for curious minds ✨
  </p>

  <div className="mt-10 flex gap-4">
    <button className="px-6 py-3 rounded-xl bg-purple-600/70 hover:bg-purple-500/70 text-white font-medium shadow-lg shadow-purple-900/40 backdrop-blur-md">
      Enter the Night
    </button>
    <button className="px-6 py-3 rounded-xl border border-purple-500/40 hover:border-purple-300 text-purple-200 font-medium backdrop-blur-md">
      Learn More
    </button>
  </div>

  <footer className="absolute bottom-8 text-sm text-purple-300/60">
    crafted under the moonlight 🌌
  </footer>
</main>


);
}
