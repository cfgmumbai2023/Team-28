import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row' style={{padding: "0px"}} >
            <Heading subtitle='WELCOME TO COACHIT' title='Best Online Education Expertise' />
            <p>Engaging in educational sports fosters growth and knowledge,Where lessons are learned on fields and courts,Minds and bodies intertwine, skills sharpened in full display,Education and athleticism, a winning combination that always pays.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
