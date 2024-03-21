

const HeroSection = () => {
  return (
    <div className="text-white py-16" style={{ background: "#02011B" }}>
      <div className="container mx-auto px-4 lg:grid lg:grid-cols-2 lg:gap-8 items-center justify-between">
        {/* Left Side: Image and Text */}
        <div className="w-full lg:h-[708px] relative mb-8 lg:mb-0">
          <img
            className="w-full h-full object-cover"
            src="https://i.ibb.co/J3f1wW7/Frame-1-2.png"
            alt="Hero Image"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-75"></div> 
          <div className="absolute bottom-0 left-5 w-full lg:w-auto lg:left-auto lg:right-5 pb-8 ps-3">
            <h2 className="text-3xl font-bold">New Packages For Winter</h2>
            <p className="">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
          </div>
        </div>

        {/* Right Side: Card */}
        <div className="p-8 bg-black lg:h-[708px]">
          <h2 className="text-2xl font-bold text-center mb-4">Our most popular services</h2>
          <hr className="my-8 lg:hidden" />
          {/* Card Image */}
          <img
            className="w-full h-auto mb-4 object-cover"
            src="https://i.ibb.co/DQ21MFW/Rectangle-5.png" // Replace with your card image URL
            alt="Card Image"
          />

          {/* Event Description */}
          <p className="text-gray-600 mb-4">Corporate Event</p>

          {/* List of Items */}
          <ul className="mb-4">
            <li className="list-disc ml-6">One day pass access all lectures</li>
            <li className="list-disc ml-6">Item 2</li>
            <li className="list-disc ml-6">Item 3</li>
            <li className="list-disc ml-6">Item 3</li>
            {/* Add more items as needed */}
          </ul>

          {/* View Details Button */}
          <button style={{background:"#00D4FC"}} className="w-full font-semibold text-black px-4 py-2 ">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
