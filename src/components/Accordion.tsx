import React, { useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

 type AccordionProps = {
  title: string;
  content: string;
  color?: string;
  titleSize?: string;
  contentSize?: string;
  borderRadius?: string;
  border?: string;
  padding?: string;
  margin?: string;
};

const Accordion = ({
  title,
  content,
  color = 'text-gray-800',
  titleSize = 'text-lg',
  contentSize = 'text-base',
  borderRadius = 'rounded-lg',
  border = 'border',
  padding = 'py-2 px-4',
  margin = 'mb-4',
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${border} ${color} ${borderRadius} ${margin}`}>
      <button
        className={`flex justify-between items-center w-full ${padding} ${titleSize} font-medium text-left focus:outline-none`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <BsChevronUp className="w-5 h-5" /> : <BsChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className={`px-4 pb-2 ${contentSize}`}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
