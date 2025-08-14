import React from 'react'

export default function ProgesseBar({Languagess,className,titre}) {

  return (
    <div className={className}>
        <h3 className='titre'>{titre}</h3>
        <div className="anne">
            <span>Années d'experiences</span>
            <span>1 ans</span>
            <span>2 ans</span>
        </div>
       
       <div>
        {
          Languagess.map((item)=>{
            let xpAnnee=2;
            let progress=item.xp/xpAnnee*100 +"%";

            return (
                <div key={item.id} className='languageslist'>
                    <li>{item.value}</li>
                    <div className="progresBar" style={{width:progress}}></div>
                </div>
            )
          })}
       </div>

    </div>
  )
}
