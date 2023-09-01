import { SectionLayout } from "@/layouts/SectionLayout";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export default function AboutTrainingSection() {
  return (
    <Wrapper>
      <SectionLayout className="md:!pr-0">
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
        >
          <TypeText>About Training</TypeText>
          <TitleText className="pc">
            현장과 가까운 실무 교육으로 빠른 취업
          </TitleText>
          <TitleText className="tablet">
            현장과 가까운 실무 교육으로 빠른 취업
          </TitleText>
          <TitleText className="mobile">
            현장과 가까운
            <br />
            실무 교육으로 빠른 취업
          </TitleText>
          <SubtitleText>
            자립 청년 대상 전문직 캐디 양성 서비스를 제공합니다
          </SubtitleText>
        </div>

        <CardWrapper>
          <CardLineWrapper
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="500"
          >
            <CardItemWrapper>
              <CardTextWrapper>
                <CardItemTitleText>사전 직무교육</CardItemTitleText>
                <CardItemSubtitleText>
                  공통 교육 및 직무 이론, 현장실습까지 80시간의 전문 직무 교육을
                  이수
                </CardItemSubtitleText>
              </CardTextWrapper>
              <CardContentImage backgroundUrl="assets/img/traning_1.png" />
              <CardContentAbsoluteBoxWrapper>
                취업에 필요한 이론 및 실습
                <br /> 체계적 교육 설계
              </CardContentAbsoluteBoxWrapper>
            </CardItemWrapper>
            <CardItemWrapper>
              <CardTextWrapper>
                <CardItemTitleText>이론교육</CardItemTitleText>
                <CardItemSubtitleText className="pc">
                  골프 CS 매너 및 비즈니스 회화, 캐디 기본 이론 등 기본 직무
                  이론 교육 온/오프라인 진행
                </CardItemSubtitleText>
                <CardItemSubtitleText className="tablet">
                  골프 CS 매너 및 비즈니스 회화,
                  <br />
                  캐디 기본 이론 등 기본 직무 이론 교육
                  <br /> 온/오프라인 진행
                </CardItemSubtitleText>
                <CardItemSubtitleText className="mobile">
                  골프 CS 매너 및 비즈니스 회화,
                  <br />
                  캐디 기본 이론 등 기본 직무 이론 교육
                  <br />
                  온/오프라인 진행
                </CardItemSubtitleText>
              </CardTextWrapper>

              <CardContentBoxLineWrapper>
                <CardContentBoxWrapper>
                  <CardContentBoxMainTitleText>
                    NCS분류체계
                  </CardContentBoxMainTitleText>
                  <CardContentBoxSubtitleText>
                    12.이용·숙박·여행·오락·서비스
                  </CardContentBoxSubtitleText>
                </CardContentBoxWrapper>
                <CardContentBoxWrapper>
                  <CardContentBoxMainTitleText>
                    1일 8시간
                  </CardContentBoxMainTitleText>
                  <CardContentBoxSubtitleText>
                    (월~금, 1주)
                  </CardContentBoxSubtitleText>
                </CardContentBoxWrapper>
              </CardContentBoxLineWrapper>
            </CardItemWrapper>
            <CardItemWrapper>
              <CardTextWrapper>
                <CardItemTitleText>현장 실습</CardItemTitleText>
                <CardItemSubtitleText className="pc">
                  전국 업무협약 골프장 내 4 Bag 동반 라운딩
                </CardItemSubtitleText>
                <CardItemSubtitleText className="tablet">
                  전국 업무협약 골프장 내<br />4 Bag 동반 라운딩
                </CardItemSubtitleText>
                <CardItemSubtitleText className="mobile">
                  전국 업무협약 골프장 내<br />4 Bag 동반 라운딩
                </CardItemSubtitleText>
              </CardTextWrapper>

              <div>
                <CardContentSmallBoxLineWrapper>
                  <CardContentSmallBoxWrapper>
                    <CardContentBoxTitleText className="pc">
                      렉스필드 CC
                    </CardContentBoxTitleText>
                    <CardContentBoxTitleText className="tablet">
                      렉스필드
                      <br />
                      CC
                    </CardContentBoxTitleText>
                    <CardContentBoxTitleText className="mobile">
                      렉스필드
                      <br />
                      CC
                    </CardContentBoxTitleText>
                  </CardContentSmallBoxWrapper>
                  <CardContentSmallBoxWrapper>
                    <CardContentBoxTitleText className="pc">
                      블루원 CC
                    </CardContentBoxTitleText>
                    <CardContentBoxTitleText className="tablet">
                      블루원
                      <br />
                      CC
                    </CardContentBoxTitleText>
                    <CardContentBoxTitleText className="mobile">
                      블루원
                      <br />
                      CC
                    </CardContentBoxTitleText>
                  </CardContentSmallBoxWrapper>
                </CardContentSmallBoxLineWrapper>
                <CardContentSmallBoxLineWrapper>
                  <CardContentSmallBoxWrapper>
                    <CardContentBoxTitleText className="pc">
                      모나파크 CC
                    </CardContentBoxTitleText>
                    <CardContentBoxTitleText className="tablet">
                      모나파크
                      <br />
                      CC
                    </CardContentBoxTitleText>
                    <CardContentBoxTitleText className="mobile">
                      모나파크
                      <br />
                      CC
                    </CardContentBoxTitleText>
                  </CardContentSmallBoxWrapper>
                  <CardContentSmallBoxWrapper>
                    <CardContentBoxTitleText className="pc">
                      블랙스톤 CC
                    </CardContentBoxTitleText>
                    <CardContentBoxTitleText className="tablet">
                      블랙스톤
                      <br />
                      CC
                    </CardContentBoxTitleText>
                    <CardContentBoxTitleText className="mobile">
                      블랙스톤
                      <br />
                      CC
                    </CardContentBoxTitleText>
                  </CardContentSmallBoxWrapper>
                </CardContentSmallBoxLineWrapper>
              </div>
            </CardItemWrapper>
          </CardLineWrapper>
          <CardLineWrapper
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            <CardItemWrapper>
              <CardTextWrapper>
                <CardItemTitleText>맟춤 실무교육</CardItemTitleText>
                <CardItemSubtitleText>
                  골프장 현직 캐디의 밀착 멘토링
                </CardItemSubtitleText>
              </CardTextWrapper>
              <CardContentImage backgroundUrl="assets/img/traning_2.png" />
              <CardContentAbsoluteBoxWrapper>
                수료 후 현장 투입,
                <br />
                현직 멘토와 함께하는 일경험
              </CardContentAbsoluteBoxWrapper>
            </CardItemWrapper>
            <CardItemWrapper className="lg:!pr-[11px] !pl-[15px]">
              <CardTextWrapper>
                <CardItemTitleText>일경험 및 체험 프로그램</CardItemTitleText>
                <CardItemSubtitleText className="lg:whitespace-nowrap">
                  국민취업지원제도 일경험 제도
                  <br />
                  실제 캐디 직업 체험이 가능한 보완 프로그램
                </CardItemSubtitleText>
              </CardTextWrapper>

              <CardContentBoxLineWrapper>
                <CardContentBoxWrapper>
                  <CardContentBoxMainTitleText className="!mb-0">
                    숙식제공
                  </CardContentBoxMainTitleText>
                </CardContentBoxWrapper>
                <CardContentBoxWrapper>
                  <CardContentBoxMainTitleText className="!mb-0">
                    전담 멘토 배정
                  </CardContentBoxMainTitleText>
                </CardContentBoxWrapper>
              </CardContentBoxLineWrapper>
            </CardItemWrapper>
            <CardItemWrapper>
              <CardTextWrapper>
                <CardItemTitleText>수료생 사후 관리</CardItemTitleText>
                <CardItemSubtitleText className="pc">
                  수료 후 모니터링을 통한 보수교육 등 지속 관리
                </CardItemSubtitleText>
                <CardItemSubtitleText className="tablet">
                  수료 후 모니터링을 통한
                  <br /> 보수교육 등 지속 관리
                </CardItemSubtitleText>
                <CardItemSubtitleText className="mobile">
                  수료 후 모니터링을 통한
                  <br />
                  보수교육 등 지속 관리
                </CardItemSubtitleText>
              </CardTextWrapper>

              <div>
                <CardContentSmallBoxLineWrapper>
                  <CardContentSmallBoxWrapper>
                    <CardContentBoxTitleText>
                      스킬 미스매치 최소화
                    </CardContentBoxTitleText>
                  </CardContentSmallBoxWrapper>
                </CardContentSmallBoxLineWrapper>
                <CardContentSmallBoxLineWrapper>
                  <CardContentSmallBoxWrapper>
                    <CardContentBoxTitleText>
                      안정적 자립 환경 제공
                    </CardContentBoxTitleText>
                  </CardContentSmallBoxWrapper>
                </CardContentSmallBoxLineWrapper>
              </div>
            </CardItemWrapper>
          </CardLineWrapper>
        </CardWrapper>
      </SectionLayout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background: center center / cover url("assets/img/bg_about_training.png");
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
    padding-right: 25px;
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

  @media screen and (max-width: 767px) {
    text-align: center;
    padding-right: 25px;
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
    margin-bottom: 40px;
    padding-right: 25px;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  background: center center no-repeat url("assets/img/ic_arrow_down.svg");

  @media screen and (max-width: 767px) {
    overflow-x: scroll;
    max-width: 100%;
    width: 100%;
  }
`;

const CardLineWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  width: inherit;
  background-image: url("assets/img/dot_line.svg");
  background-position: left center;
  background-repeat: repeat-x;

  &:not(:last-of-type) {
    margin-bottom: 200px;
  }

  @media screen and (max-width: 1119px) {
    &:not(:last-of-type) {
      margin-bottom: 140px;
    }
  }

  @media screen and (max-width: 767px) {
    padding-right: 20px;
    width: max-content;
  }
`;

const CardItemWrapper = styled.div`
  background-color: #fff;
  width: 0;
  flex-grow: 1;
  min-width: 226px;
  padding: 30px 22px;
  border-radius: 10px;
  position: relative;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-right: 30px;
  }

  @media screen and (max-width: 1119px) {
    min-height: 280px;
    padding: 22px;

    &:not(:last-of-type) {
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 767px) {
    &:last-of-type {
      margin-right: 30px;
    }
  }
`;

const CardTextWrapper = styled.div``;

const CardItemTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

  @media screen and (max-width: 1119px) {
    font-size: 20px;
  }
`;

const CardItemSubtitleText = styled.p`
  font-size: 13px;
  color: #747474;
  font-weight: 600;
  margin-bottom: 20px;
  max-width: 90%;
  line-height: 1.4;

  @media screen and (max-width: 1119px) {
    font-size: 12px;
    margin-bottom: 15px;
    max-width: 100%;
    letter-spacing: -0.18px;
  }
`;

const CardContentImage = styled.div<{ backgroundUrl: string }>`
  width: 90%;
  height: 130px;
  border-radius: 10px;
  margin-bottom: 20px;
  background: ${({ backgroundUrl }) =>
    `center center / cover url("${backgroundUrl}");`};
`;

const cardContentBoxStyle = css`
  background-color: #5c8262;
  border-radius: 10px;
  width: 0;
  flex-grow: 1;
  display: flex;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &,
  * {
    color: #fff;
  }
`;

const CardContentAbsoluteBoxWrapper = styled.div`
  ${cardContentBoxStyle};
  width: 60%;
  position: absolute;
  right: 22px;
  bottom: 30px;
  padding: 11px 17px;
  font-size: 13px;
  line-height: 1.25;

  @media screen and (max-width: 1119px) {
    width: 70%;
    padding: 11px;
    line-height: 1.4;
  }
`;

const CardContentBoxLineWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1119px) {
    flex-direction: column;
  }
`;

const CardContentSmallBoxLineWrapper = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

const CardContentBoxWrapper = styled.div`
  ${cardContentBoxStyle};
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;

  @media screen and (max-width: 1119px) {
    width: 100%;
    padding: 8px;
    min-height: 60px;

    &:not(:last-of-type) {
      margin-bottom: 5px;
      margin-right: 0;
    }
  }
`;

const CardContentSmallBoxWrapper = styled.div`
  ${cardContentBoxStyle};
  width: 50%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1119px) {
    min-height: 60px;
    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }
`;

const CardContentBoxMainTitleText = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;

  @media screen and (max-width: 1119px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

const CardContentBoxTitleText = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

const CardContentBoxSubtitleText = styled.p`
  font-weight: bold;
  font-size: 12px;
`;
