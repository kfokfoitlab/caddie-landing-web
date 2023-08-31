import { SectionLayout } from "@/layouts/SectionLayout";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { css } from "@emotion/react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import { Button } from "@mui/base";

interface FormData {
  name: string;
  birth: string;
  phone: string;
  address: string;
  address_detail: string;
  postcode: string;
}

export default function FormSection() {
  const [isShowForm, setIsShowForm] = useState(false);

  const [isAgree, setIsAgree] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    birth: "",
    phone: "",
    address: "",
    address_detail: "",
    postcode: "",
  });

  const [errorText, setErrorText] = useState<FormData>({
    name: "",
    birth: "",
    phone: "",
    address: "",
    address_detail: "",
    postcode: "",
  });

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof FormData,
  ) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });
  };

  const handleClickAddressInput = () => {
    new window.daum.Postcode({
      oncomplete(data: any) {
        setFormData({
          ...formData,
          address: data.address,
          postcode: data.zonecode,
        });
      },
    }).open();
  };

  const handleClickSubmit = () => {
    if (!isShowForm) {
      setIsShowForm(true);
      return;
    }
    let isValidateForm = true;

    const { name, birth, phone, address, address_detail, postcode } = formData;

    const validateErrorText: FormData = {
      name: "",
      phone: "",
      birth: "",
      address: "",
      address_detail: "",
      postcode: "",
    };

    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/g;
    const birthRegex = /^\d{6}$/g;

    if (!name) {
      validateErrorText.name = "이름을 입력해주세요.";
      isValidateForm = false;
    }

    if (!birth) {
      validateErrorText.birth = "생년월일을 입력해주세요.";
      isValidateForm = false;
    } else if (!birthRegex.test(birth)) {
      validateErrorText.birth = "생년월일을 정확히 입력해주세요.";
      isValidateForm = false;
    }

    if (!phone) {
      validateErrorText.phone = "전화번호를 입력해주세요.";
      isValidateForm = false;
    } else if (!phoneRegex.test(phone)) {
      validateErrorText.phone = "전화번호를 정확히 입력해주세요.";
      isValidateForm = false;
    }

    if (!address || !postcode) {
      validateErrorText.address = "주소를 입력해주세요.";
      isValidateForm = false;
    }

    if (!address_detail) {
      validateErrorText.address_detail = "상세주소를 입력해주세요.";
      isValidateForm = false;
    }

    setErrorText(validateErrorText);

    if (!isValidateForm) {
      return;
    }

    console.log(formData);
  };

  return (
    <SectionLayout>
      <TypeText>Application for Training</TypeText>
      <TitleText>교육신청</TitleText>
      <SubtitleText>선착순 50명 절찬 모집중, 서둘러 신청하세요!</SubtitleText>
      <FormWrapper isShowForm={isShowForm}>
        <FormItemWrapper>
          <FormLabelText>
            이름 <span>*</span>
          </FormLabelText>
          <FormInputWrapper>
            <FormInput
              isError={Boolean(errorText.name)}
              value={formData.name}
              onChange={(e) => handleChangeForm(e, "name")}
              placeholder="예) 홍길동"
            />
          </FormInputWrapper>
          <FormErrorText>{errorText.name}</FormErrorText>
        </FormItemWrapper>
        <FormItemWrapper>
          <FormLabelText>
            생년월일 <span>*</span>
          </FormLabelText>
          <FormInputWrapper>
            <FormInput
              type="tel"
              isError={Boolean(errorText.birth)}
              value={formData.birth}
              onChange={(e) => handleChangeForm(e, "birth")}
              placeholder="예) 990101"
            />
          </FormInputWrapper>
          <FormErrorText>{errorText.birth}</FormErrorText>
        </FormItemWrapper>
        <FormItemWrapper>
          <FormLabelText>
            휴대전화 <span>*</span>
          </FormLabelText>
          <FormInputWrapper>
            <FormInput
              isError={Boolean(errorText.phone)}
              value={formData.phone}
              onChange={(e) => handleChangeForm(e, "phone")}
              placeholder="예) 010-1234-5678"
            />
          </FormInputWrapper>
          <FormErrorText>{errorText.phone}</FormErrorText>
        </FormItemWrapper>
        <FormItemWrapper className="lg:!mb-[60px]">
          <FormLabelText>
            주소 <span>*</span>
          </FormLabelText>
          <FormInputWrapper>
            <FormInput
              className="mb-[10px] lg:mb-[6px]"
              value={formData.address}
              isError={Boolean(errorText.address)}
              placeholder="예) 연희동 123, 도산대로 22"
              readOnly
              onClick={handleClickAddressInput}
            />
            <FormInput
              value={formData.address_detail}
              onChange={(e) => handleChangeForm(e, "address_detail")}
              isError={Boolean(errorText.address_detail)}
              placeholder="예) 101동 102호"
            />
          </FormInputWrapper>

          <FormErrorText>
            {errorText.address || errorText.address_detail}
          </FormErrorText>
        </FormItemWrapper>
        <FormItemWrapper className="flex items-center justify-center">
          <FormCheckboxLabelWrapper
            label={
              <div className="flex items-center">
                <FormCheckboxLabelText>
                  개인정보 수집/이용 동의
                </FormCheckboxLabelText>
                <FormCheckboxLabelLinkText href="/privacy" target="_blank">
                  보기
                </FormCheckboxLabelLinkText>
              </div>
            }
            control={
              <StyledCheckbox
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
                checked={isAgree}
                onChange={(e) => setIsAgree(e.target.checked)}
              />
            }
          />
        </FormItemWrapper>
      </FormWrapper>
      <SubmitButton
        onClick={handleClickSubmit}
        disabled={isShowForm ? !isAgree : false}
      >
        신청하기
      </SubmitButton>
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
`;

const TitleText = styled.p`
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 20px;

  @media screen and (max-width: 1119px) {
    font-size: 32px;
    margin-bottom: 10px;
  }
`;

const SubtitleText = styled.p`
  font-weight: 500;

  @media screen and (max-width: 1119px) {
    font-size: 16px;
  }
`;

const FormWrapper = styled.form<{ isShowForm: boolean }>`
  width: 100%;
  max-width: 850px;
  overflow: hidden;

  ${({ isShowForm }) =>
    isShowForm
      ? css`
          margin-top: 80px;
          height: auto;
        `
      : css`
          margin-top: 0;
          height: 0;
        `}

  @media screen and (max-width: 1119px) {
    ${({ isShowForm }) =>
      isShowForm
        ? css`
            margin-top: 40px;
            height: auto;
          `
        : css`
            margin-top: 0;
            height: 0;
          `}
  }
`;

const FormItemWrapper = styled.div`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 56px;
  }

  @media screen and (max-width: 1119px) {
    &:not(:last-of-type) {
      margin-bottom: 30px;
    }
  }
