import { useNavigate } from "react-router-dom";

import styles from "./styles/error.module.scss";

export const Error = () => {
  const navigate = useNavigate();

  const handleButtonGoToHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.errorContainer}>
      <div className={styles.title}>La página que buscás no existe</div>
      <div onClick={handleButtonGoToHome} className={styles.buttonToHome}>
        Volver al menú principal
      </div>
    </div>
  );
};
