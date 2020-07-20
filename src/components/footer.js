import React from "react"

const Footer = () => (
    <footer className='MHP-footer MHP-bg'>
        <div className='container'>
            <div className='row'>

                {/* Sponsor section */}
                <div className='col-md'>
                    <h4>Sponsor Us</h4>
                    <p>Get in touch with us today at
                        <a href='mailto: monashhpt@gmail.com'> monashhpt@gmail.com</a>
                    </p>
                </div>

                {/* Address section */}
                <div className='col-md'>
                    <h4>Say Hello</h4>
                    <p>17 Alliance Lane, Monash University</p>
                </div>

                {/* Social text */}
                <div className='col-md'>
                    <h4>Join Us</h4>
                    <p>Contact us on <a href='https://www.facebook.com/MonashHPT/'> Facebook</a> </p>
                </div>

                {/* Social icons */}
                <div className='col-md'>
                    {/* <SocialSidebar /> */}
                </div>

            </div>

            <div className='row'>
                {/* Col is xl as it should always collapse */}
                <div className='col-xl pt-5'>
                    Monash Human Power {new Date().getFullYear()}
                </div>
            </div>

        </div>
    </footer>

)


export default Footer
