import React, { ReactNode } from "react";

interface ModalProps {
  content: ReactNode;
  className?: string;
}

function Modal({ content, className }: ModalProps) {
  return (
    <div
      className={`modal fixed flex h-[100vh] w-[100vw] left-0 top-0 bg-blackBG  ${className}`}
    >
      <div className="modal-content bg-white m-auto rounded-lg">{content}</div>
    </div>
  );
}

export default Modal;
