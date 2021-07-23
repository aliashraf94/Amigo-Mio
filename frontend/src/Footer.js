import React from "react";
     
   
const Footer = () => {
  let list = [
    "Copyright © 2011-2020 Litecoin Project. All rights reserved"
  ];

  return (
    <footer> 
        <div class="seccionfooter">
            <p class="p1"></p>
              <div>
                  <img class="imgbordes" src="twitter-icon.svg" alt="logo_twitter" width="60rem" />
                  <img class="imgbordes" src="facebook-icon.svg" alt="facebook_logo" width="60rem"/>
                  <img class="imgbordes" src="instagram-icon.svg" alt="instagram_logo" width="60rem"/>
              </div>
            <p class="p2">©Copyright. 2021 Amigo mio Project. All rights reserved. Team 2 Project.</p>
        </div>
    </footer>
  );
};

  
  export default Footer;