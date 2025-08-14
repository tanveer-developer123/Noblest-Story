const Faqs = () => {
  return (
    <>
      {/* Heading section */}
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold uppercase">WHAT YOU’LL RECEIVE</h1>
        <span className="text-gray-500">Unveil the Wisdom Within</span>
      </div>

      {/* Main container */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8">
          {/* Top Row */}
          <div className="space-y-2">
            <h3 className="text-2xl py-2 font-italic">SELF-COMPASSION</h3>
            <p className="text-gray-600 text-lg">
              It's common to be our own harshest critics, which can erode self-esteem and hinder personal growth. This
              self-criticism often arises from unrealistic expectations or past failures.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl py-2 font-italic">PERSONAL GROWTH</h3>
            <p className="text-gray-600 text-lg">
              Stepping out of your comfort zone can be intimidating, yet it's essential for personal development. Fear of
              failure or the unknown often holds us back from pursuing new opportunities.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl py-2 font-italic">RELATIONSHIPS</h3>
            <p className="text-gray-600 text-lg">
              Fostering meaningful connections requires effort, communication, and understanding. Relationship challenges
              can stem from miscommunication, differing expectations, or unresolved conflicts.
            </p>
          </div>

          {/* Divider */}
          <div className="col-span-full border-t border-gray-300 my-4"></div>

          {/* Bottom Row */}
          <div className="space-y-2">
            <h3 className="text-2xl py-2 font-italic">TIME MANAGEMENT</h3>
            <p className="text-gray-600 text-lg">
              Balancing multiple responsibilities and priorities can lead to stress and overwhelm. Finding time for
              everything you want to achieve often feels impossible.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl py-2 font-italic">CREATIVITY</h3>
            <p className="text-gray-600 text-lg">
              Creative blocks can be frustrating and disheartening, whether you're an artist, writer, or innovator. These
              blocks often stem from self-doubt, perfectionism, or external pressures.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl py-2 font-italic">RESILIENCE</h3>
            <p className="text-gray-600 text-lg">
              Life's setbacks and challenges can test our resilience and coping mechanisms. Building resilience involves
              developing the ability to recover from difficulties and maintain a positive outlook.
            </p>
          </div>
        </div>
      </div>

      {/* Inquiry Section */}
      <div className="py-10 mt-12">
        <section className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-italic mb-4">WANT TO ASK A QUESTION?</h2>
          <div className="text-gray-600 text-lg space-y-1">
            <p>If you prefer a more personal touch, feel free to email us at noblebeing.com</p>
            <p>Please include your question or topic in the subject line so we can direct it to the</p>
            <p>appropriate team member.</p>
          </div>
          <a
            href="#"
            className="mt-6 inline-block uppercase border-b-2 border-black"
          >
            READ ON
          </a>
        </section>
      </div>
    </>
  );
};

export default Faqs;
