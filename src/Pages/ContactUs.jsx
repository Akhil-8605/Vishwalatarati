"use client"
import { Helmet } from "react-helmet";
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
  HeadphonesIcon,
  Video,
  FileText,
  Sparkles,
} from "lucide-react"
import "./ContactUs.css"
import { i } from "framer-motion/client";

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
  const [activeTab, setActiveTab] = useState(0)

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

    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`)
    const body = encodeURIComponent(`
Hello,

You have received a new contact form submission with the following details:

Full Name: ${formData.name}
Email Address: ${formData.email}
Phone Number: ${formData.phone}
Company: ${formData.company}
Service Requested: ${formData.service}
Estimated Budget: ${formData.budget}
Project Timeline: ${formData.timeline}

Message:
${formData.message}

Best regards,  
${formData.name}
`);

    const mailtoUrl = `mailto:contact@vishwalatarati.in?subject=${subject}&body=${body}`

    // Open Gmail/email client
    window.open(mailtoUrl, "_blank")

    // Show success state
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
    }, 1000)
  }

  const contactMethods = [
    {
      icon: <Mail size={32} />,
      title: "Email Us",
      subtitle: "Send us a message",
      primary: "contact@vishwalatarati.in",
      color: { from: "#3b82f6", to: "#2563eb" }, // blue-500 to blue-600
      bgColor: "#eff6ff", // blue-50
      description: "Get a response within 24 hours",
      action: "Send Email",
    },
    {
      icon: <Phone size={32} />,
      title: "Call Us",
      subtitle: "Speak with our experts",
      primary: "+91 7620131908",
      color: { from: "#10b981", to: "#059669" }, // emerald-500 to emerald-600
      bgColor: "#ecfdf5", // emerald-50
      description: "Available Mon-Fri, 9AM-6PM",
      action: "Call Now",
    },
    // {
    //   icon: <Video size={32} />,
    //   title: "Video Call",
    //   subtitle: "Schedule a meeting",
    //   primary: "Book a consultation",
    //   secondary: "Free 30-min session",
    //   color: { from: "#8b5cf6", to: "#7c3aed" }, // purple-500 to purple-600
    //   bgColor: "#f5f3ff", // purple-50
    //   description: "Face-to-face discussion",
    //   action: "Schedule Call",
    // },
    {
      icon: <MessageCircle size={32} />,
      title: "Live Chat",
      subtitle: "Instant support",
      primary: "Chat with our team",
      color: { from: "#f97316", to: "#ea580c" }, // orange-500 to orange-600
      bgColor: "#fff7ed", // orange-50
      description: "Available during business hours",
      action: "Start Chat",
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
    "Under ₹10,000",
    "₹10,000 - ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹100,000",
    "Above ₹100,000",
    "Let's Discuss",
  ]

  const timelines = ["ASAP", "1-3 months", "3-6 months", "6-12 months", "12+ months", "Flexible"]

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
      category: "Timeline",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally. Our support includes bug fixes, updates, and technical assistance.",
      category: "Support",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with a wide range of modern technologies including React, Node.js, Python, Java, Flutter, React Native, AWS, Azure, and many more. We choose the best technology stack for each project.",
      category: "Technology",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "We excel at collaborating with existing teams and can seamlessly integrate with your development processes, tools, and methodologies.",
      category: "Collaboration",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team arrangements. We'll work with you to find the best approach for your budget and requirements.",
      category: "Pricing",
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "Absolutely. We understand the importance of confidentiality and are happy to sign NDAs before discussing your project details. Your intellectual property and business information are completely secure with us.",
      category: "Security",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award size={28} />,
      title: "Proven Expertise",
      description: "5+ years of experience with 500+ successful projects across various industries",
      stats: "500+ Projects",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Users size={28} />,
      title: "Expert Team",
      description: "50+ skilled professionals with expertise in cutting-edge technologies",
      stats: "50+ Experts",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <Shield size={28} />,
      title: "Quality Assurance",
      description: "Rigorous testing processes ensuring 98% client satisfaction rate",
      stats: "98% Satisfaction",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Clock size={28} />,
      title: "On-Time Delivery",
      description: "Agile methodology ensuring timely project completion and delivery",
      stats: "100% On-Time",
      color: "from-orange-500 to-orange-600",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your requirements, goals, and project scope in detail",
      icon: <MessageCircle size={28} />,
      color: { from: "#3b82f6", to: "#2563eb" }, // blue-500 to blue-600
      duration: "30-60 mins",
    },
    {
      step: "02",
      title: "Proposal & Planning",
      description: "Detailed proposal with timeline, cost estimation, and project roadmap",
      icon: <FileText size={28} />,
      color: { from: "#10b981", to: "#059669" }, // emerald-500 to emerald-600
      duration: "2-3 days",
    },
    {
      step: "03",
      title: "Development & Updates",
      description: "Regular progress updates and milestone deliveries with your feedback",
      icon: <Code size={28} />,
      color: { from: "#8b5cf6", to: "#7c3aed" }, // purple-500 to purple-600
      duration: "Project timeline",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Project launch with comprehensive testing and ongoing support",
      icon: <Rocket size={28} />,
      color: { from: "#f97316", to: "#ea580c" }, // orange-500 to orange-600
      duration: "Ongoing",
    },
  ]

  const officeInfo = {
    address: "783, Swami Vivekananda Nagar, Near Solapur Airport, ",
    city: "Solapur-413002, Maharashtra.",
    country: "India",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    weekend: "Sat: 10:00 AM - 4:00 PM",
    phone: "+91 82628 57095",
    email: "contact@vishwalatarati.in",
  }

  const tabs = [
    { label: "General", icon: <MessageSquare size={18} /> },
    { label: "Technical", icon: <Code size={18} /> },
    { label: "Business", icon: <Briefcase size={18} /> },
  ]

  const handleMethodClick = (action) => {
    switch (action) {
      case "Send Email":
        window.location.href = "mailto:contact@vishwalatarati.in";
        break;
      case "Call Us":
        window.location.href = "tel:8262857095";
        break;
      case "Start Chat":
        window.location.href = "https://wa.me/+918262857095";
        break;
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Vishwalatarati – Solapur's Trusted IT Partner</title>
        <meta
          name="description"
          content="Get in touch with Vishwalatarati Digital Solutions Pvt Ltd for project consultations, service inquiries, or business collaborations. We’re here to assist you."
        />
        <meta
          name="keywords"
          content="Contact Vishwalatarati, Software consultation Solapur, IT services contact, Web development support Maharashtra, Reach software company"
        />
        <meta name="author" content="Vishwalatarati Digital Solutions Pvt Ltd" />
        <meta property="og:title" content="Contact Vishwalatarati Digital Solutions Pvt Ltd" />
        <meta property="og:description" content="Talk to our experts for your next software or web project." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vishwalatarati.in/contact" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Vishwalatarati Digital Solutions Pvt Ltd" />
        <meta name="twitter:description" content="Connect with Solapur’s leading web and app development team." />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>
      <div className="contact-page">
        {/* Enhanced Particles Background */}
        <div className="contact-particles">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className={`contact-particle contact-particle-${(i % 4) + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
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

        {/* Enhanced Hero Section */}
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
                <Sparkles size={16} />
                <span>Get In Touch</span>
              </div>
              <h1>Let's Build Something Amazing Together</h1>
              <p>
                Ready to transform your business with cutting-edge technology? Our team of experts is here to help you
                achieve your digital goals and drive innovation forward.
              </p>
              <div className="hero-features">
                <div className="hero-feature">
                  <CheckCircle size={18} />
                  <span>Free Consultation</span>
                </div>
                <div className="hero-feature">
                  <CheckCircle size={18} />
                  <span>24/7 Support</span>
                </div>
                <div className="hero-feature">
                  <CheckCircle size={18} />
                  <span>Custom Solutions</span>
                </div>
                <div className="hero-feature">
                  <CheckCircle size={18} />
                  <span>Expert Team</span>
                </div>
              </div>
              <div className="hero-cta">
                <button className="btn-primary" onClick={() => {
                  const element = document.getElementById("#contact-form");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                  <span>Start Your Project</span>
                  <ArrowRight size={20} />
                </button>
                <button className="btn-secondary" onClick={() => {
                  const element = document.getElementById("#contact-form");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                  <Calendar size={20} />
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Contact Methods Section */}
        <section className="contact-methods-section">
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
                <span>Contact Methods</span>
              </div>
              <h2>Multiple Ways to Reach Us</h2>
              <p>Choose the most convenient way to get in touch with our team</p>
            </motion.div>
            <div className="contact-methods-grid">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="contact-method-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <div className={`method-icon`} style={{ background: `linear-gradient(to right, ${method.color.from}, ${method.color.to})`, }}>{method.icon}</div>
                  <div className="method-content">
                    <h3>{method.title}</h3>
                    <p className="method-subtitle">{method.subtitle}</p>
                    <div className="method-details">
                      <span className="primary-detail">{method.primary}</span>
                    </div>
                    <p className="method-description">{method.description}</p>
                    <button className="method-action" onClick={() => { handleMethodClick(method.action) }}>
                      {method.action}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                  <div className="method-glow"></div>
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
                  whileHover={{ y: -8, scale: 1.03 }}
                  viewport={{ once: true }}
                >
                  <div className={`choose-icon bg-gradient-to-r ${item.color}`}>{item.icon}</div>
                  <div className="choose-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="choose-stats">{item.stats}</div>
                  </div>
                  <div className="choose-shine"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Form Section */}
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
                    <div className="benefit-content">
                      <h4>Free Consultation</h4>
                      <p>Comprehensive project analysis</p>
                    </div>
                  </div>
                  <div className="benefit">
                    <CheckCircle className="benefit-icon" />
                    <div className="benefit-content">
                      <h4>Custom Solution</h4>
                      <p>Tailored to your specific needs</p>
                    </div>
                  </div>
                  <div className="benefit">
                    <CheckCircle className="benefit-icon" />
                    <div className="benefit-content">
                      <h4>Transparent Pricing</h4>
                      <p>No hidden costs or surprises</p>
                    </div>
                  </div>
                  <div className="benefit">
                    <CheckCircle className="benefit-icon" />
                    <div className="benefit-content">
                      <h4>Dedicated Support</h4>
                      <p>Personal project manager assigned</p>
                    </div>
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
                  <div className="contact-stat">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Projects Delivered</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="contact-form-container"
                id="#contact-form"
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
                      <button className="btn-secondary" onClick={() => window.location.href = "tel:8262857095"}>
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
                  <div className="process-icon" style={{
                    background: `linear-gradient(to right, ${step.color.from}, ${step.color.to})`,
                  }}>{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="process-duration">{step.duration}</div>
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

        {/* Enhanced FAQ Section */}
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
            <div className="faq-tabs">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`faq-tab ${activeTab === index ? "active" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="faq-content">
              <div className="faq-grid">
                {faqs
                  .filter((faq) => {
                    if (activeTab === 0) return ["Timeline", "Support"].includes(faq.category)
                    if (activeTab === 1) return ["Technology", "Collaboration"].includes(faq.category)
                    if (activeTab === 2) return ["Pricing", "Security"].includes(faq.category)
                    return true
                  })
                  .map((faq, index) => (
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
                      <div className="faq-content-text">
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                        <span className="faq-category">{faq.category}</span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Office Location Section */}
        <section className="office-section">
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
              className="office-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="office-content">
                <div className="office-info">
                  <div className="office-details">
                    <h3>Vishwalatarati Headquarters</h3>
                    <div className="office-address">
                      <div className="address-item">
                        <MapPin size={20} />
                        <div>
                          <span className="address-line">{officeInfo.address}</span>
                          <span className="address-line">{officeInfo.city}</span>
                          <span className="address-line">{officeInfo.country}</span>
                        </div>
                      </div>
                      <div className="address-item">
                        <Phone size={20} />
                        <div>
                          <span className="contact-detail">{officeInfo.phone}</span>
                          <span className="contact-label">Main Office</span>
                        </div>
                      </div>
                      <div className="address-item">
                        <Mail size={20} />
                        <div>
                          <span className="contact-detail">{officeInfo.email}</span>
                          <span className="contact-label">General Inquiries</span>
                        </div>
                      </div>
                      <div className="address-item">
                        <Clock size={20} />
                        <div>
                          <span className="contact-detail">{officeInfo.hours}</span>
                          <span className="contact-detail">{officeInfo.weekend}</span>
                        </div>
                      </div>
                    </div>
                    <div className="office-actions">
                      <button className="btn-primary" onClick={() => window.open("https://maps.app.goo.gl/HppqnUGVd2CsznWi7", "_blank")}>
                        Get Directions <ArrowRight size={16} />
                      </button>
                      <button className="btn-secondary" onClick={() => window.location.href = "https://maps.app.goo.gl/HppqnUGVd2CsznWi7"}>
                        <Calendar size={16} />
                        Schedule Visit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="office-visual">
                  <div className="office-map">
                    {/* <div className="map-placeholder">
                    <MapPin size={80} />
                    <h4>Interactive Map</h4>
                    <p>Click to view our location on Google Maps</p>
                  </div> */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.42902747797!2d75.92932067494048!3d17.622791983305035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5db53c3f255af%3A0x6ffa8fd8b3b5a3e4!2sVishwalatarati%20Digital%20solutions%20private%20limited!5e1!3m2!1sen!2sin!4v1757773163919!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                  </div>
                  <div className="office-features">
                    <div className="office-feature">
                      <HeadphonesIcon size={24} />
                      <span>24/7 Support Available</span>
                    </div>
                    <div className="office-feature">
                      <Users size={24} />
                      <span>Meeting Rooms Available</span>
                    </div>
                    <div className="office-feature">
                      <Shield size={24} />
                      <span>Secure Environment</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="cta-section">
          <div className="cta-background">
            <div className="cta-pattern"></div>
            <div className="cta-glow"></div>
          </div>
          <div className="container">
            <motion.div
              className="cta-content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="cta-text">
                <h2>Ready to Get Started?</h2>
                <p>
                  Let's turn your ideas into reality. Contact us today for a free consultation and discover how we can
                  help transform your business.
                </p>
              </div>
              <div className="cta-buttons">
                <button className="btn-primary" onClick={() => handleMethodClick("Call Us")}>
                  <Phone size={20} />
                  Schedule a Call
                </button>
                <button className="btn-secondary" onClick={() => handleMethodClick("Start Chat")}>
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
                    {/* <div className="footer-logo-icon">
                                        <Zap size={28} />
                                    </div> */}
                    <h3>Vishwalatarati</h3>
                  </div>
                  <p>
                    Empowering businesses through innovative digital solutions and cutting-edge technology. Your success
                    is our mission.
                  </p>
                </div>
                <div className="footer-links">
                  <div className="footer-contact">
                    <div className="contact-item">
                      <Phone size={16} />
                      <span>+91 7620131908</span>
                    </div>
                    <div className="contact-item">
                      <Mail size={16} />
                      <span>contact@vishwalatarati.in</span>
                    </div>
                    <div className="contact-item">
                      <MapPin size={16} />
                      <span>783, Swami Vivekananda Nagar, Near Solapur Airport, Solapur-413002, Maharashtra.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-left">
                <p>&copy; 2025 Vishwalatarati. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default ContactUs
