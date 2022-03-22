import * as React from "react"
import styled from "styled-components"

const queryName = `<// Query Name in CamelCase //>`
const querySourceInstanceName = `<// Name configured by the plugin "gatsby-source-filesystem" in gatsby_config.js //>`

const queryString = `query ${queryName} {
    laptop: allFile(filter: {sourceInstanceName: {eq: "${querySourceInstanceName}"}}) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
    tablet: allFile(filter: {sourceInstanceName: {eq: "${querySourceInstanceName}"}}) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
    mobile: allFile(filter: {sourceInstanceName: {eq: "${querySourceInstanceName}"}}) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 375, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
  }`

const StyledHelpImageQL = styled.pre`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 14px;
`

const HelpImageQL = () => <StyledHelpImageQL>{queryString}</StyledHelpImageQL>

export default HelpImageQL
