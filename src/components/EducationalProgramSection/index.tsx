import { SectionLayout } from "@/layouts/SectionLayout";
import styled from "@emotion/styled";

export default function EducationalProgramSection() {
  return (
    <SectionLayout>
      <TypeText>Educational Program</TypeText>
      <TitleText>캐디 취업을 위한 3단계 프로세스</TitleText>
      <SubtitleText>누구나 수료만 하면 취업까지 3개월</SubtitleText>
      <BannerImage src="assets/img/pc.png" alt="pc" />
    </SectionLayout>
  );
}

const TypeText = styled.p`
  font-weight: bold;
  color: #38613c;
  font-size: 18px;
  margin-bottom: 10px;
`;

const TitleText = styled.p`
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 20px;
`;

const SubtitleText = styled.p`
  font-weight: 500;
  margin-bottom: 80px;
`;

const BannerImage = styled.img`
  width: 70%;
`;