import React from "react";
import twitterIcon from '../assets/svg/twitter-icon.svg';
import facebookIcon from '../assets/svg/facebook-icon.svg';
import instagramIcon from '../assets/svg/instagram-icon.svg';



       
   
const Footer = () => {
  let list = [
    "Copyright © 2011-2020 Litecoin Project. All rights reserved"
  ];

  return (
    <footer> 
        <div class="sectionFooter">
            <h4 class="h4-footer">Amigo Mio - Open Culture Center</h4>
              <div>
                  <img class="imgbordes" src={twitterIcon} alt="logo_twitter" width="60rem" />
                  <img class="imgbordes" src={facebookIcon} alt="facebook_logo" width="60rem"/>
                  <img class="imgbordes" src={instagramIcon} alt="instagram_logo" width="60rem"/>
              </div>
            <p class="paragraph-footer">©Copyright. 2021 Amigo mio Project. All rights reserved. Team 2 Project.</p>
        </div>
    </footer>
  );
};

  
  export default Footer;