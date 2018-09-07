import React from 'react'
import classes from './Intro.module.css'

const Intro = (props) => {
  let attachedClasses = [classes.arrow, classes.bounce]
  return (
    <div className={classes.Container} >
      <div className={classes.Intro}>
        <div className={classes.Blurb}>
          <h1>Hey, I'm Nick.</h1>
          <p>  Let's meet for coffee  ☕ </p>
        </div>
        <div className={classes.IconList}>
          <a className ="fab fa-facebook-f" href = 'https://www.facebook.com/nicholas.dl.chan' target='_blank'/>
          <a className ="fab fa-linkedin" href = 'https://www.linkedin.com/in/nickchan60/' target='_blank'/>
          <a className ="fas fa-envelope" href = 'https://www.nicholasdlchan60@gmail.com' target='_blank'/>
        </div>
        <div className= {attachedClasses.join(' ')}>
          <i className="fa fa-arrow-down fa-2x"/>
        </div>
      </div>
    </div>
  )
}

export default Intro