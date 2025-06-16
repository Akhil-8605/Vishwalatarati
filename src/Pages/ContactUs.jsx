"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Sun,
  Zap,
  Calendar,
  User,
  Building,
  Globe,
  Star,
  Award,
  Shield,
  Target,
  Users,
  Briefcase,
  Code,
  MessageCircle,
  Rocket,
} from "lucide-react"

const ContactUs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail size={30} />,
      title: "Email Us",
      details: "info@vishwalatarati.com",
      subDetails: "support@vishwalatarati.com",
      color: "from-blue-500 to-blue-600",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone size={30} />,
      title: "Call Us",
      details: "+91 98765 43210",
      subDetails: "+91 87654 32109",
      color: "from-emerald-500 to-emerald-600",
      description: "Speak with our experts",
    },
    {
      icon: <MapPin size={30} />,
      title: "Visit Us",
      details: "123 Tech Park, Innovation Hub",
      subDetails: "Bangalore, Karnataka 560001",
      color: "from-purple-500 to-purple-600",
      description: "Come to our office",
    },
    {
      icon: <Clock size={30} />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      subDetails: "Sat: 10:00 AM - 4:00 PM",
      color: "from-orange-500 to-orange-600",
      description: "We're here to help",
    },
  ]

  const services = [
    "Software Development",
    "Mobile Application",
    "Website Development",
    "Data & Analytics",
    "Digital Strategy & Design",
    "Industrial Training",
    "Consulting Services",
    "Other",
  ]

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "Above $100,000",
    "Let's Discuss",
  ]

  const timelines = ["ASAP", "1-3 months", "3-6 months", "6-12 months", "12+ months", "Flexible"]

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally. Our support includes bug fixes, updates, and technical assistance.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with a wide range of modern technologies including React, Node.js, Python, Java, Flutter, React Native, AWS, Azure, and many more. We choose the best technology stack for each project.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "We excel at collaborating with existing teams and can seamlessly integrate with your development processes, tools, and methodologies.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team arrangements. We'll work with you to find the best approach for your budget and requirements.",
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "Absolutely. We understand the importance of confidentiality and are happy to sign NDAs before discussing your project details. Your intellectual property and business information are completely secure with us.",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award size={24} />,
      title: "Proven Expertise",
      description: "5+ years of experience with 500+ successful projects",
    },
    {
      icon: <Users size={24} />,
      title: "Expert Team",
      description: "50+ skilled professionals across all technologies",
    },
    {
      icon: <Shield size={24} />,
      title: "Quality Assurance",
      description: "Rigorous testing and 98% client satisfaction rate",
    },
    {
      icon: <Clock size={24} />,
      title: "On-Time Delivery",
      description: "Agile methodology ensuring timely project completion",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your requirements and project goals",
      icon: <MessageCircle size={24} />,
    },
    {
      step: "02",
      title: "Proposal & Planning",
      description: "Detailed proposal with timeline and cost estimation",
      icon: <Briefcase size={24} />,
    },
    {
      step: "03",
      title: "Development & Updates",
      description: "Regular progress updates and milestone deliveries",
      icon: <Code size={24} />,
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Project launch with ongoing support and maintenance",
      icon: <Rocket size={24} />,
    },
  ]

  return (
    <div className="contact-page">
      {/* Static Particles Background */}
      <div className="particles">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className={`particle ${i % 5 === 0
                ? "particle-blue"
                : i % 5 === 1
                  ? "particle-purple"
                  : i % 5 === 2
                    ? "particle-emerald"
                    : i % 5 === 3
                      ? "particle-orange"
                      : "particle-pink"
              }`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 25}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <div
        className="mouse-follower"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />

      {/* Navigation */}
      <nav className="navbar">
        <motion.div className="nav-container" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
          <div className="logo">
            <div className="logo-icon">
              <Zap size={24} />
            </div>
            <h2>Vishwalatarati</h2>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button className="nav-cta">Get Started</button>
          </div>
        </motion.div>
      </nav>

      {/* Professional Hero Section */}
      <section className="contact-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="hero-badge">
              <Sun size={16} />
              <span>Get In Touch</span>
            </div>
            <h1>Let's Build Something Amazing Together</h1>
            <p>
              Ready to transform your business with cutting-edge technology? Our team of experts is here to help you
              achieve your digital goals and drive innovation forward.
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <CheckCircle size={16} />
                <span>Free Consultation</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={16} />
                <span>24/7 Support</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={16} />
                <span>Custom Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <Phone size={16} />
              <span>Contact Information</span>
            </div>
            <h2>Multiple Ways to Reach Us</h2>
            <p>Choose the most convenient way to get in touch with our team</p>
          </motion.div>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className={`contact-icon bg-gradient-to-r ${info.color}`}>{info.icon}</div>
                <h3>{info.title}</h3>
                <p className="contact-description">{info.description}</p>
                <p className="contact-detail">{info.details}</p>
                <p className="contact-sub-detail">{info.subDetails}</p>
                <div className="contact-action">
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <Star size={16} />
              <span>Why Choose Us</span>
            </div>
            <h2>Why Businesses Trust Vishwalatarati</h2>
            <p>Discover what makes us the preferred technology partner</p>
          </motion.div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="why-choose-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="why-choose-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-content">
            <motion.div
              className="form-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="section-badge">
                <MessageSquare size={16} />
                <span>Start Your Project</span>
              </div>
              <h2>Tell Us About Your Project</h2>
              <p>
                Fill out the form and we'll get back to you within 24 hours. Let's discuss how we can bring your vision
                to life with our expertise and innovative solutions.
              </p>
              <div className="form-benefits">
                <div className="benefit">
                  <CheckCircle className="benefit-icon" />
                  <span>Free project consultation</span>
                </div>
                <div className="benefit">
                  <CheckCircle className="benefit-icon" />
                  <span>Custom solution design</span>
                </div>
                <div className="benefit">
                  <CheckCircle className="benefit-icon" />
                  <span>Transparent pricing</span>
                </div>
                <div className="benefit">
                  <CheckCircle className="benefit-icon" />
                  <span>Dedicated project manager</span>
                </div>
              </div>
              <div className="contact-stats">
                <div className="contact-stat">
                  <span className="stat-number">24hrs</span>
                  <span className="stat-label">Response Time</span>
                </div>
                <div className="contact-stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {!isSubmitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <h3>Project Details</h3>
                    <p>Help us understand your requirements better</p>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <div className="input-wrapper">
                        <User size={18} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <div className="input-wrapper">
                        <Mail size={18} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <div className="input-wrapper">
                        <Phone size={18} />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <div className="input-wrapper">
                        <Building size={18} />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="service">Service Interested In</label>
                      <div className="input-wrapper">
                        <Globe size={18} />
                        <select id="service" name="service" value={formData.service} onChange={handleInputChange}>
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Project Budget</label>
                      <div className="input-wrapper">
                        <Target size={18} />
                        <select id="budget" name="budget" value={formData.budget} onChange={handleInputChange}>
                          <option value="">Select budget range</option>
                          {budgetRanges.map((budget, index) => (
                            <option key={index} value={budget}>
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="timeline">Project Timeline</label>
                    <div className="input-wrapper">
                      <Calendar size={18} />
                      <select id="timeline" name="timeline" value={formData.timeline} onChange={handleInputChange}>
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project requirements, goals, and any specific needs or challenges you're facing..."
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>
                  <p className="form-note">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              ) : (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="success-icon">
                    <CheckCircle size={60} />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for reaching out to us. We've received your message and our team will get back to you
                    within 24 hours with a detailed response.
                  </p>
                  <div className="success-actions">
                    <button className="btn-primary" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </button>
                    <button className="btn-secondary">
                      <Calendar size={16} />
                      Schedule a Call
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <Briefcase size={16} />
              <span>Our Process</span>
            </div>
            <h2>How We Work With You</h2>
            <p>A streamlined process designed for successful project delivery</p>
          </motion.div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="process-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="process-number">{step.step}</div>
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="process-connector">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <MessageSquare size={16} />
              <span>FAQ</span>
            </div>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our services</p>
          </motion.div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="faq-icon">
                  <MessageCircle size={20} />
                </div>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <MapPin size={16} />
              <span>Our Location</span>
            </div>
            <h2>Visit Our Office</h2>
            <p>Come meet our team for in-person consultations and collaboration</p>
          </motion.div>
          <motion.div
            className="map-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="map-content">
              <div className="map-info">
                <div className="map-details">
                  <h3>Vishwalatarati Office</h3>
                  <div className="address-details">
                    <div className="address-item">
                      <MapPin size={18} />
                      <span>
                        123 Tech Park, Innovation Hub
                        <br />
                        Bangalore, Karnataka 560001
                      </span>
                    </div>
                    <div className="address-item">
                      <Phone size={18} />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="address-item">
                      <Clock size={18} />
                      <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <div className="map-actions">
                    <button className="btn-primary">
                      Get Directions <ArrowRight size={16} />
                    </button>
                    <button className="btn-secondary">
                      <Calendar size={16} />
                      Schedule Visit
                    </button>
                  </div>
                </div>
              </div>
              <div className="map-placeholder">
                <div className="map-visual">
                  <MapPin size={80} />
                  <h4>Interactive Map</h4>
                  <p>Click to view our location on Google Maps</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>
              Let's turn your ideas into reality. Contact us today for a free consultation and discover how we can help
              transform your business.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                <Phone size={20} />
                Schedule a Call
              </button>
              <button className="btn-secondary">
                <MessageSquare size={20} />
                Live Chat
              </button>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <CheckCircle size={16} />
                <span>Free Consultation</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={16} />
                <span>No Obligation Quote</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={16} />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-background">
          <div className="footer-pattern"></div>
        </div>
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="footer-logo-icon">
                    <Zap size={28} />
                  </div>
                  <h3>Vishwalatarati</h3>
                </div>
                <p>
                  Empowering businesses through innovative digital solutions and cutting-edge technology. Your success
                  is our mission.
                </p>
                <div className="footer-contact">
                  <div className="contact-item">
                    <Phone size={16} />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={16} />
                    <span>info@vishwalatarati.com</span>
                  </div>
                  <div className="contact-item">
                    <MapPin size={16} />
                    <span>Bangalore, Karnataka, India</span>
                  </div>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="social-link">
                    <span>Twitter</span>
                  </a>
                  <a href="#" className="social-link">
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="social-link">
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
              <div className="footer-links">
                <div className="footer-section">
                  <h4>Services</h4>
                  <ul>
                    <li>Software Development</li>
                    <li>Mobile Applications</li>
                    <li>Web Development</li>
                    <li>Data Analytics</li>
                    <li>Digital Strategy</li>
                    <li>Industrial Training</li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Case Studies</li>
                    <li>News</li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h4>Resources</h4>
                  <ul>
                    <li>Documentation</li>
                    <li>API Reference</li>
                    <li>Support Center</li>
                    <li>Community</li>
                    <li>Tutorials</li>
                    <li>Webinars</li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h4>Industries</h4>
                  <ul>
                    <li>Healthcare</li>
                    <li>Finance</li>
                    <li>E-commerce</li>
                    <li>Education</li>
                    <li>Manufacturing</li>
                    <li>Startups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>&copy; 2024 Vishwalatarati. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ContactUs
