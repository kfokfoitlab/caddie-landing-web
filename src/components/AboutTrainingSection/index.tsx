import { SectionLayout } from "@/layouts/SectionLayout";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export default function AboutTrainingSection() {
  return (
    <Wrapper>
      <SectionLayout>
        <TypeText>About Training</TypeText>
        <TitleText>현장과 가까운 실무 교육으로 빠른 취업</TitleText>
        <SubtitleText>
          자립 청년 대상 전문직 캐디 양성 서비스를 제공합니다
        </SubtitleText>

        <CardWrapper>
          <CardLineWrapper>
            <CardItemWrapper>
              <CardTextWrapper>
                <CardItemTitleText>사전 직무교육</CardItemTitleText>
                <CardItemSubtitleText>
                  공통 교육 및 직무 이론, 현장실습까지 80시간의 전문 직무 교육을
                  이수
                </CardItemSubtitleText>
              </CardTextWrapper>
              <CardContentImage backgroundUrl="src/assets/img/traning_1.png" />
              <CardContentAbsoluteBoxWrapper>
                취업에 필요한 이론 및 실습
                <br /> 체계적 교육 설계
              </CardContentAbsoluteBoxWrapper>
            </CardItemWrapper>
            <CardItemWrapper>
              <CardTextWrapper>
                <CardItemTitleText>이론교육</CardItemTitleText>
                <CardItemSubtitleText>
                  골프 CS 매너 및 비즈니스 회화, 캐디 기본 이론 등 기본 직무
                  이론 교육 온/오프라인 진행
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
                <CardItemSubtitleText>
                  전국 업무협약 골프장 내 4 Bag 동반 라운딩
                </CardItemSubtitleText>
              </CardTextWrapper>

              <CardContentBoxLineWrapper>
                <CardContentSmallBoxWrapper>
                  <CardContentBoxTitleText>렉스필드 CC</CardContentBoxTitleText>
                </CardContentSmallBoxWrapper>
                <CardContentSmallBoxWrapper>
                  <CardContentBoxTitleText>블루원 CC</CardContentBoxTitleText>
                </CardContentSmallBoxWrapper>
              </CardContentBoxLineWrapper>
              <CardContentBoxLineWrapper>
                <CardContentSmallBoxWrapper>
                  <CardContentBoxTitleText>모나파크 CC</CardContentBoxTitleText>
                </CardContentSmallBoxWrapper>
                <CardContentSmallBoxWrapper>
                  <CardContentBoxTitleText>블랙스톤 CC</CardContentBoxTitleText>
                </CardContentSmallBoxWrapper>
              </CardContentBoxLineWrapper>
            </CardItemWrapper>
          </CardLineWrapper>
          <CardLineWrapper>
            <CardItemWrapper>
              <CardTextWrapper>
                <CardItemTitleText>맟춤 실무교육</CardItemTitleText>
                <CardItemSubtitleText>
                  골프장 현직 캐디의 밀착 멘토링
                </CardItemSubtitleText>
              </CardTextWrapper>
              <CardContentImage backgroundUrl="src/assets/img/traning_2.png" />
              <CardContentAbsoluteBoxWrapper>
                수료 후 현장 투입,
                <br />
                현직 멘토와 함께하는 일경험
              </CardContentAbsoluteBoxWrapper>
            </CardItemWrapper>
            <CardItemWrapper>
              <CardTextWrapper>
                <CardItemTitleText>일경험 및 체험 프로그램</CardItemTitleText>
                <CardItemSubtitleText>
                  국민취업지원제도 일경험 제도
                  <br />
                  실제 캐디 직업 체험이 가능한 보완 브로그램
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
                <CardItemSubtitleText>
                  수료 후 모니터링을 통한 보수교육 등 지속 관리
                </CardItemSubtitleText>
              </CardTextWrapper>

              <CardContentBoxLineWrapper>
                <CardContentSmallBoxWrapper>
                  <CardContentBoxTitleText>
                    스킬 미스매치 최소화
                  </CardContentBoxTitleText>
                </CardContentSmallBoxWrapper>
              </CardContentBoxLineWrapper>
              <CardContentBoxLineWrapper>
                <CardContentSmallBoxWrapper>
                  <CardContentBoxTitleText>
                    안정적 자립 환경 제공
                  </CardContentBoxTitleText>
                </CardContentSmallBoxWrapper>
              </CardContentBoxLineWrapper>
            </CardItemWrapper>
          </CardLineWrapper>
        </CardWrapper>
      </SectionLayout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background: center center / cover url("src/assets/img/bg_about_training.png");
`;

const TypeText = styled.p`
  font-weight: bold;
  color: #ffafaf;
  font-size: 18px;
  margin-bottom: 10px;
`;

const TitleText = styled.p`
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 20px;
  color: #fff;
`;

const SubtitleText = styled.p`
  font-weight: 500;
  margin-bottom: 80px;
  color: #fff;
`;

const CardWrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  background: center center no-repeat url("src/assets/img/ic_arrow_down.svg");
`;

const CardLineWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 200px;
  }
`;

const CardItemWrapper = styled.div`
  background-color: #fff;
  width: 0;
  flex-grow: 1;
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
`;

const CardTextWrapper = styled.div``;

const CardItemTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardItemSubtitleText = styled.p`
  font-size: 13px;
  color: #747474;
  font-weight: 600;
  margin-bottom: 20px;
  max-width: 90%;
  line-height: 1.4;
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
`;

const CardContentBoxLineWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CardContentBoxWrapper = styled.div`
  ${cardContentBoxStyle};
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
`;

const CardContentSmallBoxWrapper = styled.div`
  ${cardContentBoxStyle};
  width: 50%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardContentBoxMainTitleText = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const CardContentBoxTitleText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const CardContentBoxSubtitleText = styled.p`
  font-weight: bold;
  font-size: 12px;
`;
