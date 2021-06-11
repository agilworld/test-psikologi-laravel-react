import React from "react"

export default function({number=10, numberActives=1}) {

  return (<div className="wizard">
    <ul>
      {Array.from({length:number-1},(v,k)=>k+1).map(value=><li key={value} className={value <= numberActives?"is-active":""} style={{width:"9.89091%"}}>
        <span></span>
      </li>)}
    </ul>
  </div>
  )
}
