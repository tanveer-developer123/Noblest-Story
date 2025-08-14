const Being = () => {
  return (
    <div className=" mx-auto px-6 py-16 ">
      {/* Heading + paragraph */}
      <section>
        <h2 className="text-4xl font-bold mb-4 tracking-wide">WELL-BEING</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar vitae, tempus a massa.
          Nullam id dolor eget dolor laoreet cursus. Donec eu nulla at lorem porta aliquet. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus facilisis nisl eu congue sollicitudin. Phasellus blandit ultricies facilisis.
          Sed vel odio aliquam, imperdiet nisl sed, accumsan augue. Sed convallis in dolor et luctus. Vivamus et condimentum
          erat, fermentum sagittis nibh. In consequat urna blandit, egestas libero in, viverra est. Donec venenatis egestas
          nibh eget convallis. Phasellus id est turpis. Vivamus vel dui varius, gravida ex.
        </p>
      </section>

      {/* Image + text */}
      <section className="flex flex-col md:flex-row gap-8">
        {/* Left image */}
        <div className="md:w-1/2">
          <img
            src="/pic 7.png"
            alt="Well-being activity"
            className="w-full h-auto object-cover "
          />
        </div>

        {/* Right text */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <p className="text-gray-700 leading-relaxed">
              consectetur justo. In hac habitasse platea dictumst. Mauris sed massa mollis, aliquam elit ut, condimentum nisi.
              Nunc id dapibus dolor, id sodales quam.{" "}
              <a href="#" className="text-blue-600 underline">Vestibulum</a> tincidunt est massa, in iaculis nulla tincidunt quis.
              Donec feugiat ligula ut velit sodales, rhoncus iaculis diam sagittis. Maecenas posuere cursus dui id tincidunt.
              Ut non mi nec nisi porta placerat sollicitudin quis est. Ut eget ornare tortor. Aenean ut luctus diam. In sed
              ultrices sapien. Morbi in odio lectus. Integer egestas semper orci et consectetur. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos. Duis varius nibh eget mi volutpat, vel vestibulum
              dolor molestie. Sed imperdiet eros eget sem aliquet sollicitudin. Donec mattis tellus nec eros imperdiet euismod.
              Aliquam sed laoreet augue. Morbi ut ex elit. Praesent venenatis cursus tortor, nec lobortis quam{" "}
              <span className="italic underline">tincidunt</span> in. Nam quis congue augue. Etiam dapibus metus elit, id laoreet
              tellus pellentesque ut. Donec fringilla ligula vel est sodales, rhoncus ex id tempus sagittis.
            </p>
          </div>

          {/* Read on button */}
          <a
            href="#"
            className="mt-6  uppercase  border-b-2 border-black hover:text-gray-600 "
          >
            READ ON
          </a>
        </div>
        
      </section>
      <section className="py-10">

      <div className="w-full border-t border-gray-300 mb-4"></div>
      <h1 className="text-4xl font-extrabold text-gray-300 text-center">TRANSFORM. THRIVE. DISCOVER. TRANSFORM.</h1>
      <div className="w-full border-b border-gray-300 mt-4"></div>
      </section>
    </div>
  );
};

export default Being;
