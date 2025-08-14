import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaDribbble,
  FaLinkedin,
  FaReddit,
  FaPinterest,
} from "react-icons/fa6";

const quotes = [
  {
    text: `“Imagination is the beginning of creation.
You imagine what you desire, you will
what you imagine, and at last, you create
what you will.”`,
    author: "GEORGE BERNARD SHAW",
  },
  {
    text: `“Imagination is the beginning of creation.
You imagine what you desire, you will
what you imagine, and at last, you create
what you will.”`,
    author: "ELEANOR ROOSEVELT",
  },
  {
    text: `“Imagination is the beginning of creation.
You imagine what you desire, you will
what you imagine, and at last, you create
what you will.”`,
    author: "WILLIAM BUTLER YEATS",
  },
  {
    text: `“Imagination is the beginning of creation.
You imagine what you desire, you will
what you imagine, and at last, you create
what you will.”`,
    author: "HENRY DAVID THOREAU",
  },
];

const Connect = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out",
    });
    AOS.refresh();
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className=" mx-auto">
      {/* Gray Line */}
      <hr className="my-6" />
      {/* Connect Row */}
      <div className="flex px-12 flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="text-center md:text-left">
          <div className="text-sm tracking-wider uppercase text-gray-500">
            The heart of our mission
          </div>
          <span className="text-3xl font-bold text-gray-900">CONNECT</span>
        </div>
        <div className="flex gap-4 text-gray-600 text-xl cursor-pointer">
          <a href="">
            <FaInstagram className="hover:text-black transition" />

          </a>
          <a href="">
            <FaXTwitter className="hover:text-black transition" />

          </a>
          <a href="">
            <FaFacebook className="hover:text-black transition" />

          </a>
          <a href="">
            <FaReddit className="hover:text-black transition" />

          </a>
          <a href="">
            <FaLinkedin className="hover:text-black transition" />

          </a>
          <a href="">
            <FaDribbble className="hover:text-black transition" />

          </a>
          <a href="">
            <FaPinterest className="hover:text-black transition" />

          </a>
        </div>
      </div>

      {/* Quote Slider */}
      <div className="flex items-center justify-between px-4 bg-black gap-4 mb-10 py-16">
        <button
          onClick={prevSlide}
          className="text-2xl text-white hover:text-white"
        >
          &#10094;
        </button>

        <div
          data-aos="fade-up"
          key={currentIndex}
          className="max-w-2xl text-center"
        >
          <div className="text-2xl  text-white mb-4 whitespace-pre-line">
            {quotes[currentIndex].text}
          </div>
          <div className="text-sm uppercase tracking-wider text-gray-300">
            {quotes[currentIndex].author}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="text-2xl text-white hover:text-white"
        >
          &#10095;
        </button>
      </div>


      {/* Who Section */}
      <div className="flex px-[180px] flex-col md:flex-row items-start py-16 md:gap-20">
        {/* Left Column */}
        <div className="flex-1 md:max-w-xs">
          <div className="text-sm tracking-widest mb-3 text-gray-500 uppercase">
            THE HEART OF OUR MISSION
          </div>
          <div className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            WHO WE'RE
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 text-lg text-gray-600 leading-relaxed">
          We are dedicated to fostering growth in all aspects of life. Through
          personal development, we encourage continuous learning and improvement.
          We emphasize the importance of health, both physical and mental, and
          promote inner peace through spirituality. Building strong, supportive
          relationships with empathy and trust is central to our approach, alongside
          wise financial management for future stability.
        </div>
      </div>

    </div>
  );
};

export default Connect;
