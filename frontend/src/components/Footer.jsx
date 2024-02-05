import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <>
    <div className='footer' style={{background:'#9a639f ', height:'5rem'}}>
    <div className="social-icons" style={{color:'white', display:'flex', justifyContent:'space-between', width:'10%', fontSize:'1.5rem', margin:'-1rem 40%' }}>
                <a style={{color:'white' ,margin:'1.5rem 1rem'}} href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a style={{color:'white' ,margin:'1.5rem 1rem'}} href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                <a style={{color:'white' ,margin:'1.5rem 1rem'}} href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                <a style={{color:'white',margin:'1.5rem 1rem'}} href="#" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>

      </div>

    </div>
    </>
  )
}

export default Footer
