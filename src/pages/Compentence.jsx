import React from 'react'
import Navigation from './../composants/Navigation';
import Languages from './../composants/competence/Languages';
import Experience from '../composants/competence/experience';
import Autre from '../composants/competence/Autre';
import Hobbie from '../composants/competence/hobbie';
import "../styles/pages/competence.css"
export default function compentence() {
  return (
    <div className='knowledges'>
      <Navigation/>
      <div className="knowledgescontent">
        <Languages/>
        <Experience/>
        <Autre/>
        <Hobbie/>
      </div>
    </div>
  )
}
