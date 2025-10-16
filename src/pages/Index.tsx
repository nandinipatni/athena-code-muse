import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CodeEditor from "@/components/CodeEditor";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CodeEditor />
      <Features />
    </div>
  );
};

export default Index;
