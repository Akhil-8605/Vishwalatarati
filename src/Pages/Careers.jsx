import React, { useState, useEffect } from 'react';
import './Careers.css';
import Header from './Header';
import Footer from './Footer';

const jobCategories = [
  { title: 'Software Development', icon: '💻' },
  { title: 'Data Engineering', icon: '📊' },
  { title: 'Digital Strategy', icon: '🚀' },
];

const JobCategory = ({ title, icon }) => (
  <div className="job-category">
    <div className="job-category-icon">{icon}</div>
    <h3>{title}</h3>
  </div>
);

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: ' ',
    email: ' ',
    position: ' ',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Data will be send to server
    const submitform = document.getElementById("submitform");
    submitform.innerText = "Submitted";
  };

  return (
    <form onSubmit={handleSubmit} className="application-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          name="position"
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf,.doc,.docx"
          required
          onChange={handleChange}
        />
      </div>
      <button type="submit" id='submitform' className="submit-button">
        Submit Application
      </button>
    </form>
  );
};

function Careers() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>

      <div className="careers-page">
        <header className="hero">
          <div className="hero-content">
            <h1 className="fade-in">Become Part of Our Team!</h1>
            <p className="fade-in">
              Discover available job positions, identify your ideal fit, and apply to become part of our innovative team!
            </p>
          </div>
        </header>

        <main className="main-content">
          <section className="job-categories fade-in">
            <h2>Explore Our Job Categories</h2>
            <div className="job-categories-grid">
              {jobCategories.map((category, index) => (
                <JobCategory key={index} {...category} />
              ))}
            </div>
          </section>

          <section className="apply-section fade-in">
            <h2>Apply Now</h2>
            <div className="application-container">
              {!isFormOpen ? (
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="open-form-button"
                >
                  Open Application Form ▼
                </button>
              ) : (
                <div className="form-wrapper">
                  <ApplicationForm />
                </div>
              )}
            </div>
          </section>

          <section className="email-resume-section fade-in">
            <div className="email-resume-content">
              <h2>Not ready to apply?</h2>
              <p>
                Email us your resume and we'll keep you in mind for future opportunities.
              </p>
              <a
                href="mailto:vishwalarati@gmail.com"
                className="email-button"
              >
                ✉ Email Your Resume
              </a>
            </div>
          </section>
        </main>
      </div>

    </>
  );
}

export default Careers;