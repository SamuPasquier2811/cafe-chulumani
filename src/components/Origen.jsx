import { useEffect, useRef, useState } from 'react'

const PASOS = [
    {
        etiqueta: 'El cafetal',
        titulo: 'Crece despacio, entre sombra y neblina',
        texto:
        'En los Yungas el café madura con calma. La planta se cuida todo el año para que el fruto llegue en su mejor punto.',
    },
    {
        etiqueta: 'La cosecha',
        titulo: 'Rojo, maduro y listo',
        texto:
        'Se recogen las cerezas cuando alcanzan su color justo. Ahí queda guardado el dulzor que después llega a tu taza.',
    },
    {
        etiqueta: 'El procesado',
        titulo: 'Del fruto al grano',
        texto:
        'Se retira la pulpa y el grano se seca con paciencia, hasta que está listo para el siguiente paso.',
    },
    {
        etiqueta: 'Tu taza',
        titulo: 'Hasta tu mesa, en La Paz',
        texto:
        'El café llega a Los Pinos listo para prepararlo a tu manera. Escríbenos o ven a buscarlo.',
    },
]

export default function Origen() {
    const [activo, setActivo] = useState(0)
    const lista = useRef(null)

    useEffect(() => {
        const pasos = lista.current.querySelectorAll('[data-i]')
        const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
            if (e.isIntersecting) setActivo(Number(e.target.dataset.i))
            })
        },
        { rootMargin: '-45% 0px -45% 0px' },
        )
        pasos.forEach((p) => io.observe(p))
        return () => io.disconnect()
    }, [])

    return (
        <section id="origen" className="origen">
        <div className="contenedor">
            <header className="origen__cab">
            <h2 className="titulo rv">Producimos y procesamos nuestro propio café.</h2>
            <p className="lead rv" style={{ '--d': '120ms' }}>
                Lo cuidamos desde el cafetal hasta tu mesa. Así es el camino de cada grano.
            </p>
            </header>

            <div className="origen__grid">
            <div className="origen__visual" data-paso={activo} aria-hidden="true">
                <div className="disco">
                <svg className="disco__anillo" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="96" />
                </svg>

                <svg className="fruto" viewBox="0 0 240 240">
                    <g className="rama">
                    <path className="rama__tallo" d="M18 78 C70 60 150 70 224 98" />
                    <path className="hoja" d="M70 70 C60 40 90 22 118 30 C118 56 100 72 70 70Z" />
                    <path className="hoja" d="M150 80 C150 50 182 40 206 52 C198 78 176 90 150 80Z" />
                    <path className="hoja" d="M96 78 C80 98 92 122 112 128 C124 108 118 88 96 78Z" />
                    </g>

                    <g className="cerezas">
                    <path className="tallito" d="M112 76 L112 100" />
                    <circle className="cereza" cx="112" cy="128" r="30" />
                    <circle className="brillo" cx="102" cy="118" r="7" />
                    <path className="tallito" d="M158 86 L156 114" />
                    <circle className="cereza" cx="156" cy="140" r="26" />
                    <circle className="brillo" cx="148" cy="131" r="6" />
                    </g>

                    <g className="grano">
                    <ellipse
                        className="grano__cuerpo"
                        cx="120"
                        cy="126"
                        rx="48"
                        ry="64"
                        transform="rotate(-24 120 126)"
                    />
                    <path className="grano__surco" d="M95 70 C126 102 106 146 145 183" />
                    </g>

                    <g className="humo">
                    <path d="M96 54 C88 42 104 34 96 20" />
                    <path d="M122 48 C114 34 130 26 122 10" />
                    <path d="M148 54 C140 42 156 34 148 20" />
                    </g>
                </svg>

                <span className="disco__etiqueta">{PASOS[activo].etiqueta}</span>
                </div>
            </div>

            <ol className="origen__pasos" ref={lista}>
                {PASOS.map((p, i) => (
                <li
                    key={p.etiqueta}
                    data-i={i}
                    className={`paso ${i === activo ? 'is-activo' : ''}`}
                >
                    <span className="paso__num">{i + 1}</span>
                    <span className="paso__etiqueta">{p.etiqueta}</span>
                    <h3>{p.titulo}</h3>
                    <p>{p.texto}</p>
                </li>
                ))}
            </ol>
            </div>
        </div>
        </section>
    )
}