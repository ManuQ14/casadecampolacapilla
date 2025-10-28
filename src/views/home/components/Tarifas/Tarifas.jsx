import { useNavigate } from "react-router-dom";

import styles from "./styles/tarifas.module.scss";
import line from "../../../../assets/icons/subrayOrange.svg";

import tilde from "../../../../assets/icons/tarifas/check.svg";

export const Tarifas = () => {
  const navigate = useNavigate();

  const handleToReserve = () => {
    navigate("/contacto");
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={`${styles.tarifaSection} hidden`} id="tarifas">
      <div className={`${styles.subtitleContainerTarifa} hidden`}>
        <h2 className={styles.h2}>Tarifas</h2>
        <img src={line} alt="linea subrayadora" />
      </div>

      {/*Contenedor de todas las tarifas */}
      <div className={styles.tarifasContainer}>
        {/**Rectangulo de tarifa por pasar el día */}
        <div className={`${styles.boxTarifaDia} hidden2`}>
          <div className={styles.helpBox}>
            <div className={styles.itemTarifaDia}>Pasar el día</div>

            <p className={styles.descripcionTarifa}>
              (desde las 9 hasta las 20hs)
            </p>
          </div>
          <div className={styles.precioTarifa}>$5000</div>
        </div>

        {/*Rectángulo de tarifa de acampe con pernocte */}
        <div className={`${styles.boxTarifaPernocte} hidden3`}>
          {/**Subtitle acampe con pernocte */}
          <div className={styles.itemTarifaPernocte}>
            Acampe por día con pernocte
          </div>
          {/**Descripciones de precio de los pernoctes */}
          <div className={styles.helpBoxPernocte}>
            {/**Tarifa 1 */}
            <div className={styles.tarifa}>
              <span className={styles.descripcionTarifaPernocte}>
                Menores de 3 años
              </span>
              <span className={styles.lineFlex}></span>
              <div className={styles.precioTarifaPernocte}>Sin costo</div>
            </div>

            {/**Tarifa 2 */}
            <div className={styles.tarifa}>
              <span className={styles.descripcionTarifaPernocte}>
                De 4 a 15 años
              </span>
              <span className={styles.lineFlex}></span>
              <div className={styles.precioTarifaPernocteDos}>$6000</div>
            </div>

            {/**Tarifa 3 */}
            <div className={styles.tarifa}>
              <span className={styles.descripcionTarifaPernocte}>
                Mayores de 16 años
              </span>
              <span className={styles.lineFlex}></span>
              <div className={styles.precioTarifaPernocteDos}>$8500</div>
            </div>
          </div>
          <p className={styles.aclaracionPernocte}>
            (Desde las 9hs hasta las 10hs del día siguiente)
          </p>
        </div>
        {/*Contenedor Promo finde */}
        <div className={`${styles.boxTarifaDiaFinde} hidden4`}>
          <div>
            <div className={styles.itemTarifaPernocte}>Promo finde</div>
            <div className={styles.aclaracionPernocte}>
              (Desde las 9hs del sábado hasta las 20hs del domingo)
            </div>
          </div>
          <div className={styles.precioTarifaPernocteTres}>$12500</div>
        </div>

        {/*Contenedor Rodantes, motorhome y trailers */}
        <div className={`${styles.boxTarifaDiaFinde} hidden5`}>
          <div>
            <div className={styles.itemTarifaPernocte}>
              Rodantes, motorhome, trailers
            </div>
            <div className={styles.aclaracionPernocte}>
              (Adicional por única vez)
            </div>
          </div>
          <div className={styles.precioTarifaPernocteTres}>$6500</div>
        </div>
        <div className={`${styles.referenciaPrecio} hidden4`}>
          *Todos los precios de acampe son por persona
        </div>
      </div>
      {/**Tildes de beneficios */}
      <div className={`${styles.boxBeneficiosTarifas} hidden4`}>
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
      <div
        onClick={handleToReserve}
        className={`${styles.reserveButtonTarifa} hidden3`}
      >
        Hacenos tu consulta
      </div>
    </div>
  );
};
