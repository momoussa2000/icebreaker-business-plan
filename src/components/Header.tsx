'use client'

import { motion } from 'framer-motion'

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
        ICE BREAKER EGYPT
      </h1>
      <h2 className="text-2xl sm:text-3xl text-blue-700 mb-2">
        Gourmet Popsicle Business Plan
      </h2>
      <p className="text-gray-600">
        June 2025 – Confidential – A4 Portrait-ready for PDF
      </p>
    </motion.header>
  )
}
