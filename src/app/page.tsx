import { Header } from '@/components/Header'
import { ExecutiveSummary } from '@/components/sections/ExecutiveSummary'
import { ProductPrice } from '@/components/sections/ProductPrice'
import { UnitEconomics } from '@/components/sections/UnitEconomics'
import { ProductionModel } from '@/components/sections/ProductionModel'
import { MarketingStrategy } from '@/components/sections/MarketingStrategy'
import { SwotAnalysis } from '@/components/sections/SwotAnalysis'
import { PestelAnalysis } from '@/components/sections/PestelAnalysis'
import { WorkingCapital } from '@/components/sections/WorkingCapital'
import { RiskRegister } from '@/components/sections/RiskRegister'
import { FinancialPlan } from '@/components/sections/FinancialPlan'
import { Sustainability } from '@/components/sections/Sustainability'
import { ExitOptions } from '@/components/sections/ExitOptions'
import { Timeline } from '@/components/sections/Timeline'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Header />
      <div className="space-y-16">
        <ExecutiveSummary />
        <ProductPrice />
        <UnitEconomics />
        <ProductionModel />
        <MarketingStrategy />
        <SwotAnalysis />
        <PestelAnalysis />
        <WorkingCapital />
        <RiskRegister />
        <FinancialPlan />
        <Sustainability />
        <ExitOptions />
        <Timeline />
        
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
                    <li>• "Local pride" story and leverages Egypt's global cost advantage</li>
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
                    <p className="text-sm text-gray-700">• Dark-store model; add to "frozen dessert" crate</p>
                    <p className="text-sm text-gray-700">• Delivery-fee waiver if basket > 200 EGP</p>
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
                    <p className="text-sm text-gray-700">• Willing to pay 15 EGP if < 10g sugar & real fruit</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">🏖️ Tourists & Stay-cationers</h4>
                    <p className="text-sm text-gray-700">• Red-Sea, North-Coast locations</p>
                    <p className="text-sm text-gray-700">• Buy on impulse</p>
                    <p className="text-sm text-gray-700">• Attracted to "Authentic Egyptian Mango" claim</p>
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
                      <td className="px-4 py-2 text-sm text-gray-700">Add Lemon-Mint; "Cool your Koshary" promo with Voo</td>
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
                      <td className="px-4 py-2 text-sm text-gray-700">Guava launch in Seoudi "Local Harvest" campaign</td>
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
                  <li>• "Authentic Egyptian Mango" messaging</li>
                  <li>• Pharaonic design elements</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">🍋 Lemon-Mint Strategy</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Month 2: "Cool your Koshary" promo</li>
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
  )
}
