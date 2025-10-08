import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
  className?: string
}

export function Section({ title, children, className = '' }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-xl shadow-lg p-8 ${className}`}
    >
      <h2 className="text-3xl font-bold text-blue-900 mb-6">{title}</h2>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </motion.section>
  )
}
