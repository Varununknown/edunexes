import { motion } from 'framer-motion'

export const Card = ({ children, hover = true, className = '' }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8 } : {}}
      className={`bg-white rounded-2xl border border-gray-100 shadow-md transition-all duration-300 hover:shadow-lg overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
