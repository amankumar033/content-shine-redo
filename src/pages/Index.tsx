import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <OurStorySection />
      </main>
    </div>
  );
};

export default Index;
