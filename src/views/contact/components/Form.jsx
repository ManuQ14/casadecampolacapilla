import { useState } from "react";
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import { differenceInDays } from "date-fns"; // Importamos esta función
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/contact.module.scss";

export const Form = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    adults: "1",
    children: "0",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (update) => {
    setDateRange(update);
    setFormData((prevState) => ({
      ...prevState,
      checkIn: update[0] ? update[0].toISOString().split("T")[0] : "",
      checkOut: update[1] ? update[1].toISOString().split("T")[0] : "",
    }));
  };

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
    });
  };

  // Función para calcular los días de estancia
  const calculateStayDays = () => {
    if (startDate && endDate) {
      const days = differenceInDays(endDate, startDate);
      return days + 1; // Sumamos 1 porque differenceInDays no incluye el último día
    }
    return null;
  };

  const handleDateClick = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      checkIn: startDate,
      checkOut: endDate,
    });
  };

  return (
    <section className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="fullName">
            Nombre y apellido <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Nombre Apellido"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">
            Correo electrónico <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="correo@dominio.com/.com.ar"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phone">
            Número de teléfono <span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(011)11111111"
          />
        </div>
        {/**Selector de fechas */}
        <div className={styles.dateGroup}>
          <div className={styles.inputGroup}>
            <label className={styles.labelDatePicker}>
              Fechas de estadía <span className={styles.required}>*</span>
            </label>
            <div className={styles.datePreview} onClick={handleDateClick}>
              {startDate && endDate ? (
                <span className={styles.spanFechas} >
                  {formatDate(startDate)} - {formatDate(endDate)}
                  {calculateStayDays() && (
                    <span className={styles.stayDays}>
                      {" "}
                      ({calculateStayDays()} días)
                    </span>
                  )}
                </span>
              ) : (
                <span className={styles.placeholderText}>1 ene - 30 ene</span>
              )}
            </div>
          </div>
        </div>

        {isDatePickerOpen && (
          <div className={styles.datePickerModal}>
            <div
              className={styles.datePickerOverlay}
              onClick={() => setIsDatePickerOpen(false)}
            />
            <div className={styles.datePickerContent}>
              <div className={styles.datePickerHeader}>
                <button
                  type="button"
                  className={styles.closeButtonDates}
                  onClick={() => setIsDatePickerOpen(false)}
                >
                  X
                </button>
                <h3 className={styles.selectDates}>Seleccionar fechas</h3>
              </div>
              <DatePicker
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                locale={es}
                dateFormat="dd/MM/yyyy"
                selectsRange={true}
                onChange={handleDateChange}
                monthsShown={2}
                inline
                calendarClassName={styles.calendar}
                minDate={new Date()}
              />
              <div className={styles.datePickerFooter}>
                <button
                  type="button"
                  className={styles.applyButton}
                  onClick={() => setIsDatePickerOpen(false)}
                >
                  Aplicar
                </button>
              </div>
            </div>
          </div>
        )}
        {/**Fin de selector de fechas */}

        <div className={styles.guestsGroup}>
          <div className={styles.inputGroup}>
            <label htmlFor="adults">Adultos</label>
            <select
              id="adults"
              className={styles.countsPersons}
              name="adults"
              value={formData.adults}
              onChange={handleChange}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="children">Menores</label>
            <select
              id="children"
              name="children"
              value={formData.children}
              onChange={handleChange}
              className={styles.countsPersons}
            >
              {[...Array(11)].map((_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="comment">
            Comentario <span className={styles.required}>*</span>
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            maxLength={5000}
            required
          />
          <div className={styles.charCount}>{formData.comment.length}/5000</div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </form>
    </section>
  );
};