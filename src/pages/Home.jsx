import React from 'react'
import Navigation from './../composants/Navigation';
import "../styles/style.css"
import "../styles/pages/home.css"
export default function home() {
  return (
    <div className='home'>
      <Navigation/>
      <div className="homeContent">
        <div className="contenue">
          <h1>Fode Momo Soumah</h1>
          <h2>Developpeur Fulstackt</h2>
          <div className="pdf">
            <a href="./dkd" target='_blank'>Télecharger CV</a>
          </div>
        </div>
      </div>
    </div>
  )
}
