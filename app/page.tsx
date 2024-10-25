import { Metadata } from "next"
import {
  CircleDollarSign,
  Users,
  Package,
  UserCheck,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { StatsCard } from "@/components/dashboard/stats-card"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { RecentPayments } from "@/components/dashboard/recent-payments"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Solar Payment System Dashboard",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden w-64 bg-card p-6 shadow-lg lg:block">
        <div className="flex items-center gap-2 mb-8">
          <CircleDollarSign className="h-6 w-6" />
          <span className="text-lg font-bold">SolarPay Admin</span>
        </div>
        <nav className="space-y-2">
          <a className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-accent-foreground">
            <Package className="h-4 w-4" />
            Dashboard
          </a>
          <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
            <Users className="h-4 w-4" />
            Customers
          </a>
          <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
            <UserCheck className="h-4 w-4" />
            Sales Agents
          </a>
          <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
            <BarChart3 className="h-4 w-4" />
            Reports
          </a>
          <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
            <Settings className="h-4 w-4" />
            Settings
          </a>
        </nav>
        <div className="mt-auto pt-4 border-t">
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Overview of your solar payment system</p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Revenue"
              value="$45,231.89"
              description="Monthly revenue"
              trend="up"
              percentage="+20.1%"
            />
            <StatsCard
              title="Active Customers"
              value="2,350"
              description="Total customers"
              trend="up"
              percentage="+15.2%"
            />
            <StatsCard
              title="Payment Collection"
              value="89%"
              description="Success rate"
              trend="down"
              percentage="-3.2%"
            />
            <StatsCard
              title="Sales Agents"
              value="24"
              description="Active agents"
              trend="up"
              percentage="+4.0%"
            />
          </div>

          {/* Charts Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <RevenueChart />
            <RecentPayments />
          </div>
        </div>
      </div>
    </div>
  )
}