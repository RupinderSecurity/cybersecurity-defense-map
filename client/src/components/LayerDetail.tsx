/**
 * LayerDetail Component
 * Displays detailed information about a selected defense layer
 * Shows security controls and responsible cybersecurity roles
 * Author: Rupinder Pal Singh
 */

import { DefenseLayer } from "@/data/defenseMap";
import { Card } from "@/components/ui/card";

interface LayerDetailProps {
  layer: DefenseLayer;
}

export function LayerDetail({ layer }: LayerDetailProps) {
  return (
    <Card className="bg-card border-border p-8 space-y-8 rounded-lg shadow-2xl animate-fade-in">
      {/* Layer Header */}
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-4">
          <div
            className="w-6 h-6 rounded-lg flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, hsl(${getLayerHue(layer.id)}, 70%, 50%), hsl(${getLayerHue(layer.id)}, 70%, 35%))`,
              boxShadow: `0 0 20px hsl(${getLayerHue(layer.id)}, 70%, 50%, 0.5)`,
            }}
          />
          <div>
            <h2 className="text-3xl font-bold font-mono">{layer.name}</h2>
            <p className="text-sm text-accent uppercase tracking-widest mt-1">
              Defense Layer
            </p>
          </div>
        </div>
        <p className="text-muted-foreground text-base leading-relaxed">
          {layer.description}
        </p>
      </div>

      {/* Security Controls Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold font-mono text-accent uppercase tracking-wide">
          Security Controls
        </h3>
        <div className="grid gap-4">
          {layer.controls.map((control) => (
            <div
              key={control.id}
              className="bg-background/50 border border-border rounded-lg p-5 space-y-3 hover:border-accent/50 transition-colors duration-200"
            >
              <h4 className="font-semibold text-foreground text-lg">
                {control.name}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {control.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {control.examples.map((example, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-muted text-muted-foreground text-xs px-3 py-1.5 rounded font-mono border border-border/50"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cybersecurity Roles Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold font-mono text-accent uppercase tracking-wide">
          Cybersecurity Roles
        </h3>
        <div className="grid gap-5">
          {layer.roles.map((role) => (
            <div
              key={role.id}
              className="bg-background/50 border border-border rounded-lg p-5 space-y-4 hover:border-accent/50 transition-colors duration-200"
            >
              <div>
                <h4 className="font-semibold text-foreground text-lg">
                  {role.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {role.description}
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-mono text-accent uppercase tracking-widest">
                  Key Responsibilities
                </p>
                <ul className="space-y-2">
                  {role.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-foreground flex gap-3 items-start"
                    >
                      <span className="text-accent flex-shrink-0 mt-1">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="pt-6 border-t border-border text-sm text-muted-foreground leading-relaxed">
        <p>
          This layer represents one critical component of a comprehensive defense-in-depth strategy. Security is most effective when all layers work together in coordination, with clear communication and shared objectives across teams.
        </p>
      </div>
    </Card>
  );
}

/**
 * Helper function to get hue value for each layer
 * Ensures consistent color coding across the application
 */
function getLayerHue(layerId: string): number {
  const hueMap: Record<string, number> = {
    customers: 220,      // Blue
    internet: 190,       // Cyan
    dmz: 40,            // Orange
    perimeter: 0,       // Red
    "internal-network": 280,  // Purple
    "cloud-infrastructure": 260,  // Indigo
    employees: 120,     // Green
  };
  return hueMap[layerId] || 220;
}
