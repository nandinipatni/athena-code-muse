import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import athenaLogo from "@/assets/athena-logo.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <img src={athenaLogo} alt="Athena" className="h-10 w-10" />
            <div>
              <h1 className="text-2xl font-bold text-gradient">Athena</h1>
              <p className="text-xs text-muted-foreground">AI Code Editor</p>
            </div>
          </motion.div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="gap-2">
              <Code2 className="h-4 w-4" />
              Projects
            </Button>
            <Button className="gap-2 gradient-accent glow">
              <Sparkles className="h-4 w-4" />
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
