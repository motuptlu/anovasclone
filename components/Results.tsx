import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Results = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-900 to-anovas-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            <span className="italic text-gradient">Results speak louder than words</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { metric: '50+', label: 'Projects Delivered' },
              { metric: '99%', label: 'Client Satisfaction' },
              { metric: '24/7', label: 'Support Available' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-gradient mb-4">{item.metric}</div>
                <div className="text-gray-400 text-lg">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Results
