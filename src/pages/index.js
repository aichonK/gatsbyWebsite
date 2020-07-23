//home  page
import React from "react"

import Layout from "../components/layout"
import HeroComponent from "../components/HeroComponent"
import ServicesComponent from "../components/ServicesComponent"
import ArticlesComponent from "../components/ArticlesComponent"


//resct Component that return jsx what should rendered
const IndexPage = () => (
  <Layout >
    <HeroComponent></HeroComponent>
    <ServicesComponent></ServicesComponent>
    <ArticlesComponent></ArticlesComponent>
  </Layout>
)

export default IndexPage