import GenericLayout from "@/layouts/GenericLayout";
import BannerSection from "@/components/BannerSection";
import IntroductionSection from "@/components/IntroductionSection";
import AboutCaddieSection from "@/components/AboutCaddieSection";
import EducationalProgramSection from "@/components/EducationalProgramSection";
import AboutTrainingSection from "@/components/AboutTrainingSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";
import { createRef } from "react";

export type SectionKeys = "BANNER" | "INTRODUCTION" | "FORM";

export default function MainPage() {
  const bannerSectionRef = createRef<HTMLDivElement>();
  const introductionSectionRef = createRef<HTMLDivElement>();
  const formSectionRef = createRef<HTMLDivElement>();

  const scrollToSection = (key: SectionKeys) => {
    switch (key) {
      case "BANNER":
        bannerSectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "INTRODUCTION":
        introductionSectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "FORM":
        formSectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
    }
  };

  return (
    <GenericLayout>
      <BannerSection ref={bannerSectionRef} scrollToSection={scrollToSection} />
      <IntroductionSection ref={introductionSectionRef} />
      <AboutCaddieSection />
      <EducationalProgramSection />
      <AboutTrainingSection />
      <FormSection ref={formSectionRef} />
      <Footer />
    </GenericLayout>
  );
}
