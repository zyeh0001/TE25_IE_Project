function Banner(props) {
  return (
    <div>
      <div id="promo-wrapper">
        <section id="hero">
          <h2>{props.bannerTopic}</h2>
        </section>
      </div>
    </div>
  );
}
export default Banner;
