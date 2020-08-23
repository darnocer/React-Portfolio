import React, { Component } from "react";

class TUF extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var fullname = this.props.data.fullname;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
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
            <h2>The Underdog Foundation</h2>
            <p>
              {" "}
              I am a proud team member of{" "}
              <a href="http://www.theunderdogfoundation.org" target="_blank">
                <b>The Underdog Foundation</b>
              </a>
              , a 501(c)(3) Non-Profit Organization that uplifts local
              businesses in the Denver area by providing services such as web
              design, photography, and more completely free of charge. Let's get
              to work!
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default TUF;
