import Navigation from "@/components/Navigation";
import { Network, Dna, Atom, Orbit } from "lucide-react";

const Connections = () => {
  const connections = [
    {
      title: "Biochemistry",
      sciences: ["Biology", "Chemistry"],
      icon: Dna,
      color: "biology",
      description: "The chemistry of living organisms",
      examples: [
        "DNA structure and replication",
        "Protein synthesis",
        "Enzyme catalysis",
        "Metabolic pathways",
      ],
    },
    {
      title: "Biophysics",
      sciences: ["Biology", "Physics"],
      icon: Orbit,
      color: "physics",
      description: "Physical principles in biological systems",
      examples: [
        "Nerve impulses and electricity",
        "Muscle mechanics",
        "Photosynthesis and light",
        "Molecular motion",
      ],
    },
    {
      title: "Physical Chemistry",
      sciences: ["Chemistry", "Physics"],
      icon: Atom,
      color: "chemistry",
      description: "Physics applied to chemical systems",
      examples: [
        "Thermodynamics",
        "Quantum chemistry",
        "Kinetic theory",
        "Spectroscopy",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center gap-3 mb-6 relative">
            <Network className="h-16 w-16 text-primary animate-float" />
            <div className="absolute h-16 w-16 blur-2xl bg-primary/30 animate-glow" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Science Connections
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how Biology, Chemistry, and Physics interconnect to explain our world
          </p>
        </div>

        {/* Venn Diagram Concept */}
        <div className="mb-16 bg-card border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">The Science Trinity</h2>
          <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Network className="h-24 w-24 text-primary mx-auto mb-4 animate-float" />
              <p className="text-muted-foreground">Interactive Venn diagram coming soon</p>
              <p className="text-sm text-muted-foreground mt-2">
                Explore the overlapping domains of science
              </p>
            </div>
          </div>
        </div>

        {/* Connection Cards */}
        <div className="space-y-8">
          {connections.map((connection, index) => {
            const Icon = connection.icon;
            return (
              <div
                key={connection.title}
                className={`bg-card border border-border rounded-2xl p-8 hover:border-${connection.color} hover:shadow-glow-${connection.color} transition-all duration-300 animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <Icon className={`h-16 w-16 text-${connection.color} flex-shrink-0`} />
                    <div className={`absolute inset-0 blur-xl bg-${connection.color}/20`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{connection.title}</h3>
                    <div className="flex gap-2 mb-4">
                      {connection.sciences.map((science) => (
                        <span
                          key={science}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                        >
                          {science}
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">{connection.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {connection.examples.map((example) => (
                        <div
                          key={example}
                          className="flex items-start gap-2 bg-muted/50 rounded-lg p-3"
                        >
                          <div className={`h-2 w-2 rounded-full bg-${connection.color} mt-2 flex-shrink-0`} />
                          <span className="text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real World Applications */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">🌍 Real World Applications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-bold text-biology">Medicine</h3>
              <p className="text-sm text-muted-foreground">
                Combines biology (anatomy), chemistry (drugs), and physics (imaging) to heal
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-chemistry">Environmental Science</h3>
              <p className="text-sm text-muted-foreground">
                Uses all three to understand ecosystems, pollution, and climate
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-physics">Space Exploration</h3>
              <p className="text-sm text-muted-foreground">
                Applies physics (rockets), chemistry (fuel), and biology (life support)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
