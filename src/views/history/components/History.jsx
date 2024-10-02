import styles from "../styles/history.module.scss";

import  historyImageOne  from "../../../assets/images/4.jpg";
import  historyImageTwo  from "../../../assets/images/3.jpg";

export const History = () => {
  return (
    <div className={styles.historySectionContainer}>
      <div className={styles.historyFragmentContainer}>
        <p className={styles.historyText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ex?
          Ullam at, facilis perferendis pariatur, sequi laboriosam aliquam quis
          expedita quidem tempore architecto. Neque beatae id qui mollitia, vel
          assumenda.
        </p>
        <img src={historyImageOne} alt="" className={styles.historyImage} />
      </div>

      <div className={styles.historyFragmentContainerInverted}>
        <p className={styles.historyText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat
          quia, ipsam nihil voluptatem suscipit placeat. Optio saepe at harum
          veniam eaque? Ducimus dolor illum ea debitis repudiandae quas eaque!
        </p>
        <img src={historyImageTwo} alt="" className={styles.historyImage} />
      </div>
    </div>
  );
};
