
const Fresh_ins = () => {
    return (
        <>
            <div className="head-two">
                <h2 className="two-title">Igniting Your Inner Drive</h2>
                <span>Unveil the Wisdom Within</span>
            </div>

            <div className="container-op">
                {/* Featured Cards Section  */}
                <div className="featured-cards-pt">
                    <div className="card-bt">
                        <img src="/Rectangle 15.png" alt="Mindful Breath Awareness" className="card-bg" />
                        <div className="card-overlay-mb">
                            <div className="card-content-mt">
                                <div className="card-title-mv">Mindful Breath <br /> Awareness</div>
                                <div className="card-author-mc">By Sophia Ray</div>
                            </div>
                            <div className="read-more-on">
                                <span>Read More</span>
                                <span>→</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-bt">
                        <img src="/Rectangle 17.png" alt="Walking Meditation" className="card-bg" />
                        <div className="card-overlay-mb">
                            <div className="card-content-mt">
                                <div className="card-title-mv">Walking <br /> Meditation</div>
                                <div className="card-author-mc">By Marissa Roberts</div>
                            </div>
                            <div className="read-more-on">
                                <span>Read More</span>
                                <span>→</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-bt">
                        <img src="/Rectangle 18.png" alt="Silent Witness" className="card-bg" />
                        <div className="card-overlay-mb">
                            <div className="card-content-mt">
                                <div className="card-title-mv">Silent <br /> Witness</div>
                                <div className="card-author-mc">By J. Krishnamurti</div>
                            </div>
                            <div className="read-more-on">
                                <span>Read More</span>
                                <span>→</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Gray Line Section --> */}
                <div className="gray-line-section">
                    <div className="gray-line"></div>
                </div>

                {/* <!-- Navigation Section --> */}
                <div className="nav-section">
                    <div className="nav-left">SEPT 30, 2023</div>
                    <div className="nav-center">Fresh Insights</div>
                    <div className="nav-right">SPIRITUALITY</div>
                </div>


                {/* <!-- Article Preview Section --> */}
                <div className="article-preview">
                    <div className="article-content">
                        <div className="article-category">Embrace Now for a More Fulfilling Life</div>
                        <h3 className="article-title">Finding Peace <br />in the Present <br /> Moment</h3>
                        <a href="#" className="read-more">READ ON
                            <span className="underline-bar"></span>
                        </a>
                        <p className="article-excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar vitae, tempus a
                            massa. Nullam id dolor eget dolor laoreet cursus. Donec eu nulla at lorem porta aliquet.
                        </p>
                    </div>
                    <div className="article-image-container">
                        <img src="/Rectangle 20.png" alt="Peaceful landscape" className="article-image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fresh_ins;