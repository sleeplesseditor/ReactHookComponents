import React from 'react';
import DOMPurify from "dompurify";

const getAccordionContent = (key, value) => {
    const tagSelector = {
        imgUpper: () => <img className="accordion-content-img" src={value} alt="JSON-image" key={key} />,
        imgLower: () => <img className="accordion-content-img" src={value} alt="JSON-image" key={key} />,
        content: () => <div className="accordion-paragraph-content" key={key} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(value)}}></div>,
        table: () => console.log('TABLE', value),
        default: () => null
    }    

    return (tagSelector[key] || tagSelector.default)()
}

export const AccordionContent = ({ content }) => {
    const results = Object.entries(content).map(([key, value])=> (
        <div className="accordion-content-media" key={key}>
            {getAccordionContent(key, value)}
        </div>
    ));

    return results;
}