import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
  z-index: 101;
`;

export const StyledModal = styled.div`
  width: 546px;
  height: 160px;
  position: fixed;
  top: 70%;
  left: 52%;
  z-index: 102;
  background: white;
  border-left: 10px solid red;
  
  @media (max-width: 1800px) {
    top: 60%;
    left: 40%;
  }
  @media (max-width: 1100px) {
    font-size: 12px;
    width: 300px;
    height: 120px;
    top: 50%;
    left: 40%;
  }
  @media (max-width: 768px) {
    width: 220px;
    left: 30%;
    font-size: 10px;
  }
`;

export const ModalContent = styled.div`
  top: 1.25em;
  margin-right: 0.31em;
  margin-left: 1em;
  height: 100%;
  padding: 0.62em;
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.span`
  margin: 12px 0;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 1.6em;
  height: 1.6em;
  background: none;
  position: absolute;
  top: 1em;
  right: 1.5em;
  cursor: pointer;
  z-index: 99;

  &:hover {
    opacity: 0.5;
  }
`;
