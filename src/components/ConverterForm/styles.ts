import styled from "styled-components";
import arrow from "../../images/arrow.svg";
import bidirectional from "../../images/bidirectional.svg";

export const FormWrapper = styled.div`
  margin-top: 30px;
  max-width: 1200px;
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
  @media (max-width: 1800px) {
    max-width: 1100px;
  }

  @media (max-width: 915px) {
    flex-direction: column;
    align-items: center;
    justify-content: unset;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 460px;
  
  @media (min-width: 915px) {
    display: flex;
    justify-content: space-between;
    width: 350px;
  }
  
  
  @media (min-width: 1800px) {
    width: 350px;
  }
  
  @media (min-width: 1680px) {
    display: flex;
    justify-content: space-between;
    width: 400px;
  }
`;

export const CustomFieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 1680px) {
    max-width: 400px;
    justify-content: flex-end;
  }
  @media (max-width: 915px) {
    max-width: 460px;
    width: 460px;
    justify-content: space-between;
  }
`;



export const SelectFormField = styled.div`
 display: flex;
 flex-direction: column;
 gap: 5px;
 margin: 20px;
  max-width: 150px;
  
  @media (max-width: 1800px) {
    max-width: 120px;
  }
  
  @media (max-width: 915px) {
    max-width: 200px;
    width: 200px;
  }
`;

export const FormField = styled.div`
 display: flex;
 flex-direction: column;
 gap: 5px;
 margin: 20px;
  @media (min-width: 1800px) {
    margin-left: 70px;
  }
`;

export const FormArrowField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  
  @media (max-width: 1800px) {
    margin-left: 15px;
  }
  
  @media (max-width: 1100px) {
    margin-left: 0;
  }
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
  
  @media (max-width: 1680px) {
    width: 115px;
  }
  
  @media (max-width: 1100px) {
    font-size: 12px;
  }
  
  @media (max-width: 915px) {
    width: 180px;
  }
`;

export const Label = styled.label`
 font-weight: 600;
  font-size: 16px;
  
  @media (max-width: 1120px) {
    font-size: 12px;
    width: 120px;
  }
`;

export const CustomContainer = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 1100px) {
    width: 180px;
  }
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
  
  @media (max-width: 1800px) {
    width: 240px
  }
  
  @media (max-width: 1100px) {
    font-size: 12px;
    width: 200px;
  }
  
  @media (max-width: 915px) {
    width: 180px;
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 20px;
  
  .text-field {
    max-width: 120px;
    
    @media (max-width: 1100px) {
      font-size: 12px;
    }
  }
`;

export const CurrencyResult = styled.span`
  width: 300px;
  height: 56px;
  box-shadow: 0 3px 6px #00000029;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  
  @media (max-width: 1800px) {
    max-width: 240px;
  }

  @media (max-width: 1100px) {
    max-width: 200px;
  }
  
  @media (max-width: 915px) {
    max-width: 180px;
  }
`;

export const Placeholder = styled.span`
  opacity: 0.6;
  
  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;

export const PlaceholderForInput = styled.span`
  opacity: 0.6;
  position: absolute;
  top: 17px;
  right: 5%;
  bottom: 0;
  margin: auto 0;
  
  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;


export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 30px;
  margin-right: 10px;
  
  @media (max-width: 1800px) {
    margin-right: 20px;
  }
  @media (max-width: 915px) {
    justify-content: space-between;
    max-width: 460px;
    margin-right: 0;
    align-self: center;
  }
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
  
  @media (max-width: 915px) {
    width: 195px;
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
  
  @media (max-width: 915px) {
    margin-right: 20px;
  }
`;



