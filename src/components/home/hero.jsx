import '../css/heroStyle.css';


const Hero = () => {
    return(
        <section className="hero">
            <img src="../images/JCHSHome.jpeg" className="hero-img" alt="hero" width="1000" height="200"></img>
            <div className="blurredBackground">
                <span className="hero-title">JOHNS CREEK</span>
                <span className="hero-title-fbla">FBLA</span>
                <div className="button-container">
                    <a href="/about" className="hero-button">Join Now</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;