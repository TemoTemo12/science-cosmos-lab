import Navigation from "@/components/Navigation";
import { Sparkles, Trophy, Target, Brain } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const Quiz = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("easy");
  const [selectedSubject, setSelectedSubject] = useState<string>("mixed");

  const difficulties = [
    {
      level: "easy",
      label: t("quiz.easy"),
      icon: Target,
      description: "Perfect for beginners",
      color: "biology",
      questions: 10,
    },
    {
      level: "medium",
      label: t("quiz.medium"),
      icon: Brain,
      description: "Test your knowledge",
      color: "chemistry",
      questions: 10,
    },
    {
      level: "hard",
      label: t("quiz.hard"),
      icon: Trophy,
      description: "Challenge yourself",
      color: "physics",
      questions: 10,
    },
  ];

  const subjects = [
    { name: "biology", label: t("nav.biology"), color: "biology" },
    { name: "chemistry", label: t("nav.chemistry"), color: "chemistry" },
    { name: "physics", label: t("nav.physics"), color: "physics" },
    { name: "mixed", label: t("quiz.mixed"), color: "primary" },
  ];

  const handleStartQuiz = () => {
    navigate(`/quiz/active?subject=${selectedSubject}&difficulty=${selectedDifficulty}`);
  };

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
          <h1 className="text-5xl font-bold mb-4">{t("quiz.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("quiz.subtitle")}
          </p>
        </div>

        {/* Difficulty Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">{t("quiz.chooseChallenge")}</h2>
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
                  <h3 className="text-xl font-bold mb-2">{diff.label}</h3>
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
          <h2 className="text-2xl font-bold mb-6 text-center">{t("quiz.selectSubject")}</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {subjects.map((subject) => (
              <button
                key={subject.name}
                onClick={() => setSelectedSubject(subject.name)}
                className={`bg-card border rounded-lg p-6 text-center transition-all duration-300 hover:scale-105 ${
                  selectedSubject === subject.name
                    ? `border-${subject.color} shadow-glow-${subject.color}`
                    : "border-border hover:border-primary"
                }`}
              >
                <p className="font-bold text-lg">{subject.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Display */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Trophy className="h-10 w-10 text-physics mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">0</p>
            <p className="text-muted-foreground">{t("quiz.quizzesCompleted")}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Target className="h-10 w-10 text-biology mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">0%</p>
            <p className="text-muted-foreground">{t("quiz.averageScore")}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Brain className="h-10 w-10 text-chemistry mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">0</p>
            <p className="text-muted-foreground">{t("quiz.achievements")}</p>
          </div>
        </div>

        {/* Start Quiz Button */}
        <div className="text-center">
          <Button
            onClick={handleStartQuiz}
            size="lg"
            className="bg-primary text-primary-foreground px-8 py-4 text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-glow-physics"
          >
            {t("quiz.startQuiz")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
