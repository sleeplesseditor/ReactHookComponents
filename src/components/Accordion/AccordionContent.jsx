import React from 'react';

const getAccordionContent = (content) => {
    for (const [key, value] of Object.entries(content)) {
        const tagSelector = {
            h1: () => <h1 className="accordion-h1">{value}</h1>,
            paragraph: () => <p className="accordion-paragraph">{value}</p>,
            default: () => <p>TEST</p>
        }    
        return (tagSelector[key] || tagSelector.default)()
    }
}

export const AccordionContent = ({ content }) => {
    for (const item in content) {
        return (
            <div className="accordion-content-media">
                {getAccordionContent(content)}
            </div>
        )
    }
}