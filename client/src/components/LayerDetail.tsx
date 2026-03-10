/**
 * LayerDetail Component
 * Displays detailed information about a selected defense layer
 * Shows security controls, roles with salary ranges, certifications,
 * career progression, day-in-life, career paths, and entry backgrounds.
 * Author: Rupinder Pal Singh
 * BSides San Diego 2026
 */

import { useState } from "react";
import { DefenseLayer, SecurityRole } from "@/data/defenseMap";
import { Card } from "@/components/ui/card";

interface LayerDetailProps {
  layer: DefenseLayer;
}

export function LayerDetail({ layer }: LayerDetailProps) {
  const [selectedRole, setSelectedRole] = useState<SecurityRole | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "progression" | "dayinlife" | "paths">("overview");

  const hue = getLayerHue(layer.id);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Layer Header */}
      <div className="space-y-3 border-b border-border pb-5">
        <div className="flex items-center gap-4">
          <div
            className="w-5 h-5 rounded flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, hsl(${hue}, 70%, 55%), hsl(${hue}, 70%, 35%))`,
              boxShadow: `0 0 16px hsl(${hue}, 70%, 50%, 0.5)`,
            }}
          />
          <div>
            <h2 className="text-2xl font-bold font-mono">{layer.name}</h2>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mt-0.5">
              Defense Layer · {layer.roles.length} Roles
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {layer.description}
        </p>
      </div>

      {/* Security Controls */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold font-mono uppercase tracking-widest"
          style={{ color: `hsl(${hue}, 70%, 65%)` }}>
          Security Controls
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {layer.controls.map((control) => (
            <div
              key={control.id}
              className="bg-background/40 border border-border/60 rounded p-3 space-y-1.5 hover:border-border transition-colors"
            >
              <h4 className="font-semibold text-foreground text-sm">{control.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{control.description}</p>
              <div className="flex flex-wrap gap-1 pt-1">
                {control.examples.slice(0, 3).map((example, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded font-mono border border-border/40"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Roles List */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold font-mono uppercase tracking-widest"
          style={{ color: `hsl(${hue}, 70%, 65%)` }}>
          Cybersecurity Roles — Click to Explore
        </h3>
        <div className="grid gap-2">
          {layer.roles.map((role) => (
            <button
              key={role.id}
              onClick={() => {
                setSelectedRole(selectedRole?.id === role.id ? null : role);
                setActiveTab("overview");
              }}
              className={`w-full text-left rounded border p-3 transition-all duration-200 ${
                selectedRole?.id === role.id
                  ? "border-border bg-background/80"
                  : "border-border/40 bg-background/20 hover:border-border/70 hover:bg-background/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: `hsl(${hue}, 70%, 55%)` }}
                  />
                  <span className="font-semibold text-sm text-foreground">{role.name}</span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs font-mono text-green-400 bg-green-950/40 border border-green-800/40 px-2 py-0.5 rounded">
                    {role.salaryRange}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {selectedRole?.id === role.id ? "▲" : "▼"}
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1 ml-4 leading-relaxed">
                {role.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Role Detail Panel */}
      {selectedRole && (
        <div
          className="border border-border rounded-lg overflow-hidden animate-fade-in"
          style={{ borderColor: `hsl(${hue}, 50%, 30%)` }}
        >
          {/* Role Header */}
          <div
            className="px-5 py-4 border-b border-border/50"
            style={{ background: `hsl(${hue}, 50%, 10%)` }}
          >
            <h3 className="text-lg font-bold font-mono text-foreground">{selectedRole.name}</h3>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              <span className="text-green-400 font-mono text-sm font-semibold">
                💰 {selectedRole.salaryRange}
              </span>
              <span className="text-muted-foreground text-xs">·</span>
              <span className="text-muted-foreground text-xs">
                Entry from: {selectedRole.entryFrom.slice(0, 3).join(", ")}
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border/50 bg-background/20">
            {(["overview", "progression", "dayinlife", "paths"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                  activeTab === tab
                    ? "text-foreground border-b-2 bg-background/30"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={activeTab === tab ? { borderColor: `hsl(${hue}, 70%, 55%)` } : {}}
              >
                {tab === "overview" ? "Overview" :
                 tab === "progression" ? "Career Path" :
                 tab === "dayinlife" ? "Day in Life" : "Transitions"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-5 bg-background/10">

            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-5">
                {/* Responsibilities */}
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Key Responsibilities</p>
                  <ul className="space-y-1.5">
                    {selectedRole.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-foreground flex gap-2 items-start">
                        <span style={{ color: `hsl(${hue}, 70%, 60%)` }} className="flex-shrink-0 mt-0.5">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Recommended Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedRole.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded border"
                        style={{
                          background: `hsl(${hue}, 50%, 12%)`,
                          borderColor: `hsl(${hue}, 50%, 30%)`,
                          color: `hsl(${hue}, 70%, 70%)`,
                        }}
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Entry Backgrounds */}
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Who Can Enter This Role</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedRole.entryFrom.map((entry, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded border border-border/50 bg-muted/30 text-muted-foreground"
                      >
                        {entry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Career Progression Tab */}
            {activeTab === "progression" && (
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                  Career Progression Ladder
                </p>
                <div className="relative">
                  {/* Vertical line */}
                  <div
                    className="absolute left-4 top-4 bottom-4 w-0.5"
                    style={{ background: `hsl(${hue}, 50%, 25%)` }}
                  />
                  <div className="space-y-4">
                    {selectedRole.progression.map((level, idx) => (
                      <div key={idx} className="flex gap-4 items-start pl-2">
                        <div
                          className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold z-10 mt-0.5"
                          style={{
                            background: `hsl(${hue}, 70%, ${30 + idx * 10}%)`,
                            border: `2px solid hsl(${hue}, 70%, ${50 + idx * 5}%)`,
                          }}
                        >
                          {idx + 1}
                        </div>
                        <div
                          className="flex-1 rounded p-3 border"
                          style={{
                            background: `hsl(${hue}, 40%, ${8 + idx * 2}%)`,
                            borderColor: `hsl(${hue}, 40%, ${20 + idx * 5}%)`,
                          }}
                        >
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <div>
                              <span
                                className="text-xs font-mono uppercase tracking-wider"
                                style={{ color: `hsl(${hue}, 70%, 60%)` }}
                              >
                                {level.level}
                              </span>
                              <h4 className="font-semibold text-sm text-foreground mt-0.5">{level.title}</h4>
                            </div>
                            <div className="text-right">
                              <div className="text-green-400 font-mono text-sm font-semibold">{level.salaryRange}</div>
                              <div className="text-xs text-muted-foreground">{level.yearsExp}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Day in Life Tab */}
            {activeTab === "dayinlife" && (
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  A Day in the Life
                </p>
                <div
                  className="rounded p-4 border text-sm text-foreground leading-relaxed"
                  style={{
                    background: `hsl(${hue}, 30%, 8%)`,
                    borderColor: `hsl(${hue}, 40%, 20%)`,
                  }}
                >
                  <div className="flex gap-2 items-start">
                    <span style={{ color: `hsl(${hue}, 70%, 60%)` }} className="text-lg flex-shrink-0">📋</span>
                    <p>{selectedRole.dayInLife}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Career Transitions Tab */}
            {activeTab === "paths" && (
              <div className="space-y-5">
                {/* Can move to */}
                {selectedRole.careerPaths.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      Can Move Into These Roles
                    </p>
                    <div className="space-y-2">
                      {selectedRole.careerPaths.map((pathId) => {
                        const targetRole = findRoleById(pathId);
                        if (!targetRole) return null;
                        return (
                          <div
                            key={pathId}
                            className="flex items-center justify-between rounded p-3 border border-border/50 bg-background/30"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-green-400">→</span>
                              <span className="text-sm font-semibold text-foreground">{targetRole.name}</span>
                            </div>
                            <span className="text-xs font-mono text-green-400">{targetRole.salaryRange}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Can come from */}
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    How to Break In — Backgrounds That Qualify
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedRole.entryFrom.map((entry, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 rounded p-2.5 border border-border/40 bg-background/20"
                      >
                        <span style={{ color: `hsl(${hue}, 70%, 60%)` }} className="text-xs">✓</span>
                        <span className="text-xs text-foreground">{entry}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tip */}
                <div
                  className="rounded p-3 border text-xs text-muted-foreground leading-relaxed"
                  style={{
                    background: `hsl(${hue}, 20%, 8%)`,
                    borderColor: `hsl(${hue}, 30%, 20%)`,
                  }}
                >
                  <span style={{ color: `hsl(${hue}, 70%, 60%)` }} className="font-semibold">💡 Tip: </span>
                  Most cybersecurity roles value hands-on experience over degrees. Build a home lab, earn 1–2 certifications, and contribute to open-source security projects to stand out.
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="pt-4 border-t border-border/40 text-xs text-muted-foreground">
        <p>Salary ranges are US market estimates (2025). Actual compensation varies by location, company size, and experience. — Rupinder Pal Singh · BSides San Diego</p>
      </div>
    </div>
  );
}

/**
 * Helper: find a role by ID across all layers
 */
import { defenseMapData } from "@/data/defenseMap";

function findRoleById(id: string) {
  for (const layer of defenseMapData) {
    const role = layer.roles.find((r) => r.id === id);
    if (role) return role;
  }
  return null;
}

/**
 * Helper function to get hue value for each layer
 */
function getLayerHue(layerId: string): number {
  const hueMap: Record<string, number> = {
    customers: 220,
    internet: 190,
    dmz: 35,
    perimeter: 0,
    "internal-network": 280,
    "cloud-infrastructure": 255,
    employees: 130,
    governance: 40,
    "incident-response-layer": 350,
  };
  return hueMap[layerId] ?? 220;
}
