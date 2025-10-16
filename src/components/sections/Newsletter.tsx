export const Newsletter = () => {
  return (
    <section className="py-24 bg-[#0f0f0f] border-t border-white/10">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-4 lowercase text-white">Stay in the Loop</h2>
        <p className="text-white/70 text-lg mb-12 font-light">
          Get updates on new arrivals, exclusive pieces, and sustainable fashion insights.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-4 bg-white/5 border border-white/20 text-white placeholder-white/50 text-base rounded-none"
          />
          <button 
            type="submit" 
            className="px-8 py-4 bg-white text-black font-semibold cursor-pointer transition-all duration-300 uppercase tracking-[0.05em] rounded-[25px] hover:bg-white/90 hover:-translate-y-1 border-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};