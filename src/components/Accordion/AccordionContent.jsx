import React from 'react';

const getAccordionContent = (content) => {
    console.log('HERP', content)
    const tagSelector = {
        paragraph: () => <p className="accordion-paragraph">{content}</p>,
        default: () => <p>TEST</p>
    }

    return (tagSelector[content] || tagSelector.default)()
}

export const AccordionContent = ({ content }) => {
    console.log('CON', content)
    return (
        <div className="accordion-content-media">
            {getAccordionContent(content)}
        </div>
    )
}