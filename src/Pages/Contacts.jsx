import React, { useState, useEffect, useRef } from 'react';
import './Contacts.css';
import Header from './Header';
import Footer from './Footer';

const ContactInfo = ({ icon, title, content }) => (
    <div className="contacts-info-item">
        <div className="contacts-icon">{icon}</div>
        <div className="contacts-details">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    </div>
);

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        // Here you would typically send the data to your server
    };

    return (
        <form onSubmit={handleSubmit} className="contacts-form">
            <div className="contacts-form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="contacts-form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="contacts-form-group">
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                />
            </div>
            <div className="contacts-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>
            <button type="submit" className="contacts-submit-button">Send Message</button>
            {isSubmitted && <p className="contacts-success-message">Thank you for your message. We'll get back to you soon!</p>}
        </form>
    );
};

const FAQ = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="contacts-faq-item">
            <button className="contacts-faq-question" onClick={() => setIsOpen(!isOpen)}>
                {question}
                <span className={`contacts-faq-icon ${isOpen ? 'open' : ''}`}>▼</span>
            </button>
            {isOpen && <p className="contacts-faq-answer">{answer}</p>}
        </div>
    );
};

function Contacts() {
    const fadeElements = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target && entry.target.classList) {
                        entry.target.classList.add('contacts-visible');
                    }
                }
            });
        }, { threshold: 0.1 });

        fadeElements.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => {
            fadeElements.current.forEach(el => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const addToFadeElements = (el) => {
        if (el && !fadeElements.current.includes(el)) {
            fadeElements.current.push(el);
        }
    };

    return (
        <>
            <div className="contacts-page">
                <header className="contacts-hero">
                    <h1 ref={addToFadeElements} className="contacts-fade-in">Get in Touch</h1>
                    <p ref={addToFadeElements} className="contacts-fade-in">We value open communication and are committed to providing prompt and helpful support...</p>
                </header>

                <main className="contacts-main-content">
                    <section ref={addToFadeElements} className="contacts-info-section contacts-fade-in">
                        <h2>Contact Information</h2>
                        <div className="contacts-info-grid">
                            <ContactInfo icon="📞" title="Phone" content="+91 7620131908" />
                            <ContactInfo icon="✉️" title="Email" content="vishwalarati@gmail.com" />
                            <ContactInfo icon="🏢" title="Office" content="783, Swami Vivekananda Nagar, Near Solapur Airport, Solapur-413002, Maharashtra." />
                        </div>
                    </section>

                    <section ref={addToFadeElements} className="contacts-form-section contacts-fade-in">
                        <h2>Send Us a Message</h2>
                        <ContactForm />
                    </section>

                    {/* <section ref={addToFadeElements} className="contacts-faq-section contacts-fade-in">
                        <h2>Frequently Asked Questions</h2>
                        <FAQ
                            question="What services does Vishwalarati offer?"
                            answer="Vishwalarati specializes in outsourced product development..."
                        />
                    </section> */}

                    <section ref={addToFadeElements} className="contacts-map-section contacts-fade-in">
                        <h2>Visit Us</h2>
                        <div className="contacts-map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6347.782620562595!2d75.89363580869136!3d17.615655501259877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d757fb36becd%3A0xf76bfc7549cf790d!2sSwami%20Vivekanand%20Nagar%2C%20Solapur%2C%20Maharashtra%20413008!5e1!3m2!1sen!2sin!4v1726164927831!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{}}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map Location"
                            />
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}

export default Contacts;
