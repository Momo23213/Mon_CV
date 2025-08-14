import React from 'react'
import "../styles/style.css"
import "../styles/pages/notfoun.css"
import { NavLink } from 'react-router-dom';
export default function notfound() {
  return (
    <div className='Notfound'>
      <div className="notfoundcontent">
        <h3>Désolé cette n'existe pas !</h3>
        <NavLink exact to="/">
          <i className='fas fa-home'></i>
          <span>Acceuil</span>
        </NavLink>

      </div>
    </div>
  )
}
