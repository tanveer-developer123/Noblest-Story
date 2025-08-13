const Faqs = () => {
    return (
        <>

            {/* <!-- heading section --> */}
            <div className="head">
                <h1>WHAT YOU’LL RECEIVE</h1>
                <span>Unveil the Wisdom Within</span>
            </div>

            <div className="main-container">
                <div className="grid-section">
                    {/* <!-- Top Row --> */}
                    <div className="text-block">
                        <h3>SELF-COMPASSION</h3>
                        <p>It's common to be our own harshest critics, which can erode self-esteem and hinder personal growth. This
                            self-criticism often arises from unrealistic expectations or past failures.</p>
                    </div>

                    <div className="text-block">
                        <h3>PERSONAL GROWTH</h3>
                        <p>Stepping out of your comfort zone can be intimidating, yet it's essential for personal development. Fear of
                            failure or the unknown often holds us back from pursuing new opportunities.</p>
                    </div>

                    <div className="text-block">
                        <h3>RELATIONSHIPS</h3>
                        <p>Fostering meaningful connections requires effort, communication, and understanding. Relationship challenges
                            can stem from miscommunication, differing expectations, or unresolved conflicts.</p>
                    </div>
                    {/* <!-- Bottom Row --> */}
                    <div className="horizontal-divider"></div>

                    <div className="text-block">
                        <h3>TIME MANAGEMENT</h3>
                        <p>Balancing multiple responsibilities and priorities can lead to stress and overwhelm. Finding time for
                            everything you want to achieve often feels impossible.</p>
                    </div>

                    <div className="text-block">
                        <h3>CREATIVITY</h3>
                        <p>Creative blocks can be frustrating and disheartening, whether you're an artist, writer, or innovator. These
                            blocks often stem from self-doubt, perfectionism, or external pressures.</p>
                    </div>

                    <div className="text-block">
                        <h3>RESILIENCE</h3>
                        <p>Life's setbacks and challenges can test our resilience and coping mechanisms. Building resilience involves
                            developing the ability to recover from difficulties and maintain a positive outlook.</p>
                    </div>
                </div>
            </div>

            {/* <!-- Inquiry Section --> */}
            <div className="inquiry-wrapper">
                <section className="inquiry-section">
                    <h2 className="inquiry-title">WANT TO ASK A QUESTION?</h2>
                    <div className="inquiry-text">
                        <p>If you prefer a more personal touch, feel free to email us at noblebeing.com</p>
                        <p>Please include your question or topic in the subject line so we can direct it to the</p>
                        <p>appropriate team member.</p>
                    </div>
                    <a href="#" className="read-more">READ ON
                        <span className="underline-bar"></span>
                    </a>
                </section>
            </div>
        </>
    )
}

export default Faqs
