import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var fullname = this.props.data.fullname;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row">
          <div className="col">
            <h2>{message}</h2>
          </div>
        </div>

        <div className="row contact-details">
          <div className="col">
            <p className="address">
              <span>{fullname}</span>
              <br />
              <i className="fas fa-map-marker-alt"></i>&nbsp;
              <span>
                {city}, {state} {zip}
              </span>
              <br />
              <span>
                I am always looking to take on new projects. Shoot me an email
                if you want to connect!
              </span>
              <br />
              <i className="fa fa-envelope"></i>&nbsp;
              <a href="mailto:darian.nocera26@gmail.com">
                <span>{email}</span>
              </a>
            </p>
            <div className="download">
              <p className="center">
                <a href={resumeDownload} className="button" target="_blank">
                  <i className="far fa-file-pdf"></i>Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      // <section id="contact">
      //   <div className="row">
      //     <div className="col">
      //       <h2>{message}</h2>
      //     </div>
      //   </div>
      //   <div className="row test">
      //     <div className="three columns">
      //       <div className="download">
      //         <p>
      //           <a href={resumeDownload} className="button" target="_blank">
      //             <i className="fa fa-download"></i>Resume
      //           </a>
      //         </p>
      //       </div>
      //     </div>
      //     <div className="nine columns main-col">
      //       <p className="address">
      //         <span>{fullname}</span>
      //         <br />
      //         <i class="fas fa-map-marker-alt"></i>&nbsp;
      //         <span>
      //           {city}, {state}
      //         </span>
      //         <br />
      //         <span>
      //           <i class="fas fa-phone"></i>&nbsp;
      //           {phone}
      //         </span>
      //         <br />
      //         <i class="fa fa-envelope"></i>&nbsp;
      //         <a href="mailto:darian.nocera26@gmail.com">
      //           <span>{email}</span>
      //         </a>
      //       </p>
      //     </div>
      //   </div>
      // </section>

      // <section id="contact" className="container">
      // <div className="row">
      //   <div className="col">
      //     <h2>Holla @ Me</h2>
      //   </div>
      // </div>

      //   <div className="row contact-details test">
      //     <div className="col">
      // <p className="address">
      //   <span>{fullname}</span>
      //   <br />
      //   <i class="fas fa-map-marker-alt"></i>&nbsp;
      //   <span>
      //     {city}, {state}
      //   </span>
      //   <br />
      //   <span>
      //     <i class="fas fa-phone"></i>&nbsp;
      //     {phone}
      //   </span>
      //   <br />
      //   <i class="fa fa-envelope"></i>&nbsp;
      //   <a href="mailto:darian.nocera26@gmail.com">
      //     <span>{email}</span>
      //   </a>
      // </p>
      //     </div>

      //     <div className="col test">
      //       <div className="download">
      //         <p>
      //           <a href={resumeDownload} className="button" target="_blank">
      //             <i className="fa fa-download"></i>Resume
      //           </a>
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    );
  }
}

export default Contact;
