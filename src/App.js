import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LazyLoader from './components/LazyLoader/LazyLoader';
import Menu from './components/Menu/Menu';
import { ReactComponent as CaretIcon } from './components/Menu/Icons/caret.svg';

const ImageLoaderPage = React.lazy(() => import('./pages/Images/ImageLoaderPage/ImageLoaderPage'));
const ImageErrorPage = React.lazy(() => import('./pages/Images/ImageErrorPage/ImageErrorPage'));

function App() {
  return (
    <Router>
      <Menu navIcon={<CaretIcon />} title={'React Hook Components'} />
      <Switch>
        <Route exact path="/" component={LazyLoader(ImageLoaderPage)} />
        <Route exact path="/use-image-error" component={LazyLoader(ImageErrorPage)} />
      </Switch>
    </Router>
  );
}

export default App;
