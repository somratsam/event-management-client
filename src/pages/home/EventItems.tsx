
import useFetchData from "../../hooks/useFetchData";

const EventItems = () => {

  const { data, isLoading, isError } = useFetchData(['events'], 'https://thawing-falls-89023-aea7c7fc4719.herokuapp.com/events');

  
  return (
    <div style={{background:'#0F172A'}}>
        <div className=" w-full max-w-[1059px] mx-auto" >
        <h1 className="text-5xl text-white text-center font-bold pt-8">Event Items</h1>
            <p className="text-white text-center py-4">Ut posuere felis arcu tellus tempus in in ultricies. <br></br> Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching services</div>}
        {data &&
          data.map((card, index) => (
            <div style={{background:'#050D14'}} key={index} className=" p-4">
                 <h2 className="text-xl text-white font-bold">{card.title}</h2>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto mb-4"
              />
             
            </div>
          ))}
      </div>
    </div>
    </div>
  );
};

export default EventItems;
