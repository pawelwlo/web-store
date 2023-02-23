

import React from 'react';

const Footer = () => {
    return ( 
    <footer className='footer'>      
        <div>
            <div className='footerLinks'>
                <a  href="https://twitter.com/"  > <img className='footerImg' src='./twitter.png'></img></a>
                <a href="mailto:amazing-store@gmail.com"><img className='footerImg' src='./email.png'></img></a>
                <a href="https://github.com/amazing-store"><img className='footerImg' src='./Github_logo_PNG1.png'></img></a>
            </div>
                

                
                
                <p className='footerLogo'>© 2023 Amazing Store. All Rights Reserved.</p>
                
           
        </div>

    </footer> 
    
    );
}
 
export default Footer;