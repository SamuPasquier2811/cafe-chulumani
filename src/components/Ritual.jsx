import { useState } from 'react'

const METODOS = [
    {
        id: 'pasado',
        nombre: 'Pasado',
        frase: 'El de casa, el de siempre.',
        desc: 'El clásico de las mesas bolivianas: el agua baja despacio por el café molido y deja una taza limpia y suave.',
        molienda: 'Media',
        receta: '15 g de café por 250 ml de agua',
        tiempo: '3 a 4 min',
        liq: '#7a4a2c',
        surf: '#99623b',
        nivel: 0.88,
        vapor: 0.7,
        crema: 0,
    },
    {
        id: 'prensa',
        nombre: 'Prensa francesa',
        frase: 'Más cuerpo, más calma.',
        desc: 'El café reposa con el agua y se presiona al final. Resulta una taza más intensa y con más cuerpo.',
        molienda: 'Gruesa',
        receta: '17 g de café por 250 ml de agua',
        tiempo: '4 min de reposo',
        liq: '#5e3520',
        surf: '#7a4a2c',
        nivel: 0.8,
        vapor: 0.6,
        crema: 0,
    },
    {
        id: 'moka',
        nombre: 'Moka',
        frase: 'Fuerte y aromático.',
        desc: 'La cafetera italiana empuja el agua caliente a través del café y sube una taza concentrada, ideal sola o con leche.',
        molienda: 'Media fina',
        receta: 'Agua hasta la válvula y café sin apretar',
        tiempo: '5 a 7 min a fuego bajo',
        liq: '#45240f',
        surf: '#5e3520',
        nivel: 0.58,
        vapor: 0.8,
        crema: 0,
    },
    {
        id: 'espresso',
        nombre: 'Espresso',
        frase: 'Un trago, toda la intensidad.',
        desc: 'Mucha presión y poco tiempo: una taza pequeña, concentrada y con crema por encima.',
        molienda: 'Fina',
        receta: '18 g de café para 36 g de bebida',
        tiempo: '25 a 30 s',
        liq: '#2d170c',
        surf: '#45240f',
        nivel: 0.46,
        vapor: 0.5,
        crema: 0.95,
    },
]

function Taza() {
    return (
        <svg className="taza" viewBox="0 0 320 280" aria-hidden="true">
        <defs>
            <clipPath id="taza-interior">
            <path d="M71 100 H249 C249 100 247 188 226 212 C211 228 109 228 94 212 C73 188 71 100 71 100 Z" />
            </clipPath>
        </defs>

        {/* vapor */}
        <g className="vapor-taza">
            <path d="M120 84 C108 66 132 52 120 32" />
            <path d="M160 80 C148 60 172 46 160 24" />
            <path d="M200 84 C188 66 212 52 200 32" />
        </g>

        {/* plato */}
        <ellipse cx="160" cy="240" rx="124" ry="16" className="plato" />
        <ellipse cx="160" cy="236" rx="96" ry="9" className="plato-s" />

        {/* asa */}
        <path className="asa" d="M258 118 C302 112 304 188 244 194" />

        {/* líquido dentro del vaso */}
        <g clipPath="url(#taza-interior)">
            <g className="liq">
            <rect x="60" y="104" width="200" height="150" />
            <ellipse className="superficie" cx="160" cy="104" rx="90" ry="8" />
            <rect className="crema" x="60" y="104" width="200" height="14" />
            </g>
        </g>

        {/* cristal */}
        <path
            className="vidrio"
            d="M62 96 H258 C258 96 256 190 232 218 C216 237 104 237 88 218 C64 190 62 96 62 96 Z"
        />
        <ellipse className="borde-vidrio" cx="160" cy="96" rx="98" ry="7" />
        <path className="brillo-vidrio" d="M84 112 C88 150 94 184 106 204" />
        </svg>
    )
}

export default function Ritual() {
    const [i, setI] = useState(0)
    const m = METODOS[i]

    const estilo = {
        '--liq': m.liq,
        '--surf': m.surf,
        '--nivel': m.nivel,
        '--vapor': m.vapor,
        '--crema': m.crema,
    }

    return (
        <section id="ritual" className="ritual">
        <div className="contenedor">
            <header className="cab rv">
            <h2 className="titulo">Cuatro formas de prepararlo</h2>
            <p className="lead">
                Un buen café también se prepara. Elige cómo lo vas a tomar y mira la receta base.
            </p>
            </header>

            <div className="ritual__grid">
            <div className="ritual__escena rv" style={estilo}>
                <div className="ritual__disco">
                <Taza />
                </div>
                <p className="ritual__pie">{m.frase}</p>
            </div>

            <div className="ritual__info rv" style={{ '--d': '120ms' }}>
                <div className="metodos" role="group" aria-label="Método de preparación">
                {METODOS.map((x, n) => (
                    <button
                    key={x.id}
                    type="button"
                    className={`metodo ${n === i ? 'is-on' : ''}`}
                    aria-pressed={n === i}
                    onClick={() => setI(n)}
                    >
                    {x.nombre}
                    </button>
                ))}
                </div>

                <div className="panel" key={m.id}>
                <h3>{m.nombre}</h3>
                <p>{m.desc}</p>
                <dl className="datos">
                    <div>
                    <dt>Molienda</dt>
                    <dd>{m.molienda}</dd>
                    </div>
                    <div>
                    <dt>Receta</dt>
                    <dd>{m.receta}</dd>
                    </div>
                    <div>
                    <dt>Tiempo</dt>
                    <dd>{m.tiempo}</dd>
                    </div>
                </dl>
                </div>

                <aside className="dato">
                <span className="dato__num">88°</span>
                <p>
                    <strong>Dato paceño.</strong> A más de 3.600 m el agua hierve a unos 88 °C. Úsala
                    apenas hierva: no hace falta esperar a que se enfríe.
                </p>
                </aside>
            </div>
            </div>
        </div>
        </section>
    )
}