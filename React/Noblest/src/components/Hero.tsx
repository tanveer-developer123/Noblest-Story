import pic1 from "/pic 1.png";
import pic2 from "/pic 2.png";
import pic3 from "/pic 3.png";
import pic4 from "/pic 4.png";
import pic5 from "/pic 5.png";

const Hero = () => {
  return (
    <>
      <section className="flex flex-wrap gap-10 px-5 py-10 items-start font-jost">
        <div className="flex-2 mx-4 min-w-[280px]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="mb-8 -ml-5">
              <h3 className="mb-2">LOREM IPSUM DOLOR</h3>
              <p className="text-[17px] leading-[1.9] text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id <br />
                pulvinar vitae, tempus a massa. Nullam id dolor eget dolor laoreet cursus. Donec eu <br />
                nulla at lorem porta aliquet.
              </p>
              <a href="#" className="flex flex-col  text-[13px] text-black mt-2 gap-1 font-josefin">
                READ ON
                <span className="block w-10 h-px bg-black"></span>
              </a>
            </div>
          ))}
        </div>

        <div className="w-px bg-gray-300 self-stretch"></div>

        <aside className="flex-1 min-w-[200px]  pl-5 ml-auto text-right">
          <p className="text-[14px] tracking-[1px] uppercase font-jost">STORY</p>
          <h2 className="my-2 text-[32px] leading-tight">NOBLEST<br />BEING</h2>
          <a href="#" className="text-[13px] border-b border-black text-black">Explore More</a>
        </aside>
      </section>

      <div className="text-center py-12 px-5">
        <h2 className="mb-1 text-[32px]">QUOTABLE WISDOM QUEST</h2>
        <p className="text-[15px] uppercase tracking-[1px] text-gray-600 font-jost">Unveil the wisdom within</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 px-4 md:px-16">
        <div className="relative h-[600px] ">
          <img
            src={pic1}
            alt="Anxiety"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl md:text-2xl bg-black/30">
            ANXIETY
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="h-[200px] ">
            <img
              src={pic2}
              alt="Desert"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[200px]">
            <img
              src={pic3}
              alt="Snow"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="h-[600px]">
          <img
            src={pic4}
            alt="Sky"
            className="w-full h-full object-cover "
          />
        </div>
      </section>


      <section className="relative mt-[50px] w-full h-[400px] overflow-hidden">
        <img
          src={pic5}
          alt="Desert"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-[made-mirage] px-5 w-full max-w-[600px] drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]">

          <p className="font-[jost] text-[15px] uppercase tracking-[1px] mb-[10px]">
            JULY 31, 2025 — EDITORIAL
          </p>

          <h1 className="font-[made-mirage] text-[36px] leading-[1.3] font-normal mb-[10px]">
            PERFECTLY imperfect<br />IS OUR STORY
          </h1>

          <p className="font-[made-mirage] text-[18px] tracking-[0.5px]">
            In A World Where Healthcare Is Crossating A New
          </p>
        </div>
      </section>

    </>
  );
};

export default Hero;
