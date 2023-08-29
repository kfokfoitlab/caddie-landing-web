import GenericLayout from "@/layouts/GenericLayout";
import "@/styles/reset.css";
import "@/styles/global.css";
import BannerSection from "@/components/BannerSection";

export function App() {
  return (
    <GenericLayout>
      <BannerSection />
    </GenericLayout>
  );
}
