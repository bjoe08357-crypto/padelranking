"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarChart3, Users, Info } from "lucide-react";
import { useState } from "react";

const clubFeatures = [
  {
    icon: BarChart3,
    title: "Tournament Results",
    description: "Track and manage your club's tournament performance"
  },
  {
    icon: Users,
    title: "Club Members",
    description: "Manage member profiles and track their progress"
  },
  {
    icon: Info,
    title: "Club Information",
    description: "Update club details, courts, and contact information"
  }
];

export function ClubPortalTeaser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <Users className="h-4 w-4 mr-2" />
            For Clubs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Club Management Portal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage your club, tournaments, and members with our comprehensive portal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Club Dashboard Features */}
          <div>
            <Card className="h-full border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600 text-2xl">Club Dashboard Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {clubFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-lg">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Login Form */}
          <div>
            <Card className="h-full border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Club Portal Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="club@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" className="text-gray-700">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Login to Dashboard
                  </Button>
                  
                  <div className="text-center">
                    <Button variant="link" className="text-sm text-blue-600">
                      Forgot password?
                    </Button>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">
                    Don't have a club?
                  </p>
                  <Button variant="outline" className="w-full border-gray-300">
                    Register here
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
