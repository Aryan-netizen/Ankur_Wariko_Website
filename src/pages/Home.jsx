
import Features from "../components/Features";
import Become from "../components/Become";
import Hero from "../components/Hero";
import LifeMeaning from "../components/LifeMeaning";
import HalfClock from "../components/HalfClock";

const Home = () => {
  return (
    <div>
       <div className=" h-fit overflow-hidden ">
        <section className="h-screen">
          <Hero />
        </section>
        {/* <section className="h-screen">
          <Become />
        </section> */}
        <section className="h-screen">
          <Features/>
        </section>
        <section className="h-screen">
          <LifeMeaning />
        </section>
      </div>
    </div>
  );
};

export default Home;
