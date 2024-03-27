import HeroSection from "@/components/heroSection/HeroSection";
import LatestArticle from "@/components/latestArticle/LatestArticle";
import WhyChoose from "@/components/whyChoose/WhyChoose";

export default function HomePage() {
  return (
    <>
      <div className="mb-5">
        <HeroSection />
      </div>
      <WhyChoose />
      <LatestArticle />
    </>
  );
}
