import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Lock,
  Database,
  MessageSquare,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Monaco Editor",
    description: "Professional code editing with syntax highlighting and IntelliSense",
  },
  {
    icon: Sparkles,
    title: "AI Suggestions",
    description: "Context-aware code completion powered by Gemini API",
  },
  {
    icon: Lock,
    title: "Secure Auth",
    description: "JWT-based authentication with encrypted password storage",
  },
  {
    icon: Database,
    title: "Project Management",
    description: "Save and manage multiple projects with version history",
  },
  {
    icon: MessageSquare,
    title: "Feedback System",
    description: "Rate and review your experience with detailed feedback",
  },
  {
    icon: Zap,
    title: "Real-time Sync",
    description: "WebSocket-powered live updates and collaboration",
  },
];

const Features = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Everything You Need to <span className="text-gradient">Code Smart</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A complete development environment with AI assistance, secure authentication, and powerful project management
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-xl p-8 cursor-pointer"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
