import Navigation from "@/components/Navigation";
import ScienceCard from "@/components/ScienceCard";
import { Dna, Atom, Orbit, Network } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-science.jpg";

const Index = () => {
  const sciences = [
    {
      title: "Biology Zone",
      description: "Explore the fascinating world of living organisms, from microscopic cells to complex ecosystems.",
      topics: ["Cells", "Genetics", "Evolution", "Ecology", "Human Body"],
      icon: Dna,
      path: "/biology",
      colorClass: "biology" as const,
      gradient: "bg-gradient-biology",
    },
    {
      title: "Chemistry Zone",
      description: "Unlock the secrets of matter and discover how atoms combine to create everything around us.",
      topics: ["Periodic Table", "Reactions", "Compounds", "Acids & Bases"],
      icon: Atom,
      path: "/chemistry",
      colorClass: "chemistry" as const,
      gradient: "bg-gradient-chemistry",
    },
    {
      title: "Physics Zone",
      description: "Understand the fundamental laws governing our universe, from quantum mechanics to cosmic forces.",
      topics: ["Forces", "Energy", "Light", "Quantum", "Space"],
      icon: Orbit,
      path: "/physics",
      colorClass: "physics" as const,
      gradient: "bg-gradient-physics",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-cosmic opacity-50" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-biology via-chemistry to-physics bg-clip-text text-transparent">
                Science Nexus
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Your gateway to interactive learning across Biology, Chemistry, and Physics.
              Explore, experiment, and discover the wonders of science.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/quiz"
                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-glow-physics"
              >
                Start Quiz
              </Link>
              <Link
                to="/connections"
                className="px-8 py-4 rounded-lg bg-card border border-border text-foreground font-bold text-lg hover:border-primary hover:scale-105 transition-all duration-300"
              >
                <Network className="inline h-5 w-5 mr-2" />
                Science Connections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Science Domains */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Explore Science Domains</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each domain offers unique interactive tools, simulations, and deep dives into the subject
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {sciences.map((science) => (
              <ScienceCard key={science.title} {...science} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Powerful Learning Tools</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-biology hover:shadow-glow-biology transition-all duration-300">
              <div className="text-4xl mb-3">🧬</div>
              <h3 className="font-bold mb-2">3D Models</h3>
              <p className="text-sm text-muted-foreground">
                Interactive visualizations of molecules, cells, and systems
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-chemistry hover:shadow-glow-chemistry transition-all duration-300">
              <div className="text-4xl mb-3">⚗️</div>
              <h3 className="font-bold mb-2">Virtual Lab</h3>
              <p className="text-sm text-muted-foreground">
                Safe experiments without real-world risks
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-physics hover:shadow-glow-physics transition-all duration-300">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-bold mb-2">Interactive Sims</h3>
              <p className="text-sm text-muted-foreground">
                Adjust variables and see real-time results
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary hover:shadow-glow-physics transition-all duration-300">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold mb-2">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Track achievements and mastery levels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-biology/10 via-chemistry/10 to-physics/10 rounded-2xl p-12 text-center border border-border">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students exploring science in an engaging, interactive way
            </p>
            <Link
              to="/quiz"
              className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-glow-physics"
            >
              Begin Learning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
