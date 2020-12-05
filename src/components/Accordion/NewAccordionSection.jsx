import React, { useEffect, useRef } from "react";
import './Accordion.scss';

const NewAccordionSection = ({ children, isOpen, label, onClick }) => {

  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, isOpen])

  const handleClick = () => {
    onClick(label);
  };

    return (
      <div >
        <div onClick={handleClick} className="accordion-title">
          {label}
          <div className="accordion-icon">
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
          <div ref={contentRef} className="accordion-content">
            {children}
          </div>
      </div>
    );
}

export default NewAccordionSection;
