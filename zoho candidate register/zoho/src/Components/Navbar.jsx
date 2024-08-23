import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { GravityUiMagnifier, FormkitMinimize, GgChart, JamMoreVertical, Fa6RegularHandshake, MdiClipboardTextDateOutline, BiClock, UitCalender, EvaPersonOutline, VaadinHomeO, FluentMdl2CRMServices, F7PersonAltCircleFill, TdesignNotification, IcOutlineSettingsSuggest, MdiPersonTie, IconoirPlusCircle, MynauiQuestionHexagon } from '../icons'
import Candidate from './Candidate'
const Navbar = () => {
     return (
          <div className='container'>
               <div className='Navbar'>
                    <div className='logo'><img className='teceze' src={require("../Assets/teceze-logo.png")} alt="logo" /></div>
                    <div className='search-bar'><div><input className='search' type="text" placeholder='Search Employee' /></div><div className='binaculor'><GravityUiMagnifier /></div></div>
                    <div className='icons'>
                         <div className='clear sus' >Clear Sample Data</div>
                         <div className='sus'>Subscriptions</div>
                         <div className='icon'><IcOutlineSettingsSuggest /></div>
                         <div className='icon'><MdiPersonTie /></div>
                         <div className='icon'><IconoirPlusCircle /></div>
                         <div className='icon'><MynauiQuestionHexagon /></div>
                         <div className='icon'><TdesignNotification /></div>
                         <div className='icon'><F7PersonAltCircleFill /></div>
                    </div>

               </div>
               <div className='contents'>

               <div className='side-navbar'>
                    <div className='column1'>
                         <NavLink to='/' className='menu-item'>
                              <div className='items'><FluentMdl2CRMServices /></div>
                              <div className='item-text' >Services  </div>
                         </NavLink>
                         <NavLink to='/Home' className='menu-item'>
                              <div className='items'><VaadinHomeO /></div>
                              <div className='item-text'>Home  </div>
                         </NavLink>
                         <NavLink to='/SelfService' className='menu-item'>
                              <div className='items'><EvaPersonOutline /></div>
                              <div className='item-text'>Self Services  </div>
                         </NavLink>
                         <NavLink to='/LeaveTracker' className='menu-item'>
                              <div className='items'><UitCalender /></div>
                              <div className='item-text'>Leave Tracker  </div>
                         </NavLink>
                         <NavLink className='menu-item'>
                              <div className='items'><BiClock /></div>
                              <div className='item-text'>Time Tracker  </div>
                         </NavLink>
                         <NavLink className='menu-item'>
                              <div className='items'><MdiClipboardTextDateOutline /></div>
                              <div className='item-text'>Attendence  </div>
                         </NavLink>
                         <NavLink className='menu-item'>
                              <div className='items'><Fa6RegularHandshake /></div>
                              <div className='item-text'>Onboarding  </div>
                         </NavLink>
                         <NavLink className='menu-item'>
                              <div className='items'><JamMoreVertical /></div>
                              <div className='item-text'>More  </div>
                         </NavLink>

                    </div>


                    <div className='column2'>
                         <div className='menu-item'>
                              <div className='items'><GgChart /></div>
                              <div className='item-text'>Reports  </div>
                         </div>
                         <div className='menu-item'>
                              <div className='items'><FormkitMinimize /></div>
                         </div>
                    </div>
               </div>
               <div className='class-candi'>
                    <Candidate/>
               </div>
               </div>
              
               
          </div>
     )
}


export default Navbar
