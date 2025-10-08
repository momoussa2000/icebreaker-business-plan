export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            ICE BREAKER EGYPT
          </h1>
          <h2 className="text-2xl sm:text-3xl text-blue-700 mb-2">
            Gourmet Popsicle Business Plan
          </h2>
          <p className="text-gray-600">
            June 2025 â€“ Confidential â€“ A4 Portrait-ready for PDF
          </p>
        </header>
        <div className="space-y-16">
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">1. Executive Summary</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                IceBreaker Egypt (IBE) adds a premium 70 ml popsicle line to its existing 3 kg & 5 kg gourmet ice-cube business.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Bootstrap capex capped at 600 k EGP (machine + first working capital)</li>
                <li>20 k pcs/day â†’ 400 k pcs/month â†’ 2.8 M EGP monthly EBITDA after finance</li>
                <li>Customer terms 45-60 days; bridged by staged volume + 1.5 M EGP factoring line</li>
                <li>Machine pay-back &lt; 3 months at target volume</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
