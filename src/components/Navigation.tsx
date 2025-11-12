import { Link, useLocation } from "react-router-dom";
import { Atom, Dna, Orbit, Sparkles, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { path: "/", label: t("nav.home"), icon: Home },
    { path: "/biology", label: t("nav.biology"), icon: Dna, color: "biology" },
    { path: "/chemistry", label: t("nav.chemistry"), icon: Atom, color: "chemistry" },
    { path: "/physics", label: t("nav.physics"), icon: Orbit, color: "physics" },
    { path: "/quiz", label: t("nav.quiz"), icon: Sparkles, color: "primary" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Atom className="h-8 w-8 text-primary animate-float" />
              <div className="absolute inset-0 blur-xl bg-primary/30 animate-glow" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-biology to-chemistry bg-clip-text text-transparent">
              Science Nexus
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            
            <div className="flex gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
                      "hover:bg-card hover:shadow-lg",
                      isActive && "bg-card shadow-lg",
                      item.color === "biology" && isActive && "text-biology shadow-glow-biology",
                      item.color === "chemistry" && isActive && "text-chemistry shadow-glow-chemistry",
                      item.color === "physics" && isActive && "text-physics shadow-glow-physics",
                      item.color === "primary" && isActive && "text-primary shadow-glow-physics",
                      !isActive && "text-muted-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium hidden md:inline">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
