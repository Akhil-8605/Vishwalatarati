"use client"
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Code, Smartphone, Globe, BarChart3, Palette, GraduationCap, Star, ArrowRight, Play, Users, Award, Zap, X, CheckCircle, TrendingUp, Shield, Target, Lightbulb, Rocket, Heart, Eye, Quote, ChevronLeft, ChevronRight, Sparkles, Cloud, Sun, Building, Phone, Mail, MapPin, Calendar, Clock, Briefcase, Monitor, Database, Cpu, Layers, Bubbles } from 'lucide-react'
import "./HomePage.css"
import heroImg from "./hero.jpg"
import teamImg from "./team.jpg"
import directorImg from "./director.jpg"

const Homepage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isLoaded, setIsLoaded] = useState(false)
    const [selectedService, setSelectedService] = useState(null)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    useEffect(() => {
        setIsLoaded(true)
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const services = [
        {
            icon: <Code size={40} />,
            title: "Software Development",
            description: "Custom enterprise solutions built with cutting-edge technologies for scalable business growth.",
            color: { from: "#3b82f6", to: "#1e40af" }, // blue-500 to blue-700
            gradient: { from: "#eff6ff", to: "#dbeafe" }, // blue-50 to blue-100
            features: ["Custom Web Applications", "Enterprise Software", "API Development", "Cloud Solutions"],
            technologies: ["React", "Node.js", "Python", "Java", "AWS"],
            benefits: ["Scalable Architecture", "Security First", "Performance Optimized", "24/7 Support"],
        },
        {
            icon: <Smartphone size={40} />,
            title: "Mobile Application",
            description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
            color: { from: "#10b981", to: "#065f46" }, // emerald-500 to emerald-700
            gradient: { from: "#ecfdf5", to: "#d1fae5" }, // emerald-50 to emerald-100
            features: ["Native iOS Apps", "Android Development", "Cross-Platform Solutions", "App Store Optimization"],
            technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
            benefits: ["User-Centric Design", "Fast Performance", "Offline Capability", "Push Notifications"],
        },
        {
            icon: <Globe size={40} />,
            title: "Website Development",
            description: "Modern, responsive websites that captivate audiences and drive business results.",
            color: { from: "#f97316", to: "#c2410c" }, // orange-500 to orange-700
            gradient: { from: "#fff7ed", to: "#ffedd5" }, // orange-50 to orange-100
            features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "SEO Optimization"],
            technologies: ["Next.js", "WordPress", "Shopify", "Webflow"],
            benefits: ["Mobile Responsive", "Fast Loading", "SEO Friendly", "Analytics Integration"],
        },
        {
            icon: <BarChart3 size={40} />,
            title: "Data & Analytics",
            description: "Transform raw data into actionable insights for informed business decisions.",
            color: { from: "#8b5cf6", to: "#6b21a8" }, // purple-500 to purple-700
            gradient: { from: "#faf5ff", to: "#f3e8ff" }, // purple-50 to purple-100
            features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Machine Learning"],
            technologies: ["Python", "R", "Tableau", "Power BI", "TensorFlow"],
            benefits: ["Real-time Insights", "Automated Reports", "Predictive Models", "Data Security"],
        },
        {
            icon: <Palette size={40} />,
            title: "Digital Strategy & Design",
            description: "Comprehensive digital strategies and compelling designs for brand excellence.",
            color: { from: "#ec4899", to: "#be185d" }, // pink-500 to pink-700
            gradient: { from: "#fdf2f8", to: "#fce7f3" }, // pink-50 to pink-100
            features: ["Brand Strategy", "UI/UX Design", "Digital Marketing", "Content Strategy"],
            technologies: ["Figma", "Adobe Suite", "Sketch", "InVision"],
            benefits: ["Brand Consistency", "User Experience", "Market Research", "Creative Solutions"],
        },
        {
            icon: <GraduationCap size={40} />,
            title: "Industrial Training",
            description: "Professional training programs designed to upskill teams with latest technologies.",
            color: { from: "#14b8a6", to: "#0f766e" }, // teal-500 to teal-700
            gradient: { from: "#f0fdfa", to: "#ccfbf1" }, // teal-50 to teal-100
            features: ["Corporate Training", "Skill Development", "Certification Programs", "Workshop Delivery"],
            technologies: ["Latest Tech Stack", "Industry Tools", "Practical Projects"],
            benefits: ["Expert Instructors", "Hands-on Learning", "Industry Certification", "Career Support"],
        },
    ]


    const testimonials = [
        {
            name: "Sarah Johnson",
            position: "CEO",
            company: "TechCorp Inc.",
            content:
                "Vishwalatarati transformed our digital presence completely. Their innovative approach and attention to detail exceeded our expectations. The team delivered a solution that not only met our requirements but also provided insights we hadn't considered.",
            rating: 5,
            image: "/placeholder.svg?height=80&width=80",
            project: "Enterprise Web Platform",
            results: "40% increase in productivity",
        },
        {
            name: "Michael Chen",
            position: "CTO",
            company: "DataFlow Inc.",
            content:
                "The team's expertise in data analytics helped us make informed decisions that boosted our revenue by 40%. Their data visualization dashboard has become an integral part of our daily operations.",
            rating: 5,
            image: "/placeholder.svg?height=80&width=80",
            project: "Data Analytics Platform",
            results: "40% revenue boost",
        },
        {
            name: "Emily Rodriguez",
            position: "Founder",
            company: "StartupX",
            content:
                "From concept to deployment, they guided us through every step. The mobile app they developed has over 100K downloads now and continues to receive excellent user reviews.",
            rating: 5,
            image: "/placeholder.svg?height=80&width=80",
            project: "Mobile App Development",
            results: "100K+ downloads",
        },
        {
            name: "David Kumar",
            position: "Marketing Director",
            company: "GrowthCo",
            content:
                "Their digital strategy and design work helped us rebrand successfully. Our online engagement increased by 300% and we've seen significant improvement in lead generation.",
            rating: 5,
            image: "/placeholder.svg?height=80&width=80",
            project: "Digital Transformation",
            results: "300% engagement increase",
        },
    ]

    const stats = [
        { number: "500+", label: "Projects Completed", icon: <Rocket size={30} />, color: "text-blue-600" },
        { number: "150+", label: "Happy Clients", icon: <Heart size={30} />, color: "text-rose-600" },
        { number: "50+", label: "Team Members", icon: <Users size={30} />, color: "text-emerald-600" },
        { number: "5+", label: "Years Experience", icon: <Award size={30} />, color: "text-purple-600" },
    ]

    const achievements = [
        {
            title: "Innovation Excellence",
            description: "Recognized for cutting-edge solutions",
            icon: <Lightbulb size={40} />,
            color: { from: "#facc15", to: "#f97316" }, // yellow-400 to orange-500
        },
        {
            title: "Client Satisfaction",
            description: "98% client retention rate",
            icon: <Heart size={40} />,
            color: { from: "#f472b6", to: "#f43f5e" }, // pink-400 to rose-500
        },
        {
            title: "Technical Expertise",
            description: "Certified in latest technologies",
            icon: <Shield size={40} />,
            color: { from: "#34d399", to: "#14b8a6" }, // emerald-400 to teal-500
        },
        {
            title: "Growth Partner",
            description: "Helping businesses scale globally",
            icon: <TrendingUp size={40} />,
            color: { from: "#60a5fa", to: "#6366f1" }, // blue-400 to indigo-500
        },
    ]

    const processSteps = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "We analyze your requirements and create a comprehensive project roadmap.",
            icon: <Target size={30} />,
            color: { from: "#3b82f6", to: "#2563eb" }, // blue-500 to blue-600
        },
        {
            step: "02",
            title: "Design & Prototype",
            description: "Creating intuitive designs and interactive prototypes for validation.",
            icon: <Palette size={30} />,
            color: { from: "#8b5cf6", to: "#7c3aed" }, // purple-500 to purple-600
        },
        {
            step: "03",
            title: "Development & Testing",
            description: "Building robust solutions with rigorous testing and quality assurance.",
            icon: <Code size={30} />,
            color: { from: "#10b981", to: "#059669" }, // emerald-500 to emerald-600
        },
        {
            step: "04",
            title: "Launch & Support",
            description: "Seamless deployment with ongoing maintenance and support.",
            icon: <Rocket size={30} />,
            color: { from: "#f97316", to: "#ea580c" }, // orange-500 to orange-600
        },
    ];


    const technologies = [
        { name: "React", category: "Frontend", icon: <Monitor size={24} /> },
        { name: "Node.js", category: "Backend", icon: <Database size={24} /> },
        { name: "Python", category: "AI/ML", icon: <Cpu size={24} /> },
        { name: "AWS", category: "Cloud", icon: <Cloud size={24} /> },
        { name: "Docker", category: "DevOps", icon: <Layers size={24} /> },
        { name: "MongoDB", category: "Database", icon: <Database size={24} /> },
    ]

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <>
            <Helmet>
                <title>Vishwalatarati Digital Solutions Pvt Ltd | Best Software Company in Solapur</title>
                <meta
                    name="description"
                    content="Vishwalatarati Digital Solutions Pvt Ltd is the leading software company in Solapur, offering custom web development, mobile app solutions, and IT services across Maharashtra."
                />
                <meta
                    name="keywords"
                    content="Best software company in Solapur, Web development Maharashtra, App development Solapur, IT solutions Solapur, Vishwalatarati Pvt Ltd"
                />
                <meta name="author" content="Vishwalatarati Digital Solutions Pvt Ltd" />
                <meta property="og:title" content="Vishwalatarati Digital Solutions Pvt Ltd" />
                <meta property="og:description" content="Top Web Development and IT Services in Maharashtra" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vishwalatarati.in" />
                <meta property="og:image" content="/og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vishwalatarati Digital Solutions Pvt Ltd" />
                <meta name="twitter:description" content="Solapur's best software development company offering web, app and digital solutions." />
                <meta name="twitter:image" content="/og-image.png" />
            </Helmet>
            <div className="homepage">
                {/* Enhanced Particle Background */}
                <div className="hero-particles">
                    {/* Large decorative shapes */}
                    <div className="particle-shape particle-circle-1"></div>
                    <div className="particle-shape particle-circle-2"></div>
                    <div className="particle-shape particle-circle-3"></div>
                    <div className="particle-shape particle-circle-4"></div>
                    <div className="particle-shape particle-circle-5"></div>
                    <div className="particle-shape particle-circle-6"></div>

                    {/* Medium floating elements */}
                    <div className="particle-shape particle-dot-1"></div>
                    <div className="particle-shape particle-dot-2"></div>
                    <div className="particle-shape particle-dot-3"></div>
                    <div className="particle-shape particle-dot-4"></div>
                    <div className="particle-shape particle-dot-5"></div>
                    <div className="particle-shape particle-dot-6"></div>
                    <div className="particle-shape particle-dot-7"></div>
                    <div className="particle-shape particle-dot-8"></div>

                    {/* Small animated particles */}
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className={`particle-mini particle-mini-${(i % 4) + 1}`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Mouse Follower */}
                <div
                    className="mouse-follower"
                    style={{
                        left: mousePosition.x - 15,
                        top: mousePosition.y - 15,
                    }}
                />

                {/* Navigation */}
                <nav className="navbar">
                    <motion.div className="nav-container" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="logo">
                            {/* <div className="logo-icon">
                            <Bubbles size={24} />
                        </div> */}
                            <h2>Vishwalatarati</h2>
                        </div>
                        <div className="nav-links">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <button className="nav-cta" onClick={() => { window.location.href = "/contact" }}>Get Started</button>
                        </div>
                    </motion.div>
                </nav>

                {/* Enhanced Hero Section */}
                <section className="hero">
                    <div className="hero-container">
                        <motion.div
                            className="hero-content"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <motion.div
                                className="hero-badge"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <Sun size={16} />
                                <span>Leading Digital Innovation</span>
                            </motion.div>
                            <motion.h1
                                className="hero-title"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                Empowering Businesses Through
                                <span className="gradient-text"> Digital Excellence</span>
                            </motion.h1>
                            <motion.p
                                className="hero-subtitle"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.7 }}
                            >
                                We craft innovative digital solutions that drive growth, enhance efficiency, and transform businesses for the modern world. Partner with us to unlock your organization's full potential.
                            </motion.p>
                            <motion.div
                                className="hero-buttons"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9 }}
                            >
                                <button className="btn-primary-home" onClick={() => { window.location.href = "/contact" }}>
                                    <span>Start Your Journey</span>
                                    <ArrowRight size={20} />
                                </button>
                            </motion.div>
                            <motion.div
                                className="hero-stats"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.1 }}
                            >
                                <div className="stat-item">
                                    <span className="stat-number">10+</span>
                                    <span className="stat-label">Projects Delivered</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">98%</span>
                                    <span className="stat-label">Client Satisfaction</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">24/7</span>
                                    <span className="stat-label">Expert Support</span>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="hero-visual"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <div className="hero-image-container">
                                <div className="hero-main-image">
                                    <img src={heroImg} alt="Digital Innovation" />
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="floating-elements">
                                    <div className="floating-card card-1">
                                        <Code size={30} />
                                        <span>Development</span>
                                    </div>
                                    <div className="floating-card card-2">
                                        <Smartphone size={30} />
                                        <span>Mobile Apps</span>
                                    </div>
                                    <div className="floating-card card-3">
                                        <BarChart3 size={30} />
                                        <span>Analytics</span>
                                    </div>
                                    <div className="floating-card card-4">
                                        <Palette size={30} />
                                        <span>Design</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Enhanced Stats Section */}
                {/* <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                viewport={{ once: true }}
                            >
                                <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
                                <h3>{stat.number}</h3>
                                <p>{stat.label}</p>
                                <div className="stat-glow"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

                {/* Enhanced About Section */}
                <section className="about-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-badge">
                                <Eye size={16} />
                                <span>Who We Are</span>
                            </div>
                            <h2>Passionate Professionals Driving Innovation</h2>
                            <p>Empowering organizations through specialized services and cutting-edge technology</p>
                        </motion.div>
                        <div className="about-content">
                            <motion.div
                                className="about-text"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="about-description">
                                    <p>
                                        At Vishwalatarati, we are a team of passionate professionals dedicated to driving innovation and
                                        efficiency through our specialized services. With expertise in outsourced product development, data
                                        engineering, and digital strategy design, we empower organizations to accelerate their time-to-market,
                                        optimize costs, and focus on their core competencies.
                                    </p>
                                    <p>
                                        Our mission is to craft experiences that simplify lives, whether through tailored software solutions,
                                        intuitive mobile applications, or engaging websites. By leveraging data-driven insights, we help
                                        businesses make informed decisions and unlock actionable intelligence for sustainable growth.
                                    </p>
                                </div>
                                <div className="about-features">
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <Zap size={24} />
                                        </div>
                                        <div className="feature-content">
                                            <h4>Innovation Driven</h4>
                                            <p>Cutting-edge solutions for modern challenges</p>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <Users size={24} />
                                        </div>
                                        <div className="feature-content">
                                            <h4>Client Focused</h4>
                                            <p>Your success is our primary objective</p>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <Award size={24} />
                                        </div>
                                        <div className="feature-content">
                                            <h4>Quality Assured</h4>
                                            <p>Excellence in every project delivery</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="about-visual"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="about-image-container">
                                    <img src={teamImg} alt="Our Team" />
                                    <div className="about-image-overlay">
                                        <div className="overlay-content">
                                            <h3>5+ Years</h3>
                                            <p>of Excellence</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="achievement-cards">
                                    {achievements.map((achievement, index) => (
                                        <motion.div
                                            key={index}
                                            className="achievement-card"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <div
                                                className="achievement-icon"
                                                style={{
                                                    background: `linear-gradient(to right, ${achievement.color.from}, ${achievement.color.to})`,
                                                }}
                                            >
                                                {achievement.icon}
                                            </div>


                                            <div className="achievement-content">
                                                <h4>{achievement.title}</h4>
                                                <p>{achievement.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Highly Attractive Services Section */}
                <section className="services-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-badge">
                                <Target size={16} />
                                <span>Our Services</span>
                            </div>
                            <h2>Comprehensive Solutions for Digital Transformation</h2>
                            <p>End-to-end services designed to accelerate your business growth and innovation</p>
                        </motion.div>
                        <div className="services-grid">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="service-card"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -15, scale: 1.03 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="service-card-inner">
                                        <div className="service-header">
                                            <div className={`service-icon`} style={{
                                                background: `linear-gradient(to right, ${service.color.from}, ${service.color.to})`,
                                            }}>{service.icon}</div>
                                            <div className="service-badge">
                                                <Sparkles size={14} />
                                                <span>Premium</span>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h3>{service.title}</h3>
                                            <p>{service.description}</p>
                                            <div className="service-features">
                                                {service.features.slice(0, 3).map((feature, idx) => (
                                                    <div key={idx} className="feature-tag">
                                                        <CheckCircle size={12} />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="service-footer">
                                            <button className="service-btn" onClick={() => setSelectedService(index)}>
                                                <span>Explore Service</span>
                                                <ArrowRight size={16} />
                                            </button>
                                            <div className="service-rating">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={12} fill="currentColor" />
                                                ))}
                                                <span>5.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-glow"></div>
                                    <div className="service-shine"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Director Section */}
                <section className="director-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-badge">
                                <Users size={16} />
                                <span>Leadership</span>
                            </div>
                            <h2>Our Director</h2>
                            <p>Visionary leadership driving innovation and excellence</p>
                        </motion.div>
                        <motion.div
                            className="director-content"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="director-image">
                                <motion.div className="director-photo" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <img src={directorImg} alt="Gaurav Gham - Director" />
                                    <div className="director-overlay">
                                        {/* <div className="social-links">
                                        <a href="#" className="social-link">
                                            LinkedIn
                                        </a>
                                        <a href="#" className="social-link">
                                            Twitter
                                        </a>
                                    </div> */}
                                    </div>
                                </motion.div>
                                <div className="director-badge">
                                    <Award size={20} />
                                    <span>Industry Leader</span>
                                </div>
                            </div>
                            <div className="director-info">
                                <h3>Gaurav Gham</h3>
                                <p className="director-title">Director & Chief Technology Officer</p>
                                <div className="director-bio">
                                    <p>
                                        With over 5 years of experience in technology and business strategy, Gaurav leads Vishwalatarati with
                                        a vision to transform how businesses leverage technology for growth. His expertise spans across
                                        multiple domains including software architecture, data science, and digital transformation.
                                    </p>
                                    <p>
                                        Under his leadership, the company has successfully delivered 500+ projects and maintained a 98% client
                                        satisfaction rate. Gaurav is passionate about innovation and believes in empowering teams to create
                                        solutions that make a real difference.
                                    </p>
                                </div>
                                <div className="director-achievements">
                                    <div className="achievement">
                                        <span className="achievement-number">5+</span>
                                        <span className="achievement-label">Years Experience</span>
                                    </div>
                                    <div className="achievement">
                                        <span className="achievement-number">50+</span>
                                        <span className="achievement-label">Projects Led</span>
                                    </div>
                                    <div className="achievement">
                                        <span className="achievement-number">10+</span>
                                        <span className="achievement-label">Team Members</span>
                                    </div>
                                </div>
                                <div className="director-quote">
                                    <Quote size={24} />
                                    <p>
                                        "Innovation is not just about technology; it's about understanding human needs and creating solutions
                                        that truly make a difference in people's lives and businesses."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Professional Testimonials Section */}
                <section className="testimonials-section">
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
                                <span>Client Success Stories</span>
                            </div>
                            <h2>What Our Clients Say</h2>
                            <p>Trusted by industry leaders worldwide for exceptional results and innovation</p>
                        </motion.div>
                        <div className="testimonials-container">
                            <div className="testimonial-slider">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentTestimonial}
                                        className="testimonial-card"
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="testimonial-header">
                                            <div className="client-info">
                                                <div className="client-avatar">
                                                    <img
                                                        src={"https://cdn1.vectorstock.com/i/1000x1000/60/20/person-gray-photo-placeholder-man-vector-24276020.jpg"}
                                                        alt={testimonials[currentTestimonial].name}
                                                    />
                                                    <div className="verified-badge">
                                                        <CheckCircle size={16} />
                                                    </div>
                                                </div>
                                                <div className="client-details">
                                                    <h4>{testimonials[currentTestimonial].name}</h4>
                                                    <p>{testimonials[currentTestimonial].position}</p>
                                                    <span>{testimonials[currentTestimonial].company}</span>
                                                </div>
                                            </div>
                                            <div className="testimonial-rating">
                                                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                                    <Star key={i} size={16} fill="currentColor" />
                                                ))}
                                                <span className="rating-text">5.0</span>
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <Quote size={32} />
                                            <p>"{testimonials[currentTestimonial].content}"</p>
                                        </div>
                                        <div className="testimonial-footer">
                                            <div className="project-info">
                                                <span className="project-label">Project:</span>
                                                <span className="project-name">{testimonials[currentTestimonial].project}</span>
                                            </div>
                                            <div className="results-badge">
                                                <TrendingUp size={14} />
                                                <span>{testimonials[currentTestimonial].results}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div className="testimonial-controls">
                                <button className="control-btn" onClick={prevTestimonial}>
                                    <ChevronLeft size={20} />
                                </button>
                                <div className="testimonial-dots">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`dot ${index === currentTestimonial ? "active" : ""}`}
                                            onClick={() => setCurrentTestimonial(index)}
                                        />
                                    ))}
                                </div>
                                <button className="control-btn" onClick={nextTestimonial}>
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Process Section */}
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
                            <h2>How We Work</h2>
                            <p>A proven methodology that ensures successful project delivery</p>
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
                                    <div
                                        className="process-icon"
                                        style={{
                                            background: `linear-gradient(to right, ${step.color.from}, ${step.color.to})`,
                                        }}
                                    >
                                        {step.icon}
                                    </div>

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

                {/* Technologies Section */}
                <section className="technologies-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-badge">
                                <Cpu size={16} />
                                <span>Technologies</span>
                            </div>
                            <h2>Cutting-Edge Technology Stack</h2>
                            <p>We leverage the latest technologies to build future-ready solutions</p>
                        </motion.div>
                        <div className="technologies-grid">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className="tech-card"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="tech-icon">{tech.icon}</div>
                                    <h4>{tech.name}</h4>
                                    <span>{tech.category}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Professional CTA Section */}
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
                                <h2>Ready to Transform Your Business?</h2>
                                <p>
                                    Let's collaborate to bring your vision to life with innovative technology solutions that drive real
                                    results.
                                </p>
                            </div>
                            <div className="cta-buttons">
                                <button onClick={() => {
                                    window.location.href = "/contact";
                                    const element = document.getElementById("#contact-form");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth" });
                                    }
                                }} className="btn-primary">
                                    <span>Start Your Project</span>
                                    <ArrowRight size={20} />
                                </button>
                                <button onClick={() => {
                                    window.location.href = "/contact";
                                    const element = document.getElementById("#contact-form");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth" });
                                    }
                                }} className="btn-secondary" style={{ textDecoration: 'none' }}>
                                    <Calendar size={20} />
                                    <span>Schedule Consultation</span>
                                </button>
                            </div>
                            <div className="cta-features">
                                <div className="cta-feature">
                                    <CheckCircle size={16} />
                                    <span>Free Consultation</span>
                                </div>
                                <div className="cta-feature">
                                    <CheckCircle size={16} />
                                    <span>Custom Solutions</span>
                                </div>
                                <div className="cta-feature">
                                    <CheckCircle size={16} />
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Enhanced Footer */}
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

                {/* Service Modal */}
                <AnimatePresence>
                    {selectedService !== null && (
                        <motion.div
                            className="modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                        >
                            <motion.div
                                className="modal-content"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="modal-close" onClick={() => setSelectedService(null)}>
                                    <X size={24} />
                                </button>
                                <div className="modal-header">
                                    <div className={`modal-icon`} style={{ background: `linear-gradient(to right, ${services[selectedService].color.from}, ${services[selectedService].color.to})` }}>
                                        {services[selectedService].icon}
                                    </div>
                                    <h2>{services[selectedService].title}</h2>
                                    <p>{services[selectedService].description}</p>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-section">
                                        <h3>Key Features</h3>
                                        <ul>
                                            {services[selectedService].features.map((feature, idx) => (
                                                <li key={idx}>
                                                    <CheckCircle size={16} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="modal-section">
                                        <h3>Technologies</h3>
                                        <div className="tech-tags">
                                            {services[selectedService].technologies.map((tech, idx) => (
                                                <span key={idx} className="tech-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="modal-section">
                                        <h3>Benefits</h3>
                                        <ul>
                                            {services[selectedService].benefits.map((benefit, idx) => (
                                                <li key={idx}>
                                                    <CheckCircle size={16} />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}

export default Homepage
