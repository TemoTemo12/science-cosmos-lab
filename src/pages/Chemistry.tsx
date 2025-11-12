import Navigation from "@/components/Navigation";
import { Atom, Beaker, FlaskConical, TestTube, Droplet } from "lucide-react";

const Chemistry = () => {
  const topics = [
    {
      title: "Periodic Table",
      icon: Atom,
      description: "Master the elements",
      features: ["Element Properties", "Groups & Periods", "Electron Config"],
    },
    {
      title: "Reactions",
      icon: FlaskConical,
      description: "Chemical transformations",
      features: ["Reaction Types", "Equations", "Energy Changes"],
    },
    {
      title: "Compounds",
      icon: TestTube,
      description: "Molecules and bonding",
      features: ["Ionic Bonds", "Covalent Bonds", "Structures"],
    },
    {
      title: "Acids & Bases",
      icon: Droplet,
      description: "pH and neutralization",
      features: ["pH Scale", "Indicators", "Reactions"],
    },
    {
      title: "States of Matter",
      icon: Beaker,
      description: "Solid, liquid, gas",
      features: ["Phase Changes", "Properties", "Behavior"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center gap-3 mb-6 relative">
            <Atom className="h-16 w-16 text-chemistry animate-float" />
            <div className="absolute h-16 w-16 blur-2xl bg-chemistry/30 animate-glow" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-chemistry bg-clip-text text-transparent">
            Chemistry Zone
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock the secrets of matter, from atomic structures to complex chemical reactions
          </p>
        </div>

        {/* Interactive Periodic Table */}
        <div className="mb-16 animate-fade-in">
          <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden group hover:border-chemistry transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-chemistry opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Atom className="h-6 w-6 text-chemistry" />
                Interactive Periodic Table
              </h2>
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Atom className="h-24 w-24 text-chemistry mx-auto mb-4 animate-float" />
                  <p className="text-muted-foreground">Clickable periodic table coming soon</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Click elements to see properties, history, and uses
                  </p>
                </div>
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
                className="bg-card border border-border rounded-xl p-6 hover:border-chemistry hover:shadow-glow-chemistry transition-all duration-300 group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="h-10 w-10 text-chemistry mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                <p className="text-muted-foreground mb-4">{topic.description}</p>
                <ul className="space-y-2">
                  {topic.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-chemistry" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Mix & Discover Feature */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 hover:border-chemistry hover:shadow-glow-chemistry transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Beaker className="h-6 w-6 text-chemistry" />
            Mix & Discover - Virtual Lab
          </h2>
          <p className="text-muted-foreground mb-6">
            Experiment safely with our virtual chemistry lab. Mix compounds, observe reactions, and learn without danger.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <Beaker className="h-12 w-12 text-chemistry mx-auto mb-2" />
              <p className="text-sm font-medium">Mix Chemicals</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <FlaskConical className="h-12 w-12 text-chemistry mx-auto mb-2" />
              <p className="text-sm font-medium">Observe Changes</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <TestTube className="h-12 w-12 text-chemistry mx-auto mb-2" />
              <p className="text-sm font-medium">Learn Results</p>
            </div>
          </div>
          <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <FlaskConical className="h-24 w-24 text-chemistry mx-auto mb-4 animate-float" />
              <p className="text-muted-foreground">Virtual lab simulator coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chemistry;
