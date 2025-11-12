import Navigation from "@/components/Navigation";
import { Sparkles, Trophy, Target, Brain } from "lucide-react";
import { useState } from "react";

const Quiz = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const difficulties = [
    {
      level: "Easy",
      icon: Target,
      description: "Perfect for beginners",
      color: "biology",
      questions: 10,
    },
    {
      level: "Medium",
      icon: Brain,
      description: "Test your knowledge",
      color: "chemistry",
      questions: 15,
    },
    {
      level: "Hard",
      icon: Trophy,
      description: "Challenge yourself",
      color: "physics",
      questions: 20,
    },
  ];

  const subjects = [
    { name: "Biology", color: "biology" },
    { name: "Chemistry", color: "chemistry" },
    { name: "Physics", color: "physics" },
    { name: "Mixed", color: "primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center gap-3 mb-6 relative">
            <Sparkles className="h-16 w-16 text-primary animate-float" />
            <div className="absolute h-16 w-16 blur-2xl bg-primary/30 animate-glow" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Quiz Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge across Biology, Chemistry, and Physics with adaptive quizzes
          </p>
        </div>

        {/* Difficulty Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Challenge</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {difficulties.map((diff) => {
              const Icon = diff.icon;
              const isSelected = selectedDifficulty === diff.level;
              return (
                <button
                  key={diff.level}
                  onClick={() => setSelectedDifficulty(diff.level)}
                  className={`bg-card border rounded-xl p-6 text-left transition-all duration-300 hover:scale-105 ${
                    isSelected
                      ? `border-${diff.color} shadow-glow-${diff.color}`
                      : "border-border hover:border-primary"
                  }`}
                >
                  <Icon className={`h-12 w-12 text-${diff.color} mb-4`} />
                  <h3 className="text-xl font-bold mb-2">{diff.level}</h3>
                  <p className="text-muted-foreground mb-4">{diff.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className={`h-2 w-2 rounded-full bg-${diff.color}`} />
                    <span>{diff.questions} questions</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Subject Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Select Subject</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {subjects.map((subject) => (
              <button
                key={subject.name}
                className={`bg-card border border-border rounded-lg p-6 text-center hover:border-${subject.color} hover:shadow-glow-${subject.color} transition-all duration-300 hover:scale-105`}
              >
                <p className="font-bold text-lg">{subject.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Display */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Trophy className="h-10 w-10 text-physics mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">0</p>
            <p className="text-muted-foreground">Quizzes Completed</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Target className="h-10 w-10 text-biology mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">0%</p>
            <p className="text-muted-foreground">Average Score</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Brain className="h-10 w-10 text-chemistry mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">0</p>
            <p className="text-muted-foreground">Achievements</p>
          </div>
        </div>

        {/* Start Quiz Button */}
        <div className="text-center">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-glow-physics">
            Start Quiz
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            {selectedDifficulty
              ? `Ready to start ${selectedDifficulty.toLowerCase()} quiz!`
              : "Select difficulty and subject to begin"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
