import { useNavigate } from "react-router-dom";

import styles from "./styles/tarifas.module.scss";
import line from "../../../../assets/icons/subrayOrange.svg";

import tilde from "../../../../assets/icons/tarifas/check.svg";

export const Tarifas = () => {
  const navigate = useNavigate();

  const handleToReserve = () => {
    navigate("/contacto");
  };

  return (
    <div className={styles.tarifaSection} id="tarifas">
      <div className={styles.subtitleContainerTarifa}>
        <h2 className={styles.h2}>Tarifas</h2>
        <img src={line} alt="linea subrayadora" />
      </div>

      {/*Contenedor de todas las tarifas */}
      <div className={styles.tarifasContainer}>
        {/**Rectangulo de tarifa por pasar el día */}
        <div className={styles.boxTarifaDia}>
          <div className={styles.helpBox}>
            <div className={styles.itemTarifaDia}>Pasar el día</div>

            <p className={styles.descripcionTarifa}>
              (desde las 9 hasta las 20hs)
            </p>
          </div>
          <div className={styles.precioTarifa}>$3500</div>
        </div>

        {/*Rectángulo de tarifa de acampe con pernocte */}
        <div className={styles.boxTarifaPernocte}>
          {/**Subtitle acampe con pernocte */}
          <div className={styles.itemTarifaPernocte}>
            Acampe por día con pernocte
          </div>
          {/**Descripciones de precio de los pernoctes */}
          <div className={styles.helpBoxPernocte}>
            {/**Tarifa 1 */}
            <div className={styles.tarifa}>
              <div className={styles.descripcionTarifaPernocte}>
                Menores de 3 años ----------------------------------------------
              </div>
              <div className={styles.precioTarifaPernocte}>Gratis</div>
            </div>
            {/**Tarifa 2 */}
            <div className={styles.tarifa}>
              <div className={styles.descripcionTarifaPernocte}>
                De 4 a 15 años
                ---------------------------------------------------
              </div>
              <div className={styles.precioTarifaPernocte}>$4200</div>
            </div>
            {/**Tarifa 3 */}
            <div className={styles.tarifa}>
              <div className={styles.descripcionTarifaPernocte}>
                Mayores de 16 años --------------------------------------------
              </div>
              <div className={styles.precioTarifaPernocte}>$6400</div>
            </div>
          </div>
          <p className={styles.aclaracionPernocte}>
            (Desde las 9hs hasta las 10hs del día siguiente)
          </p>
        </div>
        {/*Contenedor Promo finde */}
        <div className={styles.boxTarifaDiaFinde}>
          <div>
            <div className={styles.itemTarifaPernocte}>Promo finde</div>
            <div className={styles.aclaracionPernocte}>
              (Desde las 9hs del sábado hasta las 20hs del domingo)
            </div>
          </div>
          <div className={styles.precioTarifa}>$7800</div>
        </div>

        {/*Contenedor Rodantes, motorhome y trailers */}
        <div className={styles.boxTarifaDiaFinde}>
          <div>
            <div className={styles.itemTarifaPernocte}>
              Rodantes, motorhome, trailers
            </div>
            <div className={styles.aclaracionPernocte}>
              (Adicional por única vez)
            </div>
          </div>
          <div className={styles.precioTarifa}>$3500</div>
        </div>
        <div className={styles.referenciaPrecio}>
          *Todos los precios de acampe son por persona
        </div>
      </div>
      {/**Tildes de beneficios */}
      <div className={styles.boxBeneficiosTarifas}>
        <div className={styles.boxBeneficio}>
          <img className={styles.tilde} src={tilde} />
          <div className={styles.beneficio}>No se cobra carpa</div>
        </div>
        {/**Beneficio 1 */}
        <div className={styles.boxBeneficio}>
          <img className={styles.tilde} src={tilde} />
          <div className={styles.beneficio}>
            Estacionamiento en la entrada del predio
          </div>
        </div>
        {/**Beneficio 1 */}
        <div className={styles.boxBeneficio}>
          <img className={styles.tilde} src={tilde} />
          <div className={styles.beneficio}>
            Todas las opciones incluyen el uso de los servicios que ofrece el
            camping
          </div>
        </div>
      </div>
      <div onClick={handleToReserve} className={styles.reserveButtonTarifa}>
        Reservar
      </div>
    </div>
  );
};
