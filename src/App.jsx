import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.anim').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="font-jakarta bg-white text-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-18 px-12 flex items-center justify-between ${
          isScrolled
            ? 'bg-white/97 backdrop-blur-2xl border-b border-gray-200/50 shadow-md'
            : 'bg-white/95 backdrop-blur-xl border-b border-gray-200/30'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue to-blue-light shadow-blue" />
          <span className="text-xl font-black tracking-tight">EduNexes</span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <a href="#features" className="text-sm font-semibold text-gray-600 hover:text-blue transition-colors relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue rounded-sm group-hover:w-full transition-all" />
          </a>
          <a href="#premium" className="text-sm font-semibold text-gray-600 hover:text-blue transition-colors relative group">
            AI & Premium
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue rounded-sm group-hover:w-full transition-all" />
          </a>
          <a href="#packages" className="text-sm font-semibold text-gray-600 hover:text-blue transition-colors relative group">
            Packages
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue rounded-sm group-hover:w-full transition-all" />
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="btn-outline text-xs py-2 px-4" onClick={() => setShowModal(true)}>
            Free Trial
          </button>
          <button className="btn-primary text-xs py-2 px-5">See Packages</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        <div id="root-content" />
      </div>

      {/* Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="bg-white rounded-2xl p-12 max-w-md w-full shadow-2xl"
            initial={{ scale: 0.95, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 10 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-black text-ink mb-2">Start Your Free Trial</h3>
            <p className="text-sm text-gray-600 mb-6">
              Fill in your details and we'll set up your full-feature school account within 24 hours.
            </p>

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault()
              setShowModal(false)
              alert('Thank you! We\'ll contact you within 24 hours.')
            }}>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/10 transition-all"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/10 transition-all"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="School Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/10 transition-all"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/10 transition-all"
                required
              />

              <button type="submit" className="btn-primary w-full text-base py-3">
                Get Started →
              </button>

              <p className="text-xs text-gray-500 text-center">
                🔒 Your information is secure and never shared.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default App
