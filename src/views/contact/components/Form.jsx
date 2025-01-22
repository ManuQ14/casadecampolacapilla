import { useState, useEffect } from "react";

//Imports del datepicker
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import { differenceInDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
//fin imports datepicker

import styles from "../styles/contact.module.scss";
import closeButton from "../../../assets/icons/iconsBurguerMenu/closeMenu.svg";
//Foto del fondo del formulario
import bottomForm from "../../../assets/images/bottomContact.jpg";

export const Form = () => {
  //const WHATSAPP_NUMBER = "5491158567591";
  const WHATSAPP_NUMBER = "5491166583307";

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    adults: "1",
    children: "0",
    comment: "",
  });

  const validateName = (name) => {
    const nameRegex = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validaciones específicas por campo
    if (name === "fullName") {
      if (value.trim() === "") {
        setErrors((prev) => ({
          ...prev,
          fullName: "El campo no puede quedar vacío, ingrese nombre y apellido",
        }));
      } else if (!validateName(value)) {
        setErrors((prev) => ({
          ...prev,
          fullName: "El nombre solo puede contener letras y espacios",
        }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.fullName;
          return newErrors;
        });
      }
    }

    if (name === "email") {
      if (value.trim() === "") {
        setErrors((prev) => ({
          ...prev,
          email: "El campo no puede quedar vacío, ingresá un email",
        }));
      } else if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Por favor, ingrese un email válido",
        }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.email;
          return newErrors;
        });
      }
    }

    if (name === "phone") {
      if (value.trim() === "") {
        setErrors((prev) => ({
          ...prev,
          phone: "El campo no puede quedar vacío, ingresá un teléfono",
        }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.phone;
          return newErrors;
        });
      }
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createWhatsAppMessage = () => {
    const stayDays = calculateStayDays();
    const message = `Hola, soy%0A${formData.fullName}%0A
Mi email es: ${formData.email}%0A
Mi teléfono es ${formData.phone}%0A %0A
Quisiera averiguar disponibilidad en las fechas del ${
      startDate ? formatDate(startDate) : ""
    } al ${endDate ? formatDate(endDate) : ""}%0A
 (${stayDays} días)%0A
Adultos: ${formData.adults} %0A
Niños: ${formData.children} %0A
Comentario: ${formData.comment}`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación final antes del envío
    const newErrors = {};

    if (!validateName(formData.fullName)) {
      newErrors.fullName = "El campo sólo puede contener letras y espacios";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Por favor, ingrese un email válido";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Si no hay errores, abre WhatsApp
    window.open(createWhatsAppMessage(), "_blank");
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

  useEffect(() => {
    const checkFormCompletion = () => {
      const requiredFields = ["fullName", "email", "phone", "comment"];
      const allFieldsFilled = requiredFields.every(
        (field) => formData[field].trim() !== ""
      );
      const datesSelected = startDate && endDate;
      setIsFormCompleted(allFieldsFilled && datesSelected);
    };
    checkFormCompletion();
  }, [formData, startDate, endDate]);

  return (
    <>
      <section className={styles.formContainer}>
        <div className={styles.textoIntroductorio}>
          Envianos tu consulta y nos vamos a poner en contacto a la brevedad
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/**nombre */}
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
              className={errors.fullName ? styles.errorInput : ""}
            />
            {errors.fullName && (
              <span className={styles.errorMessage}>{errors.fullName}</span>
            )}
          </div>

          {/**correo */}
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
              placeholder="correo@dominio.com"
              className={errors.email ? styles.errorInput : ""}
            />
            {errors.email && (
              <span className={styles.errorMessage}>{errors.email}</span>
            )}
          </div>

          {/**Telefono */}
          <div className={styles.inputGroup}>
            <label htmlFor="phone">
              Número de teléfono <span className={styles.required}>*</span>
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(011)11111111"
              className={errors.phone ? styles.errorInput : ""}
            />
            {errors.phone && (
              <span className={styles.errorMessage}>{errors.phone}</span>
            )}
          </div>
          {/**Selector de fechas */}
          <div className={styles.dateGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.labelDatePicker}>
                Fechas de estadía <span className={styles.required}>*</span>
              </label>
              <div className={styles.datePreview} onClick={handleDateClick}>
                {startDate && endDate ? (
                  <span className={styles.spanFechas}>
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

          {/* En el componente Form, modifica la parte del DatePicker modal así: */}
          {isDatePickerOpen && (
            <div
              className={`${styles.datePickerModal} ${
                isDatePickerOpen ? styles.modalOpen : ""
              }`}
            >
              <div className={styles.datePickerContent}>
                <div className={styles.datePickerHeader}>
                  <img
                    src={closeButton}
                    className={styles.closeButtonDates}
                    onClick={() => setIsDatePickerOpen(false)}
                    alt="Botón de cerrar"
                  />
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
                  shouldCloseOnSelect={false}
                  calendarClassName={styles.reactDatepicker}
                  minDate={new Date()}
                  required
                />
                <button
                  type="button"
                  className={styles.applyButton}
                  onClick={() => setIsDatePickerOpen(false)}
                >
                  Seleccionar fechas
                </button>
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
          <div className={styles.inputGroupTextArea}>
            <label htmlFor="comment" className={styles.labelComentario}>
              Comentario <span className={styles.required}>*</span>
            </label>
            <textarea
              id="comment"
              className={styles.textAreaComent}
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              maxLength={5000}
              required
              placeholder="Dejanos tus dudas o consultas :)"
            />
            <div className={styles.charCount}>
              {formData.comment.length}/5000
            </div>
          </div>

          <input
            type="submit"
            value="Enviar"
            className={
              isFormCompleted ? styles.submitButton : styles.submitButtonOff
            }
            disabled={!isFormCompleted || Object.keys(errors).length > 0}
          />
        </form>
      </section>
      <img src={bottomForm} alt="" className={styles.bottomFormImage} />
    </>
  );
};
