import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  backgroundColor?: string;
  textColor?: string;
  headerBackgroundColor?: string;
  headerTextColor?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  padding?: string;
};

const Modal = ({
  isOpen,
  onClose,
  title,
  content,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-800',
  headerBackgroundColor = 'bg-gray-100',
  headerTextColor = 'text-gray-800',
  width = 'max-w-lg',
  height = 'h-auto',
  borderRadius = 'rounded-lg',
  padding = 'p-4',
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`w-full ${width} ${height} ${borderRadius} ${backgroundColor} ${textColor} transition-transform ${
          isOpen ? 'scale-100' : 'scale-0'
        } ${isClosing ? 'translate-y-full' : ''}`}
      >
        <div
          className={`${headerBackgroundColor} ${headerTextColor} ${borderRadius} ${padding} flex justify-between items-center`}
        >
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={handleClose}>
            <AiOutlineClose className="h-5 w-5" />
          </button>
        </div>
        <div className={`p-4 ${textColor}`}>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
