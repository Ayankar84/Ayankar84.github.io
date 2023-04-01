import pic from "../images/profile_pic.jpg"
import 'boxicons'

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Ayan Kar</h1>
                <h3>I'm a <span className="multiple-text">Full-stack Web Developer</span></h3>
                <p>
                    Life is not a straight path, but a journey full of twists and turns. Embrace each moment as it comes,
                    for every experience is an opportunity to learn, grow and become a better version of yourself. Don't be
                    so focused on reaching your destination that you forget to enjoy the journey. Take time to appreciate
                    the beauty around you, cherish the relationships you make, and make the most of every experience. Life
                    is a journey that happens only once, so make it worth remembering.
                </p>
                <div className="social-media">
                    <a href="https://github.com/Ayankar84" target="_blank"><box-icon type='logo' color="white" name='github' /></a>
                    <a href="https://www.linkedin.com/in/ayan-kar-43625421b/" target="_blank"><box-icon color="white" type='logo' name='linkedin' /></a>
                </div>
                <a href="https://drive.google.com/file/d/1h_my1s0tonPcTWbALPli142PqbnMNRmw/view?usp=share_link" target="_blank" className="btn">Download CV</a>
            </div>
            <div className="home-img">
                <img src={pic} alt="ayan" />
            </div>
        </section>
    )
}

export default Home;