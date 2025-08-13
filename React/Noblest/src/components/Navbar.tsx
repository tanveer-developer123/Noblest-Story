import "../style/Navbar.css"

const Navbar = () => {
  return (

    <>
      <div className="horizontal-line"></div>
      <div className="top-bar">
        <div className="top-left">Partly Cloud 38°C</div>
        <div className="top-right">July 31, 2025</div>
      </div>

      {/* Divider */}
      <div className="horizontal-line"></div>

      {/* Navigation */}
      <header className="navbar">
        <div className="logo">
          <img src="" alt="" />
          </div>
        <nav className="nav-links">
          <a href="#">Meditation</a>
          <a href="#">ANXIETY</a>
          <a href="#">Well-being</a>
        </nav>
        <div className="nav-cta">
          <a href="#">Mentorship for Influencers</a>
        </div>
      </header>

      <div className="horizontal-line"></div>
    </>
  )
}

export default Navbar
