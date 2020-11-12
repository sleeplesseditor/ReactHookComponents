import React, { useRef, useState } from 'react';
import '../../page-structure.scss';
import './SidePanelPage.scss';
import { useOnClickOutside } from '../../../components/Hooks/Helpers/useOnClickOutside';
import SidePanel from '../../../components/SidePanel/SidePanel';

import Accordion from '../../../components/Accordion/Accordion';
import {AccordionContent} from '../../../components/Accordion/AccordionContent';
import Text from '../../../components/Accordion/Test.json';

const SidePanelPage = () => {
    const [leftOpen, setLeftOpen] = useState(false);
    const [rightOpen, setRightOpen] = useState(false);
    const node = useRef();
    const closeAll = () => {
        setLeftOpen(false);
        setRightOpen(false);
    }
    useOnClickOutside(node, () => closeAll());

    return (
        <>
            <div className="page-container">
                <h2 className="page-continer-heading">Side Panel</h2>
                <p>Click away from the side panels to close them</p>
                <div className="page-button-container">
                    <button className="panel-btn" onClick={() => setLeftOpen(!leftOpen)} disabled={leftOpen}>Open Left Panel</button>
                    <button className="panel-btn" onClick={() => setRightOpen(!rightOpen)} disabled={rightOpen}>Open Right Panel</button>
                </div>
            </div>
            <div className="page-panel-container" ref={node}>
                <SidePanel open={leftOpen} setOpen={setLeftOpen} orientation="left">
                    {Text.map(item => (
                        <Accordion key={item.sectionTitle} title={item.sectionTitle}>
                            <AccordionContent content={item} />
                        </Accordion>
                    ))}
                </SidePanel>
                <SidePanel open={rightOpen} setOpen={setRightOpen} orientation="right">
                    {Text.map(item => (
                        <Accordion key={item.sectionTitle} title={item.sectionTitle}>
                            <AccordionContent content={item} />
                        </Accordion>
                    ))}
                </SidePanel>
            </div>
        </>
    )

}

export default SidePanelPage;