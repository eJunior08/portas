import React, { useEffect, useRef } from "react";

/* Styles */
import { Backdrop, Content } from "./styles";

import Portal from "../Portal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<any> = ({ isOpen, onClose, children }) => {
  const backdrop = useRef<any>(null);

  useEffect(() => {
    const { current } = backdrop;

    // Se clicar no fundo (backdrop), fecha o modal
    const clickHandler = (e: any) => e.target === current && onClose();

    // Fecha o modal com a tecla ESC
    const keyHandler = (e: any) => e.which === 27 && onClose();

    if (current) {
      current.addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    return () => {
      if (current) {
        current.removeEventListener("click", clickHandler);
      }

      window.removeEventListener("keyup", keyHandler);
    };
  }, [onClose]);

  return (
    isOpen && (
      <Portal>
        <Backdrop ref={backdrop} className={isOpen && "active"}>
          <Content className="modal-content">{children}</Content>
        </Backdrop>
      </Portal>
    )
  );
};

export default Modal;
