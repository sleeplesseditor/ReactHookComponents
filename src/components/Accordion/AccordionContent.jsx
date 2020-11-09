import React from 'react';

const getAccordionContent = (key, value) => {
    const tagSelector = {
        imgUpper: () => <img className="accordion-content-img" src={value} alt="JSON-image" key={key} />,
        imgLower: () => <img className="accordion-content-img" src={value} alt="JSON-image" key={key} />,
        paragraphUpper: () => <p className="accordion-paragraph" key={key}>{value}</p>,
        paragraphLower: () => <p className="accordion-paragraph" key={key}>{value}</p>,
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