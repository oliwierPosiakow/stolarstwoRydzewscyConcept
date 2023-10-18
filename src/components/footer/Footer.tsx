import "./footer.css";
import "../../assets/styles/colors.scss";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="company">
      <div className="company_name">Stolarstwo Rydzewscy</div>
      <a
        href="https://www.facebook.com/profile.php?id=100031545596353"
        target="_black"
      >
        <FaFacebook size={22} color={"#07484A"} />
      </a>
      <div className="company_address--title">Adres:</div>
      <div className="company_address">ul. Stanisława Wyspiańskiego 2</div>
      <div className="company_address">80-434 Gdańsk-Wrzeszcz</div>
      <div className="company_address--title">Numer kontaktowy:</div>
      <div className="company_address">603 585 457 lub 600 135 363</div>
      {/* copyrights?? */}
    </footer>
  );
}
