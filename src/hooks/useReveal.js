import { useEffect } from 'react'

export default function useRevealAll() {
    useEffect(() => {
        const els = document.querySelectorAll('.rv')

        if (!('IntersectionObserver' in window)) {
        els.forEach((el) => el.classList.add('is-in'))
        return
        }

        const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add('is-in')
                io.unobserve(e.target)
            }
            })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
        )

        els.forEach((el) => io.observe(el))
        return () => io.disconnect()
    }, [])
}

export function useParallax(ref) {
    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        let raf = 0
        let mx = 0
        let my = 0
        let sy = 0

        const paint = () => {
        raf = 0
        el.style.setProperty('--mx', mx.toFixed(3))
        el.style.setProperty('--my', my.toFixed(3))
        el.style.setProperty('--sy', sy.toFixed(3))
        }
        const ask = () => {
        if (!raf) raf = requestAnimationFrame(paint)
        }

        const onMove = (e) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2
        my = (e.clientY / window.innerHeight - 0.5) * 2
        ask()
        }
        const onScroll = () => {
        const next = Math.min(1, Math.max(0, window.scrollY / (el.offsetHeight || 1)))
        if (next === sy) return
        sy = next
        ask()
        }

        const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
        if (fine) window.addEventListener('pointermove', onMove, { passive: true })
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()

        return () => {
        if (fine) window.removeEventListener('pointermove', onMove)
        window.removeEventListener('scroll', onScroll)
        if (raf) cancelAnimationFrame(raf)
        }
    }, [ref])
}