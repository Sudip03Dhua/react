import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

import { Button } from 'reactstrap';

function App() {
    const notify = ()=>{
            toast("hello")
    }
  return (
    <div >
        
        <Button onClick={notify} color='primary'>Heloo</Button>
        <ToastContainer/>

    </div>
  );
}

export default App;
