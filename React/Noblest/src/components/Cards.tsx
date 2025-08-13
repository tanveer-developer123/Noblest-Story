import blogImg from "/pic 6.png"; 

const Cards = () => {
  return (
    <>
      {/* Heading section */}
      <div className="head">
        <h1>EXPLORE OUR WORDS</h1>
        <span>Unveil the Wisdom Within</span>
      </div>

      <div className="blog-section">
        <div className="container">
          <div className="heading-row">
            <h2 className="section-title">Recent Blog Posts</h2>
            <div className="dropdown">
              <label htmlFor="filter" className="dropdown-label">
                POPULAR
              </label>
              <select id="filter" className="dropdown-select">
                <option>All</option>
                <option>Meditation</option>
                <option>Wellness</option>
                <option>Gratitude</option>
                <option>Personal Growth</option>
                <option>Creativity</option>
              </select>
            </div>
          </div>

          <div className="section-line"></div>

          <div className="grid">
            {/* Card 1 */}
            <div className="card large">
              <img src={blogImg} alt="Blog" />
              <div className="content">
                <p>SEP 27, 2025 — CATEGORY</p>
                <h3>Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ex nulla, commodo id pulvinar vitae.
                </p>
              </div>
            </div>

            {/* Center Card */}
            <div className="center-card">
              <div>
                <p className="tag">PT</p>
                <h3 className="title">
                  “PERSPECTIVES, <br /> OPPORTUNITY AND CHALLENGE FOR
                  INNOVATION”
                </h3>
                <p className="author">ANA SILVANT</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card small">
              <img src={blogImg} alt="Blog" />
              <div className="content">
                <p>SEP 27, 2025 — CATEGORY</p>
                <h3>Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ex nulla, commodo id pulvinar vitae. Iusto, eligendi!.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card small">
              <img src={blogImg} alt="Blog" />
              <div className="content">
                <p>SEP 27, 2025 — CATEGORY</p>
                <h3>Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ex nulla, commodo id pulvinar vitae Ut ex nulla adot.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="card small">
              <img src={blogImg} alt="Blog" />
              <div className="content">
                <p>SEP 27, 2025 — CATEGORY</p>
                <h3>Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ex nulla, commodo id pulvinar vitae.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="card large">
              <img src={blogImg} alt="Blog" />
              <div className="content">
                <p>SEP 27, 2025 — CATEGORY</p>
                <h3>Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ex nulla, commodo id pulvinar vitae adot.
                </p>
              </div>
            </div>

            {/* Center Card */}
            <div className="center-card">
              <div>
                <p className="tag">PT</p>
                <h3 className="title">
                  “PERSPECTIVES, <br /> OPPORTUNITY AND CHALLENGE FOR
                  INNOVATION”
                </h3>
                <p className="author">ANA SILVANT</p>
              </div>
            </div>

            {/* Card 8 */}
            <div className="card small">
              <img src={blogImg} alt="Blog" />
              <div className="content">
                <p>SEP 27, 2025 — CATEGORY</p>
                <h3>Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ex nulla, commodo id pulvinar vitae Iusto, eligendi!.
                </p>
              </div>
            </div>

            {/* Card 9 */}
            <div className="card large">
              <img src={blogImg} alt="Blog" />
              <div className="content">
                <p>SEP 27, 2025 — CATEGORY</p>
                <h3>Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p>
                  Intro snippet for reader engagement Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut ex nulla, commodo id
                  pulvinar vitae.
                </p>
              </div>
            </div>

            {/* Center Card */}
            <div className="center-card">
              <div>
                <p className="tag">PT</p>
                <h3 className="title">
                  “PERSPECTIVES, <br /> OPPORTUNITY AND CHALLENGE FOR
                  INNOVATION”
                </h3>
                <p className="author">ANA SILVANT</p>
              </div>
            </div>

            {/* Card 11 */}
            <div className="card small">
              <img src={blogImg} alt="Blog" />
              <div className="content">
                <p>SEP 27, 2025 — CATEGORY</p>
                <h3>Lorem ipsum dolor sit Amet, consectetur</h3>
                <p>
                  Mini description for blog readers Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar
                  vitae.
                </p>
              </div>
            </div>

            {/* Card 12 */}
            <div className="card small">
              <img src={blogImg} alt="Blog" />
              <div className="content">
                <p>SEP 27, 2025 — CATEGORY</p>
                <h3>Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p>
                  Summary or first line of blog Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar
                  vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Cards
