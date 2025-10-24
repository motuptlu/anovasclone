import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  duration: number
  prefix?: string
  suffix?: string
  inView: boolean
}

const AnimatedCounter = ({ end, duration, prefix = '', suffix = '', inView }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      
      setCount(Math.floor(end * percentage))

      if (percentage < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [end, duration, inView])

  return (
    <span className="text-5xl md:text-7xl font-bold text-white">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default AnimatedCounter
