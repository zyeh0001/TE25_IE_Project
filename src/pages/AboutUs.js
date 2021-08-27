import Section3Topic from "../components/Sections/Section3Topic";
import Section5 from "../components/Sections/Section5";
import Banner from "../components/HomePageCom/Banner";
function AboutPage() {
  return (
    <div>
      <Banner bannerTopic="Our Story" />
      <Section3Topic title="Our Team" text="We are five4fighting..." />
      <div className="row aln-center">
        <Section5
          name="Charles"
          intro="Master of IT"
          image="images/charles.png"
        />
        <Section5
          name="Sachi"
          intro="Master of Data science"
          image="images/sachi.jpg"
        />
        <Section5
          name="Yixang"
          intro="Master of BIS"
          image="images/yixiang.jpg"
        />
        <Section5
          name="Ziwei"
          intro="Master of Data science"
          image="images/ziwei.jpg"
        />
        <Section5
          name="Peihao"
          intro="Master of IT"
          image="images/peihao.jpg"
        />
      </div>
    </div>
  );
}
export default AboutPage;
