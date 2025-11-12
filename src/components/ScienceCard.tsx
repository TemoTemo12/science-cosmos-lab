import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ScienceCardProps {
  title: string;
  description: string;
  topics: string[];
  icon: LucideIcon;
  path: string;
  colorClass: "biology" | "chemistry" | "physics";
  gradient: string;
}

const ScienceCard = ({
  title,
  description,
  topics,
  icon: Icon,
  path,
  colorClass,
  gradient,
}: ScienceCardProps) => {
  return (
    <Link to={path}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl p-8 transition-all duration-500",
          "bg-card border border-border hover:border-transparent",
          "hover:scale-105 hover:shadow-2xl",
          colorClass === "biology" && "hover:shadow-glow-biology",
          colorClass === "chemistry" && "hover:shadow-glow-chemistry",
          colorClass === "physics" && "hover:shadow-glow-physics"
        )}
      >
        {/* Gradient overlay on hover */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
            gradient
          )}
        />

        {/* Icon */}
        <div className="relative mb-6">
          <Icon
            className={cn(
              "h-16 w-16 transition-all duration-500 group-hover:scale-110",
              colorClass === "biology" && "text-biology",
              colorClass === "chemistry" && "text-chemistry",
              colorClass === "physics" && "text-physics"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500",
              colorClass === "biology" && "bg-biology",
              colorClass === "chemistry" && "bg-chemistry",
              colorClass === "physics" && "bg-physics"
            )}
          />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300",
                "bg-muted text-muted-foreground group-hover:text-foreground",
                colorClass === "biology" && "group-hover:bg-biology/20 group-hover:text-biology",
                colorClass === "chemistry" && "group-hover:bg-chemistry/20 group-hover:text-chemistry",
                colorClass === "physics" && "group-hover:bg-physics/20 group-hover:text-physics"
              )}
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Arrow indicator */}
        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
          Explore Zone
          <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
        </div>
      </div>
    </Link>
  );
};

export default ScienceCard;
