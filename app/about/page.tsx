import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, BookOpen, Brain, BarChart3, Globe, MessageSquare, CheckCircle } from 'lucide-react';
import Header from "@/components/about/header";
import Footer from "@/components/about/footer";
import TestimonialCard from "@/components/about/testimonial-card";
import FeatureCard from "@/components/about/feature-card";
import HowItWorksStep from "@/components/about/how-it-works-step";
import ContactForm from "@/components/about/contact-form";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-white/10 text-white">
              Trusted by Students
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Your smart Notebook.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg">
              Personalized learning that adapts to your needs—accessible anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Chat with OpenBook Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              Powered by Advanced AI
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/placeholder.svg?height=500&width=600" 
                alt="Student using OpenBook platform" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gray-800 rounded-full opacity-50 blur-3xl"></div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-900 to-transparent opacity-70"></div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Traditional Learning vs OpenBook
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Students worldwide face common challenges. OpenBook provides the solution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="p-6 border-red-100 bg-white/50">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Traditional Learning Challenges</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 text-red-500 mt-1">✖</div>
                  <p>Limited access to quality academic support</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-red-500 mt-1">✖</div>
                  <p>One-size-fits-all approach that doesn't adapt to individual needs</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-red-500 mt-1">✖</div>
                  <p>Delayed feedback on practice and assessments</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-red-500 mt-1">✖</div>
                  <p>Time-bound learning restricted to specific hours</p>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 border-green-100 bg-black text-white">
              <h3 className="text-xl font-bold mb-4">OpenBook Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-400 mt-1" />
                  <p>Instant, AI-powered academic support available 24/7</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-400 mt-1" />
                  <p>Personalized learning paths that adapt to your progress</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-400 mt-1" />
                  <p>Immediate feedback on practice questions and assessments</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-400 mt-1" />
                  <p>Learn anytime, anywhere on any device</p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Academic Success
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              OpenBook combines cutting-edge AI with proven learning methodologies to help you excel.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<MessageSquare className="h-10 w-10" />}
              title="Real-time Chat Support"
              description="Get instant answers to your academic questions across all subjects, 24/7."
            />
            <FeatureCard 
              icon={<Brain className="h-10 w-10" />}
              title="Adaptive Learning"
              description="Personalized learning paths that adjust based on your strengths and areas for improvement."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-10 w-10" />}
              title="Immediate Feedback"
              description="Practice with instant feedback to accelerate your learning and retention."
            />
            <FeatureCard 
              icon={<Globe className="h-10 w-10" />}
              title="Cross-platform Access"
              description="Learn seamlessly across all your devices, whether at home or on the go."
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Students Are Saying
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Students from over 30 countries trust OpenBook for academic success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="OpenBook made tackling complex concepts simple and engaging! I've improved my grades significantly."
              name="Priya S."
              location="India"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard 
              quote="The personalized learning approach helped me understand difficult topics at my own pace. Highly recommend!"
              name="Michael T."
              location="United States"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard 
              quote="Having 24/7 access to academic support has been a game-changer for my studies."
              name="Sophia L."
              location="Singapore"
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 font-medium">4.9/5 average rating from over 10,000 students</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How OpenBook Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started is simple. Follow these three easy steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <HowItWorksStep 
              number="1"
              title="Sign Up"
              description="Create your account in seconds to access the full platform."
              image="/placeholder.svg?height=200&width=300"
            />
            <HowItWorksStep 
              number="2"
              title="Chat with OpenBook"
              description="Ask questions and get instant academic support across subjects."
              image="/placeholder.svg?height=200&width=300"
            />
            <HowItWorksStep 
              number="3"
              title="Track Progress"
              description="Monitor your learning journey and improve with personalized insights."
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Thousands of Students Worldwide—Start Learning Smarter Today!
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Experience the future of learning with OpenBook's AI-powered platform. Get instant academic support, personalized learning paths, and track your progress—all in one place.
            </p>
            
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
