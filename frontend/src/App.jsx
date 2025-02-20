import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";

// import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);



  const fetchAPI = async() => {
    const response = await axios.get('http://127.0.0.1:5000/api/home');
    setArray(response.data.home);
    //console.log(response.data.users);
  };


  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div>
        <button>Login</button>

        {array.map((home_text, index) => (
          <div key={index}>
            <span>{home_text}</span>
            <br></br>
          </div>
          ))
        }

      </div>

    </>
  )
}

export default App
