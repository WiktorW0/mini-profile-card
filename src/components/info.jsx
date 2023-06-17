import React from 'react'
import profilePic from '../cngzQWHr_400x400.jpg'
import email from '../mail-svgrepo-com.svg'
import linkedin from '../linkedin-svgrepo-com.svg'

function Info(){
  return(
    <div className='info--row'>
      <img src={profilePic} alt="" className='info--img'/>
      <h1>CdawgVA</h1>
      <h3>Voice Actor</h3>
      <h4>cdawgva.website</h4>
      <div className='info--buttons'>
        <button className='emailBtn'>
          <img src={email} alt="" />
          <p>
            Email
          </p>
          
        </button>
        <button className='liBtn'>
          <img src={linkedin} alt="" />
          <p>
            LinkedIn  
          </p>
        </button>
      </div>
    </div>
  )
}

export default Info
