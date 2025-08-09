import BestSellersCarousel from "./components/BestSellersCarousel";
import CasualWearSection from "./components/CasualWearSection";
import CategoriesSection from "./components/CategoriesSection";
import NewArrivalsShowcase from "./components/NewArrivalsShowcase";
import WeddingWearShowcase from "./components/WeddingWearShowcase";

export default function Home() {
  return (
    <section className="p-6">
      <NewArrivalsShowcase />
      <BestSellersCarousel />
      <CasualWearSection />
      <WeddingWearShowcase />
      <CategoriesSection />
    </section>
  );
}
