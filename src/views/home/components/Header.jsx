/* import { useEffect } from 'react'; */
import {Link} from 'react-router-dom';

/* import styles from '../styles/home.module.scss';
import atardecerUno from '../../../assets/images/1.jpg'; */


export const Header = () => {

 

  return (
    <>
    <nav>
        <div >
            Inicio
        </div>
        <div>
            Nosotros
        </div>
        <div>Nuestra Historia</div>
        <div>El Camping</div>
        <Link to="/contacto">Reserva</Link>

    </nav>
    <header>

    </header>
    </>
  )
}
