import GenericLayout from "@/layouts/GenericLayout";
import "@/styles/reset.css";
import "@/styles/global.css";
import BannerSection from "@/components/BannerSection";
import IntroductionSection from "@/components/IntroductionSection";
import AboutCaddieSection from "@/components/AboutCaddieSection";
import EducationalProgramSection from "@/components/EducationalProgramSection";
import AboutTrainingSection from "@/components/AboutTrainingSection";
import FormSection from "@/components/FormSection";

export function App() {
  return (
    <GenericLayout>
      <BannerSection />
      <IntroductionSection />
      <AboutCaddieSection />
      <EducationalProgramSection />
      <AboutTrainingSection />
      <FormSection />
    </GenericLayout>
  );
}
