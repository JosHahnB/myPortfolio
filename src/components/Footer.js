import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div className="social-links">{networks}</div>
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
                <div 
                  onClick={() =>
                    this.props.applyPickedLanguage(
                      window.$primaryLanguage,
                      window.$secondaryLanguageIconId
                    )
                  }
                  style={{ display: "inline-block", cursor: "pointer" }}
                >
                  <span
                    className="iconify language-icon"
                    // data-icon="twemoji-flag-for-flag-united-kingdom"     re-insert to add language swap
                    data-inline="false"
                    id={window.$primaryLanguageIconId}
                  ></span>
                </div>
                <div 
                  onClick={() =>
                    this.props.applyPickedLanguage(
                      window.$secondaryLanguage,
                      window.$primaryLanguageIconId
                    )
                  }
                  style={{ display: "inline-block", cursor: "pointer" }}
                >
                  <span
                    className="iconify language-icon"
                    // data-icon="twemoji-flag-for-flag-poland"        re-insert to add language swap
                    data-inline="false"
                    id={window.$secondaryLanguageIconId}
                  ></span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center">
              <div className="copyright">
                <small>
                  Copyright &copy; {new Date().getFullYear()}{" "}
                  {this.props.sharedBasicInfo
                    ? this.props.sharedBasicInfo.name
                    : "???"}
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
