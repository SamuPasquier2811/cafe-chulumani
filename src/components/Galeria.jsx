import { useState } from 'react'

// Pon tus fotos en public/images/ con estos nombres (o cambia las rutas).
// Mientras una foto no exista, se muestra un marco de color con su título.
const FOTOS = [
    { src: '/images/galeria-1.jpg', pie: 'El cafetal', tono: '#3d6b4a' },
    { src: '/images/galeria-2.jpg', pie: 'Cerezas maduras', tono: '#a23a2c' },
    { src: '/images/galeria-3.jpg', pie: 'El secado', tono: '#b58a4a' },
    { src: '/images/galeria-4.jpg', pie: 'Nuestro grano', tono: '#5a3520' },
    { src: '/images/galeria-5.jpg', pie: 'La taza', tono: '#2f5640' },
    { src: '/images/galeria-6.jpg', pie: 'Nuestra gente', tono: '#8a5a2e' },
]

function Foto({ src, pie, tono, retraso }) {
    const [ok, setOk] = useState(true)

    return (
        <figure className="foto rv" style={{ '--d': `${retraso}ms`, '--tono': tono }}>
        {ok ? (
            <img src={src} alt={pie} loading="lazy" decoding="async" onError={() => setOk(false)} />
        ) : (
            <div className="foto__vacio" aria-hidden="true">
            <svg width="56" height="56" viewBox="0 0 32 32">
                <path d="M16 13C17 6 25 5 28 8 26 14 22 16 16 13Z" fill="#fff" opacity=".55" />
                <circle cx="13" cy="19" r="7" fill="#fff" opacity=".55" />
            </svg>
            </div>
        )}
        <figcaption>{pie}</figcaption>
        </figure>
    )
}

export default function Galeria() {
    return (
        <section id="momentos" className="galeria">
        <div className="contenedor">
            <header className="cab rv">
            <h2 className="titulo">Postales del cafetal y de la taza</h2>
            <p className="lead">El grano, el campo y la gente que lo hace posible.</p>
            </header>

            <div className="galeria__grid">
            {FOTOS.map((f, i) => (
                <Foto key={f.src} {...f} retraso={i * 90} />
            ))}
            </div>
        </div>
        </section>
    )
}