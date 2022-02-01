import React, { Fragment } from 'react';

export default function Testimonials({ title, testimonials }) {
  return (
    <Fragment>
      <div className="block-title">
        <h2>{title || "Untitled"}</h2>
      </div>

      <div id="testimonials_1" className="testimonials owl-carousel">
        {testimonials && testimonials?.map((testimonial, i) => (
          <div className="testimonial-item" key={`testimonial-item-${i}`}>
            <div className="testimonial-content">
              <div className="testimonial-picture">
                <img src={testimonial.picture_url} alt={testimonial.name} />
              </div>

              <div className="testimonial-text">
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author-info">
                <h5 className="testimonial-author">{testimonial.name}</h5>
                <p className="testimonial-firm">{testimonial.company}</p>
              </div>

              <div className="testimonial-icon">
                <i className="fa fa-quote-left"></i>
              </div>

              <div className="testimonial-icon-big">
                <i className="fa fa-quote-right"></i>
              </div>
            </div>
          </div>
        ))}
        <div className="p-40"></div>
      </div>
    </Fragment>
  )
}
