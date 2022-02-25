import React, { Fragment } from 'react'

function Pricing() {
  return (
    <Fragment>
      <div className="row" id="pricing">
        <div className=" col-xs-12 col-sm-12 ">
          <div className="block-title">
            <h2>Pricing</h2>
          </div>
        </div>

      </div>

      <div className="row">
        <div className=" col-xs-12 col-sm-12 ">
          <div className="fw-pricing clearfix row">

            <div className="fw-package-wrap col-md-4 ">
              <div className="fw-package">
                <div className="fw-heading-row">
                  <span>SME Website</span>
                </div>

                <div className="fw-pricing-row">
                  <span>R3,800</span>
                  <small>Plus Minus</small>
                </div>

                <div className="fw-button-row">
                  <a href="#" target="_self" className="btn btn-secondary">Get Started</a>
                </div>

                <div className="fw-default-row">Custom Design</div>
                <div className="fw-default-row">WordPress</div>
                <div className="fw-default-row">Landing Page</div>
              </div>
            </div>

            <div className="fw-package-wrap col-md-4 highlight-col ">
              <div className="fw-package">
                <div className="fw-heading-row">
                  <span>Mobile App</span>
                </div>

                <div className="fw-pricing-row">
                  <span>R18,999</span>
                  <small>Starting from</small>
                </div>

                <div className="fw-button-row">
                  <a href="#" target="_self" className="btn btn-primary">
                    Request Quote
                  </a>
                </div>

                <div className="fw-default-row">Android & iOS</div>
                <div className="fw-default-row">Progressive Web App</div>
                <div className="fw-default-row">Mobile UXUI Design</div>
                <div className="fw-default-row">
                </div>
              </div>
            </div>

            <div className="fw-package-wrap col-md-4 default-col ">
              <div className="fw-package">
                <div className="fw-heading-row">
                  <span>Commercial Apps</span>
                </div>

                <div className="fw-pricing-row">
                  <span>POA</span>
                  <small>price on application</small>
                </div>

                <div className="fw-button-row">
                  <a href="#" target="_self" className="btn btn-primary">
                    View More
                  </a>
                </div>

                <div className="fw-default-row">Web & Desktop Apps</div>
                <div className="fw-default-row">API Dev/Intergration</div>
                <div className="fw-default-row">AI & Machine Learning</div>
                <div className="fw-default-row">IoT & Home Automation</div>
                <div className="fw-default-row">NFT & dapps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Pricing
