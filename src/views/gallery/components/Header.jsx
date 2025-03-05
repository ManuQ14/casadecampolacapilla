import styles from "../styles/galeria.module.scss";

import subrayLine from "../../../assets/icons/subrayWhite.svg";

import { NavBar } from "../../main/desktop/NavBarHeader";
import { BurgerMenu } from "../../main/mobile/BurgerMenu";

export const Header = () => {
  return (
    <div>
      {/** Header Mobile */}
      <div className={styles.headerMobile}>
        <div className={styles.coverHeader}>
          <NavBar />

          <div className={styles.contentHeader}>
            <h1 className={`${styles.h1History} hidden`}>Galería</h1>
            <img src={subrayLine} alt="" className="hidden" />
          </div>
        </div>

        <BurgerMenu />
      </div>
    </div>
  );
};
