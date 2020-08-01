import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1
      className="pt-5 pb-1"
      style={{ textAlign: "center", color: "white", background: "var(--MHP-purple)", fontWeight: "bold", fontSize: "60px" }}
    >
      404: PAGE NOT FOUND
    </h1>



    <div
      className='container-fluid py-5'
      style={{ height: '100vh' }}>
      <div className="row">

        <div className="col intro py-5" style={{ textAlign: "center" }}>
          <h1>404: PAGE NOT FOUND 🚲</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness. 🚲</p>
        </div>

        <div className="col py-5" style={{ textAlign: "center" }}>
          <h1>404: PAGE NOT FOUND 🚲</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness. 🚲</p>
        </div>


      </div>
    </div>

  </Layout >
)

export default NotFoundPage
