"use client"

import { useState } from "react"
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Search,
  BarChart3,
  Scale,
  TrendingUp,
  CheckCircle,
  Shield,
  Calculator,
  FileText,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

export default function AccountantDigitalCard() {
  const { toast } = useToast()
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
      duration: 2000,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white">
      {/* Header with elegant accounting theme */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center border border-blue-700/20">
                {i % 17 === 0 && <Calculator className="w-3 h-3" />}
                {i % 23 === 0 && <FileText className="w-3 h-3" />}
                {i % 19 === 0 && <BarChart3 className="w-3 h-3" />}
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-36 h-36 rounded-full bg-white/90 flex items-center justify-center shadow-xl border-4 border-white">
              <Calculator className="w-20 h-20 text-blue-700" />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold">Osama Siddiqui</h1>
              <h2 className="text-xl md:text-2xl font-medium text-blue-100 mt-2">External Auditor (ACCA)</h2>

              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                <Badge className="bg-white/20 hover:bg-white/30 text-white py-1.5 px-3">Financial Audits</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white py-1.5 px-3">Risk Assessment</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white py-1.5 px-3">Compliance</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white py-1.5 px-3">Process Optimization</Badge>
              </div>
            </div>
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 right-0 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
          ></path>
        </svg>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 -mt-6 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-0 overflow-hidden">
            <a href="https://wa.me/03456198029" target="_blank" rel="noopener noreferrer" className="block h-full">
              <CardContent className="p-4 flex items-center gap-3 h-full hover:bg-green-50 transition-colors duration-300">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500">WhatsApp</p>
                  <p className="font-medium">0345-6198029</p>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400" />
              </CardContent>
            </a>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-0 overflow-hidden">
            <a
              href="mailto:osamasiddiqui7809@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <CardContent className="p-4 flex items-center gap-3 h-full hover:bg-blue-50 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium truncate">osamasiddiqui7809@gmail.com</p>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400" />
              </CardContent>
            </a>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-0 overflow-hidden">
            <a
              href="https://www.linkedin.com/in/osama-siddiqui-8b552a296/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <CardContent className="p-4 flex items-center gap-3 h-full hover:bg-purple-50 transition-colors duration-300">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="font-medium">Connect with me</p>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400" />
              </CardContent>
            </a>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-0 overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 h-full">
              <div className="bg-orange-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-medium">Karachi, Sindh</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8 bg-slate-100 p-1 rounded-lg">
            <TabsTrigger
              value="about"
              className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
            >
              About Me
            </TabsTrigger>
            <TabsTrigger
              value="services"
              className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
            >
              Services
            </TabsTrigger>
            <TabsTrigger
              value="credentials"
              className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
            >
              Credentials
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-0">
            <Card className="shadow-lg bg-white border-0 rounded-xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  Turning Numbers into Trust, Compliance, and Growth
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    As an External Auditor, I don't just review financial statements—I help businesses stay compliant,
                    risk-free, and financially sound. With deep expertise in audit, risk assessment, and financial
                    compliance, I work with organizations to strengthen their internal controls, ensure regulatory
                    adherence, and optimize operations for maximum efficiency and cost savings.
                  </p>
                  <p>
                    With experience in manufacturing, retail, government, and real estate sectors, I provide clear,
                    unbiased, and transparent audit reports that foster trust, credibility, and long-term financial
                    health.
                  </p>
                </div>

                <div className="mt-10">
                  <h4 className="text-xl font-semibold text-blue-800 mb-6">Industry Experience</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="font-semibold text-blue-800">Manufacturing</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="font-semibold text-green-800">Retail</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="font-semibold text-purple-800">Government</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="font-semibold text-orange-800">Real Estate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="mt-0">
            <Card className="shadow-lg bg-white border-0 rounded-xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-8">Professional Services</h3>

                <div className="grid gap-6">
                  <div
                    className="border rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                    onClick={() => toggleSection("audit")}
                  >
                    <div className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-50 to-blue-100">
                      <div className="flex items-center gap-4">
                        <Search className="h-7 w-7 text-blue-700" />
                        <h4 className="font-semibold text-blue-800 text-lg">Comprehensive Financial Audits</h4>
                      </div>
                      {activeSection === "audit" ? (
                        <ChevronUp className="h-5 w-5 text-blue-700" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-blue-700" />
                      )}
                    </div>
                    {activeSection === "audit" && (
                      <div className="p-5 bg-white">
                        <p className="text-slate-700 leading-relaxed">
                          Thorough examination of financial statements to ensure they are free from material
                          misstatements and comply with International Financial Reporting Standards (IFRS) and Generally
                          Accepted Accounting Principles (GAAP).
                        </p>
                        <ul className="list-disc list-inside mt-4 text-slate-700 space-y-2">
                          <li>Balance sheet verification</li>
                          <li>Income statement analysis</li>
                          <li>Cash flow validation</li>
                          <li>Financial disclosure review</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div
                    className="border rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                    onClick={() => toggleSection("risk")}
                  >
                    <div className="flex items-center justify-between p-5 bg-gradient-to-r from-green-50 to-green-100">
                      <div className="flex items-center gap-4">
                        <Scale className="h-7 w-7 text-green-700" />
                        <h4 className="font-semibold text-green-800 text-lg">Risk & Compliance Advisory</h4>
                      </div>
                      {activeSection === "risk" ? (
                        <ChevronUp className="h-5 w-5 text-green-700" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-green-700" />
                      )}
                    </div>
                    {activeSection === "risk" && (
                      <div className="p-5 bg-white">
                        <p className="text-slate-700 leading-relaxed">
                          Identifying financial loopholes and compliance issues before they become problems.
                          Comprehensive risk assessment and mitigation strategies to protect your business.
                        </p>
                        <ul className="list-disc list-inside mt-4 text-slate-700 space-y-2">
                          <li>Regulatory compliance assessment</li>
                          <li>Financial risk identification</li>
                          <li>Control environment evaluation</li>
                          <li>Compliance program development</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div
                    className="border rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                    onClick={() => toggleSection("optimization")}
                  >
                    <div className="flex items-center justify-between p-5 bg-gradient-to-r from-purple-50 to-purple-100">
                      <div className="flex items-center gap-4">
                        <TrendingUp className="h-7 w-7 text-purple-700" />
                        <h4 className="font-semibold text-purple-800 text-lg">Process & Cost Optimization</h4>
                      </div>
                      {activeSection === "optimization" ? (
                        <ChevronUp className="h-5 w-5 text-purple-700" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-purple-700" />
                      )}
                    </div>
                    {activeSection === "optimization" && (
                      <div className="p-5 bg-white">
                        <p className="text-slate-700 leading-relaxed">
                          Helping businesses reduce costs and boost profits through streamlined financial processes and
                          operational efficiency improvements.
                        </p>
                        <ul className="list-disc list-inside mt-4 text-slate-700 space-y-2">
                          <li>Financial process reengineering</li>
                          <li>Cost structure analysis</li>
                          <li>Efficiency improvement recommendations</li>
                          <li>Resource allocation optimization</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div
                    className="border rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                    onClick={() => toggleSection("fraud")}
                  >
                    <div className="flex items-center justify-between p-5 bg-gradient-to-r from-red-50 to-red-100">
                      <div className="flex items-center gap-4">
                        <Shield className="h-7 w-7 text-red-700" />
                        <h4 className="font-semibold text-red-800 text-lg">Fraud Detection & Internal Controls</h4>
                      </div>
                      {activeSection === "fraud" ? (
                        <ChevronUp className="h-5 w-5 text-red-700" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-red-700" />
                      )}
                    </div>
                    {activeSection === "fraud" && (
                      <div className="p-5 bg-white">
                        <p className="text-slate-700 leading-relaxed">
                          Securing your financial operations through robust fraud detection mechanisms and strengthened
                          internal controls.
                        </p>
                        <ul className="list-disc list-inside mt-4 text-slate-700 space-y-2">
                          <li>Fraud risk assessment</li>
                          <li>Internal control evaluation</li>
                          <li>Control gap identification</li>
                          <li>Remediation recommendations</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div
                    className="border rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                    onClick={() => toggleSection("reports")}
                  >
                    <div className="flex items-center justify-between p-5 bg-gradient-to-r from-amber-50 to-amber-100">
                      <div className="flex items-center gap-4">
                        <BarChart3 className="h-7 w-7 text-amber-700" />
                        <h4 className="font-semibold text-amber-800 text-lg">Independent Audit Reports</h4>
                      </div>
                      {activeSection === "reports" ? (
                        <ChevronUp className="h-5 w-5 text-amber-700" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-amber-700" />
                      )}
                    </div>
                    {activeSection === "reports" && (
                      <div className="p-5 bg-white">
                        <p className="text-slate-700 leading-relaxed">
                          Providing stakeholders with confidence in your numbers through transparent, unbiased, and
                          comprehensive audit reports.
                        </p>
                        <ul className="list-disc list-inside mt-4 text-slate-700 space-y-2">
                          <li>Independent financial statement audits</li>
                          <li>Compliance attestation</li>
                          <li>Special purpose audits</li>
                          <li>Management letter with recommendations</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="credentials" className="mt-0">
            <Card className="shadow-lg bg-white border-0 rounded-xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-8">Why Work with Me?</h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white p-2 rounded-full shadow-sm">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-green-800 text-lg">15+ Successful Audits</h4>
                    </div>
                    <p className="text-green-800 leading-relaxed">
                      Trusted by high-profile clients across multiple industries to deliver accurate and insightful
                      audits.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white p-2 rounded-full shadow-sm">
                        <CheckCircle className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-blue-800 text-lg">Proven Cost Savings</h4>
                    </div>
                    <p className="text-blue-800 leading-relaxed">
                      Helped clients cut expenses by 15% through identification of inefficiencies and process
                      improvements.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white p-2 rounded-full shadow-sm">
                        <CheckCircle className="h-6 w-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-purple-800 text-lg">Enhanced Financial Accuracy</h4>
                    </div>
                    <p className="text-purple-800 leading-relaxed">
                      Reduced reporting errors by 20% through implementation of robust controls and review procedures.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white p-2 rounded-full shadow-sm">
                        <CheckCircle className="h-6 w-6 text-amber-600" />
                      </div>
                      <h4 className="font-semibold text-amber-800 text-lg">Detail-Oriented & Ethical</h4>
                    </div>
                    <p className="text-amber-800 leading-relaxed">
                      No shortcuts, just reliable numbers. Committed to the highest standards of professional ethics and
                      integrity.
                    </p>
                  </div>
                </div>

                <div className="mt-10 bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold text-slate-800 mb-6">Professional Certifications</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-white text-slate-800 py-2 px-4 shadow-sm">
                      ACCA (Association of Chartered Certified Accountants)
                    </Badge>
                    <Badge className="bg-white text-slate-800 py-2 px-4 shadow-sm">
                      Certified Internal Controls Auditor
                    </Badge>
                    <Badge className="bg-white text-slate-800 py-2 px-4 shadow-sm">Financial Risk Manager</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Let's Build Financial Trust Together</h3>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-blue-100">
            Need an audit or financial assessment? Let's discuss how I can help strengthen your financial controls and
            improve your business performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/03456198029" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-blue-800 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-6 py-6 h-auto">
                <Phone className="mr-2 h-5 w-5" /> Contact via WhatsApp
              </Button>
            </a>
            <a href="mailto:osamasiddiqui7809@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-6 py-6 h-auto">
                <Mail className="mr-2 h-5 w-5" /> Send Email
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://wa.me/03456198029"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a
              href="mailto:osamasiddiqui7809@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/osama-siddiqui-8b552a296/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Osama Siddiqui. All rights reserved.</p>
          <p className="text-sm mt-2">External Auditor & Financial Consultant</p>
        </div>
      </footer>
    </div>
  )
}

