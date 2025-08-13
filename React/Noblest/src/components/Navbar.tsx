const Navbar = () => {
  return (
    <>
      <hr className="bg-[#ccc]" />

      <div className="flex justify-between px-5 py-2 text-sm text-gray-800 font-[Jost,'MADE Mirage',serif]">
        <div className="top-left">Partly Cloud 38°C</div>
        <div className="top-right">July 31, 2025</div>
      </div>

      <hr className="bg-[#ccc]" />

      {/* Navigation */}
      <header className="flex justify-between items-center p-[0.9375rem] px-5 flex-wrap bg-white font-[Jost,'MADE Mirage',serif]">
        {/* Logo */}
        <div className="font-bold tracking-[0.0625rem]">
          <img src="/logo.png" alt="" />
        </div>

        {/* Nav Links */}
        <nav className="flex gap-5 flex-wrap">
          <a
            href="#"
            className="no-underline text-black text-sm uppercase"
          >
            Meditation
          </a>
          <a
            href="#"
            className="no-underline text-black text-sm uppercase"
          >
            ANXIETY
          </a>
          <a
            href="#"
            className="no-underline text-black text-sm uppercase"
          >
            Well-being
          </a>
        </nav>

        {/* CTA */}
        <div>
          <a
            href="#"
            className="no-underline text-black text-sm uppercase border-b border-black"
          >
            Mentorship for Influencers
          </a>
        </div>
      </header>

      <hr className="bg-[#ccc]" />
    </>
  );
};

export default Navbar;
