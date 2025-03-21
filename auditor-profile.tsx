import { Mail, Phone, Linkedin, MapPin, Search, BarChart3, Scale, TrendingUp, CheckCircle, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function AuditorProfile() {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white">
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-slate-50 border-b pb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <CardTitle className="text-2xl font-bold text-slate-800">Osama Siddiqui</CardTitle>
              <CardDescription className="text-slate-600 font-medium mt-1">
                Trusted External Auditor (ACCA)
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs">
                <MapPin className="h-3 w-3" /> Karachi, Sindh
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs">
                <Mail className="h-3 w-3" /> osamasiddiqui7809@gmail.com
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs">
                <Phone className="h-3 w-3" /> 0345-6198029
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs">
                <Linkedin className="h-3 w-3" /> LinkedIn Profile
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Professional Summary */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Turning Numbers into Trust, Compliance, and Growth
              </h3>
              <p className="text-slate-600">
                As an External Auditor, I don't just review financial statements—I help businesses stay compliant,
                risk-free, and financially sound. With deep expertise in audit, risk assessment, and financial
                compliance, I work with organizations to strengthen their internal controls, ensure regulatory
                adherence, and optimize operations for maximum efficiency and cost savings.
              </p>
              <p className="text-slate-600 mt-2">
                With experience in manufacturing, retail, government, and real estate sectors, I provide clear,
                unbiased, and transparent audit reports that foster trust, credibility, and long-term financial health.
              </p>
            </div>

            <Separator />

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">What I Offer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <Search className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800">Comprehensive Financial Audits</h4>
                    <p className="text-sm text-slate-600">Ensuring IFRS & GAAP compliance</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Scale className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800">Risk & Compliance Advisory</h4>
                    <p className="text-sm text-slate-600">
                      Identifying financial loopholes before they become problems
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800">Process & Cost Optimization</h4>
                    <p className="text-sm text-slate-600">Helping businesses reduce costs and boost profits</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800">Fraud Detection & Internal Controls</h4>
                    <p className="text-sm text-slate-600">Securing your financial operations</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800">Independent Audit Reports</h4>
                    <p className="text-sm text-slate-600">Giving stakeholders confidence in your numbers</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Achievements */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Why Work with Me?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex gap-2 items-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-slate-700">15+ Successful Audits – Trusted by high-profile clients</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-slate-700">Proven Cost Savings – Helped clients cut expenses by 15%</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-slate-700">Enhanced Financial Accuracy – Reduced reporting errors by 20%</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-slate-700">
                    Detail-Oriented & Ethical – No shortcuts, just reliable numbers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="bg-slate-50 border-t mt-6 flex flex-col items-center p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Let's Build Financial Trust Together</h3>
          <p className="text-slate-600 text-center mb-4">
            Need an audit or financial assessment? Let's discuss how I can help!
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">Contact Me</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

