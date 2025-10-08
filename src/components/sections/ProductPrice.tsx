import { Section } from '@/components/ui/Section'

export function ProductPrice() {
  return (
    <Section title="2. Product & Price">
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
    </Section>
  )
}
