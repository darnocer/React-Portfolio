import React, { Component } from "react";

class Contact extends Component {
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
      <section id="contact" className="container">
        <div className="row">
          <div className="col">
            <h2>Holla @ Me</h2>
          </div>
        </div>

        <div className="row">
          <div className="col contact-details ">
            <p className="address">
              <span>{fullname}</span>
              <br />
              <i class="fas fa-map-marker-alt"></i>&nbsp;
              <span>
                {city} {state}, {zip}
              </span>
              <br />
              <span>{phone}</span>
              <br />
              <span>{email}</span>
            </p>
          </div>
          <div className="col download ">
            <p>
              <a href={resumeDownload} className="button">
                <i className="fa fa-download"></i>Resume
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
