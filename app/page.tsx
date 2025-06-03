import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Leaf, Users, Star, Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-green-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Nourished Advice</h1>
                <p className="text-sm text-gray-600">Holistic Nutrition</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">
                Services
              </Link>
              <Link href="#approach" className="text-gray-700 hover:text-orange-600 transition-colors">
                My Approach
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600">
                Book Consultation
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Nourish Your
                  <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                    {" "}
                    Soul
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover wholesome nutrition that honors your unique journey. Together, we'll create a sustainable
                  path to wellness that nourishes your body, mind, and spirit.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-lg px-8 py-3"
                >
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-300 text-orange-700 hover:bg-orange-50 text-lg px-8 py-3"
                >
                  Learn More
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Lives Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">5 Years</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-sm text-gray-600">Personalized</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-green-200 rounded-3xl transform rotate-6"></div>
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Diverse group of happy people enjoying healthy meals"
                width={500}
                height={600}
                className="relative rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Professional dietitian in consultation"
                width={400}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-400 to-green-500 rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold">RD, CDN</div>
                <div className="text-sm opacity-90">Registered Dietitian</div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-gray-800">Hi, I'm Luz</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  As a registered dietitian, I believe that true wellness comes from nourishing not just your body, but
                  your entire being. My approach celebrates the beautiful diversity of our relationships with food and
                  honors each person's unique cultural background and personal journey.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm passionate about helping people from all walks of life discover joy in eating well, breaking free
                  from diet culture, and creating sustainable habits that support their whole-person wellness.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Holistic Approach</div>
                    <div className="text-sm text-gray-600">Mind, body & soul</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Inclusive Care</div>
                    <div className="text-sm text-gray-600">All backgrounds welcome</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-4xl font-bold text-gray-800">Services That Nourish</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized nutrition services designed to meet you exactly where you are on your wellness journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Individual Counseling</h4>
                <p className="text-gray-600">
                  One-on-one sessions tailored to your unique needs, goals, and cultural preferences
                </p>
                <div className="text-2xl font-bold text-orange-600">$150</div>
                <div className="text-sm text-gray-500">60-minute session</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Group Programs</h4>
                <p className="text-gray-600">
                  Small group sessions fostering community and shared learning experiences
                </p>
                <div className="text-2xl font-bold text-green-600">$75</div>
                <div className="text-sm text-gray-500">per session</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Meal Planning</h4>
                <p className="text-gray-600">
                  Customized meal plans that honor your lifestyle, preferences, and nutritional needs
                </p>
                <div className="text-2xl font-bold text-purple-600">$100</div>
                <div className="text-sm text-gray-500">weekly plan</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-4xl font-bold text-gray-800">My Wholesome Approach</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nutrition that celebrates diversity, honors intuition, and nurtures lasting wellness
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-10 h-10 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Soul-Centered</h4>
              <p className="text-gray-600">
                Honoring your emotional and spiritual relationship with food and nourishment
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Naturally Wholesome</h4>
              <p className="text-gray-600">
                Focusing on whole, nourishing foods that support your body's natural wisdom
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Culturally Inclusive</h4>
              <p className="text-gray-600">
                Celebrating diverse food traditions and creating plans that honor your heritage
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-10 h-10 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Joyfully Sustainable</h4>
              <p className="text-gray-600">Building lasting habits that bring joy and fit seamlessly into your life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-4xl font-bold text-gray-800">Stories of Transformation</h3>
            <p className="text-xl text-gray-600">Real people, real results, real joy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Luz helped me reconnect with my cultural foods in a healthy way. I finally feel at peace with
                  eating and my body."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Maria G.</div>
                    <div className="text-sm text-gray-600">Working Mom</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The holistic approach changed everything. It's not just about food - it's about nourishing my whole
                  self."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">James L.</div>
                    <div className="text-sm text-gray-600">Teacher</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Luz creates such a safe, welcoming space. I never felt judged, only supported and understood."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Aisha K.</div>
                    <div className="text-sm text-gray-600">Student</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-gray-800">Let's Start Your Journey</h3>
                <p className="text-xl text-gray-600">
                  Ready to discover a more nourishing relationship with food and your body? I'd love to hear from you.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">(555) 123-4567</div>
                    <div className="text-gray-600">Call or text anytime</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">hello@nourishedadvice.com</div>
                    <div className="text-gray-600">I'll respond within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Downtown Wellness Center</div>
                    <div className="text-gray-600">123 Harmony Street, Suite 200</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Flexible Hours</div>
                    <div className="text-gray-600">Evening & weekend appointments available</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-orange-50 to-green-50 border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <Input placeholder="Your full name" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <Input placeholder="(555) 123-4567" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">How can I support you?</label>
                    <Textarea
                      placeholder="Tell me a bit about your goals and what you're hoping to achieve..."
                      className="bg-white border-gray-200 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-green-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Nourished Advice</h4>
                  <p className="text-sm text-gray-400">Holistic Nutrition</p>
                </div>
              </div>
              <p className="text-gray-400">
                Nourishing bodies, minds, and souls through compassionate, inclusive nutrition care.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="font-semibold">Services</h5>
              <div className="space-y-2 text-gray-400">
                <div>Individual Counseling</div>
                <div>Group Programs</div>
                <div>Meal Planning</div>
                <div>Workshops</div>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-semibold">Resources</h5>
              <div className="space-y-2 text-gray-400">
                <div>Blog</div>
                <div>Recipes</div>
                <div>Nutrition Tips</div>
                <div>FAQ</div>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-semibold">Connect</h5>
              <div className="space-y-2 text-gray-400">
                <div>Newsletter</div>
                <div>Instagram</div>
                <div>Facebook</div>
                <div>LinkedIn</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Nourished Advice. All rights reserved. | Licensed Registered Dietitian
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
