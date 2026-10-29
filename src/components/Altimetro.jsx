import { useEffect, useRef } from 'react'

const MIN = 1700
const MAX = 3600

const formato = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.')

export default function Altimetro() {
    const raiz = useRef(null)
    const valor = useRef(null)

    useEffect(() => {
        let raf = 0
        let ultimo = -1

        const actualizar = () => {
        raf = 0
        const total = document.documentElement.scrollHeight - window.innerHeight
        const p = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0
        raiz.current.style.setProperty('--p', p.toFixed(4))

        const alt = Math.round((MIN + p * (MAX - MIN)) / 10) * 10
        if (alt !== ultimo) {
            ultimo = alt
            valor.current.textContent = formato(alt)
        }
        }
        const pedir = () => {
        if (!raf) raf = requestAnimationFrame(actualizar)
        }

        window.addEventListener('scroll', pedir, { passive: true })
        window.addEventListener('resize', pedir)
        actualizar()

        return () => {
        window.removeEventListener('scroll', pedir)
        window.removeEventListener('resize', pedir)
        if (raf) cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <aside className="alti" ref={raiz} aria-hidden="true">
        <span className="alti__tope">
            La Paz
            <br />
            ≈3.600
        </span>

        <div className="alti__riel">
            <div className="alti__llenado" />
            <div className="alti__marca">
            <b ref={valor}>1.700</b> m
            </div>
        </div>

        <span className="alti__base">
            Chulumani
            <br />
            ≈1.700
        </span>
        </aside>
    )
}