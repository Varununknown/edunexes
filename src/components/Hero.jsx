import { motion } from 'framer-motion'
import Button from './Button'

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen pt-28 pb-20 px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue/10 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue/10 to-blue-light/10 text-blue px-4 py-2 rounded-full mb-6 border border-blue/20">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wider">Now with AI-Guided Learning</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
            The <span className="italic text-blue">Smarter</span> Way to<br />
            Run Your School
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
            EduNexes is an AI-powered, all-in-one school management platform — handling everything from attendance and fees to AI-guided student revision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg">Start Free Trial — 15 Days</Button>
            <Button variant="outline" size="lg">
              See All Features →
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-teal font-bold">✓</span>
              <span>No setup fee</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-teal font-bold">✓</span>
              <span>Free website included</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-teal font-bold">✓</span>
              <span>0% commission</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="hidden lg:block">
          <div className="relative">
            <div className="bg-gradient-to-br from-ink2 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-3 text-white">
                <div className="h-4 bg-gray-700 rounded w-1/3" />
                <div className="h-3 bg-gray-700 rounded w-1/2" />
                <div className="h-3 bg-gray-700 rounded w-2/3" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
