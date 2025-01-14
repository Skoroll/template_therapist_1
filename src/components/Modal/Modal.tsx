import React, { ReactNode } from "react";

interface ModalProps {
  content: ReactNode;
  className?: string;
  onClose: () => void; // Ajout de la fonction pour fermer la modale
}

function Modal({ content, className, onClose }: ModalProps) {
  return (
    <div
      className={`modal fixed inset-0 bg-blackBG bg-opacity-50 flex items-center justify-center ${className}`}
      onClick={onClose} // Ferme la modale lorsque l'on clique hors de celle-ci
    >
      <div
        className="modal-content bg-white rounded-lg p-6 relative"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant à l'intérieur de la modale
      >
        {/* Icône de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Contenu de la modale */}
        {content}
      </div>
    </div>
  );
}

export default Modal;
