import GenericLayout from "@/layouts/GenericLayout";
import "@/styles/reset.css";
import "@/styles/global.css";
import BannerSection from "@/components/BannerSection";
import IntroductionSection from "@/components/IntroductionSection";
import AboutCaddieSection from "@/components/AboutCaddieSection";

export function App() {
  return (
    <GenericLayout>
      <BannerSection />
      <IntroductionSection />
      <AboutCaddieSection />
    </GenericLayout>
  );
}
