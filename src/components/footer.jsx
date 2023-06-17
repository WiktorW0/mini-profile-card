import React from 'react'
import facebook from '../facebook-svgrepo-com.svg'
import instagram from '../instagram-167-svgrepo-com.svg'
import reddit from '../reddit-143-svgrepo-com.svg'
import twitter from '../twitter-svgrepo-com.svg'

function Footer(){
  return(
    <div className='footer-imgs'>
      <img src={facebook} alt="" />
      <img src={instagram} alt="" />
      <img src={reddit} alt="" />
      <img src={twitter} alt="" />
    </div>
  )
}

export default Footer