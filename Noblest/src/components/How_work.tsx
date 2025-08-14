const How_work = () => {
  return (
    <>
      {/* Header */}
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold uppercase">THIS IS ALL YOU NEED</h1>
        <span className="text-gray-500">Exactly What You Need</span>
      </div>

      {/* 3 Column Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-16">
        {/* Card 1 */}
        <div className="relative h-[620px] overflow-hidden group">
          <img
            src="/Rectangle 22.png"
            alt="Blogs"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white ">
            <h1 className="text-3xl">
              BLOGS

            </h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative h-[620px] overflow-hidden group">
          <img
            src="/circle 2.png"
            alt="Newsletter"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center">
            <h1 className="text-3xl">
              UR BEST <br /> NEWSLETTER
            </h1>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative h-[620px] overflow-hidden group">
          <img
            src="/circle 3.png"
            alt="Articles"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white">
            <h1 className="text-3xl">
              ARTICLES
            </h1>
          </div>
        </div>
      </div>



      {/* Second Header */}
      <div className="text-center my-16">
        <h1 className="text-3xl font-bold uppercase">HOW IT WORKS</h1>
        <span className="text-gray-500">Exactly What You Need</span>
      </div>

      {/* Growth Items */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <div className="space-y-10">
          {[
            { num: "01", title: "PERSONAL DEVELOPMENT", text: "Strive to grow and improve daily." },
            { num: "02", title: "HEALTH", text: "Focus on exercise, and mental health." },
            { num: "03", title: "RELATIONSHIP", text: "Foster supportive connections with empathy and trust." },
            { num: "04", title: "FINANCE", text: "Manage money wisely for future stability." },
            { num: "05", title: "SPIRITUALITY", text: "Seek inner peace and purpose through mindfulness." },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-start w-[900px] ${index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
            >
              <div className="flex items-start max-w-md">
                {/* Number + Line */}
                <div className="flex flex-col items-center mr-6">
                  <span className="text-2xl font-medium tracking-wide">{item.num}</span>
                  <div className="w-px h-8 bg-gray-400 mt-1"></div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-wide">{item.title}</h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* FAQ Section */}
        <div className="my-[120px]">
  <div className="grid grid-cols-1 md:grid-cols-[30%_70%] items-start gap-8">
    {/* Left Side - Heading */}
    <div className="md:pr-8">
      <div className="uppercase text-sm text-gray-500">
        All the Answers Without the Drama
      </div>
      <h2 className="text-3xl font-italic leading-tight mt-2">
        Commonly <br /> Asked <br /> Questions
      </h2>
    </div>

    {/* Right Side - FAQ Content */}
    <div className="space-y-4 ">
      <div className="font-italic text-xl">How do I start meditating?</div>
      <hr />

      <div className="font-italic text-xl">WHAT IS WELL-BEING?</div>
      <div className="text-gray-600">
        Well-being encompasses overall health, happiness, and life satisfaction.
      </div>
      <hr />

      <div className="font-italic text-xl">HOW CAN I BOOST MY CREATIVITY?</div>
      <div className="text-gray-600">
        Try new experiences, explore hobbies, stay curious, and allow time for relaxation.
      </div>
      <hr />

      <div className="font-italic text-xl">WHAT ARE COMMON SOURCES OF MOTIVATION?</div>
      <div className="text-gray-600">
        Sources include personal goals, rewards, support from others, and a sense of purpose.
      </div>
      <hr />

      <div className="font-italic text-xl">HOW CAN I PRACTICE GRATITUDE DAILY?</div>
      <div className="text-gray-600">
        Keep a gratitude journal, express thanks to others, and reflect on positive aspects of your life.
      </div>
      <hr />
    </div>
  </div>
</div>


      </div>
    </>
  );
};

export default How_work;
