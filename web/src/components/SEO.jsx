import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO() {
  const {
    site: {
      siteMetadata: { title, description, author, siteUrl, phone, email }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          phone
          email
        }
      }
    }
  `)
  return (
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      title={title}
      meta={[
        {
          name: "google-site-verification",
          content: ""
        },
        { name: "description", content: description },
        { name: "author", content: author },
        {
          name: "keywords",
          content:
            "Freelance, Graphic Design, Web Development, Auckland, New Zealand"
        },
        { name: "phone", content: phone },
        { name: "email", content: email },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" }
      ].concat([])}>
      <link rel='canonical' href={siteUrl} />
    </Helmet>
  )
}
