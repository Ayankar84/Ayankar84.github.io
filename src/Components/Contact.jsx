import 'boxicons'

function Contact() {
    return (
        <section class="contact" id="contact">
            <h2 class="heading">Contact <span>Me!</span></h2>
            <div className="social-media" style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginTop": "-4rem" }}>
                <a href="https://github.com/Ayankar84" target="_blank"><box-icon type='logo' color="white" name='github' /></a>
                <a href="https://www.linkedin.com/in/ayan-kar-43625421b/" target="_blank"><box-icon color="white" type='logo' name='linkedin' /></a>
                <a href="tel:+918436463854"><box-icon color="white" name='phone-call' /></a>
            </div>
            <form action="#">
                <div class="input-box">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                </div>
                <div class="input-box">
                    <input type="number" placeholder="Mobile Number" />
                    <input type="text" placeholder="Email Subject" />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                {/* <input type="submit" class="btn" value="Send Message" /> */}
                <a href="mailto:ayankar84@gmail.com" className="btn" >Send Mail</a>
            </form>
        </section>
    )
}

export default Contact