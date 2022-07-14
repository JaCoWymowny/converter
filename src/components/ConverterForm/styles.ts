import styled from "styled-components";
import arrow from "../../images/arrow.svg";
import bidirectional from "../../images/bidirectional.svg";

export const FormWrapper = styled.div`
  margin-top: 30px;
`;

export const Form = styled.form`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  //////////////////////////
`;

export const FormField = styled.div`
 display: flex;
 flex-direction: column;
 gap: 5px;
 margin: 20px;  
`;

export const FormArrowField = styled.div`
 display: flex;
 flex-direction: column;
  margin-top: 20px;
`;

export const Arrow = styled.div`
  width: 18px;
  height: 14px;
  background-image: url(${bidirectional});
  background-repeat: no-repeat;
  background-size: 125%;
  top: 50%;
  bottom: 50%;
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
  padding-left: 1rem;
  appearance: none;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
`;

export const Label = styled.label`
 font-weight: 600;
  font-size: 16px;
`;

export const TestContainer = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
`;

export const Input = styled.input`
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  width: 300px;
  height: 56px;
  background: #FFFFFF 0 0 no-repeat padding-box;
  box-shadow: 0 3px 6px #00000029;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  
  &:focus {
    outline: none;
    border: 0;
    border-bottom: 5px solid ${(props) => props.theme.colors.secondary};
  }
  
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 20px;
`;

export const CurrencyResult = styled.span`
  width: 300px;
  height: 56px;
  box-shadow: 0 3px 6px #00000029;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Placeholder = styled.span`
  opacity: 0.6;
`;

export const PlaceholderForInput = styled.span`
  opacity: 0.6;
  position: absolute;
  top: 17px;
  right: 5%;
  bottom: 0;
  margin: auto 0;
`;


export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ConvertButton = styled.button`
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
`;



