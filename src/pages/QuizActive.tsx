import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getQuestionsByFilters, QuizQuestion } from "@/data/quizQuestions";
import { CheckCircle2, XCircle, Trophy } from "lucide-react";

const QuizActive = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const subject = (searchParams.get("subject") || "mixed") as "biology" | "chemistry" | "physics" | "mixed";
  const difficulty = (searchParams.get("difficulty") || "easy") as "easy" | "medium" | "hard";

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const filteredQuestions = getQuestionsByFilters(subject, difficulty).slice(0, 10);
    setQuestions(filteredQuestions);
  }, [subject, difficulty]);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 text-center">
          <p>Loading questions...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    navigate("/quiz");
  };

  if (isComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-2xl mx-auto text-center">
            <Trophy className="h-24 w-24 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-4xl font-bold mb-4">{t("quiz.completed")}</h1>
            <div className="bg-card border border-border rounded-2xl p-8 mb-6">
              <div className="text-6xl font-bold text-primary mb-4">{percentage}%</div>
              <p className="text-xl text-muted-foreground mb-2">{t("quiz.yourScore")}</p>
              <p className="text-lg">
                {score} / {questions.length} {t("quiz.correct")}
              </p>
            </div>
            <Button onClick={handleRestart} size="lg" className="bg-primary text-primary-foreground">
              {t("quiz.tryAgain")}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium">
                {t("quiz.score")}: {score}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-6">
            <h2 className="text-2xl font-bold mb-6">{currentQuestion.question}</h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showCorrect = showResult && isCorrect;
                const showIncorrect = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                      showCorrect
                        ? "border-biology bg-biology/10"
                        : showIncorrect
                        ? "border-destructive bg-destructive/10"
                        : isSelected
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary hover:bg-card"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex-1">{option}</span>
                      {showCorrect && <CheckCircle2 className="h-6 w-6 text-biology" />}
                      {showIncorrect && <XCircle className="h-6 w-6 text-destructive" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showResult && (
              <div className="mt-6 p-4 bg-muted/50 rounded-lg animate-fade-in">
                <p className="text-sm text-muted-foreground">
                  <strong>Explanation:</strong> {currentQuestion.explanation}
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            {!showResult ? (
              <Button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                size="lg"
                className="bg-primary text-primary-foreground"
              >
                {t("quiz.submitAnswer")}
              </Button>
            ) : (
              <Button onClick={handleNext} size="lg" className="bg-primary text-primary-foreground">
                {currentIndex < questions.length - 1 ? t("quiz.nextQuestion") : t("quiz.completed")}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizActive;
