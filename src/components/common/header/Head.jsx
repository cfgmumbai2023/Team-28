import { Height } from "@mui/icons-material"
import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>IFF</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
            <i className=","></i>
          </div>
          {/* <button className='big-button'>PROFILE BUTTON</button> */}
        </div>
      </section>
    </>
  )
}

export default Head
