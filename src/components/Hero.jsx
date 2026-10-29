import { useRef } from 'react'
import { useParallax } from '../hooks/useReveal'

const MAPS = 'https://maps.app.goo.gl/QsrnzB18EAQ4UR4M6'
const VB = '0 0 1440 600'

const SURCO_1 =
    'M0 548 C160 518 300 498 460 518 C640 540 760 498 940 508 C1100 518 1250 548 1440 528'
const SURCO_2 =
    'M0 574 C160 544 300 524 460 544 C640 566 760 524 940 534 C1100 544 1250 574 1440 554'

function Pajaro({ clase }) {
    return (
        <svg className={`pajaro ${clase}`} viewBox="0 0 30 12" aria-hidden="true">
        <path d="M1 8 Q8 0 15 7 Q22 0 29 8" />
        </svg>
    )
}

export default function Hero() {
    const ref = useRef(null)
    useParallax(ref)

    return (
        <section id="inicio" className="hero" ref={ref}>
        <div className="hero__cielo" aria-hidden="true">
            <div className="sol" />
            <Pajaro clase="p1" />
            <Pajaro clase="p2" />
        </div>

        <div className="hero__paisaje" aria-hidden="true">
            <svg
            className="capa capa--1"
            viewBox={VB}
            preserveAspectRatio="none"
            style={{ '--k': 0.1, '--s': 1 }}
            >
            <path d="M0 320 C120 280 200 230 320 250 C440 270 520 180 660 190 C800 200 880 270 1010 240 C1130 212 1240 150 1440 210 L1440 600 L0 600 Z" />
            </svg>

            <div className="bruma bruma--1" />

            <svg
            className="capa capa--2"
            viewBox={VB}
            preserveAspectRatio="none"
            style={{ '--k': 0.2, '--s': 0.75 }}
            >
            <path d="M0 380 C100 350 220 300 340 330 C470 362 560 280 700 300 C840 320 930 390 1060 360 C1190 330 1300 280 1440 330 L1440 600 L0 600 Z" />
            </svg>

            <svg
            className="capa capa--3"
            viewBox={VB}
            preserveAspectRatio="none"
            style={{ '--k': 0.35, '--s': 0.5 }}
            >
            <path d="M0 450 C140 410 240 380 380 410 C520 440 600 380 760 390 C900 400 1000 460 1140 440 C1260 422 1350 390 1440 410 L1440 600 L0 600 Z" />
            </svg>

            <div className="bruma bruma--2" />

            <svg
            className="capa capa--4"
            viewBox={VB}
            preserveAspectRatio="none"
            style={{ '--k': 0.6, '--s': 0.25 }}
            >
            <path
                className="tierra"
                d="M0 520 C160 490 300 470 460 490 C640 512 760 470 940 480 C1100 490 1250 520 1440 500 L1440 600 L0 600 Z"
            />
            <path className="surco" d={SURCO_1} />
            <path className="surco surco--2" d={SURCO_2} />
            <path className="baya" d={SURCO_1} />
            <path className="baya baya--2" d={SURCO_2} />
            </svg>
        </div>

        <div className="hero__contenido">
            <h1 className="hero__titulo">
            <span className="solo-lectores">Café Chulumani: </span>
            <span className="linea">
                <span style={{ '--i': 0 }}>Del cafetal</span>
            </span>
            <span className="linea">
                <span style={{ '--i': 1 }}>a tu taza.</span>
            </span>
            </h1>

            <p className="hero__texto entra" style={{ '--t': '.85s' }}>
            Producimos y procesamos nuestro propio café. Desde nuestros cafetales hasta tu mesa
            en La Paz.
            </p>

            <div className="hero__botones entra" style={{ '--t': '1.05s' }}>
            <a className="btn btn--primario" href="#origen">
                Conoce el origen
            </a>
            <a className="btn btn--suave" href={MAPS} target="_blank" rel="noreferrer">
                Cómo llegar
            </a>
            </div>
        </div>

        <div className="sello" aria-hidden="true">
            <svg viewBox="0 0 120 120">
            <defs>
                <path id="sello-circulo" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
            </defs>
            <circle cx="60" cy="60" r="58" fill="#1f3a2c" />
            <text>
                <textPath
                href="#sello-circulo"
                textLength="268"
                lengthAdjust="spacing"
                >
                Producción propia • Café Chulumani •
                </textPath>
            </text>
            <path d="M60 52C61 42 71 40 76 43 74 51 68 54 60 52Z" fill="#7fae63" />
            <circle cx="57" cy="64" r="12" fill="#b5322b" />
            <circle cx="53" cy="60" r="3" fill="#fff" opacity=".35" />
            </svg>
        </div>

        <span className="hero__scroll" aria-hidden="true" />
        </section>
    )
}