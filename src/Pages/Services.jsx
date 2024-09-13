import React, { useState } from 'react'
import './Services.css'
import softwaredev from "../Images/Software dev.jpg"
import appdev from "../Images/Application dev.jpg"
import webdev from "../Images/Website dev.jpg"
import DandA from "../Images/data & analys.jpg"
import DandD from "../Images/digital stategy & design.jpg"
import itr from "../Images/industrial.jpg"
function Services() {

  const services = [
    {
      title: 'Software Development',
      description: 'Crafting tailored software solutions to streamline processes and enhance efficiency, ensuring seamless digital experiences.',
      image: softwaredev 
    },
    {
      title: 'Mobile Application',
      description: 'Designing and developing intuitive mobile applications that empower users with convenience and accessibility on the go.',
      image: appdev
    },
    {
      title: 'Website Development',
      description: 'Building engaging websites that captivate audiences and drive business goals through innovative design and robust functionality.',
      image: webdev
    },
    {
      title: 'Data & Analytics',
      description: 'Leveraging data-driven insights to optimize decision-making, enhance performance, and unlock actionable intelligence for sustainable growth.',
      image: DandA
    },
    {
      title: 'Digital Strategy & Design',
      description: 'Crafting comprehensive digital strategies and compelling designs to align brand objectives with user needs, fostering meaningful connections and driving success.',
      image: DandD
    },
    {
      title: 'Industrial Training',
      description: 'Providing hands-on training programs tailored to industry needs, equipping professionals with the skills and knowledge required to excel in their fields and adapt to evolving technologies.',
      image: itr
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <div className="services-page">
        <div className="services-container">
          <div className="services-header">
            <h2>Welcome to Vishwalatarati</h2>
            <h1>
              <span>Vishwalatarati</span>{' '}
              <span className="services-title">Services</span>
            </h1>
            <p>
              At Vishwalatarati, we provide outsourced product development, data engineering, and Digital Strategy Design services
              that are key drivers of innovation and efficiency. They enable organizations to accelerate time-to-market, optimize costs,
              and focus on core competencies. Kanaka can help build a powerful ecosystem that drives efficiency, innovation, and
              strategic growth for organizations.
            </p>
          </div>

          <div className="services-content">
            <h3>
              We design and develop experiences that make people's lives simple!
            </h3>
            <div className="services-grid">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="service-card"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="service-image">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={hoveredIndex === index ? 'zoom' : ''}
                    />
                  </div>
                  <div className="service-info">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services