import { useEffect, useRef, useState } from 'react'

/**
 * Wraps children and fades/slides them up into view the first time
 * they cross into the viewport. Respects prefers-reduced-motion via CSS.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', variant = 'slide' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const base = variant === 'scale' ? 'reveal-scale' : 'reveal'

  return (
    <Tag
      ref={ref}
      className={`${base} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}