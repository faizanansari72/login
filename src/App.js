
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
      <Route path = '/register' element = {<Register />}/>
      <Route exact path='/dashboard' element = {<Dashboard/>}/>
      <Route path='/sales' element = {<Sales/>}/>
      <Route path='/customer' element = {<Customer/>}/>
      <Route path='/lead' element = {<Lead/>}/>
      <Route path='/admin' element = {<Admin/>}/>
      <Route path='/account' element = {<Account/>}/>
      <Route path='/master' element = {<Master/>}/>
      <Route path='/campaign' element = {<Campaign/>}/>
      <Route path='/mmail' element = {<Email/>}/>
      <Route path='/whatsapp' element = { <Whatsapp/>}/>
      <Route path='/telegram' element = {<Telegram/>}/>
      <Route path='/sms' element = {<SMS/>}/>
      <Route path='/report' element = {<Report/>}/>
     

    

      </Routes>
      </BrowserRouter>

      {/* <Forms/>
      <Register/> */}


     

    

    
 
    </div>
  );
}

export default App;
