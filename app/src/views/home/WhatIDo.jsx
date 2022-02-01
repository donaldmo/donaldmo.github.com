import React, { Fragment } from 'react';

export default function WhatIDo({ services, title }) {
  console.log(services)
  return (
    <Fragment>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="p-50"></div>

          <div className="block-title">
            <h2>{title}</h2>
          </div>
        </div>
      </div>

      <div className="row">
        {services && services?.map((service, i) => (
          <div className="col-xs-12 col-md-6" key={`home-services-${i}`}>
            <div className="info-list-w-icon">
              <div className="info-block-w-icon">
                <div className="ci-icon"dangerouslySetInnerHTML={{__html: service.icon}}>
                </div>

                <div className="ci-text">
                  <h4>{service.title}</h4>
                  <p>{service.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  )
}
