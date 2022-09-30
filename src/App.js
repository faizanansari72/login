
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Forms from './components/Forms';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Sales from './components/Sales';
import Account from './components/Account';
import Admin from './components/Admin';
import Lead from './components/Lead';
import Logut from './components/Logout';
import Master from './components/Master';
import Campaign from './components/Campaign';
import Email from './components/Email';
import Whatsapp from './components/Whatsapp';
import Telegram from './components/Telegram';
import Customer from './components/Customer';
import SMS from './components/SMS';
import Report from './components/Report';




function App() {
  return (
    <div className="App">
    
  <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Forms />}/>
      <Route path = '/Register' element = {<Register />}/>
      <Route path='/Dashboard' element = {<Dashboard/>}/>
      <Route path='/Sales' element = {<Sales/>}/>
      <Route path='/Customer' element = {<Customer/>}/>
      <Route path='/Lead' element = {<Lead/>}/>
      <Route path='/Admin' element = {<Admin/>}/>
      <Route path='/Account' element = {<Account/>}/>
      <Route path='/Master' element = {<Master/>}/>
      <Route path='/Campaign' element = {<Campaign/>}/>
      <Route path='/Email' element = {<Email/>}/>
      <Route path='/Whatsapp' element = { <Whatsapp/>}/>
      <Route path='/Telegram' element = {<Telegram/>}/>
      <Route path='/SMS' element = {<SMS/>}/>
      <Route path='/Report' element = {<Report/>}/>
     

    

      </Routes>
      </BrowserRouter>

      {/* <Forms/>
      <Register/> */}


     

    

    
 
    </div>
  );
}

export default App;
