import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LazyLoader from './components/LazyLoader/LazyLoader';
import Menu from './components/Menu/Menu';
import { ReactComponent as CaretIcon } from './components/Menu/Icons/caret.svg';
import './App.scss';

const ImageLoaderPage = React.lazy(() => import('./pages/Images/ImageLoaderPage/ImageLoaderPage'));
const ImageErrorPage = React.lazy(() => import('./pages/Images/ImageErrorPage/ImageErrorPage'));
const ShortcutKeyPage = React.lazy(() => import('./pages/UserExperience/useKeyboardShortcutsPage/useKeyboardShortcutsPage'));
const LocalStoragePage = React.lazy(() => import('./pages/UserExperience/useLocalStoragePage/useLocalStoragePage'));
const SafeStatePage = React.lazy(() => import('./pages/Performance/useSafeStatePage/useSafeStatePage'));
const ResizePage = React.lazy(() => import('./pages/Performance/useResizePage/useResizePage'));
const ListAnimationPage = React.lazy(() => import('./pages/UserExperience/useListAnimationPage/useListAnimationPage'));
const SecretCodePage = React.lazy(() => import('./pages/UserExperience/useSecretCodePage/useSecretCodePage'));
const AccordionPage = React.lazy(() => import('./pages/Components/AccordionPage/AccordionPage'));
const TabsPage = React.lazy(() => import('./pages/Components/TabsPage/TabsPage'));
const ModalPage = React.lazy(() => import('./pages/Components/ModalPage/ModalPage'));
const SidePanelPage = React.lazy(() => import('./pages/Components/SidePanelPage/SidePanelPage'));
const SidePanelAccordionPage = React.lazy(() => import('./pages/Components/SidePanelPage/SidePanelAccordionPage'));
const PreviousPage = React.lazy(() => import('./pages/Performance/usePreviousPage/usePreviousPage'));
const SortableListPage = React.lazy(() => import('./pages/Components/SortableListPage/SortableListPage'));

function App() {
  return (
    <Router>
      <Menu navIcon={<CaretIcon />} title={'React Hook Components'} />
      <Switch>
        <Route exact path="/" component={LazyLoader(ImageLoaderPage)} />
        <Route exact path="/use-image-error" component={LazyLoader(ImageErrorPage)} />
        <Route exact path="/use-shortcut-key" component={LazyLoader(ShortcutKeyPage)} />
        <Route exact path="/use-local-storage" component={LazyLoader(LocalStoragePage)} />
        <Route exact path="/use-safe-state" component={LazyLoader(SafeStatePage)} />
        <Route exact path="/use-resize" component={LazyLoader(ResizePage)} />
        <Route exact path="/use-list-animation" component={LazyLoader(ListAnimationPage)} />
        <Route exact path="/use-secret-code" component={LazyLoader(SecretCodePage)} />
        <Route exact path="/accordion" component={LazyLoader(AccordionPage)} />
        <Route exact path="/tabs" component={LazyLoader(TabsPage)} />
        <Route exact path="/modal" component={LazyLoader(ModalPage)} />
        <Route exact path="/side-panel" component={LazyLoader(SidePanelPage)} />
        <Route exact path="/side-panel-accordions" component={LazyLoader(SidePanelAccordionPage)} />
        <Route exact path="/use-previous" component={LazyLoader(PreviousPage)} />
        <Route exact path="/sortable-list" component={LazyLoader(SortableListPage)} />
      </Switch>
    </Router>
  );
}

export default App;
