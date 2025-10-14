"use client";

import { Users, Building2, Trophy, TrendingUp } from "lucide-react";

const statsCards = [
  { 
    label: "Registered Players", 
    value: "2,847", 
    subtext: "+2% this month",
    icon: Users,
    color: "from-blue-500 to-blue-600"
  },
  { 
    label: "Registered Clubs", 
    value: "89", 
    subtext: "Across 12 provinces",
    icon: Building2,
    color: "from-indigo-500 to-indigo-600"
  },
  { 
    label: "Tournaments Played", 
    value: "156", 
    subtext: "2023 Season",
    icon: Trophy,
    color: "from-cyan-500 to-cyan-600"
  },
  { 
    label: "Total Points Played", 
    value: "4.8M", 
    subtext: "All time record",
    icon: TrendingUp,
    color: "from-sky-500 to-sky-600"
  },
];

const categoryData = [
  { name: "Bronze", value: 1456, icon: "🥉" },
  { name: "Silver", value: 892, icon: "🥈" },
  { name: "Gold", value: 423, icon: "🥇" },
  { name: "Platinum", value: 76, icon: "👑" },
];

export function PadelByNumbers() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Indonesia Padel by Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time statistics showcasing the growth and vitality of Indonesia's padel community
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statsCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300`}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-xs opacity-90">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Distribution */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Category Distribution</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categoryData.map((item, index) => (
                <div key={item.name} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center hover:shadow-md transition-all hover:-translate-y-1 duration-300 border border-blue-200">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                  <div className="text-sm font-medium text-gray-700">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
