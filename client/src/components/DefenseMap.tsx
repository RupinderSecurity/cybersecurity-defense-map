/**
 * DefenseMap Component
 * Interactive concentric circle visualization of cybersecurity defense layers
 * Design: Modern Technical Minimalism - Dark SOC aesthetic with layered depth
 * Author: Rupinder Pal Singh
 */

import { useState, useEffect } from "react";
import { defenseMapData, DefenseLayer } from "@/data/defenseMap";
import { LayerDetail } from "./LayerDetail";
import { X } from "lucide-react";

export function DefenseMap() {
  const [selectedLayer, setSelectedLayer] = useState<DefenseLayer | null>(null);
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const layers = defenseMapData;
  const innerLayers = layers.filter((l) => l.position === "inner");
  const midLayers = layers.filter((l) => l.position === "mid");
  const outerLayers = layers.filter((l) => l.position === "outer");

  // Responsive SVG sizing
  const svgSize = 800;
  const center = svgSize / 2;
  const innerRadius = 80;
  const midRadius = 200;
  const outerRadius = 320;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-6xl w-full">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-bold font-mono tracking-tight animate-fade-in">
            Defense in Depth
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Interactive cybersecurity architecture showing layers, controls, and roles
          </p>
        </div>

        {/* SVG Visualization */}
        <div className={`flex justify-center w-full transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <svg
            width={svgSize}
            height={svgSize}
            viewBox={`0 0 ${svgSize} ${svgSize}`}
            className="drop-shadow-2xl max-w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Defs for gradients and filters */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Gradients for each layer */}
              {layers.map((layer) => (
                <linearGradient
                  key={`gradient-${layer.id}`}
                  id={`gradient-${layer.id}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor={`hsl(${getLayerHue(layer.id)}, 70%, 50%)`}
                  />
                  <stop
                    offset="100%"
                    stopColor={`hsl(${getLayerHue(layer.id)}, 70%, 35%)`}
                  />
                </linearGradient>
              ))}
            </defs>

            {/* Inner layer circles */}
            {innerLayers.map((layer, idx) => {
              const angle = (idx / innerLayers.length) * 360;
              const x = center + innerRadius * Math.cos((angle * Math.PI) / 180);
              const y = center + innerRadius * Math.sin((angle * Math.PI) / 180);
              const isHovered = hoveredLayer === layer.id;
              const isSelected = selectedLayer?.id === layer.id;

              return (
                <g key={layer.id} style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease-out" }}>
                  <circle
                    cx={x}
                    cy={y}
                    r="50"
                    fill={`url(#gradient-${layer.id})`}
                    stroke={
                      isHovered || isSelected
                        ? "rgba(100, 200, 255, 1)"
                        : "rgba(100, 200, 255, 0.4)"
                    }
                    strokeWidth={isHovered || isSelected ? "3" : "2"}
                    className="transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onMouseLeave={() => setHoveredLayer(null)}
                    onClick={() => setSelectedLayer(layer)}
                    style={{
                      filter: isHovered || isSelected ? "drop-shadow(0 0 25px rgba(100, 200, 255, 0.8))" : "drop-shadow(0 0 8px rgba(0, 0, 0, 0.3))",
                      transform:
                        isHovered || isSelected ? "scale(1.15)" : "scale(1)",
                      transformOrigin: `${x}px ${y}px`,
                      transformBox: "fill-box",
                    }}
                  />
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs font-bold fill-white pointer-events-none select-none"
                    style={{ fontSize: "12px", fontWeight: 600 }}
                  >
                    {layer.displayName.split(" ")[0]}
                  </text>
                </g>
              );
            })}

            {/* Mid layer circles */}
            {midLayers.map((layer, idx) => {
              const angle = (idx / midLayers.length) * 360 + 90;
              const x = center + midRadius * Math.cos((angle * Math.PI) / 180);
              const y = center + midRadius * Math.sin((angle * Math.PI) / 180);
              const isHovered = hoveredLayer === layer.id;
              const isSelected = selectedLayer?.id === layer.id;

              return (
                <g key={layer.id} style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease-out 0.1s" }}>
                  <circle
                    cx={x}
                    cy={y}
                    r="55"
                    fill={`url(#gradient-${layer.id})`}
                    stroke={
                      isHovered || isSelected
                        ? "rgba(100, 200, 255, 1)"
                        : "rgba(100, 200, 255, 0.4)"
                    }
                    strokeWidth={isHovered || isSelected ? "3" : "2"}
                    className="transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onMouseLeave={() => setHoveredLayer(null)}
                    onClick={() => setSelectedLayer(layer)}
                    style={{
                      filter: isHovered || isSelected ? "drop-shadow(0 0 25px rgba(100, 200, 255, 0.8))" : "drop-shadow(0 0 8px rgba(0, 0, 0, 0.3))",
                      transform:
                        isHovered || isSelected ? "scale(1.15)" : "scale(1)",
                      transformOrigin: `${x}px ${y}px`,
                      transformBox: "fill-box",
                    }}
                  />
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs font-bold fill-white pointer-events-none select-none"
                    style={{ fontSize: "12px", fontWeight: 600 }}
                  >
                    {layer.displayName}
                  </text>
                </g>
              );
            })}

            {/* Outer layer circles */}
            {outerLayers.map((layer, idx) => {
              const angle = (idx / outerLayers.length) * 360 + 45;
              const x = center + outerRadius * Math.cos((angle * Math.PI) / 180);
              const y = center + outerRadius * Math.sin((angle * Math.PI) / 180);
              const isHovered = hoveredLayer === layer.id;
              const isSelected = selectedLayer?.id === layer.id;

              return (
                <g key={layer.id} style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease-out 0.2s" }}>
                  <circle
                    cx={x}
                    cy={y}
                    r="50"
                    fill={`url(#gradient-${layer.id})`}
                    stroke={
                      isHovered || isSelected
                        ? "rgba(100, 200, 255, 1)"
                        : "rgba(100, 200, 255, 0.4)"
                    }
                    strokeWidth={isHovered || isSelected ? "3" : "2"}
                    className="transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onMouseLeave={() => setHoveredLayer(null)}
                    onClick={() => setSelectedLayer(layer)}
                    style={{
                      filter: isHovered || isSelected ? "drop-shadow(0 0 25px rgba(100, 200, 255, 0.8))" : "drop-shadow(0 0 8px rgba(0, 0, 0, 0.3))",
                      transform:
                        isHovered || isSelected ? "scale(1.15)" : "scale(1)",
                      transformOrigin: `${x}px ${y}px`,
                      transformBox: "fill-box",
                    }}
                  />
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs font-bold fill-white pointer-events-none select-none"
                    style={{ fontSize: "12px", fontWeight: 600 }}
                  >
                    {layer.displayName}
                  </text>
                </g>
              );
            })}

            {/* Center core circle */}
            <circle
              cx={center}
              cy={center}
              r="40"
              fill="rgba(100, 150, 200, 0.08)"
              stroke="rgba(100, 200, 255, 0.6)"
              strokeWidth="2"
              style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease-out 0.3s" }}
            />
            <text
              x={center}
              y={center}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs font-bold fill-muted-foreground pointer-events-none select-none"
              style={{ fontSize: "11px", fontWeight: 600 }}
            >
              CORE
            </text>
          </svg>
        </div>

        {/* Instructions */}
        <div className="text-center text-sm text-muted-foreground max-w-2xl">
          <p>Click on any layer to explore security controls and the cybersecurity roles responsible for protecting that layer</p>
        </div>
      </div>

      {/* Detail Panel Modal */}
      {selectedLayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-auto">
            <button
              onClick={() => setSelectedLayer(null)}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-muted rounded-lg transition-colors duration-200"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
            <LayerDetail layer={selectedLayer} />
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Helper function to get hue value for each layer
 * Uses distinct colors to visually separate layers
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
