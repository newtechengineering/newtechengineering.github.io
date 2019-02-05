import React from 'react'
import Box from './box'
import { StaticQuery, graphql } from 'gatsby'

const FeatureBox = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        allHomeJson {
          edges {
            node {
              quality {
                name
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div class="container feature-box">
        <div class="row row-eq-height justify-content-center">
          {data.allHomeJson.edges[0].node.quality.map((b, i) => (
            <Box title={b.name} key={i} content={b.description} />
          ))}
          {console.log()}
        </div>
      </div>
    )}
  />
)

export default FeatureBox
