import { useState } from "react";
import Editor from "@monaco-editor/react";
import { motion } from "framer-motion";
import { Sparkles, Play, Save, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CodeEditor = () => {
  const [code, setCode] = useState('// Welcome to Athena!\n// Start coding and get AI suggestions\n\nfunction helloWorld() {\n  console.log("Hello, Athena!");\n}\n\nhelloWorld();');
  const [language, setLanguage] = useState("javascript");
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Code Saved",
      description: "Your project has been saved successfully.",
    });
  };

  const handleRun = () => {
    toast({
      title: "Running Code",
      description: "Executing your code...",
    });
  };

  const handleAISuggest = () => {
    toast({
      title: "AI Analyzing",
      description: "Gemini is reviewing your code...",
    });
  };

  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl overflow-hidden"
      >
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileCode className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">main.js</h2>
            <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
              {language}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleAISuggest}
              className="gap-2"
            >
              <Sparkles className="h-4 w-4" />
              AI Suggest
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleSave}
              className="gap-2"
            >
              <Save className="h-4 w-4" />
              Save
            </Button>
            <Button
              size="sm"
              className="gap-2 gradient-accent"
              onClick={handleRun}
            >
              <Play className="h-4 w-4" />
              Run
            </Button>
          </div>
        </div>

        <div className="h-[600px]">
          <Editor
            height="100%"
            defaultLanguage={language}
            value={code}
            onChange={(value) => setCode(value || "")}
            theme="vs-dark"
            options={{
              minimap: { enabled: true },
              fontSize: 14,
              fontFamily: "JetBrains Mono, monospace",
              lineNumbers: "on",
              roundedSelection: true,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              padding: { top: 16, bottom: 16 },
            }}
          />
        </div>

        <div className="p-4 border-t border-border bg-secondary/30">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span>AI ready to assist • Press Ctrl+Space for suggestions</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CodeEditor;
