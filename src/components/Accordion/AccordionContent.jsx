import React from 'react';

const getAccordionContent = (key, value) => {
    const tagSelector = {
        h1: () => <h1 className="accordion-h1" key={key}>{value}</h1>,
        img: () => <img className="accordion-content-img" src={value} alt="JSON-image" key={key} />,
        paragraph: () => <p className="accordion-paragraph" key={key}>{value}</p>,
        default: () => <p>TEST</p>
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