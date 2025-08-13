import pic1 from "/pic 1.png";
import pic2 from "/pic 2.png";
import pic3 from "/pic 3.png";
import pic4 from "/pic 4.png";
import pic5 from "/pic 5.png";
import '../style/Navbar.css';

const Hero = () => {
  return (
    <>
      <section className="main-section">
        <div className="content">

          <div className="text-block">
            <h3>LOREM IPSUM DOLOR</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id <br />
              pulvinar vitae, tempus a massa. Nullam id dolor eget dolor laoreet cursus. Donec eu <br />
              nulla at lorem porta aliquet.
            </p>
            <a href="#" className="read-more">
              READ ON
              <span className="underline-bar"></span>
            </a>
          </div>

          <div className="text-block">
            <h3>LOREM IPSUM DOLOR</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id <br />
              pulvinar vitae, tempus a massa. Nullam id dolor eget dolor laoreet cursus. Donec eu <br />
              nulla at lorem porta aliquet.
            </p>
            <a href="#" className="read-more">
              READ ON
              <span className="underline-bar"></span>
            </a>
          </div>

          <div className="text-block">
            <h3>LOREM IPSUM DOLOR</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id <br />
              pulvinar vitae, tempus a massa. Nullam id dolor eget dolor laoreet cursus. Donec eu <br />
              nulla at lorem porta aliquet.
            </p>
            <a href="#" className="read-more">
              READ ON
              <span className="underline-bar"></span>
            </a>
          </div>
        </div>

        <div className="vertical-line"></div>

        <aside className="side-panel">
          <p className="side-small">STORY</p>
          <h2 className="side-title">
            NOBLEST<br />BEING
          </h2>
          <a href="#" className="explore">Explore More</a>
        </aside>
      </section>

      {/* Bottom Section */}
      <div className="telius-text">
        <h2>QUOTABLE WISDOM QUEST</h2>
        <p>Unveil the wisdom within</p>
      </div>

      {/* Second image section */}
      <section className="image-grid">
        <div className="grid-item tall">
          <img src={pic1} alt="Anxiety" />
          <div className="overlay-text">ANXIETY</div>
        </div>

        <div className="grid-column">
          <div className="grid-item small">
            <img src={pic2} alt="Desert" />
          </div>
          <div className="grid-item small">
            <img src={pic3} alt="Snow" />
          </div>
        </div>

        <div className="grid-item tall">
          <img src={pic4} alt="Sky" />
        </div>
      </section>

      {/* Hero image */}
      <section className="hero-wrapper">
        <img src={pic5} alt="Desert" className="hero-img" />
        <div className="hero-content">
          <p className="meta">JULY 31, 2025 — EDITORIAL</p>
          <h1 className="headline">
            PERFECTLY imperfect<br />IS OUR STORY
          </h1>
          <p className="subhead">
            In A World Where Healthcare Is Crossating A New
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;