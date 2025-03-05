import subrayLine from "../../../assets/icons/subrayWhite.svg";

import styles from "../styles/contact.module.scss";

import { NavBar } from "../../main/desktop/NavBarHeader";
import { BurgerMenu } from "../../main/mobile/BurgerMenu";

export const Header = () => {
  return (
    <section className={styles.reserveSection}>
      {/** Header Mobile */}
      <div className={styles.headerMobile}>
        <div className={styles.coverHeader}>
          <NavBar />

          <div className={styles.contentHeader}>
            <h1 className={`${styles.h1History} hidden`}>Contacto</h1>
            <img
              src={subrayLine}
              alt="linea subrayadora de titulo"
              className="hidden"
            />
          </div>
        </div>

        <BurgerMenu />
      </div>
    </section>
  );
};
