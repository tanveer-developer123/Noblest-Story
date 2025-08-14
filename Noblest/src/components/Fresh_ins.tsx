const Fresh_ins = () => {
    return (
        <>
            {/* Heading Section */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Igniting Your Inner Drive</h2>
                <span className="text-gray-500">Unveil the Wisdom Within</span>
            </div>

            <div className="mx-6">
                {/* Featured Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {[
                        { img: "/Rectangle 15.png", title: "Mindful Breath Awareness", author: "By Sophia Ray" },
                        { img: "/Rectangle 17.png", title: "Walking Meditation", author: "By Marissa Roberts" },
                        { img: "/Rectangle 18.png", title: "Silent Witness", author: "By J. Krishnamurti" }
                    ].map((card, i) => (
                        <div key={i} className="relative overflow-hidden cursor-pointer">
                            <img src={card.img} alt={card.title} className="w-full h-[520px] object-cover" />

                            {/* Overlay always visible */}
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-between p-4">
                                <div>
                                    <h1 className="text-white text-4xl">{card.title}</h1>
                                    <div className="text-gray-300 text-[14px]">{card.author}</div>
                                </div>
                                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white font-medium">
                                    <span>Read More</span>
                                    <span>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Gray Line */}
                <div className="my-8">
                    <hr />
                </div>

                {/* Navigation Section */}
                <div className="text-xl flex justify-between text-gray-600 ">
                    <div>SEPT 30, 2023</div>
                    <h1 className="font-semibold">Fresh Insights</h1>
                    <div>SPIRITUALITY</div>
                </div>

                <div className="my-8">
                    <hr />
                </div>
                {/* Article Preview Section */}
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 flex flex-col justify-between">
                        <div className="mb-20"> 
                            <div className="text-sm uppercase mb-2">
                                Embrace Now for a More Fulfilling Life
                            </div>
                            <h3 className="text-6xl font-bold mb-4">
                                Finding Peace <br /> in the Present <br /> Moment
                            </h3>
                            <a
                                href="#"
                                className="inline-block uppercase border-b-2 border-black  mb-4"
                            >
                                READ ON
                            </a>
                        </div>

                        {/* Paragraph fixed at bottom */}
                        <div className="pt-12">
                            <p >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla,
                            commodo id pulvinar vitae, tempus a massa. Nullam id dolor eget dolor
                            laoreet cursus. Donec eu nulla at lorem porta aliquet.
                        </p>
                        </div>
                    </div>

                    <div className="flex-1">
                        <img src="/Rectangle 20.png" alt="Peaceful landscape" className="w-full" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fresh_ins;
