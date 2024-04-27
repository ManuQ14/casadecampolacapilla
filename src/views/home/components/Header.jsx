/* import { useEffect } from 'react'; */
import {Link} from 'react-router-dom';

import styles from '../styles/home.module.scss';
import atardecerUno from '../../../assets/images/1.jpg';


export const Header = () => {

 /*    const handleButtonToInicio = ()=>{
        useEffect(()=>{
            window(0,0)
        },[])
    } */

  return (
    <>
    <nav>
        <div /* onClick={handleButtonToInicio} */>
            Inicio
        </div>
        <div>
            Nosotros
        </div>
        <div>Nuestra Historia</div>
        <div>El Camping</div>
        <Link to="/contacto">Reserva</Link>

    </nav>
    <div className={styles.carrouselHeader}>
        <img src={atardecerUno} alt="Imagen de castilllla" className={styles.imagen} />
    </div>
    </>
  )
}
