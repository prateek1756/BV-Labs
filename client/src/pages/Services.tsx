import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, Shield, Users, Lightbulb, CheckCircle, Star } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Our Services</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive solutions to support your educational technology needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Wrench className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">Installation Services</CardTitle>
                  </div>
                  <Badge variant="secondary" className="w-fit">Professional Setup</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Professional installation and setup of educational technology with minimal disruption to your operations</p>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      On-site installation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Network configuration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Staff training included
                    </li>
                  </ul>
                  <Button className="w-full">Schedule Installation</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">Maintenance Support</CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit">24/7 Available</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Ongoing maintenance and technical support to keep your equipment running smoothly</p>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Preventive maintenance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Remote diagnostics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Priority support
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-muted-foreground">99.9% uptime guarantee</span>
                  </div>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Lightbulb className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">Consultation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Expert advice on technology solutions tailored to your institution's specific needs</p>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Needs assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Technology roadmap
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Budget planning
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Book Consultation</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">Custom Solutions</CardTitle>
                  </div>
                  <Badge variant="secondary" className="w-fit">Tailored Packages</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Tailored technology packages designed specifically for your educational requirements</p>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Custom integrations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Scalable solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Ongoing support
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Request Quote</Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Successful Installations</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Support Available</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <p className="text-muted-foreground">Customer Satisfaction</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
                <p className="mb-6 opacity-90">Contact our experts to discuss your specific requirements and get a tailored solution.</p>
                <Button variant="secondary" size="lg">Contact Our Experts</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}