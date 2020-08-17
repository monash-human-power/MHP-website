import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Button from "../button";

import x from "../../images/lightning_bolt.png";

const SubTeam = () => (
  <div className="col-md m-1 p-3" style={{ border: "10px black solid" }}>
    <h2>Electrical</h2>
    <p>Handling both the electrical and software aspects of the bike.</p>
    <div class="row mt-5">
      <div className="col-9">
        {/* Should be hideable */}
        <Button href="/join">Apply</Button>
      </div>
      <div className="col-3 text-right">
        <img src={x} style={{ height: 30, width: 30 }}></img>
      </div>
    </div>
  </div>
);

const SubTeams = () => (
  <>
    <div className="row justify-content-center">
      <h1
        className="p-3 my-2"
        style={{ background: "black", color: "white", alignText: "centre" }}
      >
        ×~SubTeams~×
      </h1>
    </div>

    <div className="row">{[1, 2, 3].map(SubTeam)}</div>

    <div className="row">{[1, 2, 3].map(SubTeam)}</div>

    <div className="row justify-content-center">
      <div className="col-md-5 col-sm my-3">
        <Button href="/subteams">Meet the teams</Button>
      </div>
    </div>
  </>
);

export default SubTeams;
