import About from "../../components/About";
import HeroSection from "../../components/HeroSection";
import Qualities from "../../components/Qualities";
import Menu from "../../components/Menu";
import WhoAreWe from "../../components/WhoAreWe";
import Team from "../../components/Team";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
    </>
  );
};

export default Home;
