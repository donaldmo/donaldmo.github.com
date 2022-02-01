import React from 'react';

export default function TopPart() {
  return (
    <div className="row">
    <div className=" col-xs-12 col-sm-12">
      <div className="home-content">
        <div className="row flex-v-align">
          
          <div className="col-sm-12 col-md-5 col-lg-5">
            <div className="home-photo">
              <div className="hp-inner" style={{backgroundImage: 'url(img/profile-pic.jpg)'}}>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-7 col-lg-7">
            <div className="home-text hp-left">
              <div className="owl-carousel text-rotation">                                    
                <div className="item">
                  <h4>Mobile App Developer</h4>
                </div>

                <div className="item">
                  <h4>Web & UIUX Designer</h4>
                </div>
              </div>
                
              <h1>Donald Motswiri</h1>
              <p>Creative thinking never ends...</p>
                   
              <div className="home-buttons">
                <a href="#pricing" className="btn btn-primary">Pricing</a>
                <a href="#contact" className="btn btn-secondary">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
