import LocationBadge from "./LocationBadge";
import heroTiffin from "@/assets/hero-tiffin.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroTiffin}
          alt="Delicious tiffin meals spread"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Location Badge */}
        <div className="mb-12">
          <LocationBadge />
        </div>

        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Fresh. Local.{" "}
            <span className="block text-primary-light">Delicious.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Bringing authentic homestyle meals to your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;