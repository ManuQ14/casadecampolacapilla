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
        <button /* onClick={handleButtonToInicio} */>
            Inicio
        </button>
        <button>
            Nosotros
        </button>
        <button>Nuestra Historia</button>
        <button>El Camping</button>
        <Link to="/contacto">Reserva</Link>

    </nav>
    <div className={styles.carrouselHeader}>
        <img src={atardecerUno} alt="Imagen de castilllla" className={styles.imagen} />
    </div>
    </>
  )
}
