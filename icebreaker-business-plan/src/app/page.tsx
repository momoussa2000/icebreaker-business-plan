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
            June 2025 – Confidential – A4 Portrait-ready for PDF
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
                <li>20 k pcs/day → 400 k pcs/month → 2.8 M EGP monthly EBITDA after finance</li>
                <li>Customer terms 45-60 days; bridged by staged volume + 1.5 M EGP factoring line</li>
                <li>Machine pay-back &lt; 3 months at target volume</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">2. Product & Price</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SKU
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Product
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      70 ml real-fruit pop, wooden stick, branded sleeve, 50 pcs carton
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Selling price
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      15 EGP inc. 14% VAT (net 13.16 EGP)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Positioning
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Premium vs. street 5-8 EGP pops; undercuts imported multipacks 18-22 EGP
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">3. Unit Economics (EGP per piece)</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900">Cost Breakdown</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700">
                    <li>• Juice mix (70 ml) – 7.000 EGP</li>
                    <li>• Sleeve + print – 0.262 EGP</li>
                    <li>• Wooden stick – 0.100 EGP</li>
                    <li>• Master carton – 0.120 EGP</li>
                  </ul>
                  <p className="mt-2 font-semibold">TOTAL COGS – 7.48 EGP</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900">Financial Summary</h3>
                  <p className="mt-2 text-sm text-gray-700">Gross margin – 5.68 EGP (43%)</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}