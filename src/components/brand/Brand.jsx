import React from "react";
import "./brand.css";
import { shopify, dropbox, atlassian, slack, google } from "./imports";

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