`;

const FormLabelText = styled.p`
  color: #707070;
  font-weight: 500;
  margin-bottom: 20px;

  > span {
    color: #ff0000;
  }

  @media screen and (max-width: 1119px) {
    margin-bottom: 10px;
  }
`;

const FormInputWrapper = styled.div`
  width: 100%;
`;

const FormErrorText = styled.p`
  font-size: 14px;
  color: red;
  position: absolute;
  bottom: -6px;
  left: 0;
  transform: translate(0, 100%);

  @media screen and (max-width: 1119px) {
    font-size: 12px;
  }
`;

const FormInput = styled.input<{ isError: boolean }>`
  width: 100%;
  outline: 0;
  border: 1px solid ${({ isError }) => (isError ? "red" : "#ccc")};
  font-size: 18px;
  border-radius: 5px;
  height: 50px;
  line-height: 50px;
  padding: 0 18px;

  &::placeholder {
    color: #d4d4d4;
  }

  @media screen and (max-width: 1119px) {
    font-size: 16px;
  }
`;

const FormCheckboxLabelWrapper = styled(FormControlLabel)``;

const FormCheckboxLabelText = styled.p`
  color: #707070;
  font-weight: 500;
  margin-right: 5px;

  @media screen and (max-width: 1119px) {
    font-size: 14px;
  }
`;

const FormCheckboxLabelLinkText = styled.a`
  color: #c2c2c2;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;

  @media screen and (max-width: 1119px) {
    font-size: 12px;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  * path {
    color: #707070;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #242424;
  border: 0;
  outline: 0;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  height: 64px;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  margin-top: 60px;

  &.Mui-disabled {
    pointer-events: none;
    opacity: 0.3;
  }

  @media screen and (max-width: 1119px) {
    margin-top: 40px;
    height: 48px;
    border-radius: 24px;
    width: 210px;
    font-size: 16px;
  }
`;
