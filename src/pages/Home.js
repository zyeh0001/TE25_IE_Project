import HomeImage from "../components/HomePageCom/HomeImage";
import Section3 from "../components/Sections/Section3";
import TableauVisual from "../components/HomePageCom/TableauVisual";
// import Section3Topic from "../components/Sections/Section3Topic";
import MapVisual from "../components/HomePageCom/MapVisual";
import StatBanner from "../components/HomePageCom/StatBanner";
import GraphDesc from "../components/Sections/GraphDesc";
import Banner from "../components/HomePageCom/Banner";
function HomePage() {
  return (
    <div>
      <HomeImage />
      <GraphDesc title="" text="" />
      <MapVisual />
      {/* <Banner image="images/banner.jpeg" /> */}
      <StatBanner bannerTopic="Why skin cancer so serious?" />
      <div className="container">
        <TableauVisual
          link="https://public.tableau.com/views/Sachida2/Dashboard2"
          height="50vh"
        />
      </div>
      <Banner bannerTopic="Time to take actions!" />
      <div className="row aln-center feature">
        <Section3
          title="Skin Health"
          text="Do you know the condition of your skin? Let me tell you sonething..."
          image="images/skinHealth.jpg"
          link="/symptom"
        />

        <Section3
          title="Self Check"
          text="You can check your skin at any time with just a few easy steps..."
          image="images/selfCheck.jpg"
          link="/self-check"
        />
        <Section3
          title="Medical support"
          text="From here, you can find out the nearest position of skin health clinic around you..."
          image="images/support.jpg"
          link="/medical-support"
        />
      </div>
    </div>
  );
}
export default HomePage;
