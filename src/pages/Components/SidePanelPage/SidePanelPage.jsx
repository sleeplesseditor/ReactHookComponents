import React, { useRef, useState } from 'react';
import '../../page-structure.scss';
import { useOnClickOutside } from '../../../components/Hooks/Helpers/useOnClickOutside';
import SidePanel from '../../../components/SidePanel/SidePanel';

import Accordion from '../../../components/Accordion/Accordion';
import {AccordionContent} from '../../../components/Accordion/AccordionContent';
import Text from '../../../components/Accordion/Test.json';

const SidePanelPage = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <>
            <div className="page-container">
                <h2 className="page-continer-heading">Side Panel</h2>
            </div>
            <div className="page-panel-container" ref={node}>
                <button className="panel-btn" onClick={() => setOpen(!open)}>Open</button>
                <SidePanel open={open} setOpen={setOpen} orientation="left">
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