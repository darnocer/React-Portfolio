import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <a href={projects.url} title={projects.title} target="_blank">
                  <i className="fa fa-link"></i>
                </a>
                &nbsp;
                <a href={projects.source} title="Source Code" target="_blank">
                  <i class="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out My Development Projects</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf">
              {projects}
            </div>
            <h1>
              Also check out my personal documentation compilation at{" "}
              <a href="https://github.com/darnocers-tips" target="_blank">
                THE VAULT
              </a>
            </h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
