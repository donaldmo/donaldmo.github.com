import React, { Fragment, useState } from 'react'

export default function ContactForm({ contactDetails }) {
  const [state, setState] = useState({
    message: ''
  })

  const handleSubmit = event => {
    event.preventDefault()
    if (!state.message && state.name && state.subject) return null
    let a = document.createElement('a')
    a.target = "_blank"
    a.href = `mailto:${contactDetails.email}?subject=${state.subject}&body=${state.message}`
    a.click()
  }

  const handleChange = event => {
    let { value, name } = event.target
    setState(state => ({ ...state, [name]: value }))
  }

  return (
    <Fragment>
      <div className="row">
        <div className=" col-xs-12 col-sm-4 ">
          <div id="info_list_1" className="info-list-w-icon">
            <div className="info-block-w-icon">
              <div className="ci-icon">
                <i className="linecons linecons-phone"></i>
              </div>
              <div className="ci-text">
                <h4>
                  <a style={{ color: 'white' }} href={`tel:${contactDetails.phone}`}>
                    {contactDetails.phone}
                  </a>
                </h4>
                <p>{contactDetails.phone_tag}</p>
              </div>
            </div>

            <div className="info-block-w-icon">
              <div className="ci-icon">
                <i className="linecons linecons-location"></i>
              </div>
              <div className="ci-text">
                <h4>{contactDetails.address}</h4>
                <p>I work with local and internation clients.</p>
              </div>
            </div>

            <div className="info-block-w-icon">
              <div className="ci-icon">
                <i className="linecons linecons-mail"></i>
              </div>
              <div className="ci-text">
                <h4>
                  <a href={`mailto:${contactDetails.email}`} style={{color: 'white'}}
                    className="__cf_email__"
                  >[{contactDetails.email}]</a></h4>
                <p>Alternatively, Please use the form below to send me a an email.</p>
              </div>
            </div>
          </div>

        </div>

        <div className=" col-xs-12 col-sm-8" id="contact-me">
          <div className="block-title">
            <h2>How Can I Help You?</h2>
          </div>

          <form onSubmit={handleSubmit} id="contact_form" className="contact-form">
            <div className="messages"></div>

            <div className="controls two-columns">
              <div className="fields clearfix">
                <div className="left-column">
                  <div className="form-group form-group-with-icon">
                    <input onChange={handleChange} id="form_name" type="text" name="name" className="form-control" placeholder="Full Name" required="required" data-error="Name is required." />
                    <div className="form-control-border"></div>
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group form-group-with-icon">
                    <input onChange={handleChange} id="form_email" type="email" name="email" className="form-control" placeholder="Email Address" required="required" data-error="Valid email is required." />
                    <div className="form-control-border"></div>
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group form-group-with-icon">
                    <input onChange={handleChange} id="form_name" type="text" name="subject" className="form-control" placeholder="Subject" required="required" data-error="Subject is required." />
                    <div className="form-control-border"></div>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="right-column">
                  <div className="form-group form-group-with-icon">
                    <textarea onChange={handleChange} id="form_message" name="message" className="form-control" placeholder="Message" rows="7" required="required" data-error="Please, leave me a message."></textarea>
                    <div className="form-control-border"></div>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
              </div>

              <div class="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI" data-theme="dark"></div>

              <input onClick={handleSubmit} type="submit" className="button btn-send disabled" value="Send email" />
            </div>
          </form>
        </div>
      </div>

    </Fragment>
  )
}
