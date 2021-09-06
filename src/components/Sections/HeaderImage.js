function HeaderImage(props) {
    return (
        <div className="image-wrapper">
            <img
              src={props.image}
              alt=""
              width = "100%"

            />
        </div>
    );
  }
  export default HeaderImage;