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

        {/* Section 17: UPDATED COSTING & SCALE-UP BRIDGE */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">17. UPDATED COSTING &amp; SCALE-UP BRIDGE</h2>
          <p className="text-sm text-gray-600 mb-6">(Reflects accountant’s full-capacity sheet vs. bootstrap ramp)</p>

          {/* 17.1 Basis of two scenarios */}
          <div className="space-y-3 mb-8">
            <h3 className="text-xl font-semibold text-blue-900">17.1 Basis of two scenarios</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">Metric</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">Bootstrap Year 1</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">Steady-State Year 2</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-800">
                  <tr><td className="px-4 py-2">Operating days / month</td><td className="px-4 py-2">20</td><td className="px-4 py-2">20</td></tr>
                  <tr><td className="px-4 py-2">Hours / day</td><td className="px-4 py-2">10</td><td className="px-4 py-2">10</td></tr>
                  <tr><td className="px-4 py-2">Machine speed (pcs/min)</td><td className="px-4 py-2">200</td><td className="px-4 py-2">200</td></tr>
                  <tr><td className="px-4 py-2">Daily output (pcs)</td><td className="px-4 py-2">20 000</td><td className="px-4 py-2">200 000</td></tr>
                  <tr><td className="px-4 py-2">Monthly output (pcs)</td><td className="px-4 py-2">400 000</td><td className="px-4 py-2">4 992 000</td></tr>
                  <tr><td className="px-4 py-2">Utilisation</td><td className="px-4 py-2">17 %</td><td className="px-4 py-2">100 %</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 17.2 Cost breakdown comparison */}
          <div className="space-y-3 mb-8">
            <h3 className="text-xl font-semibold text-blue-900">17.2 Cost breakdown comparison (EGP per piece)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">Component</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">Bootstrap COGS</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">Full-Capacity COGS*</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">Δ driver</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-800">
                  <tr><td className="px-4 py-2">Juice mix</td><td className="px-4 py-2">7.00</td><td className="px-4 py-2">7.00</td><td className="px-4 py-2">identical blend</td></tr>
                  <tr><td className="px-4 py-2">Sleeve + stick + carton</td><td className="px-4 py-2">0.48</td><td className="px-4 py-2">0.60</td><td className="px-4 py-2">electricity + glue now inside</td></tr>
                  <tr><td className="px-4 py-2">Electricity (direct)</td><td className="px-4 py-2">—</td><td className="px-4 py-2">0.20</td><td className="px-4 py-2">compressor at full load</td></tr>
                  <tr><td className="px-4 py-2">Direct labour</td><td className="px-4 py-2">—</td><td className="px-4 py-2">0.50</td><td className="px-4 py-2">8 operators spread over 4 M pcs</td></tr>
                  <tr className="bg-blue-50 font-semibold"><td className="px-4 py-2">Total COGS</td><td className="px-4 py-2">7.48</td><td className="px-4 py-2">8.00</td><td className="px-4 py-2">+0.52 absorbed by volume</td></tr>
                  <tr><td className="px-4 py-2">Selling price (inc. VAT)</td><td className="px-4 py-2">15</td><td className="px-4 py-2">15</td><td className="px-4 py-2">same</td></tr>
                  <tr className="bg-green-50 font-bold"><td className="px-4 py-2">Gross margin / pc</td><td className="px-4 py-2">5.68</td><td className="px-4 py-2">7.00</td><td className="px-4 py-2">+1.32 (fixed-cost dilution)</td></tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 mt-2">*Source: internal cost sheet dated 8-Oct-2025 (accountant PDF).</p>
            </div>
          </div>

          {/* 17.3 Monthly P&L bridge */}
          <div className="space-y-3 mb-8">
            <h3 className="text-xl font-semibold text-blue-900">17.3 Monthly P&amp;L bridge</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">Scenario</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">Net Revenue</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">COGS + OH</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">EBITDA</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">EBITDA margin</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-800">
                  <tr><td className="px-4 py-2">Bootstrap 400 k pcs</td><td className="px-4 py-2">5.26 M</td><td className="px-4 py-2">2.34 M</td><td className="px-4 py-2">2.80 M</td><td className="px-4 py-2">53 %</td></tr>
                  <tr><td className="px-4 py-2">Full 4.99 M pcs</td><td className="px-4 py-2">65.9 M</td><td className="px-4 py-2">25.9 M</td><td className="px-4 py-2">40.0 M</td><td className="px-4 py-2">61 %</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 17.4 Cash-flow implication */}
          <div className="space-y-2 mb-8">
            <h3 className="text-xl font-semibold text-blue-900">17.4 Cash-flow implication</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Every <strong>+1 000 pcs/day</strong> beyond 20 k adds <strong>~235 k EGP</strong> yearly EBITDA (vs. 188 k in old sensitivity).</li>
              <li>Machine pay-back at <strong>full capacity</strong>: 350 k machine ÷ 40 M monthly EBITDA ≈ <strong>1 week</strong>.</li>
              <li>Working-capital gap scales to <strong>33 M EGP</strong> at 4.99 M pcs – requires <strong>factoring line expansion</strong> to 25 M EGP (secured by receivables).</li>
            </ul>
          </div>

          {/* 17.5 Investor takeaway */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-blue-900">17.5 Investor takeaway</h3>
            <p className="text-gray-700">The accountant’s numbers <strong>validate</strong> our bootstrap economics and reveal a <strong>step-function upswing</strong>: once volume crosses 50 % utilisation, <strong>gross margin per piece jumps 23 %</strong> and <strong>absolute cash generation rises 14×</strong>. Include both tables in the plan to show <strong>downside-protected entry</strong> and <strong>explosive upside at scale</strong>.</p>
          </div>
        </section>

        {/* Section 18: Go-to-Market Calendar */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">18. Go-to-Market Calendar (Flavor Centric)</h2>
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

        {/* Section 19: Gamification & Promotion Platform – "POP & WIN" */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">19. Gamification & Promotion Platform – &quot;POP &amp; WIN&quot;</h2>

          {/* 19.1 Core Invention */}
          <div className="space-y-3 mb-8">
              <h3 className="text-xl font-semibold text-blue-900">19.1 Core Invention</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>NO unique QR, NO variable print, NO new sleeve artwork.</li>
              <li>One 6-character code laser-engraved on the wooden stick (inside sleeve = tamper-proof).</li>
              <li>Code format: 3 letters + 3 digits → 17.5 million combos.</li>
              <li>Sleeve adds: &quot;Peel &amp; Win – check your stick – weekly draw every Friday – icebreaker-win.com&quot;.</li>
            </ul>
          </div>

          {/* 19.2 Consumer Journey */}
          <div className="space-y-3 mb-8">
              <h3 className="text-xl font-semibold text-blue-900">19.2 Consumer Journey</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Buy → peel → read stick.</li>
              <li>One-tap &quot;Login with WhatsApp&quot; on icebreaker-win.com.</li>
              <li>
                Enter code → instant result:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>90 % → 5 % coupon for next box</li>
                  <li>9 % → 100 EGP cash credit</li>
                  <li>1 % → Golden ticket (grand draw for phones, TVs, holidays)</li>
                </ul>
              </li>
              <li>Cash prizes via Vodafone Cash / InstaPay within 24 h.</li>
            </ol>
          </div>

          {/* 19.3 Back-End Logic */}
          <div className="space-y-3 mb-8">
            <h3 className="text-xl font-semibold text-blue-900">19.3 Back-End Logic (Fair &amp; Simple)</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Real-time hash = SHA-256(code + weekly-secret-salt) mod 1,000.</li>
              <li>000–899 = lose, 900–989 = 100 EGP, 990–999 = Golden.</li>
              <li>No pre-generated winner list = zero leakage risk.</li>
            </ul>
            <details className="mt-3 bg-blue-50 border border-blue-100 rounded-lg p-4">
              <summary className="cursor-pointer font-semibold text-blue-900">How it works (technical)</summary>
              <div className="mt-3 space-y-3 text-sm text-gray-800">
                <p><strong>Deterministic draw:</strong> outcome = HMAC_SHA256(code, weeklySecretSalt) mod 1000. Same code → same result within a week.</p>
                <p><strong>Prize map:</strong> 000–899 = lose, 900–989 = 100&nbsp;EGP, 990–999 = Golden ticket.</p>
                <p><strong>Weekly salt rotation:</strong> new secret every Friday; last week’s salt can be published for public verification.</p>
                <p><strong>Single-use redemption:</strong> DB enforces one payout per (code, week). Later attempts see “already redeemed”.</p>
                <p><strong>Anti‑abuse:</strong> WhatsApp login, rate limiting/CAPTCHA, device/IP velocity checks, per-user caps.</p>
                <p><strong>Payouts:</strong> wins create payout jobs; Vodafone Cash / InstaPay webhooks confirm PAID status with retries.</p>
              </div>
            </details>
          </div>

          {/* 19.4 Monetising the Prizes */}
          <div className="space-y-3 mb-8">
            <h3 className="text-xl font-semibold text-blue-900">19.4 Monetising the Prizes (Negative-Cost Marketing)</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Phones / TVs – Samsung, Xiaomi, Carrefour: 20–25 % discount for sleeve impressions + un-boxing reels.</li>
              <li>Holidays – TravelStart voucher codes at -15 %.</li>
              <li>100 EGP micro-cash funded from 2 EGP/sleeve trade budget → net cost zero.</li>
              <li>Result: we <strong>earn</strong> 300–800 EGP per big-ticket item.</li>
            </ul>
          </div>

          {/* 19.5 Weekly Live Show */}
          <div className="space-y-3 mb-8">
            <h3 className="text-xl font-semibold text-blue-900">19.5 Weekly Live Show (Free Media)</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Friday 7 p.m. Facebook + Instagram + TikTok live draw.</li>
              <li>Viewers drop &quot;🥭&quot; emoji to enter parallel 50 EGP draw → boosts algorithm.</li>
              <li>Target: 3–5 k live viewers in 6 weeks; reels reach 20–30 k weekly.</li>
            </ul>
          </div>

          {/* 19.6 Data Asset */}
          <div className="space-y-2 mb-8">
            <h3 className="text-xl font-semibold text-blue-900">19.6 Data Asset</h3>
            <p className="text-gray-700">WhatsApp login captures: mobile number, governorate, prize preference.</p>
            <p className="text-gray-700">→ 200 k opted-in consumers in 12 months → sell sponsored pushes at 200 EGP CPM.</p>
          </div>

          {/* 19.7 Cost & P&L */}
          <div className="space-y-3 mb-8">
            <h3 className="text-xl font-semibold text-blue-900">19.7 Cost &amp; P&amp;L (per 400 k pcs month)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">Item</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">EGP</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-800">Stick laser engraving (one-off)</td>
                    <td className="px-4 py-2 text-sm text-gray-800">20 000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-800">Website / hosting / WhatsApp API</td>
                    <td className="px-4 py-2 text-sm text-gray-800">4 500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-800">Live-show data bundle</td>
                    <td className="px-4 py-2 text-sm text-gray-800">500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-800">100 EGP prizes (9 % win rate)</td>
                    <td className="px-4 py-2 text-sm text-gray-800">360 000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-2 text-sm font-semibold text-gray-900">Sponsor income</td>
                    <td className="px-4 py-2 text-sm font-semibold text-gray-900">–400 000</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-4 py-2 text-sm font-bold text-gray-900">Net marketing PROFIT</td>
                    <td className="px-4 py-2 text-sm font-bold text-gray-900">35 000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 19.8 Legal Compliance */}
          <div className="space-y-3 mb-8">
            <h3 className="text-xl font-semibold text-blue-900">19.8 Legal Compliance (Egypt)</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Obtain Ministry of Social Solidarity raffle permit (2 k EGP, 48 h online).</li>
              <li>Publish T&amp;Cs on site (age 18+, employees excluded, 30-day prize claim).</li>
              <li>&quot;No purchase necessary&quot; alternative: free sticks at tasting booths → same code pool.</li>
            </ul>
          </div>

          {/* 19.9 Roll-Out Road-Map */}
          <div className="space-y-3 mb-8">
            <h3 className="text-xl font-semibold text-blue-900">19.9 Roll-Out Road-Map</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">Week</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">Milestone</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-800">1</td>
                    <td className="px-4 py-2 text-sm text-gray-800">Engrave 50 k sticks, build PWA, shoot teaser reel.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-800">2</td>
                    <td className="px-4 py-2 text-sm text-gray-800">Submit permit, sign Samsung and Carrefour prize MoUs.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-800">3</td>
                    <td className="px-4 py-2 text-sm text-gray-800">Soft launch in 20 Gourmet branches – monitor redemption %.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-800">4</td>
                    <td className="px-4 py-2 text-sm text-gray-800">National launch + first live draw → PR to Masrawy and Youm7.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-800">6</td>
                    <td className="px-4 py-2 text-sm text-gray-800">Add &quot;golden holiday&quot; sponsored by TravelStart.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-800">8</td>
                    <td className="px-4 py-2 text-sm text-gray-800">Release flavour #2 (Lemon-Mint) with new stick colour = collectors angle.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 19.10 Why Ground-Breaking */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-blue-900">19.10 Why Ground-Breaking</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Uses existing stick real-estate – zero packaging change.</li>
              <li>Sponsors pay us to give their products away → negative-cost marketing.</li>
              <li>WhatsApp login = 3-second frictionless entry.</li>
              <li>Weekly content engine = free UGC + live show.</li>
              <li>17.5 M codes ready – scalable to any volume.</li>
              <li>Transferable to IBE 3 kg ice cubes next year.</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  )
}
