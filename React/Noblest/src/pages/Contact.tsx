const Contact = () => {
  return (
    <>
    <div className="contact-container">
    {/* <!-- Main Contact Section --> */}
    <div className="contact-section">
      <div className="contact-left">
        <div className="questions-subtitle">CONTACT US</div>
        <h2>FEEL free TO <br /> CONTACT US <br /> without ANY <br /> HESITATION.</h2>
      </div>

      <div className="contact-right">
        <form>
          <div className="form-group">
            <label form="name">NAME</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label form="email">EMAIL ADDRESS</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label form="phone">type here...</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="form-group">
            <label form="message">MESSAGE</label>
            <textarea id="message" name="message" placeholder="Hi" required></textarea>
          </div>

          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Contact
