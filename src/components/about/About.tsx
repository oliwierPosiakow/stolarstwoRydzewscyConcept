import './about.css';
import {FaDollarSign, FaHammer} from "react-icons/fa6";
import {FaCalendarAlt} from "react-icons/fa";

export default function About(): JSX.Element {

    return (
        <div className={'about'}>
            <div className="content-wrapper">
                <h2 className="about_title">Dobro klienta jest dla nas najważniejsze</h2>
                <div className="about_content">
                    <div className="atutes">
                        <div className="atutes_atute">
                            <div className="atutes_atute-image accent2-bg">
                                <FaDollarSign size={32} color={'#f0f0f0'}/>
                            </div>
                            <p className="atutes_atute-title">Przystępna cena</p>
                            <p className="atutes_atute-text">Ceny są ustalane indywidualnie dla każdego projektu</p>
                        </div>
                        <div className="atutes_atute">
                            <div className="atutes_atute-image brown-bg">
                                <FaHammer size={32} color={'#f0f0f0'}/>
                            </div>
                            <p className="atutes_atute-title">Jakość wykonania</p>
                            <p className="atutes_atute-text">Korzystamy z najlepszychmateriałów na rynku</p>
                        </div>
                        <div className="atutes_atute">
                            <div className="atutes_atute-image accent-bg">
                                <FaCalendarAlt size={32} color={'#f0f0f0'}/>
                            </div>
                            <p className="atutes_atute-title">Terminowość</p>
                            <p className="atutes_atute-text">Cenimy czas naszego
                                klienta</p>
                        </div>
                    </div>
                    <div className="animation-wrapper">
                        <iframe src='https://my.spline.design/untitled-c29ebaf83ba36348a725dff0b35a0c97/' frameBorder='0' width='100%' height='100%' className={'animation'}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};