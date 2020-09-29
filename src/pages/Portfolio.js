import React, { useState, useEffect } from "react";

function Portfolio(props) {
  var portfolio = props.data;
  console.log(portfolio);

  const [filter, setFilter] = useState("all");
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   setProjects(portfolio);
  // }, []);

  // console.log(projects);

  // useEffect(() => {
  //   setProjects([]);
  //   const filtered = props.data.projects.map((p) => ({
  //     ...p,
  //     filtered: p.category.includes(filter),
  //   }));
  //   setProjects(filtered);
  // }, [filter]);

  if (props.data) {
    var projectCards = props.data.projects.map(function (p) {
      var projectImage = "images/portfolio/" + p.image;
      return (
        <div key={p.title} className="columns portfolio-item">
          <div className="item-wrap">
            <img alt={p.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{p.title}</h5>
                <p>{p.description}</p>
              </div>
            </div>
            <div className="link-icon">
              {p.url ? (
                <a href={p.url} title={p.title} target="_blank">
                  <i className="fa fa-link fa-lg"></i>
                </a>
              ) : null}
              &nbsp;&nbsp;&nbsp;
              {p.source ? (
                <a href={p.source} title="Source Code" target="_blank">
                  <i className="fas fa-code fa-lg"></i>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects</h1>
            <div className="filters">
              <a
                href="/#"
                className={filter === "all" ? "active" : null}
                onClick={() => setFilter("all")}>
                All
              </a>{" "}
              <span className="separator">|</span>
              <a
                href="/#"
                className={filter === "development" ? "active" : null}
                onClick={() => setFilter("development")}>
                Development
              </a>{" "}
              <span className="separator">|</span>
              <a
                href="/#"
                className={filter === "design" ? "active" : null}
                onClick={() => setFilter("design")}>
                Design
              </a>
            </div>
            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf">
              {projectCards}
            </div>
            <h2>
              More projects available on{" "}
              <a href="https://github.com/darnocer" target="_blank">
                Github
              </a>
            </h2>
            <h2>
              Personal documentation compilation Project:&nbsp;
              <a href="https://github.com/darnocers-tips" target="_blank">
                THE VAULT
              </a>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
