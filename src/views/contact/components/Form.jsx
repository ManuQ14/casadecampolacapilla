import { useState } from "react";
import styles from "../styles/contact.module.scss";

export const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
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
            placeholder="Juan Perez"
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
          />
        </div>

        <div className={styles.dateGroup}>
          <div className={styles.inputGroup}>
            <label htmlFor="checkIn">
              Entrada <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="checkOut">
              Salida <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.guestsGroup}>
          <div className={styles.inputGroup}>
            <label htmlFor="adults">Adultos</label>
            <select
              id="adults"
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
