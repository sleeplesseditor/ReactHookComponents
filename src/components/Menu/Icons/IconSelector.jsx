import React from 'react';

import { ReactComponent as ArrowIcon } from './arrow.svg';
import { ReactComponent as ErrorIcon } from './errorIcon.svg';
import { ReactComponent as GaugeIcon } from './gaugeIcon.svg';
import { ReactComponent as ImageIcon } from './image.svg';
import { ReactComponent as ListIcon } from './listIcon.svg';
import { ReactComponent as LoadingIcon } from './loading.svg';
import { ReactComponent as SafeStateIcon } from './safeStateIcon.svg';
import { ReactComponent as ShortcutIcon } from './shortcutIcon.svg';
import { ReactComponent as SizeIcon } from './sizeIcon.svg';
import { ReactComponent as StorageIcon } from './storageIcon.svg';
import { ReactComponent as UserIcon } from './userIcon.svg';

const getIcon = (icon) => {
  const iconSelection = {
      arrowIcon: () => <ArrowIcon/>,
      errorIcon: () => <ErrorIcon />,
      gaugeIcon: () => <GaugeIcon />,
      imageIcon: () => <ImageIcon/>,
      listIcon: () => <ListIcon />,
      loadingIcon: () => <LoadingIcon/>,
      safeStateIcon: () => <SafeStateIcon/>,
      shortcutIcon: () => <ShortcutIcon/>,
      sizeIcon: () => <SizeIcon/>,
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