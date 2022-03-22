import * as React from "react"
import { FlexContainer } from "@layouts/index"
import { useStaticQuery, graphql } from "gatsby"
import { ImageQL } from "@images/index"
import { Title } from "@typography/index"
import { colorTheme } from "@colors/lib"

const CompanyTooltip = ({ shortName }) => {
  const data = useStaticQuery(
    graphql`
      query StoreMapTooltipMap {
        images: allFile(
          filter: {
            sourceInstanceName: { eq: "maps_images" }
            relativeDirectory: { eq: "shared" }
            name: { eq: "lojasGaucha_place_map" }
          }
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                  originalName
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <FlexContainer column h="80" w="150">
      <ImageQL
        data={data}
        ignoreAlt
        ignoreTitle
        wrapperStyle={{
          borderRadius: 10,
        }}
      />
      <Title weight="600" variant="secondary" color={colorTheme("orange")}>
        {shortName}
      </Title>
    </FlexContainer>
  )
}

export default CompanyTooltip
