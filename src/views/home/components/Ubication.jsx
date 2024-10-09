import styles from "../styles/home.module.scss";

export const Ubication = () => {
  return (
    <div className={styles.sectionContainer}>
      <iframe
        className={styles.mapaBox}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1168.2195358826991!2d-59.91120948748315!3d-34.60998953624427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b95418c3bed66b%3A0x67d972631561ff58!2sCamping%20Casa%20de%20Campo%20La%20Capilla!5e1!3m2!1sen!2sar!4v1728394977080!5m2!1sen!2sar"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></iframe>

      <div className={styles.infoUbicationBox}>
        <h2 className={styles.titleUbication}>Ubicación</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          accusantium laborum veniam cumque quos tempora adipisci, id nesciunt
          iure, numquam nobis magni. Obcaecati est ipsum esse totam rem tenetur
          eaque.
        </p>
      </div>
    </div>
  );
};
