import { Button } from "@/registry/aliimam/ui/button"

export function DashboardPreview() {
  return (
    <section className="relative pb-16">
      <div className="mx-auto max-w-[1060px] px-4">
        {/* Dashboard Interface Mockup */}
        <div className="relative overflow-hidden rounded-lg border border-[#e0dedb] bg-white shadow-lg">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between border-b border-[#e0dedb] p-4">
            <div className="flex items-center gap-3">
              <div className="font-semibold text-[#37322f]">Brillance</div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-[#605a57]">Account</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#37322f]"></div>
            </div>
          </div>

          {/* Sidebar and Main Content */}
          <div className="flex">
            {/* Sidebar */}
            <div className="w-48 border-r border-[#e0dedb] bg-[#fbfaf9] p-4">
              <nav className="space-y-2">
                <div className="mb-3 text-xs font-medium tracking-wide text-[#605a57] uppercase">
                  Navigation
                </div>
                {[
                  "Home",
                  "Customers",
                  "Billing",
                  "Schedules",
                  "Invoices",
                  "Products",
                ].map((item) => (
                  <div
                    key={item}
                    className="cursor-pointer py-1 text-sm text-[#37322f] hover:text-[#37322f]/80"
                  >
                    {item}
                  </div>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#37322f]">
                  Schedules
                </h2>
                <Button className="bg-[#37322f] text-sm text-white hover:bg-[#37322f]/90">
                  Create schedule
                </Button>
              </div>

              {/* Table Mockup */}
              <div className="overflow-hidden rounded-lg border border-[#e0dedb] bg-white">
                <div className="grid grid-cols-6 gap-4 border-b border-[#e0dedb] bg-[#fbfaf9] p-4 text-sm font-medium text-[#605a57]">
                  <div>Customer</div>
                  <div>Status</div>
                  <div>Products</div>
                  <div>Total</div>
                  <div>Start date</div>
                  <div>End date</div>
                </div>

                {/* Table Rows */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-6 gap-4 border-b border-[#e0dedb] p-4 text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#37322f]"></div>
                      <span>Hypernise</span>
                    </div>
                    <div>
                      <span
                        className={`rounded px-2 py-1 text-xs ${
                          i % 3 === 0
                            ? "bg-green-100 text-green-700"
                            : i % 3 === 1
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {i % 3 === 0
                          ? "Complete"
                          : i % 3 === 1
                            ? "Active"
                            : "Draft"}
                      </span>
                    </div>
                    <div className="text-[#605a57]">Platform access fee</div>
                    <div className="font-medium">$3,862.32</div>
                    <div className="text-[#605a57]">1 Aug 2024</div>
                    <div className="text-[#605a57]">10 Jun 2024</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
