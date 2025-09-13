"use client"
import { Helmet } from "react-helmet";
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Target, Eye, Heart, Users, Award, Zap, Globe, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Lightbulb, Rocket, Star, Building, Calendar, MapPin, Phone, Mail, Sun, Sparkles, Cloud, Briefcase, Code, Database, Cpu, Monitor, Layers, Quote, ChevronRight } from 'lucide-react'
import "./AboutUs.css"

const AboutUs = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isLoaded, setIsLoaded] = useState(false)
    const [activeTab, setActiveTab] = useState(0)

    useEffect(() => {
        setIsLoaded(true)
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const values = [
        {
            icon: <Lightbulb size={40} />,
            title: "Innovation",
            description: "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions that drive business transformation.",
            color: { from: "#facc15", to: "#f97316" }, // yellow-400 to orange-500
        },
        {
            icon: <Users size={40} />,
            title: "Collaboration",
            description: "We believe in the power of teamwork and foster strong partnerships with our clients and team members to achieve extraordinary results.",
            color: { from: "#60a5fa", to: "#6366f1" }, // blue-400 to indigo-500
        },
        {
            icon: <Award size={40} />,
            title: "Excellence",
            description: "We maintain the highest standards in everything we do, ensuring quality and reliability in every project we undertake.",
            color: { from: "#c084fc", to: "#ec4899" }, // purple-400 to pink-500
        },
        {
            icon: <Shield size={40} />,
            title: "Integrity",
            description: "We conduct business with honesty, transparency, and ethical practices in all our interactions and deliverables.",
            color: { from: "#34d399", to: "#14b8a6" }, // emerald-400 to teal-500
        },
        {
            icon: <Rocket size={40} />,
            title: "Growth",
            description: "We are committed to continuous learning and improvement, helping our clients and team members reach new heights.",
            color: { from: "#fb7185", to: "#ec4899" }, // rose-400 to pink-500
        },
        {
            icon: <Heart size={40} />,
            title: "Passion",
            description: "We bring enthusiasm and dedication to every project, creating solutions that truly make a difference in people's lives.",
            color: { from: "#f472b6", to: "#f43f5e" }, // pink-400 to rose-500
        },
    ];


    const milestones = [
        {
            year: "2019",
            title: "Company Founded",
            description: "Vishwalatarati was established with a vision to transform digital experiences and empower businesses through technology.",
            icon: <Building size={30} />,
            color: { from: "#3b82f6", to: "#9333ea" }, // blue-500 to purple-600
        },
        {
            year: "2020",
            title: "First Major Client",
            description: "Successfully delivered our first enterprise-level project, setting the foundation for growth and establishing our reputation.",
            icon: <Star size={30} />,
            color: { from: "#10b981", to: "#0d9488" }, // emerald-500 to teal-600
        },
        {
            year: "2021",
            title: "Team Expansion",
            description: "Grew our team to 25+ professionals across multiple domains and technologies, enhancing our service capabilities.",
            icon: <Users size={30} />,
            color: { from: "#8b5cf6", to: "#db2777" }, // purple-500 to pink-600
        },
        {
            year: "2022",
            title: "International Reach",
            description: "Expanded our services globally, serving clients across different continents and establishing international partnerships.",
            icon: <Globe size={30} />,
            color: { from: "#f97316", to: "#dc2626" }, // orange-500 to red-600
        },
        {
            year: "2023",
            title: "Innovation Hub",
            description: "Established our R&D division focusing on emerging technologies, AI solutions, and next-generation digital platforms.",
            icon: <Lightbulb size={30} />,
            color: { from: "#eab308", to: "#f97316" }, // yellow-500 to orange-600
        },
        {
            year: "2024",
            title: "Industry Recognition",
            description: "Received multiple awards for excellence in software development, client satisfaction, and innovative solutions.",
            icon: <Award size={30} />,
            color: { from: "#6366f1", to: "#2563eb" }, // indigo-500 to blue-600
        },
    ];

    const team = [
        {
            name: "Gaurav Gham",
            position: "Director & CEO",
            expertise: "Technology Strategy, Business Development, Digital Transformation",
            experience: "15+ years",
            image: "/placeholder.svg?height=300&width=300",
            bio: "Visionary leader with extensive experience in scaling technology companies and driving digital innovation across industries.",
            achievements: ["Led 500+ successful projects", "Built teams of 50+ professionals", "Recognized industry expert"],
        },
        {
            name: "Priya Sharma",
            position: "Chief Technology Officer",
            expertise: "Software Architecture, AI/ML, Cloud Computing",
            experience: "12+ years",
            image: "/placeholder.svg?height=300&width=300",
            bio: "Technical expert specializing in cutting-edge technologies and scalable system architecture for enterprise solutions.",
            achievements: ["Architected 200+ applications", "AI/ML specialist", "Cloud computing expert"],
        },
        {
            name: "Amit Patel",
            position: "Head of Design",
            expertise: "UX/UI Design, Digital Strategy, Brand Development",
            experience: "10+ years",
            image: "/placeholder.svg?height=300&width=300",
            bio: "Creative leader focused on user-centered design and creating exceptional digital experiences that drive engagement.",
            achievements: ["Designed 300+ interfaces", "Award-winning designer", "UX strategy expert"],
        },
        {
            name: "Sarah Johnson",
            position: "VP of Operations",
            expertise: "Project Management, Quality Assurance, Process Optimization",
            experience: "8+ years",
            image: "/placeholder.svg?height=300&width=300",
            bio: "Operations expert ensuring seamless project delivery and maintaining the highest quality standards across all initiatives.",
            achievements: ["Managed 400+ projects", "Quality assurance leader", "Process optimization specialist"],
        },
    ]

    const tabs = [
        { label: "Our Story", icon: <Building size={20} /> },
        { label: "Our Team", icon: <Users size={20} /> },
        { label: "Our Culture", icon: <Heart size={20} /> },
        { label: "Our Impact", icon: <TrendingUp size={20} /> },
    ]

    const stats = [
        { number: "500+", label: "Projects Completed", icon: <Rocket size={30} />, color: "text-blue-600" },
        { number: "150+", label: "Happy Clients", icon: <Heart size={30} />, color: "text-rose-600" },
        { number: "50+", label: "Team Members", icon: <Users size={30} />, color: "text-emerald-600" },
        { number: "98%", label: "Success Rate", icon: <Award size={30} />, color: "text-purple-600" },
    ]

    const services = [
        {
            icon: <Code size={24} />,
            title: "Software Development",
            description: "Custom enterprise solutions"
        },
        {
            icon: <Monitor size={24} />,
            title: "Web Development",
            description: "Modern responsive websites"
        },
        {
            icon: <Database size={24} />,
            title: "Data Analytics",
            description: "Business intelligence solutions"
        },
        {
            icon: <Cpu size={24} />,
            title: "AI & Machine Learning",
            description: "Intelligent automation systems"
        }
    ]

    return (
        <>
            <Helmet>
                <title>About Us | Vishwalatarati – Leading Software Development Company</title>
                <meta
                    name="description"
                    content="Learn about Vishwalatarati Digital Solutions Pvt Ltd, a team of passionate developers delivering cutting-edge software, app, and web solutions in Maharashtra."
                />
                <meta
                    name="keywords"
                    content="About Vishwalatarati, IT company Solapur, Software development team, Web design Maharashtra, Software engineers India"
                />
                <meta name="author" content="Vishwalatarati Digital Solutions Pvt Ltd" />
                <meta property="og:title" content="About Vishwalatarati Digital Solutions Pvt Ltd" />
                <meta property="og:description" content="Know our journey as a leading tech company in Maharashtra" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vishwalatarati.in/about" />
                <meta property="og:image" content="/og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Vishwalatarati Digital Solutions Pvt Ltd" />
                <meta name="twitter:description" content="We create innovative and scalable digital solutions across India." />
                <meta name="twitter:image" content="/og-image.png" />
            </Helmet>
            <div className="about-page">
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
                        left: mousePosition.x - 15,
                        top: mousePosition.y - 15,
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
                <section className="about-hero">
                    <div className="hero-background">
                        <div className="hero-gradient"></div>
                        <div className="hero-pattern"></div>
                    </div>
                    <div className="container">
                        <motion.div
                            className="about-hero-content"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <div className="hero-badge">
                                <Sun size={16} />
                                <span>About Vishwalatarati</span>
                            </div>
                            <h1>Pioneering Digital Excellence Through Innovation</h1>
                            <p>
                                We are the architects of tomorrow's digital landscape, committed to excellence and unwavering dedication
                                to transforming businesses worldwide through cutting-edge technology solutions and strategic innovation.
                            </p>
                            <div className="hero-stats-grid">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="hero-stat-item"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                                    >
                                        <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
                                        <span className="stat-number">{stat.number}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Company Overview */}
                <section className="company-overview">
                    <div className="container">
                        <div className="overview-content">
                            <motion.div
                                className="overview-text"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="section-badge">
                                    <Building size={16} />
                                    <span>Our Foundation</span>
                                </div>
                                <h2>Welcome to Vishwalatarati</h2>
                                <div className="overview-description">
                                    <p>
                                        Where innovation meets efficiency and excellence is our standard. We specialize in outsourced product
                                        development, data engineering, and digital strategy design services, serving as the driving force
                                        behind organizations' journey towards accelerated time-to-market, cost optimization, and enhanced core
                                        competencies.
                                    </p>
                                    <p>
                                        Our team of passionate professionals is dedicated to crafting experiences that simplify lives, whether
                                        through tailored software solutions, intuitive mobile applications, or engaging websites. By
                                        leveraging data-driven insights, we help businesses make informed decisions and unlock actionable
                                        intelligence for sustainable growth.
                                    </p>
                                </div>
                                <div className="overview-highlights">
                                    <div className="highlight-item">
                                        <CheckCircle size={20} />
                                        <span>Industry-leading expertise across multiple domains</span>
                                    </div>
                                    <div className="highlight-item">
                                        <CheckCircle size={20} />
                                        <span>Cutting-edge technology solutions and innovations</span>
                                    </div>
                                    <div className="highlight-item">
                                        <CheckCircle size={20} />
                                        <span>Client-centric approach with personalized service</span>
                                    </div>
                                    <div className="highlight-item">
                                        <CheckCircle size={20} />
                                        <span>Proven track record of successful project delivery</span>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="overview-visual"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="overview-image-container">
                                    <img src="https://media.istockphoto.com/id/1144647692/photo/corporate-group-portrait-of-cheering-staff-members.jpg?s=612x612&w=0&k=20&c=hgDeW7sDrgX7hn6mBT5SmDNhcsZ14p5H6KolxRsb70k=" alt="Our Company" />
                                    <div className="image-overlay">
                                        <div className="overlay-content">
                                            <h3>5+ Years</h3>
                                            <p>of Digital Excellence</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="floating-elements">
                                    <div className="floating-metric metric-1">
                                        <Globe size={24} />
                                        <span>Global Reach</span>
                                    </div>
                                    <div className="floating-metric metric-2">
                                        <TrendingUp size={24} />
                                        <span>Growth Focus</span>
                                    </div>
                                    <div className="floating-metric metric-3">
                                        <Zap size={24} />
                                        <span>Innovation</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="vision-mission">
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
                                <span>Our Purpose</span>
                            </div>
                            <h2>Vision & Mission</h2>
                            <p>Driving transformative change through innovation and excellence</p>
                        </motion.div>
                        <div className="vm-grid">
                            <motion.div
                                className="vm-card vision-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="vm-icon">
                                    <Eye size={50} />
                                </div>
                                <h3>Our Vision</h3>
                                <p>
                                    Our vision at Vishwalatarati is to be a leading force in driving transformative change and innovation
                                    across industries worldwide. We aspire to continuously push the boundaries of what's possible in
                                    outsourced product development, data engineering, and digital strategy design, setting new standards for
                                    excellence and efficiency in the digital landscape.
                                </p>
                                <div className="vm-features">
                                    <div className="feature">
                                        <Globe size={16} />
                                        <span>Global Leadership</span>
                                    </div>
                                    <div className="feature">
                                        <Lightbulb size={16} />
                                        <span>Innovation Pioneer</span>
                                    </div>
                                    <div className="feature">
                                        <Award size={16} />
                                        <span>Excellence Standard</span>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="vm-card mission-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="vm-icon">
                                    <Target size={50} />
                                </div>
                                <h3>Our Mission</h3>
                                <p>
                                    Our mission at Vishwalatarati is to drive innovation and efficiency by providing specialized services in
                                    outsourced product development, data engineering, and digital strategy design. We aim to be the catalyst
                                    for organizations' success, enabling them to accelerate time-to-market, optimize costs, and enhance
                                    their core competencies through transformative technology solutions.
                                </p>
                                <div className="vm-features">
                                    <div className="feature">
                                        <Rocket size={16} />
                                        <span>Accelerate Growth</span>
                                    </div>
                                    <div className="feature">
                                        <Shield size={16} />
                                        <span>Optimize Costs</span>
                                    </div>
                                    <div className="feature">
                                        <Users size={16} />
                                        <span>Empower Teams</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="values-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-badge">
                                <Heart size={16} />
                                <span>Our Values</span>
                            </div>
                            <h2>Core Values That Drive Us</h2>
                            <p>The fundamental principles that guide everything we do</p>
                        </motion.div>
                        <div className="values-grid">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="value-card"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={`value-icon`} style={{ background: `linear-gradient(to right, ${value.color.from}, ${value.color.to})`, }}>{value.icon}</div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                    <div className="value-glow"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Overview */}
                <section className="services-overview">
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
                                <span>What We Do</span>
                            </div>
                            <h2>Our Core Services</h2>
                            <p>Comprehensive solutions for your digital transformation journey</p>
                        </motion.div>
                        <div className="services-overview-grid">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="service-overview-card"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="service-overview-icon">
                                        {service.icon}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <div className="service-arrow">
                                        <ChevronRight size={20} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="timeline-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-badge">
                                <Calendar size={16} />
                                <span>Our Journey</span>
                            </div>
                            <h2>Milestones That Shaped Our Growth</h2>
                            <p>A timeline of achievements and key moments in our evolution</p>
                        </motion.div>
                        <div className="timeline">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="timeline-content">
                                        <div className={`timeline-icon`} style={{ background: `linear-gradient(to right, ${milestone.color.from}, ${milestone.color.to})`, }}>{milestone.icon}</div>
                                        <div className="timeline-year">{milestone.year}</div>
                                        <h3>{milestone.title}</h3>
                                        <p>{milestone.description}</p>
                                    </div>
                                    <div className="timeline-dot"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                {/* <section className="team-section">
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
                            <span>Our Team</span>
                        </div>
                        <h2>Meet Our Leadership Team</h2>
                        <p>The visionaries and experts driving our success</p>
                    </motion.div>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                className="team-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                viewport={{ once: true }}
                            >
                                <div className="team-image">
                                    <img src={member.image || "/placeholder.svg"} alt={member.name} />
                                    <div className="team-overlay">
                                        <div className="social-links">
                                            <a href="#" className="social-link">
                                                LinkedIn
                                            </a>
                                            <a href="#" className="social-link">
                                                Twitter
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <p className="team-position">{member.position}</p>
                                    <p className="team-expertise">{member.expertise}</p>
                                    <div className="team-experience">
                                        <Clock size={16} />
                                        <span>{member.experience}</span>
                                    </div>
                                    <p className="team-bio">{member.bio}</p>
                                    <div className="team-achievements">
                                        {member.achievements.map((achievement, idx) => (
                                            <span key={idx} className="achievement-tag">
                                                {achievement}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

                {/* Tabbed Content Section */}
                {/* <section className="tabbed-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2>Discover More About Us</h2>
                        <p>Explore different aspects of our company and culture</p>
                    </motion.div>
                    <div className="tab-navigation">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`tab-btn ${activeTab === index ? "active" : ""}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="tab-content">
                        {activeTab === 0 && (
                            <motion.div
                                className="tab-panel"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3>Our Story</h3>
                                <p>
                                    Founded in 2019 with a vision to transform the digital landscape, Vishwalatarati has grown from a
                                    small startup to a leading technology company. Our journey has been marked by continuous innovation,
                                    strategic partnerships, and an unwavering commitment to client success.
                                </p>
                                <div className="story-highlights">
                                    <div className="highlight">
                                        <Building size={24} />
                                        <div>
                                            <h4>Humble Beginnings</h4>
                                            <p>Started with a small team of passionate developers</p>
                                        </div>
                                    </div>
                                    <div className="highlight">
                                        <TrendingUp size={24} />
                                        <div>
                                            <h4>Rapid Growth</h4>
                                            <p>Expanded to serve clients across multiple industries</p>
                                        </div>
                                    </div>
                                    <div className="highlight">
                                        <Globe size={24} />
                                        <div>
                                            <h4>Global Presence</h4>
                                            <p>Now serving clients worldwide with innovative solutions</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        {activeTab === 1 && (
                            <motion.div
                                className="tab-panel"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3>Our Team</h3>
                                <p>
                                    Our diverse team of 50+ professionals brings together expertise from various domains including
                                    software development, data science, design, and project management. We foster a culture of continuous
                                    learning and innovation.
                                </p>
                                <div className="team-stats">
                                    <div className="team-stat">
                                        <span className="stat-number">50+</span>
                                        <span className="stat-label">Team Members</span>
                                    </div>
                                    <div className="team-stat">
                                        <span className="stat-number">15+</span>
                                        <span className="stat-label">Technologies</span>
                                    </div>
                                    <div className="team-stat">
                                        <span className="stat-number">10+</span>
                                        <span className="stat-label">Countries</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        {activeTab === 2 && (
                            <motion.div
                                className="tab-panel"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3>Our Culture</h3>
                                <p>
                                    We believe in creating an environment where creativity thrives, collaboration is encouraged, and
                                    personal growth is supported. Our culture is built on trust, respect, and a shared passion for
                                    excellence.
                                </p>
                                <div className="culture-values">
                                    <div className="culture-item">
                                        <Heart size={24} />
                                        <span>Work-Life Balance</span>
                                    </div>
                                    <div className="culture-item">
                                        <Users size={24} />
                                        <span>Team Collaboration</span>
                                    </div>
                                    <div className="culture-item">
                                        <Lightbulb size={24} />
                                        <span>Innovation Focus</span>
                                    </div>
                                    <div className="culture-item">
                                        <Award size={24} />
                                        <span>Recognition & Growth</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        {activeTab === 3 && (
                            <motion.div
                                className="tab-panel"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3>Our Impact</h3>
                                <p>
                                    Through our innovative solutions and dedicated service, we've helped businesses transform their
                                    operations, improve efficiency, and achieve remarkable growth. Our impact extends beyond just
                                    technology to real business outcomes.
                                </p>
                                <div className="impact-metrics">
                                    <div className="impact-item">
                                        <TrendingUp size={24} />
                                        <div>
                                            <span className="metric-number">40%</span>
                                            <span className="metric-label">Average Revenue Increase</span>
                                        </div>
                                    </div>
                                    <div className="impact-item">
                                        <Clock size={24} />
                                        <div>
                                            <span className="metric-number">60%</span>
                                            <span className="metric-label">Time-to-Market Reduction</span>
                                        </div>
                                    </div>
                                    <div className="impact-item">
                                        <Shield size={24} />
                                        <div>
                                            <span className="metric-number">99.9%</span>
                                            <span className="metric-label">System Uptime</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section> */}

                {/* Why Choose Us */}
                <section className="why-choose-us">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-badge">
                                <CheckCircle size={16} />
                                <span>Why Choose Us</span>
                            </div>
                            <h2>What Sets Us Apart</h2>
                            <p>Discover the advantages of partnering with Vishwalatarati</p>
                        </motion.div>
                        <div className="choose-us-content">
                            <motion.div
                                className="choose-us-list"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="choose-item">
                                    <div className="choose-icon">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div className="choose-content">
                                        <h4>Proven Expertise</h4>
                                        <p>Years of experience delivering successful projects across various industries and technologies</p>
                                    </div>
                                </div>
                                <div className="choose-item">
                                    <div className="choose-icon">
                                        <Zap size={24} />
                                    </div>
                                    <div className="choose-content">
                                        <h4>Cutting-edge Technology</h4>
                                        <p>We leverage the latest technologies and frameworks to build future-ready solutions</p>
                                    </div>
                                </div>
                                <div className="choose-item">
                                    <div className="choose-icon">
                                        <Shield size={24} />
                                    </div>
                                    <div className="choose-content">
                                        <h4>24/7 Support</h4>
                                        <p>Round-the-clock support to ensure your systems run smoothly and efficiently</p>
                                    </div>
                                </div>
                                <div className="choose-item">
                                    <div className="choose-icon">
                                        <Award size={24} />
                                    </div>
                                    <div className="choose-content">
                                        <h4>Quality Assurance</h4>
                                        <p>Rigorous testing and quality control processes to ensure flawless deliverables</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="choose-us-visual"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="choose-visual-container">
                                    <img src="https://media.istockphoto.com/id/2187408501/photo/office-night-and-businessman-with-computer-for-research-online-information-and-solution-for.jpg?s=612x612&w=0&k=20&c=96fh-oJ0Y7HX5sP1Ex24UBodOMR8WMqYhy8yIszmWLo=" alt="Why Choose Us" />
                                    <div className="visual-overlay">
                                        <div className="overlay-stats">
                                            <div className="overlay-stat">
                                                <span className="stat-number">98%</span>
                                                <span className="stat-label">Client Satisfaction</span>
                                            </div>
                                            <div className="overlay-stat">
                                                <span className="stat-number">500+</span>
                                                <span className="stat-label">Projects Delivered</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
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
                            <h2>Ready to Start Your Journey?</h2>
                            <p>Let's discuss how we can help transform your business and achieve your digital goals</p>
                            <div className="cta-buttons">
                                <Link to="/contact" className="btn-primary">
                                    Get In Touch <ArrowRight size={20} />
                                </Link>
                                <button className="btn-secondary" onClick={() => { window.location.href = "/"; }}>View Our Work</button>
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

export default AboutUs
