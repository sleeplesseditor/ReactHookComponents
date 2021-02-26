import * as React from 'react';
import './Tabs.scss';

const Tab = ({ active, children, className, id, onClick }) => {
    const childrenWithProps =  React.Children.map(children, child => {
        if(React.isValidElement(children)) {
            return React.cloneElement(child, {id, onClick});
        }
            return child;  
    })

    return (
        <div className={active ? `${className}-active` : className} onClick={onClick} id={id}>
            {childrenWithProps}
        </div>
    )
}

const Tabs = ({ children, className }) => {
    return (
        <div className={`${className}-container`}>
            {children}
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