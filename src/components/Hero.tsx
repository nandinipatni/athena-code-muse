import { motion } from "framer-motion";
import { Sparkles, Code2, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm">Powered by Gemini AI</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Code with
            <span className="text-gradient"> Intelligence</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Your AI-powered code editor that understands context, suggests improvements, and helps you build faster.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button size="lg" className="gap-2 gradient-accent glow text-lg px-8">
              <Code2 className="h-5 w-5" />
              Start Coding
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
              <Brain className="h-5 w-5" />
              View Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: "AI Suggestions",
                desc: "Real-time code completion powered by Gemini",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Monaco editor with instant feedback",
              },
              {
                icon: Brain,
                title: "Context Aware",
                desc: "Understands your codebase and patterns",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-xl p-6 cursor-pointer"
              >
                <feature.icon className="h-8 w-8 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
