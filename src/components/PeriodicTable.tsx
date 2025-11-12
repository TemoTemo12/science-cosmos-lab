import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { elements, getCategoryColor, Element } from "@/data/periodicTable";

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-6 md:grid-cols-12 gap-2 mb-6">
        {elements.map((element) => (
          <button
            key={element.number}
            onClick={() => setSelectedElement(element)}
            className={`aspect-square p-2 rounded-lg border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg ${getCategoryColor(
              element.category
            )}`}
          >
            <div className="text-xs opacity-70">{element.number}</div>
            <div className="text-2xl font-bold">{element.symbol}</div>
            <div className="text-xs opacity-70 truncate">{element.name}</div>
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-biology/20 border-2 border-biology" />
          <span className="text-sm">Nonmetal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-chemistry/20 border-2 border-chemistry" />
          <span className="text-sm">Noble Gas</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-physics/20 border-2 border-physics" />
          <span className="text-sm">Alkali Metal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-primary/20 border-2 border-primary" />
          <span className="text-sm">Transition Metal</span>
        </div>
      </div>

      {/* Element Detail Dialog */}
      <Dialog open={!!selectedElement} onOpenChange={() => setSelectedElement(null)}>
        <DialogContent className="max-w-2xl">
          {selectedElement && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl flex items-center gap-4">
                  <span className={`text-6xl font-bold px-4 py-2 rounded-lg ${getCategoryColor(selectedElement.category)}`}>
                    {selectedElement.symbol}
                  </span>
                  <div>
                    <div>{selectedElement.name}</div>
                    <div className="text-sm text-muted-foreground font-normal">
                      Atomic Number: {selectedElement.number}
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Atomic Mass</div>
                    <div className="text-2xl font-bold">{selectedElement.atomicMass}</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Category</div>
                    <div className="text-lg font-semibold capitalize">
                      {selectedElement.category.replace("-", " ")}
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-2">Electron Configuration</div>
                  <div className="text-lg font-mono">{selectedElement.electronConfig}</div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-2">Description</div>
                  <p>{selectedElement.description}</p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-2">Common Uses</div>
                  <ul className="space-y-1">
                    {selectedElement.uses.map((use, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Discovered</div>
                  <div className="text-lg">{selectedElement.discovered}</div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PeriodicTable;
