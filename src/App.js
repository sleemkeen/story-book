import './App.css';
import React,{useState} from 'react';
import Header from "./components/Header"
import BitcoinModal from "./components/Modal"
import Button from "./components/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCard from './components/ItemCard';

function App() {

  const [count, setCount] = useState(0);

  const handleRouteChange = () => {
    setCount(count+1);
  };

  const [items, setItems] = useState([
    {
      id: 1,
      title: 'This is first list',
      description: 'How  are you'
    },
    {
      id: 2,
      title: 'This is second list',
      description: 'How  are you'

    },
    {
      id: 3,
      title: 'This is third list',
      description: 'How  are you'

    },
]);

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

        <ItemCard items={items}/>

    </div>
  );
}

export default App;
