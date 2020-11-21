import React from 'react';
import DOMPurify from "dompurify";

const getAccordionContent = (key, value) => {
    const tagSelector = {
        imgUpper: () => <img className="accordion-content-img" src={value} alt="JSON-image" key={key} />,
        imgLower: () => <img className="accordion-content-img" src={value} alt="JSON-image" key={key} />,
        paragraph: () => <p className="accordion-paragraph" key={key} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(value)}}></p>,
        paragraphUpper: () => <p className="accordion-paragraph" key={key} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(value)}}></p>,
        paragraphLower: () => <p className="accordion-paragraph" key={key} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(value)}}></p>,
        default: () => null
    }    
    return (tagSelector[key] || tagSelector.default)()
}

export const AccordionContent = ({ content }) => {
    const results = Object.entries(content).map(([key, value]) => (
        <div className="accordion-content-media" key={key}>
            {getAccordionContent(key, value)}
        </div>
    ));

    return results;
}