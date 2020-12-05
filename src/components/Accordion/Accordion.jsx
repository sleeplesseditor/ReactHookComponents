import React, { useState, useRef, useEffect } from 'react';
import CaretIcon from '../Menu/Icons/caret.png';
import './Accordion.scss';

const Accordion = ({ children, index, title }) => {
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toogleActive = () => {
    setActive(!active)
  }

  // NEXT AND PREVIOUS OPEN BUTTONS

  console.log('INDEX', index)

  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={toogleActive}>
        <h4 className="accordion-title-content">{title}</h4>
        <span className={active ? 'accordion-icon rotate': 'accordion-icon'}>
            <img className="accordion-icon-image" src={CaretIcon} alt="caret-icon" />
        </span>
      </button>

      <div
        ref={contentRef}
        className="accordion-content"
      >
        {children}
        {index === 0 ? <p>INDEX IS {index}</p> : null}
      </div>
    </div>
  )
}

export default Accordion;