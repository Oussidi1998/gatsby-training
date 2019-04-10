import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

export default function template({data}) {

    const post  = data.markdownRemark
    
    return(
      <Layout>
        <SEO title={post.frontmatter.title} keywords={[`gatsby`, `application`, `react`]} />
        <div>
        <Link to='/blog'>Go back</Link>
        <h3>{post.frontmatter.title}</h3>
        <small> posted by {post.frontmatter.author} on {post.frontmatter.date}</small>
        <p dangerouslySetInnerHTML={{ __html: post.html}} />
        </div>
      </Layout>
  
    )
}


export const postQuery = graphql`
    query BlogPostQuery($path: String!){
        markdownRemark(frontmatter: { path: { eq: $path}}){
            html
            frontmatter{
                path
                author
                title
                date
            }
        }
      }      
`