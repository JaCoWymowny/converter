import styled from "styled-components";
import arrow from "../../images/arrow.svg";
import bidirectional from "../../images/bidirectional.svg";

interface StyleProps {
  errors?: any;
}

export const ErrorMessage = styled.span`
  margin: 12px 0;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 186px;
  max-height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;

  @media (max-width: 920px) {
    margin-top: 40px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
`;

export const FormFieldWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SelectsWrapper = styled.div`
  width: 372px;
  height: 110px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1300px) {
    width: 300px;
  }
  
  @media (max-width: 920px) {
    width: 280px;
  }
  
`;

export const AmountAndResultWrapper = styled.div`
  width: 624px;
  height: 110px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  
  .result-container {
    height: 86px;
  }

  @media (max-width: 1300px) {
    width: 400px
  }

  @media (max-width: 920px) {
    width: 320px;
  }
`;

export const SelectFormField = styled.div`
   display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: space-between;
  
  .select-container {
    display: flex;
    flex-direction: column;
    height: 86px;
    justify-content: space-between;
  }
`;

export const FormField = styled.div`
 display: flex;
 flex-direction: column;
 height: 110px;
  justify-content: space-between;
  
  .amount-container  {
    display: flex;
    flex-direction: column;
    height: 86px;
    justify-content: space-between;
  }
  
  .specific-width {
    width: 160px;
  }
`;

export const ExchangeArrowWrapper = styled.div`
  width: 18px;
  height: 14px;
  top: 10%;
  position: relative;
  
  @media (max-width: 1300px) {
    top: 4%;
  }
`;

export const Arrow = styled.div`
  width: 18px;
  height: 14px;
  position: absolute;
  background-image: url(${bidirectional});
  background-repeat: no-repeat;
  background-size: 125%;
  margin: auto 0;
`;

export const Select = styled.select`
   width: 150px;
   height: 56px;
   box-shadow: 3px 3px 7px #C2CBD9;
   border-radius: 5px;
   opacity: 1;
   outline: none;
   border: none;
   padding-left: 16px;
   appearance: none;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  
  @media (max-width: 1300px) {
    width: 115px;
  }
`;

export const Label = styled.label`
 font-weight: 600;
  font-size: 16px;
  width: 115px;
`;

export const InputAndResultField = styled.div<StyleProps>`
  label {
    position: relative;
  }

  label span {
    position: absolute;
    right: 0;
    top: 0;
    padding-right: 10px;
    font-weight: normal;
    color: ${(props) => (props.errors.amount?.message? 'red' : props.theme.colors.primary)};

    @media (max-width: 920px) {
      font-size: 12px;
      top: 4px;
    }
  }
  
  .result {
    position: relative;
    display: flex;
    align-items: center;
    width: 300px;
    height: 56px;
    box-shadow: 0 3px 6px #00000029;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};

    @media (max-width: 1300px) {
      width: 180px;
    }

    @media (max-width: 920px) {
      width: 150px;
    }
  }

  .result-currency {
    position: absolute;
    right: 0;
    top: 25%;
    padding-right: 10px;
    color: ${(props) => props.theme.colors.primary};
    font-weight: normal;

    @media (max-width: 920px) {
      font-size: 12px;
      top: 35%;
    }
  }

  .result-amount {
    padding-left: 10px;
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    font-size: 16px;
    color: ${(props): any => props.theme.colors.primary};

    @media (max-width: 920px) {
      font-size: 12px;
    }
  }
`;

export const Input = styled.input<StyleProps>`
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-size: 16px;
  width: 300px;
  height: 56px;
  padding-left: 10px;
  box-shadow: 0 3px 6px #00000029;
  border: 0;
  color: ${(props): any => (props.errors.amount?.message ? 'red' : props.theme.colors.primary)};
  border-bottom: 2px solid ${(props) => 
          (props.errors.amount?.message ? 'red' : props.theme.colors.primary)};
  &:focus {
    outline: none;
    border: 0;
    border-bottom: 2px solid ${(props) => (props.errors.amount?.message ? 'red' : props.theme.colors.secondary)};
  }

  ::-webkit-input-placeholder {
    padding: 0 15px;
    color: ${(props) => (props.errors.amount?.message ? 'red' : props.theme.colors.primary)};

    @media (max-width: 920px) {
      padding: 0 5px;
      font-size: 12px;
    }
  }
  
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  @media (max-width: 1300px) {
    width: 180px;
  }

  @media (max-width: 920px) {
    width: 150px;
  }
`;

export const ErrorField = styled.span<StyleProps>`
  color: ${(props): any => (props.errors && 'red')};
  font-size: 10px;
  width: 150px;
  
  @media (max-width: 1300px) {
    width: 115px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

export const ConvertSubmitButton = styled.button`
  cursor: pointer;
  width: 167px;
  height: 60px;
  margin-left: 24px;
  background: ${(props) => props.theme.buttonColors.primaryDefault};
  box-shadow: 3px 3px 7px #C2CBD9;
  opacity: 1;
  border-radius: 100px;
  border: none;
  font: normal normal 600 16px/22px Open Sans;
  letter-spacing: 0.8px;
  color: #FFFFFF;
  
  &:hover {
    background: ${(props) => props.theme.buttonColors.primaryHover};
    box-shadow: 5px 5px 12px #98ADCD;
  }

  &:disabled {
    background: ${(props) => props.theme.buttonColors.primaryDisabled};
    cursor: not-allowed;
  }

  @media (max-width: 1300px) {
    width: 140px;
    height: 54px;
  }

  @media (max-width: 920px) {
    width: 120px;
    font-size: 14px;
  }
`;

export const HistoryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font: normal normal 600 16px/22px Open Sans;
  letter-spacing: 0.8px;
  width: 195px;
  height: 60px;
  background: ${(props) => props.theme.buttonColors.secondaryDefault};
  box-shadow: 3px 3px 7px #C2CBD9;
  opacity: 1;
  border-radius: 100px;
  border: none;
  color: ${(props) => props.theme.buttonColors.primaryDefault};
  &:hover {
    background: ${(props) => props.theme.buttonColors.secondaryHover};
    box-shadow: 5px 5px 12px #98ADCD;
    color: ${(props) => props.theme.buttonColors.primaryHover};
  }
  
  @media (max-width: 1300px) {
    width: 170px;
    height: 54px;
  }

  @media (max-width: 920px) {
    width: 145px;
    font-size: 14px;
  }
`;



