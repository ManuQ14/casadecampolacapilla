import { Link } from 'react-router-dom';

import styles from './styles/error.module.scss';

export const Error = () => {
  return (
    <div className={styles.errorContainer}>
    <div className={styles.title}>La página que buscás no existe</div>
    <Link to="/" className={styles.buttonToHome}>Volver al menú principal</Link>
    </div>
  )
}
