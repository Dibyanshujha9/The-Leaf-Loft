import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Store from './pages/Store.jsx'
import Admin from './pages/Admin.jsx'
export default function App(){
  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <div className="brand">🪴 Mini Plant Store</div>
          <nav className="row" style={{gap:'0.5rem'}}>
            <NavLink to="/" end className={({isActive})=> isActive ? 'badge ok':'badge'}>Store</NavLink>
            <NavLink to="/admin" className={({isActive})=> isActive ? 'badge ok':'badge'}>Admin</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Store/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
        <div className="footer">Built for Urvann ♡</div>
      </div>
    </BrowserRouter>
  )
}