import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TopPart from './TopPart'
import WhatIDo from './WhatIDo'
import Testimonials from './Testimonials'
import Clients from './Clients'
import Pricing from './Pricing'
import ContactForm from './ContactForm'
import LocationMap from './LocationMap'

export default function Home() {

  let services = [
    {
      title: "Web Development",
      content: "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications",
      icon: '<i class="linecons linecons-pen"></i>'
    },
    {
      title: "UXUI Design",
      content: "UX design is the process of planning the experience a person has when they interact with a product. UX design focuses on the interaction that a human user has with everyday products and services",
      icon: '<i class="linecons linecons-display"></i>'
    },
    {
      title: "Software Development",
      content: "I Develop and test mobile application software and coding. Write code for Android or iOS applications, using languages such as: Flutter, HTML, JavaScript, Swift, etc.",
      icon: '<i class="linecons linecons-shop"></i>'
    },
    {
      title: "Brand Identiry",
      content: "Brand identity is the visible elements of a brand, such as color, design, and logo, that identify and distinguish the brand in consumers' minds.",
      icon: '<i class="linecons linecons-megaphone"></i>'
    }
  ]

  let testimonials = [
    {
      name: "Billy Adams",
      picture_url: 'img/testimonials/testimonial-1.jpg',
      company: "Rolling Thunder",
      content: "Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non."
    },
    {
      name: "Daniel Pringle",
      picture_url: 'img/testimonials/testimonial-1.jpg',
      company: "Sagebrush",
      content: "Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non."
    },
    {
      name: "Gary Johnson",
      picture_url: 'img/testimonials/testimonial-1.jpg',
      company: "Locost Accessories",
      content: "Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non."
    },
  ]

  let clients = []

  let pricing = []

  let contactDetails = {
    phone: "067 175 8637",
    phone_tag: "I'd like to here how I can be of service, contact me.",
    address: "Johannesburg, South Africa",
    email: "domotswiri@gmail.com"
  }

  return (
    <div>
      <div className="lmpixels-scroll-to-top">
        <i className="lnr lnr-chevron-up"></i>
      </div>

      <div className="page-scroll">
        <div id="page_container" className="page-container bg-move-effect" data-animation="transition-flip-in-right">
          <Header />

          <div id="main" className="site-main">
            <div id="main-content" className="single-page-content">
              <div id="primary" className="content-area">
                <div id="content" className="page-content site-content single-post" role="main">

                  <TopPart />
                  <WhatIDo services={services} title="What I Do" />

                  {/* <div class="p-40"></div>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12">
                      <div class="p-20"></div>
                      <Testimonials testimonials={testimonials} title="Testimonials"/>
                    </div>
                  </div> */}

                  {/* <div class="p-40"></div>
                  <Clients clients={clients}/> */}

                  <div class="p-40"></div>
                  <Pricing ricing={pricing} />

                  <div class="p-40"></div>
                  <LocationMap />

                  <div class="p-40"></div>
                  <ContactForm contactDetails={contactDetails} />
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}
