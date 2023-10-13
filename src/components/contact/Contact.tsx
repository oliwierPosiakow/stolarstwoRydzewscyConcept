import "./contact.css";
import "../../assets/styles/colors.scss";

export default function Contact() {
  return (
    <div className="contact_wrapper">
      <div className="contact_wrapper--map-panel">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1161.9517941439285!2d18.622220952321655!3d54.3763532370265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd7498555308d9%3A0x55f01bc1325ad31d!2sStolarstwo%20Ojc.-Syn%20Rydzewscy!5e0!3m2!1spl!2spl!4v1697045738786!5m2!1spl!2spl"
          //   width="600"
          //   height="450"
          //   style="border:0;"
          //   allowfullscreen=""
          loading="lazy"
          //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact_wrapper--contact">
        <div className="contact__title">Zapraszamy do kontaktu!</div>
        <div className="contact__description">
          W celu zamówienia produktu prosimy o kontakt mailowy lub telefoniczny
        </div>
        <div className="contact__numbers">
          <div className="number">603 585 457</div>
          <span>lub</span>
          <div className="number">600 135 363</div>
        </div>
        <div className="contact__email">
          <a
            className="contact__email__anchor"
            href="mailto:stolarstworydzewscy@.o2.pl"
          >
            Napisz do nas!
          </a>
        </div>
      </div>
    </div>
  );
}
