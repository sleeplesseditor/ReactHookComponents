import React from 'react';

import { ReactComponent as ArrowIcon } from './arrow.svg';
import { ReactComponent as ImageIcon } from './image.svg';
import { ReactComponent as LoadingIcon } from './loading.svg';
import { ReactComponent as ShortcutIcon } from './shortcutIcon.svg';
import { ReactComponent as UserIcon } from './userIcon.svg';

const getIcon = (icon) => {
  const iconSelection = {
      arrowIcon: () => <ArrowIcon/>,
      imageIcon: () => <ImageIcon/>,
      loadingIcon: () => <LoadingIcon/>,
      shortcutIcon: () => <ShortcutIcon/>,
      userIcon: () => <UserIcon/>,
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