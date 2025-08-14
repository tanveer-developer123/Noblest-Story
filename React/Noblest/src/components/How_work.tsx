const How_work = () => {
  return (
    <>
      {/* Header */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold uppercase">THIS IS ALL YOU NEED</h1>
        <span className="text-gray-500">Exactly What You Need</span>
      </div>

      {/* 3 Column Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
        <div className="bg-gray-200 h-60 flex items-center justify-center text-xl font-semibold">
          BLOGS
        </div>
        <div className="bg-gray-300 h-60 flex items-center justify-center text-xl font-semibold text-center">
          OUR BEST <br /> NEWSLETTER
        </div>
        <div className="bg-gray-200 h-60 flex items-center justify-center text-xl font-semibold">
          ARTICLES
        </div>
      </div>

      {/* Second Header */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold uppercase">HOW IT WORKS</h1>
        <span className="text-gray-500">Exactly What You Need</span>
      </div>

      {/* Growth Items */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { num: "01", title: "Personal Development", text: "Strive to grow and improve daily." },
            { num: "02", title: "Health", text: "Focus on exercise, and mental health." },
            { num: "03", title: "Relationship", text: "Foster supportive connections with empathy and trust." },
            { num: "04", title: "Finance", text: "Manage money wisely for future stability." },
            { num: "05", title: "Spirituality", text: "Seek inner peace and purpose through mindfulness." },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">{item.num}</span>
                <div className="w-px h-10 bg-gray-400 mt-1"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <div className="uppercase text-sm text-gray-500">All the Answers Without the Drama</div>
            <h2 className="text-3xl font-bold leading-tight">
              Commonly <br /> Asked <br /> Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="font-semibold">How do I start meditating?</div>
            </div>
            <div className="border p-4 rounded-lg">
              <div className="font-semibold">WHAT IS WELL-BEING?</div>
              <div className="text-gray-600">
                Well-being encompasses overall health, happiness, and life satisfaction.
              </div>
            </div>
            <div className="border p-4 rounded-lg">
              <div className="font-semibold">HOW CAN I BOOST MY CREATIVITY?</div>
              <div className="text-gray-600">
                Try new experiences, explore hobbies, stay curious, and allow time for relaxation.
              </div>
            </div>
            <div className="border p-4 rounded-lg">
              <div className="font-semibold">WHAT ARE COMMON SOURCES OF MOTIVATION?</div>
              <div className="text-gray-600">
                Sources include personal goals, rewards, support from others, and a sense of purpose.
              </div>
            </div>
            <div className="border p-4 rounded-lg">
              <div className="font-semibold">HOW CAN I PRACTICE GRATITUDE DAILY?</div>
              <div className="text-gray-600">
                Keep a gratitude journal, express thanks to others, and reflect on positive aspects of your life.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default How_work;
