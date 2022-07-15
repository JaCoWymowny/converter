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
  height: 140px;
  position: fixed;
  top: 70%;
  left: 52%;
  z-index: 102;
  background: white;
  border-left: 10px solid red;
`;

export const ModalContent = styled.div`
  top: 1.25em;
  margin-right: 0.31em;
  margin-left: 1em;
  overflow-y: scroll;
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
