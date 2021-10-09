import React, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import Card from './components/Card';
import Loader from './components/Loader'
import Navbar from './components/Navbar';

function App() {
  const [fetchData, setfetchData] = useState(false);
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);

  const getData = async () => {
      setLoad(true);
      const response = await fetch('https://reqres.in/api/users?page=2');
      const res = await response.json();
      setUsers(res.data);
      setInterval(() => {
          setfetchData(true);
      }, 2000);
  };
  return (
    <div className="App">
        <Navbar/>

        {load ? (
           fetchData ? (
              <Card users={users} />
            ) : (
              <Loader />
            )
            ) :(
              <Home getData={getData} />
            )}
    </div>
  );
}

export default App;
