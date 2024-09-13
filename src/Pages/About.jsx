import React, { useEffect, useRef } from 'react';
import './About.css';
import founder from "../Images/Founder.jpg"

const executives = [
    {
        name: 'Ajay Gavasane',
        title: 'Founder',
        image: founder,
        linkedin: 'https://www.linkedin.com/in/ajay-gavasane/'
    },
    // Add more executives here if needed
];

const Section = ({ title, content }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && sectionRef.current) {
                    sectionRef.current.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="section fade-in">
            <h2>{title}</h2>
            <p>{content}</p>
        </section>
    );
};

const ExecutiveCard = ({ executive }) => (
    <div className="executive-card">
        <img src={executive.image} alt={executive.name} />
        <div className="executive-info">
            <h3>{executive.name}</h3>
            <p>{executive.title}</p>
            <a
                href={executive.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
            >
                LinkedIn
            </a>
        </div>
    </div>
);

function About() {
    const headerRef = useRef(null);
    const executivesRef = useRef(null);

    useEffect(() => {
        const headerObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && headerRef.current) {
                    headerRef.current.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        const executivesObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && executivesRef.current) {
                    executivesRef.current.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) {
            headerObserver.observe(headerRef.current);
        }

        if (executivesRef.current) {
            executivesObserver.observe(executivesRef.current);
        }

        return () => {
            if (headerRef.current) {
                headerObserver.unobserve(headerRef.current);
            }
            if (executivesRef.current) {
                executivesObserver.unobserve(executivesRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className="about-page">
                <div className="container">
                    <h1 ref={headerRef} className="fade-in">Welcome to Vishwalarati</h1>

                    <Section
                        title="About Us"
                        content="Welcome to Vishwalarati, where innovation meets efficiency and excellence is our standard. We specialize in outsourced product development, data engineering, and digital strategy design services, serving as the driving force behind organizations' journey towards accelerated time-to-market, cost optimization, and enhanced core competencies."
                    />

                    <Section
                        title="Our Vision"
                        content="Our vision at Vishwalarati is to be a leading force in driving transformative change and innovation across industries worldwide. We aspire to continuously push the boundaries of what's possible in outsourced product development, data engineering, and digital strategy design, setting new standards for excellence and efficiency."
                    />

                    <Section
                        title="Our Mission"
                        content="Our mission at Vishwalarati is to drive innovation and efficiency by providing specialized services in outsourced product development, data engineering, and digital strategy design. We aim to be the catalyst for organizations' success, enabling them to accelerate time-to-market, optimize costs, and enhance their core competencies."
                    />

                    <section ref={executivesRef} className="executives-section fade-in">
                        <h2>Meet Our Executive Profiles</h2>
                        <div className="executives-grid">
                            {executives.map((executive, index) => (
                                <ExecutiveCard key={index} executive={executive} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>

        </>
    );
}

export default About;