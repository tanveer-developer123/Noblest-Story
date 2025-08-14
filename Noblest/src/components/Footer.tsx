const Footer = () => {
  return (
    <footer className="w-full text-[#222] font-['MADE_Mirage',serif] text-center px-0 pt-10 pb-2 box-border">
      
      {/* Top Line */}
      <div className="h-px bg-[#aaa] my-[10px] mb-[30px] w-full"></div>

      {/* Footer Grid */}
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-10 px-5 md:px-10 max-w-[1200px] mx-auto box-border">
        
        {/* Column 1 */}
        <div className="flex-1 min-w-[250px] text-center">
          <h4 className="font-['MADE_Mirage'] text-[18px] font-normal uppercase mb-[15px] tracking-[1px]">
            MAIL US TO
          </h4>
          <p className="font-['MADE_Mirage'] text-[16px] mb-2 text-[#222]">hello@example.com</p>
          <p className="font-['MADE_Mirage'] text-[16px] mb-2 text-[#222]">info@example.com</p>
        </div>

        {/* Column 2 */}
        <div className="flex-1 min-w-[250px] text-center border-t md:border-t-0 md:border-l md:border-r border-[#ccc] px-5">
          <h4 className="font-['MADE_Mirage'] text-[18px] font-normal uppercase mb-[15px] tracking-[1px]">
            IMPORTANT LINKS
          </h4>
          <a href="#" className="font-['MADE_Mirage'] text-[16px] text-[#222] mb-2 no-underline block">HOME</a>
          <a href="#" className="font-['MADE_Mirage'] text-[16px] text-[#222] mb-2 no-underline block">ABOUT</a>
          <a href="#" className="font-['MADE_Mirage'] text-[16px] text-[#222] mb-2 no-underline block">BLOG</a>
          <a href="#" className="font-['MADE_Mirage'] text-[16px] text-[#222] mb-2 no-underline block">CONTACT</a>
        </div>

        {/* Column 3 */}
        <div className="flex-1 min-w-[250px] text-center">
          <h4 className="font-['MADE_Mirage'] text-[18px] font-normal uppercase mb-[15px] tracking-[1px]">
            SUBSCRIBE TO OUR NEWSLETTER
          </h4>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="text-[13px] p-[5px] border-none outline-none bg-transparent w-full max-w-[280px] mx-auto my-[10px] block"
          />
          <div className="w-full max-w-[280px] h-px bg-black my-[10px] mx-auto"></div>
          <button className="font-['Jost'] mt-[10px] bg-transparent border border-black px-[20px] py-[5px] text-[15px] uppercase">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="h-px bg-[#aaa] my-[10px] mb-[30px] w-full"></div>

      {/* Bottom Text */}
      <p className="font-['Jost'] text-[17px] text-[#666] my-[18px]">
        2025 © YourSite Name – Powered by YourBrand
      </p>
    </footer>
  );
};

export default Footer;
