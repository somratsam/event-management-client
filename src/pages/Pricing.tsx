
import useFetchData from "../hooks/useFetchData";

const Pricing = () => {
    const { data, isLoading, isError } = useFetchData(['pricing'], 'https://thawing-falls-89023-aea7c7fc4719.herokuapp.com/pricing');


    

    return (
       <div style={{ background:'#050D14'}} className="py-10">
        <h1 className="text-5xl text-white text-center font-bold py-8">Pricing</h1>
         <div className="w-full max-w-[1220px]  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-4">
             {isLoading && <div>Loading...</div>}
           {isError && <div>Error fetching services</div>}
           {data && data.map((item, ) => (
                <div key={item.id} className=" p-4 shadow-md rounded-lg  bg-gray-800 " >
                    <h2 className="text-lg font-semibold mb-2">{item.type}</h2>
                    <p className="text-gray-600 mb-2">${item.price}</p>
                    <ul>
                    {item.features.map((feature, index) => (
                            <li key={index} className="flex items-center mb-2">
                            <svg style={{background:'#475569',color:'6FCF97'}} className="w-4 h-4 border rounded-full mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span>{feature}</span>
                        </li>
                        ))}
                    </ul>
                    <button style={{background:"#00D4FC"}} className="mt-2 text-black font-semibold py-2 px-4 rounded w-full">
                               Get Your Ticket
                           </button>
                </div>
            ))}
        </div>
       </div>
    );
};

export default Pricing;
