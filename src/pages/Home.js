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
        text="Each year, skin cancer accounts for nearly 80% of all new cancer cases
        diagnosed in Australia. ..."
      />
      <div className="row aln-center feature">
        <Section3
          title="Skin Health"
          text="Skin health is ...."
          image="images/pic03.jpg"
        />
        <Section3
          title="Medical support"
          text="Medical support is ...."
          image="images/pic03.jpg"
        />
        <Section3
          title="Symptom"
          text="Symptom is ...."
          image="images/pic03.jpg"
        />
        <Section3
          title="Healthy Tips"
          text="Healthy Tips is ...."
          image="images/pic03.jpg"
        />
        <Section3
          title="Self Check"
          text="Self Check is ...."
          image="images/pic03.jpg"
        />
        <Section3
          title="Our Story"
          text="Our Story is ...."
          image="images/pic03.jpg"
        />
      </div>
    </div>
  );
}
export default HomePage;
