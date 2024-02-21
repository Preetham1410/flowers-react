import { ToastContainer } from 'react-toastify';
import './App.css';
import Headers from './Header/header';
import Input from './Input';
import 'semantic-ui-css/semantic.min.css';

function App() {

  return (
    <div className="App">
      <Headers/>
      <Input />
      <ToastContainer/>
    </div>
  );
}

export default App;
