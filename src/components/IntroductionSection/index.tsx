import { SectionLayout } from "@/layouts/SectionLayout";
import styled from "@emotion/styled";

export default function IntroductionSection() {
  return (
    <SectionLayout>
      <TypeText>Business introduction</TypeText>
      <TitleText>교육부터 취업까지 올인원 프로그램</TitleText>
      <SubtitleText>
        전문 골프 캐디 양성을 위한 온/오프라인 교육 및 취업 연계 지원
      </SubtitleText>
      <CardWrapper>
        <CardItemWrapper backgroundUrl="assets/img/program_1.png">
          <CardItemTitleText>
            스포츠·레저·문화 분야 인프라 구축
          </CardItemTitleText>
          <CardItemContentText>
            교육부터 현장 경험까지
            <br />
            골프 산업 전반의 전문성을 갖춘 서경대 스포츠융합학부 등<br />
            대학, 기업, 기관 협력 통합 지원
          </CardItemContentText>
        </CardItemWrapper>
        <CardItemWrapper backgroundUrl="assets/img/program_2.png">
          <CardItemTitleText>
            수요 맞춤형
            <br />
            취업 연계 시스템
          </CardItemTitleText>
          <CardItemContentText>
            전국 주요 골프장과의 협약,
            <br />
            수요 기반의 맞춤형 취업 연계
            <br />
            사후지원을 통한 미스매치 최소화
          </CardItemContentText>
        </CardItemWrapper>
        <CardItemWrapper backgroundUrl="assets/img/program_3.png">
          <CardItemTitleText>
            고수익 창출 및<br /> 안정적 자립 환경 제공
          </CardItemTitleText>
          <CardItemContentText>
            자립 지원이 필요한 누구나
            <br />
            안정적 자립을 위한
            <br />
            숙식·근로·소득 등 통합 지원
          </CardItemContentText>
        </CardItemWrapper>
      </CardWrapper>
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

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: stretch;
`;

const CardItemWrapper = styled.div<{ backgroundUrl: string }>`
  max-width: 273px;
  width: 0;
  flex-grow: 1;
  padding: 60px 30px;
  min-height: 400px;
  border-radius: 10px;
  background: ${({ backgroundUrl }) =>
    `center center / cover url("${backgroundUrl}");`};
  &:not(:last-of-type) {
    margin-right: 30px;
  }
`;

const CardItemTitleText = styled.p`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 25px;
  line-height: 1.25;
`;

const CardItemContentText = styled.p`
  font-weight: 600;
  color: #fff;
  line-height: 1.6;
`;
