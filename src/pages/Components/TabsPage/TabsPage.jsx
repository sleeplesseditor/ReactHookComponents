import React, { useState } from 'react';
import '../../page-structure.scss';
import { Content, Tab, Tabs } from '../../../components/Tabs/Tabs';
import './TabsPage.scss';

import TabsIcon from '../../../components/Menu/Icons/tab-white.svg';
import UserIcon from '../../../components/Menu/Icons/userIcon-white.svg';

const TabsPage = () => {
    const [active, setActive] = useState(0);

    const handleClick = e => {
        const index = parseInt(e.target.getAttribute('id'), 0);
        console.log('INDEX', e.target.getAttribute('id'))
        if (index !== active) {
            setActive(index);
        }
    };
    
    return (
        <div className="page-container">
            <h2 className="page-continer-heading">Tabs</h2>
            <div className="tabular-container">
                <div className="tab-holder">
                    <Tabs className="tabs">
                        <Tab className="tabs-button"  onClick={handleClick} active={active === 0} id={0}>
                            <img className="tabs-button-image" src={TabsIcon} alt="" />
                            Content 1
                        </Tab>

                        <Tab className="tabs-button" onClick={handleClick} active={active === 1} id={1}>
                            <img className="tabs-button-image" src={UserIcon} alt="" />
                            Content 2
                        </Tab>
                    </Tabs>
                </div>
                <div className="content-holder">
                    <Content active={active === 0}>
                        Content 1
                    </Content>
                    <Content active={active === 1}>
                        Content 2
                    </Content>
                </div>
            </div>
        </div>
    )
}

export default TabsPage;