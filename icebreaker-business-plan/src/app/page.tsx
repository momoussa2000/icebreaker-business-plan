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
          {/* Section 1: Executive Summary */}
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

          {/* Section 2: Product & Price */}
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
                      70 ml real-fruit pop, branded sleeve, 50 pcs carton
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

          {/* Section 3: Flavors & Target Market */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">3. Flavors & Target Market</h2>
            <div className="space-y-8">
              
              {/* Flavor Strategy */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-orange-900 mb-4">🍊 Flavor Portfolio Strategy</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-orange-800 mb-3">Launch Flavors (Phase 1)</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-orange-700 mb-2">🥭 Egyptian Ewiess Mango</h5>
                        <p className="text-sm text-gray-700">• Premium real fruit concentrate from Egyptian mangoes</p>
                        <p className="text-sm text-gray-700">• Tested and validated with existing IBE customers</p>
                        <p className="text-sm text-gray-700">• Unique local sourcing advantage</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-orange-700 mb-2">🍓 Strawberry</h5>
                        <p className="text-sm text-gray-700">• Universal appeal across all demographics</p>
                        <p className="text-sm text-gray-700">• High demand in Egyptian market</p>
                        <p className="text-sm text-gray-700">• Complements mango for variety</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange-800 mb-3">Future Expansion (Phase 2)</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="font-medium text-gray-800">🍇 Grape</p>
                        <p className="text-xs text-gray-600">Popular in Egypt</p>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="font-medium text-gray-800">🍊 Orange</p>
                        <p className="text-xs text-gray-600">Classic choice</p>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="font-medium text-gray-800">🍌 Banana</p>
                        <p className="text-xs text-gray-600">Kids favorite</p>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="font-medium text-gray-800">🍋 Lemon</p>
                        <p className="text-xs text-gray-600">Refreshing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Target Market Analysis */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">🎯 Target Market Analysis</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Primary Target: Premium Retail</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• <strong>Gourmet Markets:</strong> High-income consumers seeking quality</p>
                      <p>• <strong>Dreams Markets:</strong> Upscale neighborhood clientele</p>
                      <p>• <strong>Oscar Markets:</strong> Premium shopping experience</p>
                      <p>• <strong>Seoudi Market:</strong> Established middle-upper class</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Secondary Target: Convenience & Online</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• <strong>Voo Online Market:</strong> Tech-savvy urban professionals</p>
                      <p>• <strong>Circle K Gas Stations:</strong> On-the-go consumers</p>
                      <p>• <strong>Best Way (Gouna):</strong> Tourist & expat market</p>
                      <p>• <strong>Bright Star (Gouna):</strong> Resort area premium segment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Demographics */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">👥 Customer Demographics</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <h4 className="font-semibold text-green-800 mb-2">Age Groups</h4>
                    <div className="space-y-1 text-sm">
                      <p>• <strong>25-35:</strong> 40% (Young professionals)</p>
                      <p>• <strong>35-45:</strong> 30% (Established families)</p>
                      <p>• <strong>18-25:</strong> 20% (Students/young adults)</p>
                      <p>• <strong>45+:</strong> 10% (Health-conscious adults)</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-green-800 mb-2">Income Levels</h4>
                    <div className="space-y-1 text-sm">
                      <p>• <strong>Upper-middle:</strong> 50% (15k+ EGP/month)</p>
                      <p>• <strong>High-income:</strong> 30% (25k+ EGP/month)</p>
                      <p>• <strong>Middle-class:</strong> 20% (8-15k EGP/month)</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-green-800 mb-2">Purchase Behavior</h4>
                    <div className="space-y-1 text-sm">
                      <p>• <strong>Quality-focused:</strong> 60%</p>
                      <p>• <strong>Brand-conscious:</strong> 40%</p>
                      <p>• <strong>Health-aware:</strong> 70%</p>
                      <p>• <strong>Convenience-driven:</strong> 50%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Penetration Strategy */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">🚀 Market Penetration Strategy</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-3">Phase 1: Leverage Existing Relationships</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Cross-sell to existing IBE ice cube customers</li>
                      <li>• Bundle with 3kg ice cubes for higher order value</li>
                      <li>• Utilize established distribution channels</li>
                      <li>• Leverage existing payment terms and relationships</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-3">Phase 2: Expand Within Channels</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Add more locations within existing chains</li>
                      <li>• Introduce seasonal flavors for variety</li>
                      <li>• Develop exclusive flavors for premium accounts</li>
                      <li>• Create limited edition flavors for special events</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Competitive Advantage */}
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">⭐ Competitive Advantages</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-3">Product Differentiation</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Real Egyptian fruit:</strong> Authentic local sourcing</li>
                      <li>• <strong>Premium quality:</strong> 70ml vs standard 50ml</li>
                      <li>• <strong>No artificial additives:</strong> Natural ingredients</li>
                      <li>• <strong>Established brand trust:</strong> IBE reputation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-3">Market Position</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Existing relationships:</strong> 8 key accounts ready</li>
                      <li>• <strong>Premium positioning:</strong> Quality over price</li>
                      <li>• <strong>Local advantage:</strong> Egyptian fruit sourcing</li>
                      <li>• <strong>Distribution ready:</strong> Cold chain established</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Unit Economics */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">4. Unit Economics (EGP per piece)</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Cost Breakdown</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Juice mix (70 ml) – 7.000 EGP</li>
                    <li>• Sleeve + print – 0.262 EGP</li>
                    <li>• Master carton – 0.120 EGP</li>
                  </ul>
                  <p className="mt-3 font-semibold text-blue-900">TOTAL COGS – 7.38 EGP</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Financial Summary</h3>
                  <p className="text-sm text-gray-700 mb-2">Selling Price: 13.16 EGP (net)</p>
                  <p className="text-sm text-gray-700 mb-2">COGS: 7.38 EGP</p>
                  <p className="font-semibold text-green-900">Gross margin: 5.78 EGP (44%)</p>
                </div>
              </div>
              
              {/* Cost Breakdown Visual */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Breakdown Visualization</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Juice mix (70 ml)</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '93.6%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">7.000 EGP</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Sleeve + print</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '3.5%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">0.262 EGP</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Master carton</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '1.6%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">0.120 EGP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profitability Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-green-900 mb-2">Gross Margin</h4>
                  <p className="text-2xl font-bold text-green-700">44%</p>
                  <p className="text-xs text-gray-600">Industry leading</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">Contribution Margin</h4>
                  <p className="text-2xl font-bold text-blue-700">5.78 EGP</p>
                  <p className="text-xs text-gray-600">Per unit</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-900 mb-2">Break-even Volume</h4>
                  <p className="text-2xl font-bold text-purple-700">61k</p>
                  <p className="text-xs text-gray-600">Pieces/day</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Production Model */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">5. Production Model</h2>
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

          {/* Section 6: Marketing & Sales Strategy */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">6. Marketing & Sales Strategy</h2>
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

              {/* Channel Mix Visualization */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Channel Mix Distribution</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Modern Trade</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-48 bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Hotels & Cafés</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-48 bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: '30%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">30%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Schools/Kiosks</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-48 bg-gray-200 rounded-full h-3">
                        <div className="bg-yellow-500 h-3 rounded-full" style={{width: '15%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">15%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Seasonal Events</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-48 bg-gray-200 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full" style={{width: '10%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">10%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Penetration Analysis */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Market Penetration Strategy</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <h4 className="font-semibold text-blue-800 mb-2">Phase 1 (Months 1-3)</h4>
                    <p className="text-2xl font-bold text-blue-700">50</p>
                    <p className="text-sm text-gray-600">Key Outlets</p>
                    <p className="text-xs text-gray-500 mt-1">Focus on premium locations</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-blue-800 mb-2">Phase 2 (Months 4-6)</h4>
                    <p className="text-2xl font-bold text-blue-700">150</p>
                    <p className="text-sm text-gray-600">Total Outlets</p>
                    <p className="text-xs text-gray-500 mt-1">Expand to secondary markets</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-blue-800 mb-2">Phase 3 (Months 7-12)</h4>
                    <p className="text-2xl font-bold text-blue-700">300+</p>
                    <p className="text-sm text-gray-600">Total Outlets</p>
                    <p className="text-xs text-gray-500 mt-1">Full market coverage</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Promotional Budget</h3>
                <p className="text-gray-700">2 EGP per sleeve sold → 800k EGP/year (included in operating overhead)</p>
              </div>
            </div>
          </section>

          {/* Section 7: SWOT Analysis */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">7. SWOT Analysis</h2>
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

          {/* Section 8: PESTEL Analysis */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">8. PESTEL Analysis (EGYPT)</h2>
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
                <p className="text-gray-700">High-speed sleeve wrappers available locally</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🌱</span> Environmental
                </h3>
                <p className="text-gray-700">RPET sleeves align with Red-Sea single-use-plastic ban</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">⚖️</span> Legal
                </h3>
                <p className="text-gray-700">EOS 2624/2022 ice-confection standard already met by IBE lab</p>
              </div>
            </div>
          </section>

          {/* Section 9: Working Capital */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">9. Working Capital & Cash Conversion</h2>
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
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">Cash Gap Summary</h3>
                <p className="text-gray-700">Cash gap ≈ 45-60 days → 3.29M EGP at 400k pcs/month</p>
              </div>
            </div>
          </section>

          {/* Section 10: Risk Register */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">10. Risk Register</h2>
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

          {/* Section 11: Financial Plan */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">11. Financial Plan</h2>
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

              {/* Revenue Breakdown Visualization */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue Breakdown (400k pieces)</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Gross Revenue (15 EGP/pc)</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-48 bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: '100%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">6,000,000 EGP</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">VAT (14%)</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-48 bg-gray-200 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full" style={{width: '12.3%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">-737,200 EGP</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t pt-2">
                    <span className="text-sm font-semibold text-gray-900">Net Revenue</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-48 bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{width: '87.7%'}}></div>
                      </div>
                      <span className="text-sm font-bold text-gray-900">5,262,800 EGP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3-Year Financial Projection */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">3-Year Financial Projection</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-900 uppercase">Year</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-900 uppercase">Daily Production</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-900 uppercase">Annual Revenue</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-900 uppercase">Annual EBITDA</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-900 uppercase">EBITDA Margin</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">Year 1</td>
                        <td className="px-4 py-2 text-sm text-gray-700">20k pcs/day</td>
                        <td className="px-4 py-2 text-sm text-gray-700">63.2M EGP</td>
                        <td className="px-4 py-2 text-sm text-gray-700">33.5M EGP</td>
                        <td className="px-4 py-2 text-sm text-gray-700">53%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">Year 2</td>
                        <td className="px-4 py-2 text-sm text-gray-700">40k pcs/day</td>
                        <td className="px-4 py-2 text-sm text-gray-700">126.4M EGP</td>
                        <td className="px-4 py-2 text-sm text-gray-700">67.0M EGP</td>
                        <td className="px-4 py-2 text-sm text-gray-700">53%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">Year 3</td>
                        <td className="px-4 py-2 text-sm text-gray-700">60k pcs/day</td>
                        <td className="px-4 py-2 text-sm text-gray-700">189.6M EGP</td>
                        <td className="px-4 py-2 text-sm text-gray-700">100.5M EGP</td>
                        <td className="px-4 py-2 text-sm text-gray-700">53%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sensitivity Analysis */}
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">Sensitivity Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-3">Volume Impact</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>+10% volume</span>
                        <span className="font-medium text-green-600">+2.8M EGP/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span>+20% volume</span>
                        <span className="font-medium text-green-600">+5.6M EGP/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span>-10% volume</span>
                        <span className="font-medium text-red-600">-2.8M EGP/year</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-3">Price Impact</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>+1 EGP price</span>
                        <span className="font-medium text-green-600">+4.8M EGP/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span>+2 EGP price</span>
                        <span className="font-medium text-green-600">+9.6M EGP/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span>-1 EGP price</span>
                        <span className="font-medium text-red-600">-4.8M EGP/year</span>
                      </div>
                    </div>
                  </div>
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

          {/* Section 12: ESG & Sustainability */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">12. ESG & Sustainability</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <span className="text-4xl">🌳</span>
                    <div>
                      <h3 className="text-xl font-semibold text-green-900 mb-2">Sustainable Materials</h3>
                      <p className="text-gray-700">Natural fruit-based ingredients with minimal processing</p>
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

          {/* Section 13: Exit Options */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">13. Exit Options (Year 3)</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-blue-900">Projected Valuation</h3>
                  <div className="flex items-center justify-center space-x-4 text-center flex-wrap">
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

          {/* Section 14: Implementation Timeline */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">14. Implementation Timeline</h2>
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

          {/* Section 15: Flavor Strategy & Product Range */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">15. Flavor Strategy & Product Range</h2>
            <div className="space-y-8">
              
              {/* Proven Hero Flavor */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-orange-900 mb-4">🥭 Proven Hero Flavor</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-orange-800 mb-3">Ewiss Mango (70 ml)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Laboratory-tested recipe using single-origin Egyptian Ewiss mango purée</li>
                      <li>• 14 °Brix, no added color</li>
                      <li>• Sensory score 8.2/9 vs. leading import 7.1 in blind tasting</li>
                      <li>• Tested with 60 Gourmet-Market shoppers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange-800 mb-3">Competitive Advantages</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• &quot;Local pride&quot; story and leverages Egypt&apos;s global cost advantage</li>
                      <li>• -18% vs. Peruvian or Indian mango concentrate</li>
                      <li>• Bright orange sleeve with pharaonic mango motif</li>
                      <li>• Flagship product positioning</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Launch Range */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">🚀 Launch Range – 2-SKU Line-up (Month 1-3)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-blue-800 mb-2">🥭 Ewiss Mango</h4>
                    <p className="text-sm text-gray-700">• Flagship product</p>
                    <p className="text-sm text-gray-700">• Bright orange sleeve with pharaonic mango motif</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-blue-800 mb-2">🍋 Koshary Lemon-Mint</h4>
                    <p className="text-sm text-gray-700">• Real lemon juice + dried mint</p>
                    <p className="text-sm text-gray-700">• Nostalgic street-drink flavor</p>
                    <p className="text-sm text-gray-700">• Pale-green sleeve</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Why Only Two at Kick-off?</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Keeps raw-material MOQ inside cash envelope (600k EGP)</li>
                    <li>• Reduces sleeve print plate cost (2,000 EGP per color set)</li>
                    <li>• Faster rotation in 450mm freezer chests → 2 facing each = 100 pcs visible stock</li>
                  </ul>
                </div>
              </div>

              {/* Road-map Flavors */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">🗺️ Road-map Flavors (Month 4-12)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-green-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-green-900 uppercase">Flavor</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-green-900 uppercase">Source Cost vs. Mango</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-green-900 uppercase">Local Story</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-green-900 uppercase">Buyer Score (1-5)</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-green-900 uppercase">Launch Quarter</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">🍓 Strawberry (Delta district)</td>
                        <td className="px-4 py-2 text-sm text-gray-700">-8%</td>
                        <td className="px-4 py-2 text-sm text-gray-700">★★★★☆</td>
                        <td className="px-4 py-2 text-sm text-gray-700">4.6</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Q2</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">🍈 Guava (Seedy type)</td>
                        <td className="px-4 py-2 text-sm text-gray-700">-5%</td>
                        <td className="px-4 py-2 text-sm text-gray-700">★★★★☆</td>
                        <td className="px-4 py-2 text-sm text-gray-700">4.4</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Q2</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">🥥 Sobia-Coconut</td>
                        <td className="px-4 py-2 text-sm text-gray-700">+12%</td>
                        <td className="px-4 py-2 text-sm text-gray-700">★★★★★</td>
                        <td className="px-4 py-2 text-sm text-gray-700">4.8</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Q3</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">🌴 Tamarind-Date</td>
                        <td className="px-4 py-2 text-sm text-gray-700">+3%</td>
                        <td className="px-4 py-2 text-sm text-gray-700">★★★★★</td>
                        <td className="px-4 py-2 text-sm text-gray-700">4.5</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Q3</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">🍑 Peaches & Cream (Aswan)</td>
                        <td className="px-4 py-2 text-sm text-gray-700">+6%</td>
                        <td className="px-4 py-2 text-sm text-gray-700">★★★☆☆</td>
                        <td className="px-4 py-2 text-sm text-gray-700">4.0</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Q4</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">🍇 Pomegranate-Dakkah</td>
                        <td className="px-4 py-2 text-sm text-gray-700">+18%</td>
                        <td className="px-4 py-2 text-sm text-gray-700">★★★★☆</td>
                        <td className="px-4 py-2 text-sm text-gray-700">3.9</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Q4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-gray-600">*Buyer score = average interest from Gourmet, Seoudi, Circle K buyers (n = 8)</p>
              </div>

              {/* NPD Process */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">🔬 NPD Process</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-3">Quality Standards</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 4-week shelf-life validation at -18°C</li>
                      <li>• Accelerated 38°C 72h micro check</li>
                      <li>• Final viscosity target 1,800–2,000 cP (Brookfield)</li>
                      <li>• Avoid stick drip in sleeve</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-3">Health Compliance</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• All recipes ≤ 10g added sugar/100ml</li>
                      <li>• Stay ahead of potential sugar-tax threshold</li>
                      <li>• Clean label requirements</li>
                      <li>• Natural ingredient focus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 16: Target Market & Core Audience */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">16. Target Market & Core Audience</h2>
            <div className="space-y-8">
              
              {/* Trade Channels */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">🏪 A. Trade Channels (Immediate Roll-out via Existing Exclusives)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-800 mb-2">Gourmet Markets (exclusive)</h4>
                      <p className="text-sm text-gray-700">• 38 branches; ABC1 footfall</p>
                      <p className="text-sm text-gray-700">• Freezer-top placement in entrance gondola</p>
                      <p className="text-sm text-gray-700">• Expected sell-out: 12 pcs/store/day</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-800 mb-2">Dreams Markets (exclusive)</h4>
                      <p className="text-sm text-gray-700">• 22 branches; weekend family shoppers</p>
                      <p className="text-sm text-gray-700">• BOGO promo every Friday</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-800 mb-2">Oscar Markets (exclusive)</h4>
                      <p className="text-sm text-gray-700">• 16 branches; coastal resorts</p>
                      <p className="text-sm text-gray-700">• Peak May-Sept; beach-bundle cooler bins</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-800 mb-2">Seoudi Market</h4>
                      <p className="text-sm text-gray-700">• 50 branches; list fee 12k EGP per SKU</p>
                      <p className="text-sm text-gray-700">• Amortized 12 months; target 8 pcs/store/day</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-800 mb-2">Voo Online Market</h4>
                      <p className="text-sm text-gray-700">• Dark-store model; add to &quot;frozen dessert&quot; crate</p>
                      <p className="text-sm text-gray-700">• Delivery-fee waiver if basket &gt; 200 EGP</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-800 mb-2">Circle K Gas Stations</h4>
                      <p className="text-sm text-gray-700">• 400 forecourt stores; 24h impulse purchases</p>
                      <p className="text-sm text-gray-700">• POS clip-strip on freezer door</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-800 mb-2">Best Way & Bright Star (Gouna)</h4>
                      <p className="text-sm text-gray-700">• Tourist mini-markets</p>
                      <p className="text-sm text-gray-700">• Dual-price tag: 15 EGP local / 18 EGP tourist</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">📊 Channel Summary</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-green-700">540</p>
                      <p className="text-sm text-gray-600">Total POS at Launch</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-700">10k</p>
                      <p className="text-sm text-gray-600">Volume Target Month-3</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-700">50%</p>
                      <p className="text-sm text-gray-600">Account Penetration</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-700">5</p>
                      <p className="text-sm text-gray-600">Avg pcs/store/day</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consumer Segments */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">👥 B. Consumer Segments</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-green-800 mb-2">👨‍👩‍👧‍👦 Young Families (mothers 28-40)</h4>
                      <p className="text-sm text-gray-700">• Seek healthier treats</p>
                      <p className="text-sm text-gray-700">• Willing to pay 15 EGP if &lt; 10g sugar &amp; real fruit</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-green-800 mb-2">🏖️ Tourists & Stay-cationers</h4>
                      <p className="text-sm text-gray-700">• Red-Sea, North-Coast locations</p>
                      <p className="text-sm text-gray-700">• Buy on impulse</p>
                      <p className="text-sm text-gray-700">• Attracted to &quot;Authentic Egyptian Mango&quot; claim</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-green-800 mb-2">📱 Millennial & Gen-Z (18-30)</h4>
                      <p className="text-sm text-gray-700">• Instagram-friendly packaging</p>
                      <p className="text-sm text-gray-700">• Hashtag #RealEgyptianMango printed on sleeve</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-green-800 mb-2">👨‍🍳 HoReCa Chefs</h4>
                      <p className="text-sm text-gray-700">• Use pops as dessert garnish or cocktail stirrer</p>
                      <p className="text-sm text-gray-700">• Value consistent size & clean label</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Penetration & Repeat Objectives */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-purple-900 mb-4">🎯 C. Penetration & Repeat Objectives (Year 1)</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-purple-800 mb-2">Household Penetration</h4>
                    <p className="text-3xl font-bold text-purple-700">3%</p>
                    <p className="text-sm text-gray-600">in Greater Cairo & Alexandria</p>
                    <p className="text-xs text-gray-500">≈ 400k households</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-purple-800 mb-2">Repeat Purchase Rate</h4>
                    <p className="text-3xl font-bold text-purple-700">35%</p>
                    <p className="text-sm text-gray-600">within 60 days</p>
                    <p className="text-xs text-gray-500">Nielsen benchmark 28%</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-purple-800 mb-2">Average Buying Frequency</h4>
                    <p className="text-3xl font-bold text-purple-700">1.6</p>
                    <p className="text-sm text-gray-600">pcs per month per repeat buyer</p>
                    <p className="text-xs text-gray-500">→ 2.5M incremental pieces</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 17: Go-to-Market Calendar */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">17. Go-to-Market Calendar (Flavor Centric)</h2>
            <div className="space-y-6">
              
              {/* Calendar Table */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-900 uppercase">Month</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-900 uppercase">Activity</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-900 uppercase">KPI</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">M1</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Mango focus booths at Gourmet & Circle K</td>
                        <td className="px-4 py-2 text-sm text-gray-700">30k pcs sold</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">M2</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Add Lemon-Mint; &quot;Cool your Koshary&quot; promo with Voo</td>
                        <td className="px-4 py-2 text-sm text-gray-700">60k pcs cumulative</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">M3</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Beach-club mango-tree selfie stand (Gouna)</td>
                        <td className="px-4 py-2 text-sm text-gray-700">100k pcs cumulative</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">M4</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Introduce Strawberry; school-gate sampling</td>
                        <td className="px-4 py-2 text-sm text-gray-700">150k pcs cumulative</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">M5</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Guava launch in Seoudi &quot;Local Harvest&quot; campaign</td>
                        <td className="px-4 py-2 text-sm text-gray-700">200k pcs cumulative</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Campaigns */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">🥭 Mango Campaign Focus</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Month 1: Focus booths at premium locations</li>
                    <li>• Month 3: Beach-club selfie stand for social media</li>
                    <li>• &quot;Authentic Egyptian Mango&quot; messaging</li>
                    <li>• Pharaonic design elements</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">🍋 Lemon-Mint Strategy</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Month 2: &quot;Cool your Koshary&quot; promo</li>
                    <li>• Nostalgic street-drink positioning</li>
                    <li>• Voo online market partnership</li>
                    <li>• Pale-green sleeve design</li>
                  </ul>
                </div>
              </div>

              {/* Expansion Timeline */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">📈 Flavor Expansion Timeline</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-purple-800 mb-2">Q1 (M1-3)</h4>
                    <p className="text-sm text-gray-700">🥭 Mango</p>
                    <p className="text-sm text-gray-700">🍋 Lemon-Mint</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-purple-800 mb-2">Q2 (M4-6)</h4>
                    <p className="text-sm text-gray-700">🍓 Strawberry</p>
                    <p className="text-sm text-gray-700">🍈 Guava</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-purple-800 mb-2">Q3 (M7-9)</h4>
                    <p className="text-sm text-gray-700">🥥 Sobia-Coconut</p>
                    <p className="text-sm text-gray-700">🌴 Tamarind-Date</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-purple-800 mb-2">Q4 (M10-12)</h4>
                    <p className="text-sm text-gray-700">🍑 Peaches & Cream</p>
                    <p className="text-sm text-gray-700">🍇 Pomegranate-Dakkah</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}