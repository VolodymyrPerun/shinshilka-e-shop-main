import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const SliderImage = ({ src, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const Image = styled(Img)`
    width: 100%;
    height: auto !important;
    :after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      opacity: 0.5;
      background: linear-gradient(315deg, #bea67c 0%, #000000 74%);
    }
    @media (max-width: 576px) {
      height: 250px !important;
    }
  `

  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(src)
  })

  if (!image) {
    return null
  }

  return (
    <Image
      alt={alt}
      objectFit='contain'
      objectPosition='50% 50%'
      fluid={image.node.childImageSharp.fluid}
    />
  )
}

export default SliderImage
