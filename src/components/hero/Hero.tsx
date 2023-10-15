import './hero.css';

export default function Hero() {
    return (
        <div className="hero">
            <div className="content-wrapper">
                <div className="hero-content">
                    <h2 className={"hero-content_title"}>
                        Najwyższa jakość wyrobów stolarskich
                    </h2>
                    <p className="hero-content_text">
                        Odkryj świat wyrobów stolarskich wykonywanych z pasją, dostosowanych do twoich potrzeb
                    </p>
                    <div className="hero-content_button">
                        Zobacz więcej
                    </div>
                </div>
            </div>
        </div>
    )
}