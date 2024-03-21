import Pricing from "../Pricing";
import Blog from "./Blog";
import EventGallery from "./EventGallery";
import EventItems from "./EventItems";
import Faq from "./FAQ";
import Footer from "./Footer";

import HeroSection from "./HeroSection";
import RecentEvents from "./RecentEvents";
import Review from "./Review";
import Services from "./Services";


const Home = () => {
    return (
        <div>
          <HeroSection></HeroSection>
          <Services></Services>
          <EventItems></EventItems>
          <EventGallery></EventGallery>
          <Pricing></Pricing>
          <Review></Review>
          <RecentEvents></RecentEvents>
          <Blog></Blog>
          <Faq></Faq>
         <Footer></Footer>
        </div>
    );
};

export default Home;