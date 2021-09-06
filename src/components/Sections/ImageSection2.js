function ImageSection2(props) {
    return (
        <section className="col-6 col-12-narrower feature">
            <div className="image-wrapper">
                <img
                    src={props.image}
                    alt=""
                    style={{
                        width: "350px",
                        height: "250px",
                    }}
                />
            </div>
        </section>
    )
}
export default ImageSection2;