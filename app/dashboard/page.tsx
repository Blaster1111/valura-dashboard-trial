"use client"
import Sidebar from '../../components/dashboard/Sidebar'
import CalendarWithNotification from '../../components/dashboard/CalendarWithNotification'
import { PortfolioWidget } from '../../components/dashboard/PortfolioWidget'
import { Watchlist } from '../../components/dashboard/Watchlist'
import { NewsWidget } from '../../components/dashboard/NewsWidget'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function DashboardPage() {
  return (
<div className="flex flex-col lg:flex-row min-h-screen bg-[url('/dashboard-bg.png')] bg-cover bg-no-repeat bg-center">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-8 overflow-x-hidden">
        {/* Top header */}
        <section className="max-w-3xl mb-8">
          <h1
            className="font-normal"
            style={{
              fontFamily: 'Open Sans Hebrew, sans-serif',
              fontWeight: 400,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#00111B',
            }}
          >
            Welcome to your modern wealth platform, Priyesh!
          </h1>
          <p className="mt-1 text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
            Explore all that Arta has to offer, and start building your digital family office.
          </p>
          <Button
            className="mt-3 rounded-full px-4 py-2 inline-flex items-center gap-2 text-[#00111B]"
            style={{ backgroundColor: "#FFFFFC" }}
            size="sm"
          >
            Explore <ArrowRight className="w-4 h-4" />
          </Button>
        </section>

        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Calendar */}
          <div className="lg:col-span-3 flex flex-col h-full">
            <div className="flex-1 flex flex-col justify-stretch">
              <CalendarWithNotification />
            </div>
          </div>

          {/* Center + Right: Portfolio, Watchlist and News */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {/* Portfolio and Watchlist stacked vertically */}
              <div className="flex flex-col gap-6 h-full justify-between">
                <div className="flex-1 flex flex-col justify-stretch">
                  <PortfolioWidget />
                </div>
                <div className="flex-1 flex flex-col justify-stretch">
                  <Watchlist />
                </div>
              </div>
              {/* News Widget */}
              <div className="flex flex-col h-full justify-stretch">
                <NewsWidget />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}