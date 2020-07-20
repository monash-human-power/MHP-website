import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MHP_green_crosshair from "../images/Group 4.svg"
import MHP_bike_graphic from "../images/outter_bike.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className='container-fluid py-5'
      style={{
        // height: '100vh',
        background: `repeat center/50px url(${MHP_green_crosshair}), black`,
      }}>

      <div className='row justify-content-center pt-4 mt-4'>
        <img src={MHP_bike_graphic} alt="" />
      </div>

      <div className='row justify-content-center'>
        <h1 style={{ color: "white", backgroundColor: "black", fontWeight: "bold", textAlign: "center", fontSize: 60 }} className='p-2 m-3'>MONASH HUMAN POWER</h1>
      </div>

      {/* <div
          className='col MHP-bg'
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            background: `repeat center/50px url(${MHP_green_crosshair}), black`,
          }}
        >
          <img src={MHP_bike_graphic} alt="" />
          <h1 style={{ color: "white", backgroundColor: "black", fontWeight: "bold" }} className='p-3 m-3'>MONASH HUMAN POWER!</h1>
        </div> */}

    </div>

    <div className='container'>
      <div className='row'>
        <div className='col' style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
          <h1>Monash Human Power</h1>
        </div>
      </div>
    </div>


  </Layout >
)

export default IndexPage
