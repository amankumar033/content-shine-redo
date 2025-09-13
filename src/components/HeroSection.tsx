import LocationBadge from "./LocationBadge";

const HeroSection = () => {
  const bgPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  
  return (
    <section className="relative min-h-[70vh] bg-gradient-hero flex items-center justify-center">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url("${bgPattern}")` }}
      ></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Location Badge */}
        <div className="mb-12">
          <LocationBadge />
        </div>

        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Fresh. Local.{" "}
            <span className="block text-white/90">Delicious.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Bringing authentic homestyle meals to your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;