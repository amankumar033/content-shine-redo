import freshIngredients from "@/assets/fresh-ingredients.jpg";
import tiffinBox from "@/assets/tiffin-box.jpg";

const OurStorySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            Our Story
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        {/* Content with Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Tarneit Tiffin, we believe that everyone deserves access to fresh, authentic homestyle meals. Our journey began with a simple mission: to bring the warmth and comfort of traditional home cooking directly to your doorstep.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Using only the freshest local ingredients and time-honored recipes, we craft each meal with love and care, just like your grandmother used to make.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img 
                src={tiffinBox}
                alt="Traditional tiffin box with homestyle meals"
                className="rounded-lg shadow-medium w-full h-48 object-cover"
              />
              <img 
                src={freshIngredients}
                alt="Fresh ingredients used in our cooking"
                className="rounded-lg shadow-medium w-full h-48 object-cover"
              />
            </div>
          </div>
          
          <div className="bg-gradient-subtle p-8 rounded-2xl shadow-soft">
            <h3 className="text-2xl font-bold text-secondary mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Fresh, locally sourced ingredients</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Authentic homestyle recipes</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Convenient doorstep delivery</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Made with love and care</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;