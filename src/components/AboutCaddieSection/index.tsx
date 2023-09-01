import { SectionLayout } from "@/layouts/SectionLayout";
import styled from "@emotion/styled";

export default function AboutCaddieSection() {
  return (
    <Wrapper>
      <SectionLayout>
        <TypeText>About Caddie</TypeText>
        <TitleText>왜 골프 캐디일까?</TitleText>
        <SubtitleText>
          골프 캐디는 안정적인 자립을 위한 고소득 전문직입니다
        </SubtitleText>

        <AboutWrapper>
          <AboutItem>
            <AboutTagText>
              <img src="/assets/img/ic_clock.png" alt="clock" />
              자유로운 근무 시간
            </AboutTagText>
            <AboutTitleText>
              주중<span>or</span>주말
            </AboutTitleText>
            <AboutSubtitleText className="pc">
              다양한 근무 형태로 원하는 시간에 근무 가능
            </AboutSubtitleText>
            <AboutSubtitleText className="tablet">
              다양한 근무 형태로 원하는 시간에 근무 가능
            </AboutSubtitleText>
            <AboutSubtitleText className="mobile">
              다양한 근무 형태로
              <br />
              원하는 시간에 근무 가능
            </AboutSubtitleText>
          </AboutItem>
          <AboutItem>
            <AboutTagText>
              <img src="/assets/img/ic_money_pack.png" alt="money pack" />
              고소득 및 안정적 수입 보장
            </AboutTagText>
            <AboutTitleText>
              500+α<span>만원</span>
            </AboutTitleText>
            <AboutSubtitleText>
              한달 평균 400~600만원의 수입 보장
            </AboutSubtitleText>
          </AboutItem>
          <AboutItem>
            <AboutTagText>
              <img src="assets/img/ic_people.png" alt="people" />
              원하는 누구나
            </AboutTagText>
            <AboutTitleText>
              6만<span>여명 캐디 수요</span>
            </AboutTitleText>
            <AboutSubtitleText className="pc">
              전국 500개 골프장 환산 시 전국 6만여명 캐디 인력 필요
            </AboutSubtitleText>
            <AboutSubtitleText className="tablet">
              전국 500개 골프장 환산 시<br /> 전국 6만여명 캐디 인력 필요
            </AboutSubtitleText>
            <AboutSubtitleText className="mobile">
              전국 500개 골프장 환산 시<br /> 전국 6만여명 캐디 인력 필요
            </AboutSubtitleText>
          </AboutItem>
          <AboutItem>
            <AboutTagText>
              <img src="assets/img/ic_medal.png" alt="medal" />
              혜택
            </AboutTagText>
            <AboutTitleText>숙식제공</AboutTitleText>
            <AboutSubtitleText className="pc">
              셔틀차량, 사원아파트, 기숙사 희망 시 제공 (골프장 별 상이)
            </AboutSubtitleText>
            <AboutSubtitleText className="tablet">
              셔틀차량, 사원아파트, 기숙사 희망 시 제공
              <br /> (골프장 별 상이)
            </AboutSubtitleText>
            <AboutSubtitleText className="mobile">
              셔틀차량, 사원아파트, 기숙사 희망 시 제공
              <br /> (골프장 별 상이)
            </AboutSubtitleText>
          </AboutItem>
        </AboutWrapper>
      </SectionLayout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background: center center / cover url("assets/img/bg_about_caddie.png");
`;

const TypeText = styled.p`
  font-weight: bold;
  color: #ffafaf;
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
  color: #fff;

  @media screen and (max-width: 1119px) {
    font-size: 32px;
    margin-bottom: 10px;
  }
`;

const SubtitleText = styled.p`
  font-weight: 500;
  margin-bottom: 80px;
  color: #fff;

  @media screen and (max-width: 1119px) {
    font-size: 16px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

const AboutWrapper = styled.div`
  max-width: 850px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  background: center center / cover
    url("assets/img/bg_about_caddie_divider.png");

  @media screen and (max-width: 767px) {
    background: center center / cover
      url("assets/img/bg_about_caddie_divider.png");
  }
`;

const AboutItem = styled.div`
  width: 50%;
  padding: 50px 0 50px 72px;

  @media screen and (max-width: 767px) {
    padding: 24px 12px;
    height: 140px;

    &:nth-of-type(2n) {
      padding-right: 0;
    }
  }
`;

const AboutTagText = styled.p`
  color: #fff;
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  > img {
    height: 19px;
    margin-right: 6px;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    margin-bottom: 4px;
    white-space: nowrap;

    > img {
      height: 10px;
    }
  }
`;

const AboutTitleText = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;

  > span {
    font-weight: 500;
    color: #fff;
    font-size: 16px;
    margin: 0 4px;
  }

  @media screen and (max-width: 767px) {
    font-size: 24px;

    > span {
      font-size: 10px;
    }
  }
`;

const AboutSubtitleText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 1119px) {
    line-height: 1.4;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    letter-spacing: -0.18px;
  }
`;
