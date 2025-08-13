import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaDribbble,
  FaLinkedin,
  FaReddit,
  FaPinterest,
} from "react-icons/fa6";

const quotes = [
  {
    text: `“Imagination is the beginning of creation.
You imagine what you desire, you will
what you imagine, and at last, you create
what you will.”`,
    author: "GEORGE BERNARD SHAW",
  },
  {
    text: `“Imagination is the beginning of creation.
You imagine what you desire, you will
what you imagine, and at last, you create
what you will.”`,
    author: "ELEANOR ROOSEVELT",
  },
  {
    text: `“Imagination is the beginning of creation.
You imagine what you desire, you will
what you imagine, and at last, you create
what you will.”`,
    author: "WILLIAM BUTLER YEATS",
  },
  {
    text: `“Imagination is the beginning of creation.
You imagine what you desire, you will
what you imagine, and at last, you create
what you will.”`,
    author: "HENRY DAVID THOREAU",
  },
];

const Connect = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 400, // fast animation
      easing: "ease-out",
    });
    AOS.refresh();
  }, [currentIndex]); // har slide change par animation refresh hoga

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <>
      <div>
        {/* Gray line */}
        <div className="gray-line"></div>

        {/* Connect Row */}
        <div className="connect-row">
          <div className="connect-left">
            <div className="connect-small-heading">The heart of our mission</div>
            <span className="connect-title">CONNECT</span>
          </div>
          <span className="connect-icons">
            <FaInstagram className="light-icon" />
            <FaXTwitter className="light-icon" />
            <FaFacebook />
            <FaDribbble />
            <FaLinkedin />
            <FaReddit />
            <FaPinterest />
          </span>
        </div>

        {/* Quote Slider */}
        <div className="quote-section">
          <div className="arrow left" onClick={prevSlide}>
            &#10094;
          </div>

          <div id="quote-container">
            <div
              className="quote-slide active"
              data-aos="fade-up" // niche se upar
              key={currentIndex} // force re-render on change
            >
              <div className="quote-text">
                {quotes[currentIndex].text.split("\n").map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
              <div className="quote-author">{quotes[currentIndex].author}</div>
            </div>
          </div>

          <div className="arrow right" onClick={nextSlide}>
            &#10095;
          </div>
        </div>

        {/* Who Section */}
        <div className="who-section">
          <div className="who-left">
            <div
              style={{
                fontSize: "14px",
                letterSpacing: "1px",
                marginBottom: "8px",
                fontFamily: "jost",
              }}
            >
              THE HEART OF OUR MISSION
            </div>
            <div className="who-title">WHO WE'RE</div>
          </div>
          <div className="who-right">
            We are dedicated to fostering growth in all aspects of life.
            <br />
            Through personal development, we encourage continuous
            <br />
            learning and improvement. We emphasize the importance of
            <br />
            health, both physical and mental, and promote inner peace
            <br />
            through spirituality. Building strong, supportive relationships
            <br />
            with empathy and trust is central to our approach, alongside
            <br />
            wise financial management for future stability.
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
