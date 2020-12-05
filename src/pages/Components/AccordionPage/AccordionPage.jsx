import React, { useEffect } from 'react';
import Accordion from '../../../components/Accordion/Accordion';
import {AccordionContent} from '../../../components/Accordion/AccordionContent';
import '../../page-structure.scss';
import './AccordionPage.scss';
import Text from '../../../components/Accordion/Test.json';

const AccordionPage = () => {
    const scrollConsole = (e) => {
        // console.log('SCROLL HEIGHT', e.target.scrollHeight)
        console.log('SCROLL TOP', e.target.scrollTop)
        // console.log('CLIENT HEIGHT', e.target.clientHeight)

        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        const top = e.target.scrollTop === 0;
        if (bottom) { 
            console.log("bottom")
        } else if (!e.target.scrollTop || e.target.scrollTop < 10) {
            console.log('top')
        }

     }

    return (
        <div className="page-container" onScroll={scrollConsole}>
            <h2 className="page-continer-heading">Accordion</h2>
            <div className="accordion-container" >
                {Text.map(item => (
                    <Accordion key={item.sectionTitle} title={item.sectionTitle}>
                        <AccordionContent content={item} />
                    </Accordion>
                ))}
            </div>
        </div>
    )
}

export default AccordionPage;