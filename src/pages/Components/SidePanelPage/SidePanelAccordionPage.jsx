import React, { useRef, useState } from 'react';
import '../../page-structure.scss';
import './SidePanelPage.scss';
import './page-position.scss';
import { useOnClickOutside } from '../../../components/Hooks/Helpers/useOnClickOutside';
import SidePanel from '../../../components/SidePanel/SidePanel';
import {AccordionContent} from '../../../components/Accordion/AccordionContent';
import NewAccordion from '../../../components/Accordion/NewAccordion';
import Text from '../../../components/Accordion/Test.json';

const SidePanelAccordionPage = () => {
    const [leftOpen, setLeftOpen] = useState(false);
    const node = useRef();
    const closeAll = () => {
        setLeftOpen(false);
    }
    useOnClickOutside(node, () => closeAll());

    return (
        <>
            <div className="page-container">
                <h2 className="page-continer-heading">Side Panel Accordions</h2>
                <p>Click away from the side panels to close them</p>
                <div className="page-button-container">
                    <button className="panel-btn" onClick={() => setLeftOpen(!leftOpen)} disabled={leftOpen}>Open Left Panel</button>
                </div>
            </div>
            <div className="page-panel-container" ref={node}>
                <SidePanel open={leftOpen} setOpen={setLeftOpen} orientation="left">
                    <NewAccordion>
                        {Text.map(item => (
                            <div label={item.sectionTitle}>
                                <AccordionContent content={item} />
                            </div>
                        ))}
                    </NewAccordion>
                </SidePanel>
            </div>
        </>
    )

}

export default SidePanelAccordionPage;