const EventGallery = () => {
  return (
    <div style={{ background: "#0F172A" }} className="pt-10">
      <div className="w-full max-w-[1256px]  mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 my-auto ">
            <div className=" flex flex-col justify-center col-span-5 w-full max-w-[522px] h-full max-h-[446px]">
              {/* Left side text */}
              <h1 className="text-5xl text-white  font-bold pt-8">Gallery</h1>
            <p className="text-white  py-4">Ut posuere felis arcu tellus tempus in in ultricies. <br></br> Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
            <div className="text-white">
            <ul>
                <li className="flex items-center mb-2">
                  <svg style={{background:'#475569',color:'6FCF97'}} className="w-4 h-4 border rounded-full mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>One day pas access all lecture</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg style={{background:'#475569',color:'6FCF97'}} className="w-4 h-4 border rounded-full mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Lunch and Snack</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg style={{background:'#475569',color:'6FCF97'}} className="w-4 h-4 border rounded-full mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="">Meet Event Speaker</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg style={{background:'#475569',color:'6FCF97'}} className="w-4 h-4 border rounded-full mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Front Seat</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg style={{background:'#475569',color:'6FCF97'}} className="w-4 h-4 border rounded-full mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>One day pas access all lecture</span>
                </li>
              </ul>
            </div>
            </div>
          </div>
          <div className="col-span-6 ">
            {/* Right side image gallery */}
            <div className="grid  grid-cols-4 ">
              <div className="grid grid-rows-2">
                <img
                  src="https://i.ibb.co/RQczrJG/Picture.png"
                  alt="Image 1"
                  className="w-full max-w-[128px] h-full max-h-[192px]  justify-self-end self-end    "
                />
                <img
                  src="https://i.ibb.co/SwNrk7Z/Picture-1.png"
                  alt="Image 2"
                  className="w-full"
                />
              </div>
              <div className="grid grid-rows-3">
                <img
                  src="https://i.ibb.co/18frJ6n/Picture-2.png"
                  alt="Image 3"
                  className="w-full"
                />
                <img
                  src="https://i.ibb.co/gDpgpfh/Picture-3.png"
                  alt="Image 4"
                  className="w-full"
                />
                <img
                  src="https://i.ibb.co/tJWCTcH/Picture-4.png"
                  alt="Image 5"
                  className="w-full self-stretch "
                />
              </div>
              <div className="grid grid-rows-3">
                <img
                  src="https://i.ibb.co/T0N7xCk/Picture-5.png"
                  alt="Image 3"
                  className="w-full self-end "
                />
                <img
                  src="https://i.ibb.co/Mn9VMSt/Picture-6.png"
                  alt="Image 4"
                  className="w-full  self-stretch"
                />
                <img
                  src="https://i.ibb.co/cwqZBJK/Picture-7.png"
                  alt="Image 5"
                  className="w-full self-start"
                />
              </div>

              <div className="grid grid-rows-2">
                <img
                  src="https://i.ibb.co/YNkC0MK/Picture-8.png"
                  alt="Image 5"
                  className="w-full self-end"
                />
                <img
                  src="https://i.ibb.co/Xz2r4Vx/Picture-9.png"
                  alt="Image 5"
                  className="w-full max-w[128px] h-full max-h-[165px] self-start"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
