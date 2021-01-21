import './App.css';
import React,{useState} from 'react';
import Header from "./components/Header"
import BitcoinModal from "./components/Modal"
import Button from "./components/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [count, setCount] = useState(0);

  const handleRouteChange = () => {
    setCount(count+1);
  };

  return (
    <div className="App">
        <Header/>

        <BitcoinModal/>
        <p>
          <a onClick={() => handleRouteChange()}>Press</a>
        </p>
        <p className="mt-3"> 
          <Button 
            title="Push Me"
            onSubmitData={handleRouteChange}
          />
        <span>{count}</span>
        </p>

    </div>
  );
}

export default App;
