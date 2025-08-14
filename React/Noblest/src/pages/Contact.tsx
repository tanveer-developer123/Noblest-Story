const Contact = () => {
  return (
    <>
      <div className="bg-gray-100 py-12">
        {/* Main Contact Section */}
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Left side */}
          <div>
            <div className="text-sm text-gray-500 tracking-widest uppercase mb-2">CONTACT US</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight uppercase">
              FEEL free TO <br /> CONTACT US <br /> without ANY <br /> HESITATION.
            </h2>
          </div>

          {/* Right side */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 uppercase mb-1">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 uppercase mb-1">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  type here...
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 uppercase mb-1">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi"
                  required
                  rows="4"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-md uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
