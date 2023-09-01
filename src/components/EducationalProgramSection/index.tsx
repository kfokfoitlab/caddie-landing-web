import { SectionLayout } from "@/layouts/SectionLayout";
import styled from "@emotion/styled";

export default function EducationalProgramSection() {
  return (
    <SectionLayout>
      <TypeText>Educational Program</TypeText>
      <TitleText className="pc">캐디 취업을 위한 3단계 프로세스</TitleText>
      <TitleText className="tablet">캐디 취업을 위한 3단계 프로세스</TitleText>
      <TitleText className="mobile">
        캐디 취업을 위한
        <br />
        3단계 프로세스
      </TitleText>
      <SubtitleText>누구나 수료만 하면 취업까지 3개월</SubtitleText>
      <BannerImage src="assets/img/pc.png" alt="step" className="pc" />
      <BannerImage src="assets/img/tb.png" alt="step" className="tablet" />
      <BannerImage src="assets/img/mob.png" alt="step" className="mobile" />
    </SectionLayout>
  );
}

const TypeText = styled.p`
  font-weight: bold;
  color: #38613c;
  font-size: 18px;
  margin-bottom: 10px;

  @media screen and (max-width: 1119px) {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

const TitleText = styled.p`
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 20px;

  @media screen and (max-width: 1119px) {
    font-size: 32px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

const SubtitleText = styled.p`
  font-weight: 500;
  margin-bottom: 80px;

  @media screen and (max-width: 1119px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const BannerImage = styled.img`
  width: 70%;

  @media screen and (max-width: 1119px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;
