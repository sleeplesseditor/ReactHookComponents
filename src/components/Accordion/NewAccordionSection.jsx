import React, { useEffect, useRef } from "react";
import './Accordion.scss';

const NewAccordionSection = ({ children, index, isOpen, label, onClick }) => {

  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, isOpen])

  const handleClick = () => {
    onClick(index);
  };

  const nextOpen = () => {
    onClick(index + 1);
  }

  const previousOpen = () => {
    onClick(index - 1);
  }

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
            <span>
            {index !== 0 ? <button onClick={previousOpen}>Previous</button> : null}
            <button onClick={nextOpen}>Next</button>
            </span>
          </div>
      </div>
    );
}

export default NewAccordionSection;
