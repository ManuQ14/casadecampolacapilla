import styles from "../styles/home.module.scss";

export const Opinions = () => {
  return (
    <div className={styles.sectionContainerCenter}>
      <div className={styles.blockContainer}>
        <h2 className={styles.h2}>Opiniones de nuestros acampantes</h2>

        <div className={styles.iconBlockContainer}>
          <div className={styles.itemIconContainer}>
            <img src="" alt="" />
            <h4>Camila</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              consectetur ea
            </p>
          </div>
          <div className={styles.itemIconContainer}>
            <img src="" alt="" />
            <h4>Manuel</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              consectetur ea
            </p>
          </div>
          <div className={styles.itemIconContainer}>
            <img src="" alt="" />
            <h4>Susana</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              consectetur ea
            </p>
          </div>
        </div>
        <div>navigationBar</div>
      </div>
    </div>
  );
};
