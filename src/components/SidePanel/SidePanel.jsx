import React from 'react';
import './SidePanel.scss';

const SidePanel = ({ open, children }) => {
  return (
    <nav className={`side-panel ${open ? 'open' : ''}`}>
      {children}
    </nav>
  )
}

export default SidePanel;