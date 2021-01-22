import './App.css';
import React,{useState,useEffect} from 'react';
import Header from "./components/Header"
import BitcoinModal from "./components/Modal"
import Button from "./components/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCard from './components/ItemCard';
import Toaster from './components/Toaster';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import FloatingInput from "./components/FloatingInput";
import MaterialInput from "./components/MaterialInput";
import Api from "./service/Api"


function App() {

  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([]);

  const handleRouteChange = () => {
    setCount(count+1);
  };

  

  const fetchUser = () =>{
    const api = new Api();

    api.sendGet('b043df5a').then((res) => setUsers(res))
  }

  useEffect(() => {
    fetchUser()
  },[]);

 
  const [userInput, setUserInput] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    console.log(userInput);
  };


  const handleUserInput = (input) => (e) => {
    setUserInput({
      ...userInput,
      [input]: e.target.value,
    });
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
    {
      id: 4,
      title: 'This is fourth list',
      description: 'How are you'

    },
]);

  return (
    <>
     <Header/>
    <div className="container">

     <div className="form-group">
      <div className="row mt-3">
          <div>
            <FloatingInput/>
            <MaterialInput label="Email" id="email" handleChange={handleUserInput("email")}/>
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div>
            <FloatingInput/>
            <MaterialInput label="Password" id="password" handleChange={handleUserInput("password")}/>
          </div>
        </div>
        
        <Button 
              title="Submit"
              onSubmitData={handleLogin}
        />
     </div>

      <BitcoinModal/>

          <div>
            <a onClick={() => handleRouteChange()}>Press</a>
          </div>

          <div className="mt-3"> 
            <Button 
              title="Push Me"
              onSubmitData={handleRouteChange}
            />
            <p>{count}</p>
          </div>


          <ScrollAnimation animateIn="bounceOutLeft" className="container">
          <ItemCard items={items}/>
        </ScrollAnimation>

      
        <Toaster/> 

          <div className="container">
              <ul>
              {users.map((user, index) => (
                  <li key={index}>{user.name}</li>
               ))}
              </ul>
          </div>

    </div>
    </>
  );
}

export default App;
