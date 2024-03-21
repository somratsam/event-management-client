
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchData from "../../hooks/useFetchData";

const RecentEvents = () => {

  const { data, isLoading, isError } = useFetchData(['events'], 'https://thawing-falls-89023-aea7c7fc4719.herokuapp.com/events');

  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ background: "#0F172A" }} className="pb-20 pt-10 h-full">
      <div className="container mx-auto">
      <div className="text-center my-20 ">
      <h1 className="text-5xl text-white font-bold ">
      Recent Events
      </h1>
      <p className="pt-5 ">
      Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit <br /> risus ac id lorem.
      </p>
      </div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching data</p>}
        {data && (
          <Slider {...settings}>
            {data.map((event) => (
              <div key={event.id} className="px-2"
              >
                <div className=" p-4 rounded shadow" style={{background:'#050D14'}}>
                  <img src={event.image} alt={event.title} className="w-full h-auto mb-4" />
                  <h2 className="text-xl font-bold">{event.title}</h2>
                  <p className="text-gray-600">Made by: {event.made_by}</p>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default RecentEvents;
