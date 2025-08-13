const How_work = () => {
  return (
    <>
      <div className="head">
        <h1>THIS IS ALL YOU NEED</h1>
        <span>Exactly What You Need</span>
      </div>

      {/* <!-- section image  --> */}
      <div className="three-column-section">
        <div className="column column1">
          <div className="column-text">BLOGS</div>
        </div>
        <div className="column column2">
          <div className="column-text">OUR BEST<br/>NEWSLETTER</div>
        </div>
        <div className="column column3">
          <div className="column-text">ARTICLES</div>
        </div>
      </div>

      <div className="head-tilti">
        <h1>HOW IT WORKS</h1>
        <span>Exactly What You Need</span>
      </div>

      <div className="personal-growth-container">
        <div className="growth-layout">
          {/* <!-- Top Section - Personal Development Areas --> */}
          <div className="growth-grid">
            <div className="growth-item">
              <div className="number-box">
                <span className="number-label">01</span>
                <div className="arrow-line"></div>
              </div>
              <div className="text-area">
                <h3>Personal Development</h3>
                <p>Strive to grow and improve daily.</p>
              </div>
            </div>

            <div className="growth-item">
              <div className="number-box">
                <span className="number-label">02</span>
                <div className="arrow-line"></div>
              </div>
              <div className="text-area">
                <h3>Health</h3>
                <p>Focus on exercise, and mental health.</p>
              </div>
            </div>

            <div className="growth-item">
              <div className="number-box">
                <span className="number-label">03</span>
                <div className="arrow-line"></div>
              </div>
              <div className="text-area">
                <h3>Relationship</h3>
                <p>Foster supportive connections with empathy and trust.</p>
              </div>
            </div>

            <div className="growth-item">
              <div className="number-box">
                <span className="number-label">04</span>
                <div className="arrow-line"></div>
              </div>
              <div className="text-area">
                <h3>Finance</h3>
                <p>Manage money wisely for future stability.</p>
              </div>
            </div>

            <div className="growth-item">
              <div className="number-box">
                <span className="number-label">05</span>
                <div className="arrow-line"></div>
              </div>
              <div className="text-area">
                <h3>Spirituality</h3>
                <p>Seek inner peace and purpose through mindfulness.</p>
              </div>
            </div>
          </div>

          {/* <!-- Bottom Section - FAQ --> */}
          <div className="questions-section">
            <div className="questions-header">
              <div className="questions-subtitle">All the Answers Without the Drama</div>
              <h2 className="questions-title">Commonly <br/> Asked <br/> Questions</h2>
              </div>

                <div className="questions-list">
                  <div className="question-item">
                    <div className="question-text">How do I start meditating?</div>
                  </div>

                  <div className="question-item">
                    <div className="question-text">WHAT IS WELL-BEING?</div>
                    <div className="answer-text">Well-being encompasses overall health, happiness, and life satisfaction.</div>
                  </div>

                  <div className="question-item">
                    <div className="question-text">HOW CAN I BOOST MY CREATIVITY?</div>
                    <div className="answer-text">Try new experiences, explore hobbies, stay curious, and allow time for relaxation.
                    </div>
                  </div>

                  <div className="question-item">
                    <div className="question-text">WHAT ARE COMMON SOURCES OF MOTIVATION?</div>
                    <div className="answer-text">Sources include personal goals, rewards, support from others, and a sense of
                      purpose.</div>
                  </div>

                  <div className="question-item">
                    <div className="question-text">HOW CAN I PRACTICE GRATITUDE DAILY?</div>
                    <div className="answer-text">Keep a gratitude journal, express thanks to others, and reflect on positive aspects
                      of your life.</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </>
      )
}

      export default How_work
