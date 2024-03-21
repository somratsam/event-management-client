
import useFetchData from "../../hooks/useFetchData";

const Review = () => {
  const { data, isLoading, isError } = useFetchData(['review'], 'https://thawing-falls-89023-aea7c7fc4719.herokuapp.com/review');

  return (
    <div style={{ background: "#0F172A" }} className="py-20">
      <div className="w-full max-w-[1220px] mx-auto ">
      <h1 className="text-5xl text-white text-start font-bold my-20">
      What everyone says
      </h1>
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-4">
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching services</div>}
        {data &&
          data.map((review) => (
            <div
            style={{background:'#050D14'}}
              key={review.id}
              className=" p-4 text-white shadow-md rounded-lg"
              
            >
              <h2 className="text-lg  font-semibold py-5">
                {review.description}
              </h2>
              <div className="flex">
                <div className="mr-5">
                    <img src={review.image} alt={review.name} />
                </div>
                <div className="my-auto">
                    <p>{review.name}</p>
                    <p>{review.profession}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
};

export default Review;
