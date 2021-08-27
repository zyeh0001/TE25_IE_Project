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
      <Section3Topic
        title="Why skin cancer so serious???"
        text={[
          "Australia has one of the highest rates of skin cancer in the world",
          <br></br>,
          "Each year, nearly 80% of all cancer cases in Australia are skin cancer cases.",
        ]}
      />
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
