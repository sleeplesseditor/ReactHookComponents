import React from 'react';
import Accordion from '../../../components/Accordion/Accordion';
import {AccordionContent} from '../../../components/Accordion/AccordionContent';
import '../../page-structure.scss';
import './AccordionPage.scss';
import Text from '../../../components/Accordion/Test.json';

const AccordionPage = () => {
    return (
        <div className="page-container">
            <h2 className="page-continer-heading">Accordion</h2>
            <div className="accordion-container">
                <Accordion title="A">
                    <span className="accordion-text">aaaaaa</span>
                </Accordion>
                <Accordion title="B">
                    <span className="accordion-text">bbbbbb</span>
                </Accordion>
                <Accordion title="C">
                    <AccordionContent content={Text} />
                </Accordion>
            </div>
        </div>
    )
}

export default AccordionPage;