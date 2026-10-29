import { useEffect, useState } from 'react'

const MAPS = 'https://maps.app.goo.gl/QsrnzB18EAQ4UR4M6'

const LINKS = [
    { href: '#origen', label: 'Origen' },
    { href: '#ritual', label: 'Ritual' },
    { href: '#momentos', label: 'Momentos' },
    { href: '#visita', label: 'Visítanos' },
]

function Marca() {
    return (
        <svg className="marca" width="34" height="34" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="#1f3a2c" />
        <path d="M16 13C17 6 25 5 28 8 26 14 22 16 16 13Z" fill="#7fae63" />
        <circle cx="13" cy="19" r="7" fill="#b5322b" />
        <circle cx="11" cy="17" r="1.8" fill="#fff" opacity=".35" />
        </svg>
    )
}

export default function Navbar() {
    const [abierto, setAbierto] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.classList.toggle('sin-scroll', abierto)
        const onKey = (e) => e.key === 'Escape' && setAbierto(false)
        window.addEventListener('keydown', onKey)
        return () => {
        document.body.classList.remove('sin-scroll')
        window.removeEventListener('keydown', onKey)
        }
    }, [abierto])

    const cerrar = () => setAbierto(false)

    return (
        <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${abierto ? 'is-open' : ''}`}>
        <div className="nav__pill">
            <a className="nav__logo" href="#inicio" onClick={cerrar}>
            <Marca />
            <span>
                Café <b>Chulumani</b>
            </span>
            </a>

            <nav className="nav__links" aria-label="Principal">
            {LINKS.map((l) => (
                <a key={l.href} href={l.href}>
                {l.label}
                </a>
            ))}
            </nav>

            <a className="nav__cta" href={MAPS} target="_blank" rel="noreferrer">
            Cómo llegar
            </a>

            <button
            type="button"
            className="nav__burger"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setAbierto((v) => !v)}
            >
            <span />
            <span />
            </button>
        </div>

        <div id="menu-movil" className="nav__panel">
            {LINKS.map((l, i) => (
            <a key={l.href} href={l.href} style={{ '--i': i }} onClick={cerrar}>
                {l.label}
            </a>
            ))}
            <div className="nav__panel-info" style={{ '--i': LINKS.length }}>
            <a href='https://wa.me/59170597481'>70597481</a>
            <span>Los Pinos, La Paz</span>
            </div>
        </div>
        </header>
    )
}