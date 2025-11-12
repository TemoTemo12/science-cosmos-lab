import Navigation from "@/components/Navigation";
import { Dna, Microscope, Leaf, Heart, Users } from "lucide-react";
import Scene3D from "@/components/3d/Scene3D";
import DNAHelix from "@/components/3d/DNAHelix";
import { useTranslation } from "react-i18next";

const Biology = () => {
  const { t } = useTranslation();
  
  const topics = [
    {
      title: "Cells",
      icon: Microscope,
      description: "Explore the building blocks of life",
      features: ["Cell Structure", "Organelles", "Cell Division"],
    },
    {
      title: "Genetics",
      icon: Dna,
      description: "Unravel the code of heredity",
      features: ["DNA & RNA", "Inheritance", "Gene Expression"],
    },
    {
      title: "Evolution",
      icon: Users,
      description: "Trace the history of life",
      features: ["Natural Selection", "Adaptation", "Speciation"],
    },
    {
      title: "Human Body",
      icon: Heart,
      description: "Understand body systems",
      features: ["Organs", "Systems", "Physiology"],
    },
    {
      title: "Ecology",
      icon: Leaf,
      description: "Study organisms in their environment",
      features: ["Ecosystems", "Food Webs", "Conservation"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Dna className="h-16 w-16 text-biology animate-float" />
            <div className="absolute h-16 w-16 blur-2xl bg-biology/30 animate-glow" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-biology bg-clip-text text-transparent">
            {t("biology.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("biology.subtitle")}
          </p>
        </div>

        {/* Interactive DNA Viewer */}
        <div className="mb-16 animate-fade-in">
          <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden group hover:border-biology transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-biology opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Dna className="h-6 w-6 text-biology" />
                {t("biology.dnaViewer")}
              </h2>
              <p className="text-muted-foreground mb-6">{t("biology.dnaDescription")}</p>
              <div className="h-96 rounded-lg overflow-hidden">
                <Scene3D>
                  <DNAHelix />
                </Scene3D>
              </div>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-biology hover:shadow-glow-biology transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="h-10 w-10 text-biology mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                <p className="text-muted-foreground mb-4">{topic.description}</p>
                <ul className="space-y-2">
                  {topic.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-biology" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Learn by Dissection Feature */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 hover:border-biology hover:shadow-glow-biology transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Microscope className="h-6 w-6 text-biology" />
            {t("biology.dissection")}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t("biology.dissectionDescription")}
          </p>
          <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Microscope className="h-24 w-24 text-biology mx-auto mb-4 animate-float" />
              <p className="text-muted-foreground">Virtual dissection lab coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biology;
