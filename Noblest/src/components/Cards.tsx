import blogImg from "/pic 6.png";

const Cards = () => {
  return (
    <>
      {/* Heading section */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold">EXPLORE OUR WORDS</h1>
        <span className="text-gray-500">Unveil the Wisdom Within</span>
      </div>

      <div>
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading row */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
            <h2 className="text-2xl pl-4 font-semibold">Recent Blog Posts</h2>
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <label htmlFor="filter" className="text-sm font-medium uppercase">POPULAR</label>
              <select
                id="filter"
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option>All</option>
                <option>Meditation</option>
                <option>Wellness</option>
                <option>Gratitude</option>
                <option>Personal Growth</option>
                <option>Creativity</option>
              </select>
            </div>
          </div>

          {/* Divider line */}
          <hr />

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="bg-white  transition p-4">
              <img src={blogImg} alt="Blog" className="w-full h-48 object-cover" />
              <div className="mt-4">
                <p className="text-sm text-gray-500">SEP 27, 2025 — CATEGORY</p>
                <h3 className="text-lg font-semibold">Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar vitae.
                </p>
              </div>
            </div>

            {/* Center Card */}
            <div className=" flex items-center justify-center text-center p-6">
              <div>
                <p className="text-xs font-bold">PT</p>
                <h3 className="text-lg font-semibold">
                  “PERSPECTIVES, <br /> OPPORTUNITY AND CHALLENGE FOR INNOVATION”
                </h3>
                <p className="text-sm mt-2">ANA SILVANT</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white  transition p-4">
              <img src={blogImg} alt="Blog" className="w-full h-48 object-cover" />
              <div className="mt-4">
                <p className="text-sm text-gray-500">SEP 27, 2025 — CATEGORY</p>
                <h3 className="text-lg font-semibold">Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar vitae. Iusto, eligendi!.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white  transition p-4">
              <img src={blogImg} alt="Blog" className="w-full h-48 object-cover" />
              <div className="mt-4">
                <p className="text-sm text-gray-500">SEP 27, 2025 — CATEGORY</p>
                <h3 className="text-lg font-semibold">Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar vitae Ut ex nulla adot.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white  transition p-4">
              <img src={blogImg} alt="Blog" className="w-full h-48 object-cover" />
              <div className="mt-4">
                <p className="text-sm text-gray-500">SEP 27, 2025 — CATEGORY</p>
                <h3 className="text-lg font-semibold">Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar vitae.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white  transition p-4">
              <img src={blogImg} alt="Blog" className="w-full h-48 object-cover" />
              <div className="mt-4">
                <p className="text-sm text-gray-500">SEP 27, 2025 — CATEGORY</p>
                <h3 className="text-lg font-semibold">Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar vitae adot.
                </p>
              </div>
            </div>

            {/* Center Card */}
            <div className="lex items-center justify-center text-center p-6">
              <div>
                <p className="text-xs font-bold">PT</p>
                <h3 className="text-lg font-semibold">
                  “PERSPECTIVES, <br /> OPPORTUNITY AND CHALLENGE FOR INNOVATION”
                </h3>
                <p className="text-sm mt-2">ANA SILVANT</p>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white  transition p-4">
              <img src={blogImg} alt="Blog" className="w-full h-48 object-cover" />
              <div className="mt-4">
                <p className="text-sm text-gray-500">SEP 27, 2025 — CATEGORY</p>
                <h3 className="text-lg font-semibold">Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar vitae Iusto, eligendi!.
                </p>
              </div>
            </div>

            {/* Card 9 */}
            <div className="bg-white  transition p-4">
              <img src={blogImg} alt="Blog" className="w-full h-48 object-cover" />
              <div className="mt-4">
                <p className="text-sm text-gray-500">SEP 27, 2025 — CATEGORY</p>
                <h3 className="text-lg font-semibold">Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Intro snippet for reader engagement Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar vitae.
                </p>
              </div>
            </div>

            {/* Center Card */}
            <div className=" flex items-center justify-center text-center p-6">
              <div>
                <p className="text-xs font-bold">PT</p>
                <h3 className="text-lg font-semibold">
                  “PERSPECTIVES, <br /> OPPORTUNITY AND CHALLENGE FOR INNOVATION”
                </h3>
                <p className="text-sm mt-2">ANA SILVANT</p>
              </div>
            </div>

            {/* Card 11 */}
            <div className="bg-white  transition p-4">
              <img src={blogImg} alt="Blog" className="w-full h-48 object-cover" />
              <div className="mt-4">
                <p className="text-sm text-gray-500">SEP 27, 2025 — CATEGORY</p>
                <h3 className="text-lg font-semibold">Lorem ipsum dolor sit Amet, consectetur</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Mini description for blog readers Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar vitae.
                </p>
              </div>
            </div>

            {/* Card 12 */}
            <div className="bg-white  transition p-4">
              <img src={blogImg} alt="Blog" className="w-full h-48 object-cover" />
              <div className="mt-4">
                <p className="text-sm text-gray-500">SEP 27, 2025 — CATEGORY</p>
                <h3 className="text-lg font-semibold">Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Summary or first line of blog Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar vitae.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
