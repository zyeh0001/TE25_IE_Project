import Section3Topic from "../components/Sections/Section3Topic";
import Section5 from "../components/Sections/Section5";
import Banner from "../components/HomePageCom/Banner";
function AboutPage() {
  return (
    <div>
      <Banner bannerTopic="Our Story" />
      <Section3Topic
        title="Our Team"
        text="Our team is committed to reminding Australians to take good care of their skin. We hope skin cancer will no longer be an Australian label！"
      />
      <div className="row aln-center">
        <Section5
          name="Charles"
          intro="Master of IT"
          image="images/charles.png"
        />
        <Section5
          name="Sachi"
          intro="Professional in data science with extensive experience in business intelligence, 
          data visualization, and statistical modeling. Through data exploration, visualization,
          and analysis, I want to become a Data Analyst who can solve business challenges and deliver desired outcomes."
          image="images/sachi.jpg"
        />
        <Section5
          name="Yixiang"
          intro="Focusing on Business information system. 
          I’m interested in analyzing reports and do well in report writing.
           Very responsible and will never let you down!"
          image="images/yixiang.jpg"
        />
        <Section5
          name="Ziwei"
          intro="Ziwei is a data scientist who has experience 
          working on several data analytical projects.
          He is passionate about decoding values behind data by
           applying his knowledge of machine learning."
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
