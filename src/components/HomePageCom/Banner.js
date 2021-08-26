function Banner(props) {
  return (
    <div>
      <div id="promo-wrapper">
        <section id="promo">
          <h2>{props.bannerTopic}</h2>
          {/* Why skin cancer so serious? */}
          {/* <a href="/#" className="button">
            Breach the thresholds
          </a> */}
        </section>
      </div>
    </div>
  );
}
export default Banner;
