import { motion } from 'framer-motion'

export function ExecutiveSummary() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <h2 className="text-3xl font-bold text-blue-900 mb-6">1. Executive Summary</h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          IceBreaker Egypt (IBE) adds a premium 70 ml popsicle line to its existing 3 kg & 5 kg gourmet ice-cube business.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Bootstrap capex capped at 600 k EGP (machine + first working capital)</li>
          <li>20 k pcs/day → 400 k pcs/month → 2.8 M EGP monthly EBITDA after finance</li>
          <li>Customer terms 45-60 days; bridged by staged volume + 1.5 M EGP factoring line</li>
          <li>Machine pay-back &lt; 3 months at target volume</li>
        </ul>
      </div>
    </motion.section>
  )
}
