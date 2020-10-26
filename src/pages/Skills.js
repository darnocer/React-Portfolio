import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <div className="table-container desktop">
          <h1>Skills</h1>

          <table>
            <tbody>
              <tr>
                <td>
                  <h2>
                    Front-End <i className="fas fa-code"></i>
                  </h2>
                  <p>
                    HTML5 • CSS3 • React.js • javascript • jQuery • Handlebars •
                    Bootstrap and other CSS frameworks
                  </p>
                </td>
                <td>
                  <h2>
                    Design <i className="fas fa-paint-brush"></i>
                  </h2>
                  <p>
                    SquareSpace • GoDaddy • UI/UX heuristics and principles •
                    Mobile-Responsiveness • Adobe Illustrator • Adobe Photoshop
                    • Balsamiq
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h2>
                    Back-End <i className="fas fa-terminal"></i>
                  </h2>
                  <p>
                    SQL (MySQL) • NoSQL (MongoDB) • Node.js • Express.js •
                    Mongoose
                  </p>
                </td>

                <td>
                  <h2>
                    Other Tools <i className="fas fa-code-branch"></i>
                  </h2>
                  Visual Studio Code • GitHub • Git • Microsoft Suite • RESTful
                  APIs • AJAX • JSON • Heroku • Netlify
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Skills;
