import * as React from 'react';
import './Tabs.scss';

const Tab = (props) => {
    return (
        <div className={props.active ? 'tabs-button-active' : 'tabs-button'} onClick={props.onClick} id={props.id}>
            {props.children}
        </div>
    )
}

const Tabs = (props) => {
    return (
        <div className="tabs-container">
            {props.children}
        </div>
    )
}

const Content = (props) => {
    return (
        <div className={props.active ? 'tabs-content' : 'tabs-hidden'}>
            {props.children}
        </div>
    )
}

export {
    Content,
    Tab,
    Tabs
}