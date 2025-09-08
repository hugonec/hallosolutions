import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto p-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/HalloLogo.png" alt="Hallo Solutions Logo" width={160} height={60} />
          </div>
          <nav className="mt-4 sm:mt-0 space-x-4 text-slate-700 font-medium">
            <a href="#brands" className="hover:text-orange-600">For Brands</a>
            <a href="#3pls" className="hover:text-orange-600">For 3PLs</a>
            <a href="#about" className="hover:text-orange-600">About</a>
            <a href="#contact" className="hover:text-orange-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8 space-y-24">
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-orange-600">Find Your Ideal 3PL Partner in Europe</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hallo Solutions connects growing brands with top-tier 3PLs — fast, free, and tailored to your needs.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg">Start as a Brand</Button>
            <Button variant="outline" className="px-6 py-3 text-lg">Register as a 3PL</Button>
          </div>
        </motion.section>

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-orange-600 mb-10 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">1. Submit Your Profile</h3>
                <p className="text-slate-600 mt-2">Brands and 3PLs fill out a quick form to describe their needs or capabilities.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">2. Get Matched</h3>
                <p className="text-slate-600 mt-2">We review submissions and match brands with compatible 3PL partners.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">3. Connect</h3>
                <p className="text-slate-600 mt-2">We make the introduction. Brands choose who they want to talk to.</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          id="brands"
          className="space-y-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Brand Intake Form – Key Questions</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>What kind of products do you ship? (Apparel, beauty, food, fragile, etc.)</li>
              <li>How many orders do you fulfill per month?</li>
              <li>Where do you ship? (Countries or regions)</li>
              <li>What channels do you sell on? (Shopify, Amazon, Retail, etc.)</li>
              <li>Do you require custom packaging, returns handling, cold storage, etc.?</li>
              <li>Preferred warehouse location(s) in Europe?</li>
              <li>When do you want to switch/start with a 3PL?</li>
              <li>Do you need software integrations? (ERP, WMS, OMS)</li>
              <li>Any other critical needs we should know?</li>
              <li>Your name, brand name, and contact email</li>
            </ul>
          </div>

          <div id="3pls">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">3PL Provider Registration – Key Questions</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Where are your warehouse(s) located?</li>
              <li>What industries or product types do you specialize in?</li>
              <li>What is your minimum and maximum monthly volume?</li>
              <li>Which services do you offer? (Pick/pack, returns, kitting, freight, etc.)</li>
              <li>Do you integrate with any platforms? (Shopify, NetSuite, etc.)</li>
              <li>Do you support B2B and/or B2C?</li>
              <li>Are you certified for anything? (ISO, Organic, Hazmat, etc.)</li>
              <li>What languages do you support?</li>
              <li>Company name, contact name, and email</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="bg-orange-50 p-6 rounded shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Why Hallo Solutions?</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>We specialize in European logistics and fulfillment.</li>
            <li>Vendor-neutral and results-driven: we only succeed if your match succeeds.</li>
            <li>Quick, curated matches tailored to your business stage and vertical.</li>
            <li>Optional advisory support if you want help with onboarding or RFPs.</li>
          </ul>
        </motion.section>

        <motion.section
          id="contact"
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Let's Talk</h2>
          <p className="text-slate-700 mb-6">Not sure where to start? Contact us directly or book a free discovery call.</p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">Contact Hallo Solutions</Button>
        </motion.section>
      </main>

      <footer className="bg-white border-t text-center text-sm text-slate-500 p-4 flex flex-col items-center space-y-2">
        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/company/hallo-solutions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-orange-600">
            <Linkedin size={16} /> <span>LinkedIn</span>
          </a>
          <span>·</span>
          <a href="mailto:hello@hallosolutions.com" className="flex items-center gap-1 hover:text-orange-600">
            <Mail size={16} /> <span>Email Us</span>
          </a>
        </div>
        <div>© {new Date().getFullYear()} Hallo Solutions. All rights reserved.</div>
      </footer>
    </div>
  );
}
