import { motion } from 'framer-motion'

export const Button = ({ children, variant = 'primary', size = 'md', ...props }) => {
  const baseStyles = 'font-bold rounded-xl transition-all duration-300 active:scale-95'
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#1B4FD8] to-[#2563EB] text-white shadow-blue hover:shadow-lg hover:-translate-y-1',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-blue hover:text-blue',
    white: 'bg-white text-blue shadow-lg hover:shadow-xl hover:-translate-y-1',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
