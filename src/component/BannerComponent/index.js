function BannerComponent(props) {
    return (
        <section className="banner-innerpage">
        <div className="container-fluid innerpage-bg">
            <div className="container">
            <div className="text-center page-title">
                <h1><img src={ props.image } alt="prop" /> { props.label } </h1>
            </div>
            </div>
        </div>
        </section>
    );
}
  
  export default BannerComponent;
  