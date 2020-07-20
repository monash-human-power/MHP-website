import React from 'react'

// Import social logos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Socials = () => {
    return (
        <div className='MHP-socials'>
            <a href='https://www.facebook.com/MonashHPT/'>
                <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href='https://www.instagram.com/monashhpt/'>
                <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a href='https://www.linkedin.com/company/monashhpt/'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
    )
}

export default Socials
