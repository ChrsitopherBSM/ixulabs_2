export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-70">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="relative z-20 h-full flex items-center justify-between px-16 text-white">
        <h2 className="text-6xl font-medium tracking-tighter max-w-sm">Born for Adventure.</h2>
        <h2 className="text-6xl font-medium tracking-tighter max-w-sm text-right">Built in America.</h2>
      </div>
    </section>
  );
}