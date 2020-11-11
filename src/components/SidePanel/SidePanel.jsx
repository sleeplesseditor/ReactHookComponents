import React from 'react';
import './SidePanel.scss';

const SidePanel = ({ open, children, orientation }) => {
  return (
    <nav className={`side-panel ${open ? 'open' : ''} ${orientation}`}>
      {children}
    </nav>
  )
}

export default SidePanel;