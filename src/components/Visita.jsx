const MAPS = 'https://maps.app.goo.gl/QsrnzB18EAQ4UR4M6'
const MAPA_EMBED =
    'https://www.google.com/maps?q=Caf%C3%A9+Chulumani+Genaro+Ramos+La+Paz+Bolivia&output=embed'
const WHATSAPP =
    'https://wa.me/59170597481?text=' +
    encodeURIComponent('Hola Café Chulumani, quisiera más información.')

const REDES = [
    { nombre: 'Facebook', href: 'https://www.facebook.com/gezerramos3/' },
    { nombre: 'Instagram', href: 'https://www.instagram.com/cafe_chulumani_genaro_ramos/' },
    { nombre: 'TikTok', href: 'https://www.tiktok.com/@genaro.ramos' },
]

const ANIO = new Date().getFullYear()

export default function Visita() {
    return (
        <section id="visita" className="visita">
        <div className="contenedor">
            <div className="visita__grid">
            <div className="visita__info">
                <h2 className="titulo rv">Ven por tu café</h2>
                <p className="lead rv" style={{ '--d': '100ms' }}>
                Estamos en Los Pinos, en la ciudad de La Paz. Escríbenos o llámanos para coordinar
                tu visita.
                </p>

                <address className="direccion rv" style={{ '--d': '160ms' }}>
                <span>Los Pinos, calle José Aguirre, altura calle 7</span>
                <span>La Paz, Bolivia</span>
                </address>

                <a className="telefono rv" style={{ '--d': '220ms' }} href={WHATSAPP} target="_blank">
                70597481
                </a>

                <div className="visita__botones rv" style={{ '--d': '280ms' }}>
                <a className="btn btn--claro" href={WHATSAPP} target="_blank" rel="noreferrer">
                    Escribir por WhatsApp
                </a>
                <a className="btn btn--borde-claro" href={MAPS} target="_blank" rel="noreferrer">
                    Cómo llegar
                </a>
                </div>

                <ul className="redes rv" style={{ '--d': '340ms' }}>
                {REDES.map((r) => (
                    <li key={r.nombre}>
                    <a href={r.href} target="_blank" rel="noreferrer">
                        {r.nombre}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            <div className="visita__mapa rv" style={{ '--d': '160ms' }}>
                <iframe
                title="Ubicación de Café Chulumani en La Paz"
                src={MAPA_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            </div>

            <footer className="pie">
            <span>© {ANIO} Café Chulumani – Genaro Ramos</span>
            <span>La Paz, Bolivia</span>
            </footer>
        </div>
        </section>
    )
}