import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Intro from '../components/Intro/Intro'
import Experiences from '../components/Experience/Experience'

const IndexPage = () => (
  <Layout>
    <Intro/>
    <Experiences/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
