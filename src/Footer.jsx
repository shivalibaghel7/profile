import React from "react";
import { Menu, Icon } from "semantic-ui-react";

function Footer() {
  return (
    <Menu secondary stackable>
      <Menu.Item>
        <Icon name="copyright" />
        Shivali Baghel 2019
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <a href="mailto: shivalibaghel7@gmail.com">
            <Icon name="mail" color="black" circular />
          </a>
          <a href="https://www.linkedin.com/in/shivali-baghel-56309b146">
            <Icon name="linkedin" color="black" circular />
          </a>
          <a href="tel: +91-9599355670">
            <Icon name="phone" color="black" circular />
          </a>
          <a href="https://wa.me/919205915890">
            <Icon name="whatsapp" color="black" circular />
          </a>
          <a href="https://t.me/baghel_shivali">
            <Icon name="telegram" color="black" circular />
          </a>
          <a href="https://www.instagram.com/baghel.shivali">
            <Icon name="instagram" color="black" circular />
          </a>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
export default Footer;
