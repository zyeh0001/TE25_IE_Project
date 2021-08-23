import HomeImage from "../components/HomePageCom/HomeImage";
import Banner from "../components/HomePageCom/Banner";
import Section3 from "../components/Sections/Section3";
import Section3Topic from "../components/Sections/Section3Topic";
import MapVisual from "../components/HomePageCom/MapVisual";
function HomePage() {
  return (
    <div>
      <HomeImage />
      <MapVisual />
      <Banner />
      <Section3Topic />
      <div className="row aln-center feature">
        <Section3 />
        <Section3 />
        <Section3 />
        <Section3 />
        <Section3 />
        <Section3 />
      </div>
    </div>
  );
}
export default HomePage;
