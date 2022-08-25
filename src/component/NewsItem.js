/** @format */

import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, detail, author , date ,source } = this.props;
    return (
      <div className="my-3 mx-3">
       
        <div className="card " style={{width:"20rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:"90%", zIndex:"1"}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
          {/* style={{width:"18rem"}} */}
          <img
            src={imgUrl}
            className="card-img-top"
            alt={imgUrl}
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text mx-1" style={{ height: "55px" }}>
              {description}...
            </p>

            <a href={detail} target="block" className="btn btn-primary btn-sm">
              More details
            </a>
            <p className="card-text"><small className="text-muted"> {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    );
  }
}
