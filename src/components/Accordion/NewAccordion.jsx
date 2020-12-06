import React, { useState } from "react";
import NewAccordionSection from "./NewAccordionSection";
import './Accordion.scss';

const NewAccordion = ({ allowMultipleOpen, children }) => {
    const [openSections, setOpenSections] = useState({})

    const onClick = index => {
        const isOpen = !!openSections[index];

        if (allowMultipleOpen) {
            setOpenSections({
                ...openSections,
                [index]: !isOpen
            })
        } else {
            setOpenSections({
                [index]: !isOpen
            })
        }
    };

    const finalIndex = children.length -1;

    return (
        <div className="accordion-section">
            {console.log('INDEX', children.length)}
            {children.map((child, index) => (
                <NewAccordionSection
                    finalIndex={finalIndex}
                    index={index}
                    isOpen={!!openSections[index]}
                    key={child.props.label}
                    label={child.props.label}
                    onClick={onClick}
                >
                    {child.props.children}
                </NewAccordionSection>
            ))}
         </div>
    )
}

export default NewAccordion;