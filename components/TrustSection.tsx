import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from './AnimatedCounter'

const TrustSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const logos = [
    { name: 'Company Logo 1' },
    { name: 'Company Logo 2' },
    { name: 'Company Logo 3' },
    { name: 'Company Logo 4' },
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-semibold mb-8">
            Companies that <span className="text-gradient">trust us</span>
          </h3>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            From startups to enterprises, we deliver results.
          </p>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-12 items-center justify-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex-shrink-0"
                >
                  <div className="w-32 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border border-gray-600 hover:border-blue-500 transition-all duration-300">
                    <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Savings Metric */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-800 to-anovas-dark p-12 rounded-3xl border border-gray-700 shadow-2xl"
        >
          <div className="mb-4">
            <AnimatedCounter 
              end={100000} 
              duration={2000} 
              prefix="$" 
              suffix="+" 
              inView={inView}
            />
          </div>
          <h4 className="text-3xl font-bold mb-4 text-gradient">
            Saved for Brands
          </h4>
          <p className="text-gray-400 text-lg">
            so they can reinvest where it matters the most
          </p>
          <p className="text-sm text-gray-500 mt-4 italic">Savings (This Month)</p>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection
