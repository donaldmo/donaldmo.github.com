import React, { Fragment } from 'react';

export default function Clients({clients}) {
  return (
    <Fragment>
      <div className="block-title">
        <h2>Clients</h2>
      </div>

      <div id="clients_1" className="clients owl-carousel" data-mobile-items="1" data-tablet-items="3" data-items="6">
        <div className="client-block">
          <a href="#" target="_blank" title="Golden Grid">
            <img src="img/clients/client-1.png" alt="Golden Grid" />
          </a>
        </div>

        <div className="client-block">
          <a href="#" target="_blank" title="Sweety">
            <img src="img/clients/client-2.png" alt="Sweety" />
          </a>
        </div>

        <div className="client-block">
          <a href="#" target="_blank" title="Magic Furnitures">
            <img src="img/clients/client-3.png" alt="Magic Furnitures" />
          </a>
        </div>

        <div className="client-block">
          <a href="#" target="_blank" title="LifeGuard">
            <img src="img/clients/client-4.png" alt="LifeGuard" />
          </a>
        </div>

        <div className="client-block">
          <a href="#" target="_blank" title="LESS">
            <img src="img/clients/client-5.png" alt="LESS" />
          </a>
        </div>

        <div className="client-block">
          <a href="#" target="_blank" title="Design Lovers">
            <img src="img/clients/client-6.png" alt="Design Lovers" />
          </a>
        </div>

        <div className="client-block">
          <a href="#" target="_blank" title="WordPress">
            <img src="img/clients/client-7.png" alt="WordPress" />
          </a>
        </div>
      </div>
    </Fragment>
  )
}
