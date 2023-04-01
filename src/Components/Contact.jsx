function Contact() {
    return (
        <section class="contact" id="contact">
            <h2 class="heading">Contact <span>Me!</span></h2>
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