import About from "../../components/About";
import HeroSection from "../../components/HeroSection";
import Qualities from "../../components/Qualities";
import Menu from "../../components/Menu";
import WhoAreWe from "../../components/WhoAreWe";
import Team from "../../components/Team";
import Reservation from "../../components/Reservation";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
    </>
  );
};

export default Home;
