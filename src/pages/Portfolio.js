import React, { useState, useEffect } from "react";

function Portfolio(props) {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setProjects(props.data && props.data.projects);
    setFilteredProjects(props.data && props.data.projects);
  }, [props.data]);

  useEffect(() => {
    setFilteredProjects([]);
    const filtered = projects
      ? projects.map((p) => ({
          ...p,
          filtered: p.category.includes(filter),
        }))
      : [];
    let moreFiltered = filtered.filter((item) => item.filtered);

    setFilteredProjects(moreFiltered);
  }, [filter]);

  if (props.data) {
    var projectCards =
      filteredProjects && filteredProjects.length
        ? filteredProjects.map(function (p) {
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
          })
        : [];
  }

  return (
    <React.Fragment>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <div className="filters">
              <h1>Projects</h1>
              <a
                href="/#portfolio"
                className={filter === "all" ? "active" : null}
                onClick={() => setFilter("all")}>
                All
              </a>{" "}
              <span className="separator">|</span>
              <a
                href="/#portfolio"
                className={filter === "development" ? "active" : null}
                onClick={() => setFilter("development")}>
                Development
              </a>{" "}
              <span className="separator">|</span>
              <a
                href="/#portfolio"
                className={filter === "design" ? "active" : null}
                onClick={() => setFilter("design")}>
                Design
              </a>
            </div>
            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf centered">
              {projectCards}
            </div>
            <h2>
              More projects available on{" "}
              <a href="https://github.com/darnocer" target="_blank">
                Github
              </a>
            </h2>
            <h2>
              I love writing about code! Check out some of my articles on &nbsp;
              <a href="https://dev.to/darnocer" target="_blank">
                DEV
              </a>
            </h2>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Portfolio;
