import React, { useState } from 'react'
import './Home.css'
import image2 from '../Images/banner.jpg'
import { Link } from 'react-router-dom'

function Home() {
  const [activeService, setActiveService] = useState(null)

  const services = [
    {
      icon: '💻',
      title: 'Software Development',
      description: 'Vishwalatarati excels in crafting tailored solutions designed to streamline processes and enhance efficiency across diverse industries. Our team of skilled developers possesses the expertise to conceptualize, design, and implement software solutions that precisely align with our clients unique needs and objectives.'
    },
    {
      icon: '👥',
      title: 'Industrial Training',
      description: "At Vishwalatarati, we understand the crucial role of continuous learning and skill development in today's rapidly evolving technological landscape. That's why we offer comprehensive industrial training programs tailored to meet the specific needs and challenges of various industries."
    },
    {
      icon: '🌐',
      title: 'Data and analyics',
      description: 'Leveraging data-driven insights to optimize decision-making, enhance performance, and unlock actionable intelligence for sustainable growth.'
    },
  ]

  return (
    <>
      <div className="home-container">
        <main>
          <section className="hero">
            <div className="hero-content">
              <h1 className="hero-title">Innovate. Develop. Succeed.</h1>
              <p className="hero-subtitle">Empowering businesses with cutting-edge software solutions and industrial training.</p>
              <button className="cta-button">
                Get Started
              </button>
            </div>
          </section>

          <section className="services">
            <div className="services-content">
              <h2 className="section-title">What We Do</h2>
              <div className="services-grid">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`service-card ${activeService === index ? 'active' : ''}`}
                    onClick={() => setActiveService(activeService === index ? null : index)}
                  >
                    <div className="service-header">
                      <div className="service-icon">{service.icon}</div>
                      <h3 className="service-title">{service.title}</h3>
                    </div>
                    <p className="service-description">{service.description}</p>
                    {activeService === index && (
                      <div className="service-details">
                        <p>
                          Learn more about our {service.title.toLowerCase()} services...
                        </p>
                      </div>
                    )}
                    <span className={`chevron-icon ${activeService === index ? 'active' : ''}`}>▼</span>
                  </div>
                ))}
              </div>
            </div>

          </section>
          <div className='more-buttondiv'>
            <Link to="/Services/"><button className="more-button">Read More</button></Link>
          </div>
          <section className="about">
            <div className="about-content">
              <h2 className="section-title">Who We Are</h2>
              <div className="about-grid">
                <div className="about-text">
                  <p>
                    At Vishwalatarati, we are a team of passionate professionals dedicated to driving innovation and efficiency through our specialized services. With expertise in outsourced product development, data engineering, and digital strategy design, we empower organizations to accelerate their time-to-market, optimize costs, and focus on their core competencies. Our mission is to craft experiences that simplify lives, whether through tailored software solutions, intuitive mobile applications, or engaging websites. By leveraging data-driven insights, we help businesses make informed decisions and unlock actionable intelligence for sustainable growth. Committed to fostering creativity, collaboration, and personal growth, we invite you to join us on our journey towards success.
                  </p>
                  <button className="learn-more-button">
                    Learn More About Us
                  </button>
                </div>
                <div className="about-image">
                  <img src={image2} alt="Team working" className="team-image" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
export default Home

