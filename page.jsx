
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Sparkles, Camera, Users, TrendingUp, Search, BarChart2 } from "lucide-react";

export default function TheDreamFog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white p-6 space-y-12">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-center py-20"
      >
        <h1 className="text-5xl font-bold mb-4">TheDreamFog</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Unleashing creativity with cutting-edge marketing strategies that drive results.
        </p>
        <Button className="mt-8 text-lg px-6 py-4">Let’s Talk</Button>
        <div className="mt-12">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Creative marketing visual"
            className="rounded-2xl mx-auto shadow-lg"
          />
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }} 
        className="grid md:grid-cols-3 gap-6"
      >
        {[
          { icon: Sparkles, title: "Branding", desc: "Crafting iconic brand identities that resonate." },
          { icon: Camera, title: "Content Creation", desc: "Videos, graphics, and copy that engage." },
          { icon: Users, title: "Social Media", desc: "Strategic presence that turns followers into fans." },
          { icon: TrendingUp, title: "Paid Ads", desc: "Laser-focused campaigns to boost ROI." },
          { icon: Search, title: "SEO", desc: "Rank higher, reach wider, grow faster." },
          { icon: BarChart2, title: "Analytics", desc: "Data-driven decisions for smarter marketing." },
        ].map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <Icon className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }} 
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-300">
          At TheDreamFog, we believe marketing is both art and science. We're here to help brands stand out,
          tell their story, and dominate their niche with innovative campaigns and authentic engagement.
        </p>
        <div className="mt-6">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Team collaboration"
            className="rounded-xl mx-auto shadow-md"
          />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }} 
        className="bg-gray-900 p-8 rounded-2xl max-w-xl mx-auto text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-6">Have a project or idea? Let’s make it happen.</p>
        <div className="space-y-4">
          <Input placeholder="Your Name" className="bg-gray-800 border-gray-700" />
          <Input placeholder="Your Email" className="bg-gray-800 border-gray-700" />
          <Input placeholder="Your Message" className="bg-gray-800 border-gray-700" />
          <Button className="w-full text-lg">Send Message</Button>
        </div>
      </motion.section>

      <footer className="text-center text-sm text-gray-500 pt-10">
        © {new Date().getFullYear()} TheDreamFog. All rights reserved.
      </footer>
    </div>
  );
}
