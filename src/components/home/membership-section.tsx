import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Zap, ArrowRight } from "lucide-react";

const membershipPlans = [
  {
    name: "Bronze",
    price: "IDR 150K",
    period: "per month",
    description: "Perfect for casual players",
    icon: Star,
    color: "from-orange-500 to-orange-600",
    features: [
      "Basic player profile",
      "Tournament notifications",
      "Community access",
      "Basic statistics"
    ],
    popular: false
  },
  {
    name: "Silver",
    price: "IDR 300K",
    period: "per month",
    description: "For serious competitors",
    icon: Crown,
    color: "from-gray-400 to-gray-500",
    features: [
      "Everything in Bronze",
      "Advanced statistics",
      "Tournament priority",
      "Coaching resources",
      "Ranking predictions"
    ],
    popular: true
  },
  {
    name: "Gold",
    price: "IDR 500K",
    period: "per month",
    description: "For professional players",
    icon: Zap,
    color: "from-yellow-500 to-yellow-600",
    features: [
      "Everything in Silver",
      "Personal coach access",
      "Tournament sponsorship",
      "Exclusive events",
      "Performance analytics",
      "Priority support"
    ],
    popular: false
  }
];

export function MembershipSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-3">
            <Star className="h-4 w-4 mr-2" />
            Membership Plans
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Choose Your Level
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Join the Indonesian padel community with membership plans designed for every level of player
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
          {membershipPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={plan.name} 
                className={`relative bg-white border-gray-200 hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105 shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-3">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${plan.color} mb-3 mx-auto`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-1">
                    {plan.name}
                  </CardTitle>
                  <div className="text-sm text-gray-600 mb-3">
                    {plan.description}
                  </div>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full text-sm ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300'
                    }`}
                  >
                    Choose {plan.name}
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-4xl mx-auto shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Why Join PBPI Membership?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1.5 text-base">Exclusive Access</h4>
                <p className="text-gray-600 text-xs">
                  Get early access to tournaments and exclusive events
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1.5 text-base">Performance Tracking</h4>
                <p className="text-gray-600 text-xs">
                  Advanced analytics to track your improvement
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Crown className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1.5 text-base">Community</h4>
                <p className="text-gray-600 text-xs">
                  Connect with players and coaches nationwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}