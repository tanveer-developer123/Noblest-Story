const Footer = () => {
  return (
<>
 <footer className="footer-wrapper">
      <div className="footer-line"></div>

      <div className="footer-grid">
        {/* <!-- Column 1 --> */}
        <div className="footer-column">
          <h4>MAIL US TO</h4>
          <p>hello@example.com</p>
          <p>info@example.com</p>
        </div>

        {/* <!-- Column 2 --> */}
        <div className="footer-column center-column">
          <h4>IMPORTANT LINKS</h4>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT</a>
        </div>

        {/* <!-- Column 3 --> */}
        <div className="footer-column">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <input type="email" placeholder="Enter your email address" className="footer-input"/>
          <div className="underline"></div>
          <button className="footer-button">Subscribe</button>
        </div>
      </div>

      <div className="footer-line"></div>
      <p className="footer-bottom-text">2025 © YourSite Name – Powered by YourBrand</p>
    </footer>
</>
)
}

export default Footer
