import React from "react";

import Logo from "../../components/Logo/Logo";
import NavLinks from "../../components/NavLinks/NavLinks";

import styles from './Navigation.module.scss';
import Content from "../Content/Content";
import NavLinksResponsive from "../../components/NavLinksResponsive/NavLinksResponsive";

export default function Navigation() {
  return(
      <>
        <nav>
          <Content>
            <div className={styles["nav"]}>
              <div className={styles["logo-wrapper"]}>
                <Logo />
                <span>FiveStars</span>
              </div>
              <NavLinks />
            </div>
          </Content>
        </nav>
        <div className={styles["nav_spacer"]}/>
      </>
  )
}