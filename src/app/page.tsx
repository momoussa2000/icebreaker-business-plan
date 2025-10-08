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

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">4. Production Model</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Machine Specifications</h3>
                <p className="text-gray-700 mb-2">• Used rotary machine capacity: 200 pcs/min</p>
                <p className="text-gray-700 mb-2">• Operating hours: 10 hrs/day</p>
                <p className="text-gray-700">• Theoretical daily output: 120k pcs/day</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Operational Highlights</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Ramp-up plan: 10k → 20k pcs/day in first 3 months</li>
                  <li>Initial utilization rate: 17% of theoretical capacity</li>
                  <li>Leveraging existing IBE freezer fleet for storage</li>
                  <li>No additional vehicles required</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">5. Marketing & Sales Strategy</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Channel Mix (Year-1 Volume)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 45% Modern trade (Carrefour, Hyper-One)</li>
                    <li>• 30% Hotels & cafés</li>
                    <li>• 15% Schools/kiosks</li>
                    <li>• 10% Seasonal events</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">Promotional Calendar</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Month 1: POSM + tasting booths + BOGO first 50 outlets</li>
                    <li>• Month 2: Beach-club umbrella branding</li>
                    <li>• Month 3: Back-to-school combo with 3 kg ice cubes</li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Promotional Budget</h3>
                <p className="text-gray-700">2 EGP per sleeve sold → 800k EGP/year (included in operating overhead)</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">6. SWOT Analysis</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✓</span> Strengths
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ready customer base & cold-chain fleet – zero new vehicles</li>
                  <li>• Low entry capex (600k) vs. 2-3M green-field</li>
                  <li>• 43% gross margin absorbs trade spend & finance cost</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✗</span> Weaknesses
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Single line – downtime risk</li>
                  <li>• 60-day receivables require external financing</li>
                  <li>• New brand – heavy sampling needed first season</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✓</span> Opportunities
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Import parity 18-22 EGP creates price umbrella</li>
                  <li>• Off-season Nov-Mar competitors shut; we supply hotels</li>
                  <li>• Cross-sell with IBE ice cubes → higher drop size</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✗</span> Threats
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sugar/fruit price inflation</li>
                  <li>• Big players (Froneri, Al-Marai) enter with deeper pockets</li>
                  <li>• Possible extension of sugar tax to ice confectionery</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">7. PESTEL Analysis (EGYPT)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🏛️</span> Political
                </h3>
                <p className="text-gray-700">Stable food-export policy; zero popsicle import tariff</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">💰</span> Economic
                </h3>
                <p className="text-gray-700">EGP float raises import parity, favours local producer</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">👥</span> Social
                </h3>
                <p className="text-gray-700">60% population under 30; demand for on-the-go treats</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">⚙️</span> Technological
                </h3>
                <p className="text-gray-700">High-speed sleeve wrappers & eco sticks available locally</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🌱</span> Environmental
                </h3>
                <p className="text-gray-700">RPET sleeves + wooden sticks align with Red-Sea single-use-plastic ban</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">⚖️</span> Legal
                </h3>
                <p className="text-gray-700">EOS 2624/2022 ice-confection standard already met by IBE lab</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">8. Working Capital & Cash Conversion</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Payment Terms</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Customer Collection</h4>
                    <p className="text-gray-700">45-60 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Raw Material Payment</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Juice – cash on delivery</li>
                      <li>• Sleeves – 70% cash / 30% 30d</li>
                      <li>• Sticks – cash</li>
                      <li>• Cartons – 30d</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Bridge Plan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Month 1: 100k pcs 0.82M gap → 600k equity + 15-day juice credit</li>
                  <li>• Month 2: 200k pcs 1.65M gap → retained cash + bank OD 1M</li>
                  <li>• Month 3: 300k pcs 2.47M gap → rolling OD + receivables factoring</li>
                  <li>• Month 4: 400k pcs 3.29M gap → 1.5M factoring line (cost 2.4% per 60d)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">9. Risk Register</h2>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Risk</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Mitigation Strategy</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Severity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Liquidity squeeze</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Confirmed 1.5M EGP factoring line</td>
                    <td className="px-3 py-4 text-sm"><span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">High</span></td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Machine breakdown</td>
                    <td className="px-3 py-4 text-sm text-gray-500">24-hr service contract + manual mould back-up</td>
                    <td className="px-3 py-4 text-sm"><span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">Medium</span></td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Seasonality dip</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Produce ice-cubes in off-months, retain labour</td>
                    <td className="px-3 py-4 text-sm"><span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">Medium</span></td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">FX/commodity spike</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Price concentrate in EGP; forward-buy sugar 3 months</td>
                    <td className="px-3 py-4 text-sm"><span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">High</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">10. Financial Plan</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">Monthly Steady-State (400k pcs)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Net revenue: 5,262,800 EGP</li>
                    <li>• RM + overhead: 2,342,800 EGP</li>
                    <li>• Factoring cost (60d @ 2.4%): 125,000 EGP</li>
                    <li className="font-semibold">• EBITDA: 2,795,000 EGP (53% margin)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Pay-back & Sensitivity</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Pay-back period: 7 weeks</li>
                    <li>• +1,000 pcs/day → +188k EGP yearly cash</li>
                    <li>• Price 16 EGP inc. VAT → +345k EGP yearly cash</li>
                    <li>• Break-even ≈ 61k pcs/day</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Key Financial Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-purple-700">53%</p>
                    <p className="text-sm text-gray-600">EBITDA Margin</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-700">7wk</p>
                    <p className="text-sm text-gray-600">Pay-back Period</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-700">61k</p>
                    <p className="text-sm text-gray-600">Break-even (pcs/day)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-700">2.8M</p>
                    <p className="text-sm text-gray-600">Monthly EBITDA (EGP)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">11. ESG & Sustainability</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">🌳</span>
                  <div>
                    <h3 className="text-xl font-semibold text-green-900 mb-2">Sustainable Materials</h3>
                    <p className="text-gray-700">Wooden sticks FSC-certified</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">♻️</span>
                  <div>
                    <h3 className="text-xl font-semibold text-green-900 mb-2">Recyclable Packaging</h3>
                    <p className="text-gray-700">RPET recyclable sleeves (30% post-consumer)</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">💧</span>
                  <div>
                    <h3 className="text-xl font-semibold text-green-900 mb-2">Water Conservation</h3>
                    <p className="text-gray-700">Closed-loop water system – zero additional effluent</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">☀️</span>
                  <div>
                    <h3 className="text-xl font-semibold text-green-900 mb-2">Renewable Energy</h3>
                    <p className="text-gray-700">Existing solar panels on IBE roof offset 15% electricity</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">12. Exit Options (Year 3)</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-blue-900">Projected Valuation</h3>
                  <div className="flex items-center justify-center space-x-4 text-center">
                    <div>
                      <p className="text-4xl font-bold text-blue-700">12M+</p>
                      <p className="text-sm text-gray-600">Annual EBITDA (EGP)</p>
                    </div>
                    <div className="text-4xl text-blue-400">×</div>
                    <div>
                      <p className="text-4xl font-bold text-blue-700">7×</p>
                      <p className="text-sm text-gray-600">Multiple</p>
                    </div>
                    <div className="text-4xl text-blue-400">=</div>
                    <div>
                      <p className="text-4xl font-bold text-blue-700">84M</p>
                      <p className="text-sm text-gray-600">Valuation (EGP)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">Exit Strategy</h3>
                  <p className="text-gray-700">Regional FMCG trade-sale targeting established players looking to expand their frozen treats portfolio.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Value Drivers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Established market presence</li>
                    <li>• Strong distribution network</li>
                    <li>• Proven business model</li>
                    <li>• Sustainable practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">13. Implementation Timeline</h2>
            <div className="space-y-6">
              <div className="relative pl-12 pb-6">
                <div className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center bg-blue-500">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-500">
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">Now</h3>
                  <p className="text-gray-700">Secure 1.5M EGP factoring line (signed POs as collateral)</p>
                </div>
              </div>
              <div className="relative pl-12 pb-6">
                <div className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center bg-blue-200">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Month 1</h3>
                  <p className="text-gray-700">10k pcs/day trial, 50 key accounts, POSM roll-out</p>
                </div>
              </div>
              <div className="relative pl-12 pb-6">
                <div className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center bg-blue-200">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Month 3</h3>
                  <p className="text-gray-700">20k pcs/day, 150 outlets, beach-club branding</p>
                </div>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center bg-blue-200">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Month 12</h3>
                  <p className="text-gray-700">60k pcs/day (50% utilisation) → 11.8M EGP yearly EBITDA</p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Milestones</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-700">1.5M</p>
                  <p className="text-sm text-gray-600">Initial Funding (EGP)</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-700">150+</p>
                  <p className="text-sm text-gray-600">Outlets by Month 3</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-700">60k</p>
                  <p className="text-sm text-gray-600">Daily Production Target</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-700">11.8M</p>
                  <p className="text-sm text-gray-600">Year 1 EBITDA (EGP)</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}