import React from 'react';

export default function TopPart() {
  return (
    <div className="row">
    <div className=" col-xs-12 col-sm-12">
      <div className="home-content">
        <div className="row flex-v-align">
          
          <div className="col-sm-12 col-md-5 col-lg-5">
            <div className="home-photo">
              <div className="hp-inner" style={{backgroundImage: 'url(img/profile-img.jpg)'}}>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-7 col-lg-7">
            <div className="home-text hp-left">
              <div className="owl-carousel text-rotation">                                    
                <div className="item">
                  <h4>Frontend-developer</h4>
                </div>

                <div className="item">
                  <h4>Web Designer</h4>
                  <p>Creative thinking never ends...</p>
                </div>
              </div>
                
              <h1>Donald Motswiri</h1>
              {/* <p>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p> */}
                   
              <div className="home-buttons">
                <a href="#" target="_blank" className="btn btn-primary">Download CV</a>
                <a href="#" target="_self" className="btn btn-secondary">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
