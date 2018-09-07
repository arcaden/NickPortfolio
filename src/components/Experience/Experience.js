import React from 'react'
import classes from './Experiences.module.css'
import ExpCard from "./ExpCard/ExpCard";
import Fade from 'react-reveal/Fade';


const Experiences = (props) => {
  return(
    <div id ='experiences' className={classes.Experiences}>
      <div className={classes.ExpCards}>
        <Fade>
          <ExpCard title = 'Epropel'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </ExpCard>
        </Fade>
        <Fade delay = {50}>
          <ExpCard title = 'QTMA'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </ExpCard>
        </Fade>
        <Fade delay = {100}>
          <ExpCard title = 'QA'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </ExpCard>
        </Fade>
        <Fade delay = {150}>
          <ExpCard title = 'Jrop'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </ExpCard>
        </Fade>
        <Fade delay = {200}>
          <ExpCard title = 'P5K'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </ExpCard>
        </Fade>
      </div>
    </div>
  )
}

export default Experiences