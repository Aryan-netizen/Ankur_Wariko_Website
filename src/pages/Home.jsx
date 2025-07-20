
import Features from "../components/Features";
import Become from "../components/Become";
import Hero from "../components/Hero";
import LifeMeaning from "../components/LifeMeaning";

const Home = () => {
  return (
    <div>
       <div className="snap-y snap-mandatory h-fit overflow-hidden ">
        <section className="h-screen snap-start">
          <Hero />
        </section>
        <section className="h-screen snap-start">
          <Become />
        </section>
        <section className="h-screen snap-start">
          <Features/>
        </section>
        <section className="h-screen snap-start">
          <LifeMeaning />
        </section>
      </div>
    </div>
  );
};

export default Home;
