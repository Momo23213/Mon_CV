import React from 'react'
import ProgesseBar from './progesseBar'
import "../../styles/composants/language.css"
export default function Languages() {
   const state={
    Languages:[
        {id:1,value:"Javascript",xp:1.8},
        {id:2,value:"HTML", xp:2},
        {id:3,value:"CSS", xp:2},
        {id:4,value:"Node Js", xp:1.5}
    ],
    frameworks:[
        {id:1,value:"React",xp:1.8},
        {id:2,value:"React-native",xp:2},
        {id:3,value:"tailwindCss",xp:1.2}
        
    ]
   }

   let {Languages,frameworks}=state

  return (
    <div className="langueframe">
        <ProgesseBar 
        Languagess={Languages} 
        className="LanguagesDisplay"
        titre="Languages"
        />

        <ProgesseBar 
        Languagess={frameworks}
        className="frameworkDisplay"
        titre="Frameworks"
        />
    </div>
  )
}
