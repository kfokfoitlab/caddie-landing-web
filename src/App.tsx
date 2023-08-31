import "@/styles/reset.css";
import "@/styles/global.css";
import GenericLayout from "@/layouts/GenericLayout";
import BannerSection from "@/components/BannerSection";
import IntroductionSection from "@/components/IntroductionSection";
import AboutCaddieSection from "@/components/AboutCaddieSection";
import EducationalProgramSection from "@/components/EducationalProgramSection";
import AboutTrainingSection from "@/components/AboutTrainingSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";
import { Routes, Route } from "react-router-dom";
import Privacy from "@/pages/privacy";

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GenericLayout>
            <BannerSection />
            <IntroductionSection />
            <AboutCaddieSection />
            <EducationalProgramSection />
            <AboutTrainingSection />
            <FormSection />
            <Footer />
          </GenericLayout>
        }
      />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}
