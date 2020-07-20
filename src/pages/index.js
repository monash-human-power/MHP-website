import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='container'>
      <div className='row'>
        <div className='col' style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>

          <h1>Monash Human Power!</h1>

        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
