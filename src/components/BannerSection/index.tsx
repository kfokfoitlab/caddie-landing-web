import { ContentLayout } from "@/layouts/ContentLayout";
import styled from "@emotion/styled";

export default function BannerSection() {
  return (
    <Wrapper>
      <ContentLayout>
        <HeaderWrapper>
          <HeaderLogoImage src="/assets/img/logo.svg" alt="logo" />

          <HeaderLinkWrapper>
            <HeaderLinkItem href="#">프로그램 안내</HeaderLinkItem>
            <HeaderLinkItem href="#">교육신청</HeaderLinkItem>
          </HeaderLinkWrapper>
        </HeaderWrapper>

        <BannerContentWrapper>
          <BannerTitleText>
            자립 지원을 위한
            <br />
            <span>골프 캐디 양성 프로그램</span>
          </BannerTitleText>
          <BannerSubtitleText>
            취업 연계형 레저 · 문화 · 스포츠 분야 인재 양성 교육
          </BannerSubtitleText>
          <BannerServiceButton>
            서비스 신청하기
            <img src="/assets/img/ic_arrow_right.svg" alt="arrow" />
          </BannerServiceButton>
        </BannerContentWrapper>
      </ContentLayout>

      <BannerScrollButton>
        <img src="/assets/img/scroll_down.png" alt="scroll" />
      </BannerScrollButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 1074px;
  background: center center / cover url("assets/img/bg_banner.png");
  position: relative;

  @media screen and (max-width: 1119px) {
    height: 816px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  width: 100%;
  justify-content: space-between;
`;

const HeaderLogoImage = styled.img`
  height: 20px;

  @media screen and (max-width: 1119px) {
    height: 16px;
  }
`;

const HeaderLinkWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const HeaderLinkItem = styled.a`
  color: #fff;
  font-size: 20px;
  font-weight: 600;

  &:not(:last-of-type) {
    margin-right: 80px;
  }

  @media screen and (max-width: 1119px) {
    font-size: 18px;

    &:not(:last-of-type) {
      margin-right: 90px;
    }
  }
`;

const BannerContentWrapper = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerTitleText = styled.p`
  text-align: center;
  font-size: 70px;
  margin-bottom: 20px;
  color: #fff;

  > span {
    font-weight: 600;
    color: #fff;
  }

  @media screen and (max-width: 1119px) {
    font-size: 50px;
  }
`;

const BannerSubtitleText = styled.p`
  font-size: 24px;
  margin-bottom: 50px;
  color: #fff;

  @media screen and (max-width: 1119px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

const BannerServiceButton = styled.button`
  padding: 22px 75px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #ffffff;
  height: 64px;
  border-radius: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;

  > img {
    margin-left: 8px;
  }

  @media screen and (max-width: 1119px) {
    padding: 15px 50px;
    height: 48px;
    border-radius: 24px;
    font-size: 16px;

    > img {
      margin-left: 5px;
    }
  }
`;

const BannerScrollButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translate(-50%, 0);
  background-color: transparent;
  width: 85px;
  height: 85px;
  outline: 0;
  border: 0;
  cursor: pointer;

  > img {
    width: 85px;
    height: 85px;
  }

  @media screen and (max-width: 1119px) {
    display: none;
  }
`;
