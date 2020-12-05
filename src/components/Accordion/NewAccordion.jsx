import React, { useState } from "react";
import NewAccordionSection from "./NewAccordionSection";
import './Accordion.scss';

const NewAccordion = ({ allowMultipleOpen, children }) => {
    const [openSections, setOpenSections] = useState({})

    const onClick = label => {
        const isOpen = !!openSections[label];

        if (allowMultipleOpen) {
            setOpenSections({
                ...openSections,
                [label]: !isOpen
            })
        } else {
            setOpenSections({
                [label]: !isOpen
            })
        }
    };

    return (
        <div className="accordion-section">
            {children.map(child => (
                <NewAccordionSection
                    isOpen={!!openSections[child.props.label]}
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