import React from 'react';

import { ReactComponent as ArrowIcon } from './arrow.svg';
import { ReactComponent as ErrorIcon } from './errorIcon.svg';
import { ReactComponent as GaugeIcon } from './gaugeIcon.svg';
import { ReactComponent as ImageIcon } from './image.svg';
import { ReactComponent as LoadingIcon } from './loading.svg';
import { ReactComponent as SafeStateIcon } from './safeStateIcon.svg';
import { ReactComponent as ShortcutIcon } from './shortcutIcon.svg';
import { ReactComponent as StorageIcon } from './storageIcon.svg';
import { ReactComponent as UserIcon } from './userIcon.svg';

const getIcon = (icon) => {
  const iconSelection = {
      arrowIcon: () => <ArrowIcon/>,
      errorIcon: () => <ErrorIcon />,
      gaugeIcon: () => <GaugeIcon />,
      imageIcon: () => <ImageIcon/>,
      loadingIcon: () => <LoadingIcon/>,
      safeStateIcon: () => <SafeStateIcon/>,
      shortcutIcon: () => <ShortcutIcon/>,
      storageIcon: () => <StorageIcon/>,
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