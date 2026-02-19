export function OverlayCard() {
  return (
    <div className="relative group w-full max-w-5xl mx-auto">
      <div className="absolute -inset-1 bg-linear-to-r from-purple-300 to-cyan-100 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
      <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-[#04071d] flex items-center justify-center">
        <div className="relative z-10 text-center transition-opacity duration-500 group-hover:opacity-0">
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-4 mx-auto">
            <i className="ri-play-fill text-3xl text-white"></i>
          </div>
          <p className="text-white/60 text-sm font-medium uppercase tracking-widest">
            Preview Showcase
          </p>
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <img
            src="https://images.unsplash.com/photo-1476842634003-7dcca8f832de?auto=format&fit=crop&w=1650&q=80"
            alt="background"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>
    </div>
  );
}
