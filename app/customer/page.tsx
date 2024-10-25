"use client"

import { Card } from "@/components/ui/card"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Sun, Battery, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CustomerDashboard() {
  return (
    <div className="p-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Solar System</h1>
          <p className="text-muted-foreground">Monitor your solar system and payments</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatsCard
            title="System Status"
            value="Active"
            description="Premium Package"
            trend="up"
            percentage="98% uptime"
          />
          <StatsCard
            title="Next Payment"
            value="$150"
            description="Due in 15 days"
            trend="up"
            percentage="On track"
          />
          <StatsCard
            title="Power Generated"
            value="1,234 kWh"
            description="This month"
            trend="up"
            percentage="+10.2%"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-lg font-medium mb-4">System Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Sun className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Solar Panels</p>
                  <p className="text-sm text-muted-foreground">4 x 400W Panels</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Battery className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Battery Storage</p>
                  <p className="text-sm text-muted-foreground">5kWh Capacity</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Installation Date</p>
                  <p className="text-sm text-muted-foreground">January 15, 2024</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <Button className="w-full">Make a Payment</Button>
              <Button variant="outline" className="w-full">Download Statement</Button>
              <Button variant="outline" className="w-full">Contact Support</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}