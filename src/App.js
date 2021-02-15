import './App.css';

import { CreateElementComponent } from './components/create-element-component/CreateElementComponent';
import { ReactComponent } from './components/react-component/ReactComponent';
import { ReactPureComponent } from './components/react-pure-component/ReactPureComponent';
import { FunctionalComponent } from './components/functional-component/FunctionalComponent';

const App = () => (
  <div className='App'>
    <header className='App-header'>Hello World!</header>
    <CreateElementComponent />
    <ReactComponent />
    <ReactPureComponent />
    <FunctionalComponent />
  </div>
);

export default App;
