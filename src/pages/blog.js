import React from "react"
import { graphql } from "gatsby";
import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo"

const blogPage = ({data}) => (
  <Layout>
      <SEO title="blogs" keywords={[`gatsby`, `application`, `react`]} />
      <h1>latests posts</h1><hr/>
      {data.allMarkdownRemark.edges.map(post=>(
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small> posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br/>
            <br/>
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br/>
            <br/><hr/>
          </div>
         
      ))}
  </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery{
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                path
                title
                date
                author
              }
            }
          }
        }
      }      
`

export default blogPage
