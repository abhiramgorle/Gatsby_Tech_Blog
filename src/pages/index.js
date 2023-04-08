import  React from "react"
//COMPONENTS
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import HomeBanner from "../components/HomeBanner"
import BlogPostCard from "../components/BlogPostCard"

const IndexPage = () => 
  <Layout>
    <Seo title = "Home" />
    <HomeBanner/>
    <main>
      <BlogPostCard/>
    </main>
    
  </Layout>


export default IndexPage


