import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Monitor, Globe, CheckCircle, Star, Clock, Trophy, BookOpen } from "lucide-react";

export default function Training() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-background py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="animate-fade-in-up">
              <Badge variant="outline" className="mb-4 border-purple-500 text-purple-600">
                <Trophy className="h-3 w-3 mr-1" />
                Certified Training Programs
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Training Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Empower your educators and staff with comprehensive technology training programs designed for the modern educational landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-all duration-300">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Training Programs */}
        <div className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Training Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive training solutions tailored for different roles and skill levels in your institution
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-t-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <GraduationCap className="h-8 w-8 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-green-800">Teacher Training</CardTitle>
                          <p className="text-sm text-green-600">For Educators</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        Most Popular
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Professional development for educators on integrating technology effectively into classroom instruction and student engagement.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">Interactive workshop sessions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">Hands-on practice with real tools</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">Official certification upon completion</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">Ongoing support and resources</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6 p-3 bg-green-50 rounded-lg">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <div>
                        <p className="text-sm font-medium">4.9/5 rating</p>
                        <p className="text-xs text-muted-foreground">from 2,500+ teachers</p>
                      </div>
                      <div className="ml-auto">
                        <Clock className="h-4 w-4 text-muted-foreground inline mr-1" />
                        <span className="text-xs text-muted-foreground">16 hours</span>
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Enroll Teachers
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-t-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Users className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-blue-800">Administrator Training</CardTitle>
                          <p className="text-sm text-blue-600">For IT & Admin Staff</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Comprehensive management and administration training for IT staff and school administrators to optimize system performance.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">System administration & setup</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">User management & permissions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">Security protocols & best practices</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">Troubleshooting & maintenance</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6 p-3 bg-blue-50 rounded-lg">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">Advanced Level</p>
                        <p className="text-xs text-muted-foreground">Technical expertise required</p>
                      </div>
                      <div className="ml-auto">
                        <Clock className="h-4 w-4 text-muted-foreground inline mr-1" />
                        <span className="text-xs text-muted-foreground">24 hours</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-t-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Monitor className="h-8 w-8 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-purple-800">Student Workshops</CardTitle>
                        <p className="text-sm text-purple-600">For Students</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Engaging workshops designed to help students develop digital literacy and maximize their learning potential with technology.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                        <span className="text-sm">Age-appropriate content delivery</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                        <span className="text-sm">Interactive learning sessions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                        <span className="text-sm">Digital citizenship training</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                      Schedule Workshop
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-br from-orange-50 to-red-50 rounded-t-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Globe className="h-8 w-8 text-orange-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-orange-800">Online Courses</CardTitle>
                          <p className="text-sm text-orange-600">Self-Paced Learning</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-orange-200 text-orange-600">
                        24/7 Access
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Flexible, self-paced online training modules available anytime, anywhere, perfect for busy schedules.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <span className="text-sm">50+ comprehensive modules</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <span className="text-sm">Progress tracking & analytics</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <span className="text-sm">Mobile & tablet compatible</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full border-orange-200 text-orange-600 hover:bg-orange-50">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-gradient-to-r from-slate-50 to-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Training Impact</h2>
              <p className="text-muted-foreground">Real results from our comprehensive training programs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                  <p className="text-muted-foreground font-medium">Educators Trained</p>
                  <p className="text-xs text-muted-foreground mt-2">Across 500+ institutions</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                  <p className="text-muted-foreground font-medium">Satisfaction Rate</p>
                  <p className="text-xs text-muted-foreground mt-2">Based on post-training surveys</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                  <p className="text-muted-foreground font-medium">Implementation Success</p>
                  <p className="text-xs text-muted-foreground mt-2">Technology adoption rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Empower Your Team?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of educators who have transformed their teaching with our training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                Get Training Plan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}