import React from 'react'
import { NavLink } from 'react-router-dom'


 function Dashboard () {
  return (
    <div >
    <nav className='navbar'>
  
       <ul className='category'>
           <li  className="list"><NavLink  to="/Sales"> <button className='btnzero'>Sales</button></NavLink></li>
           <li className="list"> <NavLink to="/customer"><button className='btnzero'>Customer</button></NavLink></li>
           <li className="list"> <NavLink to="/Admin"><button className='btnzero'>Admin</button></NavLink></li>
           <li className="list"> <NavLink to="/Account"><button className='btnzero'>Account</button></NavLink></li>
           <li className="list"> <NavLink to="/Master"><button className='btnzero'>Master</button></NavLink></li>
           <li className="list"> <NavLink to="/Campaign"><button className='btnzero'>Campaign</button></NavLink></li>
           <li className="list"> <NavLink to="/Email"><button className='btnzero'>Email</button></NavLink></li>
           <li className="list"> <NavLink to="/Whatsapp"><button className='btnzero'>Whatsapp</button></NavLink></li>
           <li className="list"> <NavLink to="/Telegram"><button className='btnzero'>Telegram</button></NavLink></li>
           <li className="list"> <NavLink to="/SMS"><button className='btnzero'>SMS</button></NavLink></li>
           <li className="list"> <NavLink to="/Report"><button className='btnzero'>Report</button></NavLink></li>
           <li className="list"> <NavLink to="/Logout"><button className='btnzero'>Logout</button></NavLink></li>
           
          

           
       </ul>

      

     </nav>
     
     
   </div>
  )
}

export default Dashboard