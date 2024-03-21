
import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";

const Services = () => {
    const { data, isLoading, isError } = useFetchData(['services'], 'https://thawing-falls-89023-aea7c7fc4719.herokuapp.com/service');

    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

    return (
        <div style={{background:'#0F172A'}} className="min-h-screen">
            <div className='max-w-[1276px]  mx-auto w-full'>
            <h1 className="text-5xl text-white text-center font-bold pt-8">Our Services</h1>
            <p className="text-white text-center py-4">Ut posuere felis arcu tellus tempus in in ultricies. <br></br> Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center  mx-auto ">
                {isLoading && <div>Loading...</div>}
                {isError && <div>Error fetching services</div>}
                {data && data.map((service, index) => (
                    <div
                    style={{background:'#050D14' }}
                        key={service.id}
                        className=" mx-auto p-4 text-white  shadow-md overflow-hidden relative w-full max-w-[412px] h-full max-h-[569px]"
                        onMouseEnter={() => setHoveredCardIndex(index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}
                    >
                        {hoveredCardIndex !== index && (
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{service.name}</h2>
                            {hoveredCardIndex === index && (
                                <p className="mt-2 text-gray-600">{service.description}</p>
                            )}
                            <ul className="mt-4">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center mb-2">
                                        <svg className="w-4 h-4 border rounded-full mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            {hoveredCardIndex === index && (
                                <button style={{background:"#00D4FC"}} className="mt-2 text-black font-semibold py-2 px-4 rounded w-full">
                                    Check it out
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Services;
