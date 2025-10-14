import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Rankings", href: "/rankings" },
  { name: "Tournaments", href: "/tournaments" },
  { name: "Players", href: "/players" },
  { name: "Clubs", href: "/clubs" },
  { name: "Membership", href: "/membership" },
  { name: "News", href: "/news" },
  { name: "About", href: "/about" },
];

const resources = [
  { name: "Guidelines", href: "/guidelines" },
  { name: "Player FAQs", href: "/faq/players" },
  { name: "Club FAQs", href: "/faq/clubs" },
  { name: "Tournament Rules", href: "/rules/tournaments" },
  { name: "Ranking Formula", href: "/docs/ranking-rules" },
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Terms & Conditions", href: "/legal/terms" },
  { name: "Payment Options", href: "/payment" },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "YouTube", href: "#", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Contact Info</h3>
            <div className="space-y-4 text-white">
              <div className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-200">
                <div className="p-2.5 rounded-lg bg-blue-600/80 group-hover:bg-blue-500 transition-colors">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <a href="mailto:pbpadelindonesia@gmail.com" className="text-sm text-blue-100 hover:text-white transition-colors">
                    pbpadelindonesia@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-200">
                <div className="p-2.5 rounded-lg bg-green-600/80 group-hover:bg-green-500 transition-colors">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <a href="tel:081299296029" className="text-sm text-blue-100 hover:text-white transition-colors">
                    081299296029
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Newsletter</h3>
            <p className="text-blue-100 mb-6 leading-relaxed text-sm">
              Stay updated with the latest padel news, rankings, and tournament updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-blue-700/50 rounded-lg bg-blue-950/50 text-white placeholder:text-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />
              <Button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-blue-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
              <p className="text-blue-100 text-sm font-medium">
                © 2025 PBPI. All Rights Reserved
              </p>
              <div className="flex space-x-6">
                <Link
                  href="/legal/privacy"
                  className="text-blue-100 hover:text-white transition-colors text-sm font-medium"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/legal/terms"
                  className="text-blue-100 hover:text-white transition-colors text-sm font-medium"
                >
                  Terms
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3 bg-blue-800/30 px-4 py-2 rounded-full">
                <span className="text-blue-100 text-sm font-medium">Language:</span>
                <Button variant="ghost" size="sm" className="text-white hover:text-blue-300 font-semibold h-auto p-0">
                  EN / ID
                </Button>
              </div>
              <div className="flex space-x-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="icon"
                      className="text-white hover:text-blue-300 hover:bg-blue-700/40 rounded-full transition-all hover:scale-110"
                      asChild
                    >
                      <Link href={social.href}>
                        <Icon className="h-5 w-5" />
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}