import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isWorking] = useState(true)

  const serviceList = [
    'Landing Page',
    'Branding',
    'Contact Page need to update',
    'Pitch deck urgent',
    'Mobile app needed',
    'Logo',
  ]

  return (
    <section id="contact" ref={ref} className="py-24 bg-anovas-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have Questions? <span className="text-gradient">We got Answers</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            We specialize in web development, mobile app creation, digital marketing, and custom software development. 
            Our team delivers modern, scalable solutions tailored to your business needs. From startup launches to 
            enterprise-level projects, we handle everything from design and development to deployment and ongoing support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl border border-gray-700 shadow-2xl mb-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            If you scrolled this far, Its time to <span className="text-gradient">LEVEL UP</span>
          </h3>

          {/* Service List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {serviceList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center text-gray-300 bg-gray-800/50 px-4 py-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
              >
                <span className="text-anovas-accent text-xl mr-3">✓</span>
                <span>{service}</span>
              </motion.div>
            ))}
          </div>

          {/* Working Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mb-8"
          >
            {isWorking && (
              <div className="inline-flex items-center text-yellow-400 text-lg">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                <span className="working-dots">Working</span>
              </div>
            )}
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <a
              href="https://wa.me/917992193730"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-anovas-accent text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-green-600 transition-all duration-300 glow hover:scale-105 shadow-2xl"
            >
              <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Just Click Trust me we are good at this :)
            </a>
            <p className="text-gray-500 text-sm mt-4">Click to start a conversation on WhatsApp</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
