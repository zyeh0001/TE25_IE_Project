function Banner(props) {
  return (
    <div>
      <div id="promo-wrapper">
        <section className="hero-black">
          <h2>{props.bannerTopic}</h2>
        </section>
      </div>
    </div>
  );
}
export default Banner;
