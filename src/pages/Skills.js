import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Skills extends Component {
  render() {
    // if (this.props.data) {
    //   var skillmessage = this.props.data.skillmessage;

    //   var skills = this.props.data.skills.map(function (skills) {
    //     var className = "bar-expand " + skills.name.toLowerCase();
    //     return (
    //       <li key={skills.name}>
    //         <span style={{ width: skills.level }} className={className}></span>
    //         <em>{skills.name}</em>
    //       </li>
    //     );
    //   });
    // }

    return (
      <section id="skills">
        <h1>Skills</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <h2>
                  Front-End <i className="fas fa-code"></i>
                </h2>
                HTML5, CSS3, React.js, javascript, jQuery, Bootstrap and other
                CSS frameworks, RESTful APIs
              </td>
              <td>
                <h2>
                  Back-End <i className="fas fa-terminal"></i>
                </h2>
                SQL (MySQL), NoSQL(MongoDB), Node.js, Express.js
              </td>
            </tr>
            <tr>
              <td>
                <h2>
                  Design <i className="fas fa-paint-brush"></i>
                </h2>
                SquareSpace, GoDaddy, UI/UX, Adobe Illustrator
              </td>
              <td>
                <h2>
                  Other Tools <i className="fas fa-code-branch"></i>
                </h2>
                Visual Studio Code, GitHub, Git, Microsoft Suite,
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Skills;
