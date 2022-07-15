import React, { FC, Fragment, useEffect, useState } from "react";
import { ModalOverlay, StyledModal, CloseButton, ModalContent, ErrorMessage } from "./styles";
import { createPortal } from 'react-dom';
import close_modal from "../../images/close_modal.svg"

interface Props {
  show: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: FC<Props> = ({show, onClose, children}) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true)
  }, []);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  }

  const modalFragment = show ? (
    <Fragment>
      <ModalOverlay />
      <StyledModal>
        <CloseButton onClick={handleClose}>
          <img alt="close button" src={close_modal} />
        </CloseButton>
        <ModalContent>
          <ErrorMessage>Komunikat Błędu</ErrorMessage>
          {children}
        </ModalContent>
      </StyledModal>
    </Fragment>
  ) : null;

  if(isVisible) {
    return createPortal(
      modalFragment,
      document.getElementById("modal-root")!
    )
  } else {
    return null;
  }
}

export default Modal;
