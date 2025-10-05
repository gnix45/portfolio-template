'use client';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const skills = ['Networking', 'Python Fundamentals', 'Operating Systems', 'Project Management', 'Analysis'];
const slideImages = ['/images/network.png', '/images/py.jpeg', '/images/os.jpg', '/images/pm.jpg'];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const currentSkill = skills[textIndex];
    if (charIndex < currentSkill.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentSkill.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 90);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setTypedText('');
        setTextIndex((textIndex + 1) % skills.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const copyUPI = () => {
    navigator.clipboard.writeText('675937819 / 692872730')
      .then(() => alert('COPIED Thanks!'))
      .catch(() => alert('Error copying'));
  };

  const nextSlide = () => setSlideIndex((slideIndex + 1) % slideImages.length);
  const prevSlide = () => setSlideIndex((slideIndex - 1 + slideImages.length) % slideImages.length);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/images/tec.jpg" alt="TechTribe" />
          <h1>TechTribe</h1>
        </div>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}><b>Home</b></a></li>
            <li><a href="#skill" onClick={() => setMenuOpen(false)}><b>Skill</b></a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}><b>Services</b></a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}><b>Projects</b></a></li>
            <li><a href="#knowme" onClick={() => setMenuOpen(false)}><b>know me</b></a></li>
          </ul>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <section id="home" className="home-section">
        <div className="profile-image"></div>
        <br /><br /><br /><br /><br />
        <div className="intro">
          <h2>
            Hey, I&apos;m <span className="name">&quot;PAVEL - TECH TRIBE&quot;</span>, a growing cyber expert skilled in<br />
            <span className="wrd">{typedText}</span>
          </h2>
          <p className="home-txt">
            A junior cybersecurity professional with a strong foundation in both technical and soft skills.
            Proficient in networking fundamentals, operating systems, programming, and the deployment of IPS, IDS, and SIEM solutions.
            Skilled in problem-solving, project management, collaboration, and maintaining a keen attention to detail to enhance security operations.
          </p>
          <div className="buttons">
            <button className="btn support-btn" onClick={() => setPopupOpen(true)}><b>Support Me</b></button>
            <a href="https://telegram.me/tectrib" className="btn contact-btn"><b>Contact Me</b></a>
          </div>
        </div>
      </section>

      {popupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={() => setPopupOpen(false)}>&times;</span>
            <br /><br />
            <h3>Support me with any amount of your choice!<br />Your contribution makes the difference!</h3>
            <div className="upi-logos">
              <img src="/images/upi.png" alt="UPI App" className="logo" />
            </div>
            <img src="/images/QR CODE.png" alt="QR Code" className="qr-code" />
            <p style={{ color: '#000', fontWeight: 'bold' }}>MOMO/OM: <span>675937819 / 692872730</span></p>
            <button className="copy-btn" onClick={copyUPI}><strong>Copy Numbers</strong></button>
          </div>
        </div>
      )}

      <section id="skill" className="skill-section">
        <hr style={{ border: '1px solid #ffffff', width: '70%', margin: '20px auto' }} />
        <h2>My Skills</h2>
        <div className="slider">
          <div className="slides" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
            {slideImages.map((img, i) => (
              <img key={i} src={img} alt={`Skill ${i + 1}`} />
            ))}
          </div>
          <i className="fa-solid fa-angles-left prev" onClick={prevSlide}></i>
          <i className="fa-solid fa-angles-right next" onClick={nextSlide}></i>
        </div>
      </section>

      <section id="services" className="services-section">
        <hr style={{ border: '1px solid #ffffff', width: '70%', margin: '20px auto' }} />
        <h2><b>My Services</b></h2>
        <div className="services-grid">
          <div className="service-card">
            <h3><b>Network Setup</b></h3><br />
            <p>We design and implement networks for offices, stores, cafeterias, and homes, enabling seamless resource sharing and efficient management.</p>
          </div>
          <div className="service-card">
            <h3><b>Web Development</b></h3><br />
            <p>Build clean and responsive websites with wordpress</p>
          </div>
          <div className="service-card">
            <h3><b>Computer System Maintenance</b></h3><br />
            <p>Repair and maintain your computer systems.</p>
          </div>
          <div className="service-card">
            <h3><b>Driver</b></h3><br />
            <p>Looking for category B driver? I&apos;ve got you covered.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="services-section">
        <hr style={{ border: '1px solid #ffffff', width: '70%', margin: '20px auto' }} />
        <h2><b>Projects</b></h2>
        <div className="services-grid">
          <div className="service-card">
            <h3><b>QR code generator</b></h3><br />
            <p>A python script that takes in plain text and outputs a QR code in PNG format</p><br />
            <div className="buttons">
              <a href="https://github.com/gnix45/qr-web-app" className="btn contact-btn"><b>REPO</b></a>
              <a href="https://qr-web-app.onrender.com" className="btn contact-btn"><b>Live Demo</b></a>
            </div>
          </div>
          <div className="service-card">
            <h3><b>Key Logger</b></h3><br />
            <p>This project aims to listen and capture every keystroke. DISCLAIMER: For ethical purposes only.</p>
            <div className="buttons">
              <a href="https://github.com/gnix45/keylogger" className="btn contact-btn"><b>REPO</b></a>
              <a href="#" className="btn contact-btn"><b>Live Demo</b></a>
            </div>
          </div>
          <div className="service-card">
            <h3><b>Password Strength Check</b></h3><br />
            <p>Evaluates password strength and provides feedback to enhance security using standard password requirements.</p>
            <div className="buttons">
              <a href="https://github.com/gnix45/psw-checker-web" className="btn contact-btn"><b>REPO</b></a>
              <a href="https://psw-checker.vercel.app/" className="btn contact-btn"><b>Live Demo</b></a>
            </div>
          </div>
          <div className="service-card">
            <h3><b>NEW PROJECT</b></h3><br />
            <p>Upcoming....</p>
            <div className="buttons">
              <a href="#" className="btn contact-btn"><b>REPO</b></a>
              <a href="#" className="btn contact-btn"><b>Live Demo</b></a>
            </div>
          </div>
        </div>
      </section>

      <section id="knowme" className="knowme-section">
        <hr style={{ border: '1px solid #ffffff', width: '70%', margin: '20px auto' }} />
        <h2><b>know me</b></h2>
        <div className="knowme-grid">
          <div className="know-card">
            <h3><b>My location ?</b></h3><br />
            <p>I live in the North West region of Cameroon precisely in Bamenda III subdivision.</p>
          </div>
          <div className="know-card">
            <h3><b>My Education ?</b></h3><br />
            <p>I pursued my education with a focus on technology and cybersecurity, building a strong foundation for my growing career.</p>
          </div>
          <div className="know-card">
            <h3><b>My Dream ?</b></h3><br />
            <p>My dream is to revolutionize the tech industry by harnessing artificial intelligence and cutting-edge technologies.</p>
          </div>
          <div className="know-card">
            <h3><b>What I&apos;m Doing Now ?</b></h3><br />
            <p>I&apos;m working as a self-employed maintenance technician, repairing computer systems and setting up networks for various businesses.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h3><b>
          © {new Date().getFullYear()} 
          <a href="https://youtube.com/@techtrib" style={{ color: 'red', textDecoration: 'none' }}>
            {' '}TechTribe - All Rights Reserved
          </a>
        </b></h3>
        <div className="social-media">
          <a href="https://youtube.com/@techtrib" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://telegram.me/tectrib" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="https://github.com/gnix45" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </footer>

      <Analytics />
    </>
  );
}