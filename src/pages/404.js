import React from "react"

import Layout from "../components/layout"
import SubpageHeading from "../components/subpage_heading"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <SubpageHeading> 404: PAGE NOT FOUND </SubpageHeading>

    <div className="container-fluid py-5" style={{ height: "100vh" }}>
      <div className="row">
        <div className="col py-5" style={{ textAlign: "center" }}>
          <h2>
            Looks like we just <i>crashed</i> 🚲
          </h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
