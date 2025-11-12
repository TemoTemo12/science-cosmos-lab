import Navigation from "@/components/Navigation";
import { Orbit, Zap, Waves, Rocket, Sun } from "lucide-react";

const Physics = () => {
  const topics = [
    {
      title: "Forces & Motion",
      icon: Rocket,
      description: "Newton's laws in action",
      features: ["Forces", "Velocity", "Acceleration"],
    },
    {
      title: "Energy",
      icon: Zap,
      description: "Power and work",
      features: ["Kinetic", "Potential", "Conservation"],
    },
    {
      title: "Light & Waves",
      icon: Waves,
      description: "Electromagnetic spectrum",
      features: ["Reflection", "Refraction", "Diffraction"],
    },
    {
      title: "Space & Gravity",
      icon: Orbit,
      description: "Celestial mechanics",
      features: ["Gravity", "Orbits", "Black Holes"],
    },
    {
      title: "Quantum Physics",
      icon: Sun,
      description: "Subatomic world",
      features: ["Particles", "Wave-Particle", "Uncertainty"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center gap-3 mb-6 relative">
            <Orbit className="h-16 w-16 text-physics animate-float" />
            <div className="absolute h-16 w-16 blur-2xl bg-physics/30 animate-glow" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-physics bg-clip-text text-transparent">
            Physics Zone
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the fundamental laws that govern our universe, from quantum mechanics to cosmic phenomena
          </p>
        </div>

        {/* Interactive Simulator */}
        <div className="mb-16 animate-fade-in">
          <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden group hover:border-physics transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-physics opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Rocket className="h-6 w-6 text-physics" />
                Try It Yourself - Physics Simulator
              </h2>
              <p className="text-muted-foreground mb-6">
                Adjust variables and see real-time effects on motion, energy, and forces
              </p>
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Orbit className="h-24 w-24 text-physics mx-auto mb-4 animate-float" />
                  <p className="text-muted-foreground">Interactive physics engine coming soon</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Experiment with gravity, velocity, and forces
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
                className="bg-card border border-border rounded-xl p-6 hover:border-physics hover:shadow-glow-physics transition-all duration-300 group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="h-10 w-10 text-physics mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                <p className="text-muted-foreground mb-4">{topic.description}</p>
                <ul className="space-y-2">
                  {topic.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-physics" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Force Calculator */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 hover:border-physics hover:shadow-glow-physics transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="h-6 w-6 text-physics" />
            Force & Motion Calculator
          </h2>
          <p className="text-muted-foreground mb-6">
            Calculate forces, acceleration, velocity, and more with our interactive physics calculator
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <label className="text-sm font-medium mb-2 block">Mass (kg)</label>
                <input
                  type="number"
                  className="w-full bg-background border border-border rounded px-3 py-2"
                  placeholder="Enter mass..."
                />
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <label className="text-sm font-medium mb-2 block">Force (N)</label>
                <input
                  type="number"
                  className="w-full bg-background border border-border rounded px-3 py-2"
                  placeholder="Enter force..."
                />
              </div>
            </div>
            <div className="flex items-center justify-center bg-muted/50 rounded-lg">
              <div className="text-center">
                <Zap className="h-16 w-16 text-physics mx-auto mb-2" />
                <p className="text-2xl font-bold text-physics mb-1">a = F/m</p>
                <p className="text-sm text-muted-foreground">Acceleration = Force / Mass</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Physics;
