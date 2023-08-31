import styled from "@emotion/styled";

export default function Footer() {
  return (
    <Wrapper>
      <Logo src="src/assets/img/logo.svg" alt="logo" />
      <Text>서울특별시 성동구 상원 12길 30 서울숲동진 IT타워 11층</Text>
      <Text>COPYRIGHT ⓒ 2023 KFO ALL RIGHTS RESERVED.</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 65px 100px;
  background-color: #474747;
`;

const Logo = styled.img`
  height: 20px;
  margin-bottom: 28px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #fff;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;
