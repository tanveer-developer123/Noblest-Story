const Contact = () => {
  return (
    <div className="py-16">
      {/* Main Contact Section */}
      <div className="max-w-6xl mx-auto  grid md:grid-cols-[50%_50%] gap-10 items-start">
        {/* Left side */}
        <div>
          <div className="text-sm text-gray-500 tracking-widest uppercase mb-4">CONTACT US</div>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            FEEL free TO CONTACT US <br /> without ANY <br /> HESITATION.
          </h2>
        </div>

        {/* Right side */}
        <form className="space-y-8">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-gray-600 uppercase mb-2">
              NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-1"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-gray-600 uppercase mb-2">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-1"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-gray-600 uppercase mb-2">
              TYPE HERE...
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-1"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-gray-600 uppercase mb-2">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Hi"
              required
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-1"
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 uppercase text-sm tracking-wider hover:bg-gray-800 transition-colors"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
