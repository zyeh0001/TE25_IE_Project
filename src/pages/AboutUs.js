import Section3Topic from "../components/Sections/Section3Topic";
import Section5 from "../components/Sections/Section5";
import Banner from "../components/HomePageCom/Banner";
function AboutPage() {
  return (
    <div>
      <Banner />
      <Section3Topic />
      <div className="row aln-center">
        <Section5 className="col-md-2" />
        <Section5 className="col-md-2" />
        <Section5 className="col-md-2" />
        <Section5 className="col-md-2" />
        <Section5 className="col-md-2" />
      </div>
    </div>
  );
}
export default AboutPage;
