import React, { Component } from "react";

class TUF extends Component {
  render() {
    if (this.props.data) {
      var org = this.props.data.organization;
      var website = this.props.data.website;
      var description = this.props.data.description;
    }

    return (
      <section id="tuf">
        <div className="row">
          <div className="three columns">
            <img
              className="logo"
              src="images/portfolio/tuflogo.png"
              alt="TUF Logo"
            />
          </div>
          <div className="nine columns main-col">
            <h2>{org}</h2>
            <p>
              {" "}
              I am a proud team member of{" "}
              <a href={website} target="_blank">
                <b>{org}</b>
              </a>
              , {description}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default TUF;
