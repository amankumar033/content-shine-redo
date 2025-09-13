import { MapPin } from "lucide-react";

const LocationBadge = () => {
  return (
    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full shadow-soft">
      <MapPin className="w-4 h-4" />
      <span className="font-medium">Serving Tarneit, Melbourne</span>
    </div>
  );
};

export default LocationBadge;