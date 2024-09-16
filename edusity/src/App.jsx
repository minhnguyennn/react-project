import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Tite/Title";
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
      </div>
    </div>
  );
}
