import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/composants/navigation.css'

export default function Navigation() {
  return (
    <div className="sidebar">
        <div className="id">
            <div className="idcontent">
                <img src="../../public/media/profile.png" alt="Mon image" width={150}/>
                <h3>Fode Momo Soumah</h3>
            </div>
        </div>

        <div className="navigation">
            <ul>
                <li>
                <NavLink exact to="/" activeClassName="navActive">
                <i className='fas fa-home'></i>
               <span>Acceuil</span> 
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/competence" activeClassName="navActive">
                <i className='fas fa-mountain'></i>
                <span>Competences</span> 
                </NavLink>
                </li>
                <li>
                 <a href=""><NavLink exact to="/portfolio" activeClassName="navActive">
                <i className='fas fa-image'></i>
               <span>Portfolio</span> 
                </NavLink></a>
                
                </li>
                <li>
                <NavLink exact to="/contact" activeClassName="navActive">
                <i className='fas fa-address-book'></i>
               <span>Contact</span> 
                </NavLink>
                </li>
            </ul>
        </div>

        <div className="socialNetwork">
            <ul>
                <li>
                    <a href="https://google.com">
                    <i className='fab fa-github'></i>
                    </a>
                </li>
                <li>
                    <a href="https://google.com">
                    <i className='fab fa-facebook'></i>
                    </a>
                    
                </li>
                <li>
                    <a href="https://google.com">
                    <i className='fab fa-youtube'></i>
                    </a>
                </li>
                <li>
                     <a href="https://google.com">
                    <i className='fab fa-linkedin'></i>
                    </a>
                </li>
            </ul>

            <div className="signature">
                <p>Universite de Labé <span>2025</span></p>
            </div>
        </div>
    </div>
  )
}
