import { Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard-component/Dashboard'
import SignUp from './components/signup-component/SignUp'
import Login from './components/login-component/Login'
import WrongPage from './components/WrongPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomerContext from "./components/contexts/CustomerContext";
import { useEffect, useState } from "react";
import tempDataJson from './components/contexts/data.json';

function App() {
  const [data,setData]=useState([]);
  useEffect(() => {
    // fetch(`${tempDataJson}`)
    //   .then((res) => res.json())
    //   .then((temp) => {
    //     setData(temp)
    //     console.log(temp);
    //   })
    setData(tempDataJson);
  }, []);
  return (
    <>
    <CustomerContext.Provider value={{data,setData}}>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<WrongPage/>}/>
      </Routes>
    </CustomerContext.Provider>
    </>
  );
}

export default App;
