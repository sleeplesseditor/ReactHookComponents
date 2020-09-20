import React from 'react';

import { ReactComponent as ArrowIcon } from './arrow.svg';
import { ReactComponent as ImageIcon } from './image.svg';
import { ReactComponent as LoadingIcon } from './loading.svg';

const getIcon = (icon) => {
  const iconSelection = {
      arrowIcon: () => <ArrowIcon/>,
      imageIcon: () => <ImageIcon/>,
      loadingIcon: () => <LoadingIcon/>,
      default: () => null
  }

  return (iconSelection[icon] || iconSelection.default)()
}

export const IconSelector = (icon) => {
    const iconClass = getIcon(icon);
    return (
      <>
        {iconClass}
      </>
    );
};