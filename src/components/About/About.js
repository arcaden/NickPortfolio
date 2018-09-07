import React from 'react'
import classes from './About.module.css'
import ProfileImg from '../../assets/img/profile.jpg'

const About = () => {
  return(
    <div className={classes.AboutContainer}>
      <div className={classes.AboutText}>
        <h2> Hello! </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ante, lobortis non iaculis in, semper id nisl. Nunc lectus leo, lobortis ut tincidunt nec, consectetur eget felis. Quisque pretium nisl est, quis pretium metus finibus non. Vestibulum lectus risus, facilisis eget feugiat ac, tempor quis magna. Integer non sem accumsan, eleifend orci sed, aliquam sapien. Morbi id dignissim neque, non facilisis mauris. Pellentesque neque dui, feugiat eu hendrerit vehicula, consectetur eget urna. Vestibulum sem arcu, luctus pharetra justo vitae, elementum pharetra quam.

          Donec blandit tortor porta, aliquam nisl vel, gravida lectus. Maecenas cursus dolor ut nulla varius dictum. Curabitur eu ex velit. Suspendisse quis lacinia leo, quis facilisis justo. Proin in arcu eget ipsum pretium porta sed nec elit. Maecenas lacus sem, condimentum eu eleifend in, posuere vitae nisi. Fusce mollis mi at sapien convallis, vitae interdum erat laoreet. Cras in tellus nec odio finibus congue. Morbi nec dui elit. Phasellus porttitor, risus vestibulum laoreet consectetur, nulla massa porta purus, ultricies mollis nisi libero id eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin a sodales augue. Quisque et ante elit. Etiam nec diam eget nisl scelerisque viverra.
        </p>
      </div>
      <div className={classes.AboutImg}>
        <img src = {ProfileImg}/>
      </div>
    </div>
  )
}

export default About