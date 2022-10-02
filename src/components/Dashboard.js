import React from 'react'
import { NavLink } from 'react-router-dom'

const navData = [
  {navItem: "Sales", href: "/sales"},
  {navItem: "Customer", href: "/customer"},
  {navItem: "Admin", href: "/admin"},
  {navItem: "Account", href: "/account"},
  {navItem: "Master", href: "/master"},
  {navItem: "Campaign", href: "/campaign"},
  {navItem: "Email", href: "/email"},
  {navItem: "Whatsapp", href: "/whatsapp"},
  {navItem: "Telegram", href: "/telegram"},
  {navItem: "SMS", href: "/sms"},
  {navItem: "Report", href: "/report"},
  {navItem: "Logout", href: "/logout"}];

 function Dashboard () {
  return (
    <div className='third-page'>
    <nav className='navbar'>
  
       <ul className='category'>
        {
          navData.map((nav) => {
            return <NavLink to={nav.href} className="navItem"><li className="list">{nav.navItem}</li></NavLink>;
          })
        }  
       </ul>
     </nav>
     
     
   </div>
  )
}

export default Dashboard