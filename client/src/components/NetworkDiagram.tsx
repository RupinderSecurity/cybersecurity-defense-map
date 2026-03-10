/**
 * NetworkDiagram Component
 * Interactive left-to-right network architecture diagram
 * Shows data flow from customers through security devices into company boundary
 * Design: Modern Technical Minimalism with network topology visualization
 * Author: Rupinder Pal Singh
 */

import { useState, useEffect } from "react";
import { defenseMapData, DefenseLayer } from "@/data/defenseMap";
import { LayerDetail } from "./LayerDetail";
import { X } from "lucide-react";

export function NetworkDiagram() {
  const [selectedLayer, setSelectedLayer] = useState<DefenseLayer | null>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const svgWidth = 1600;
  const svgHeight = 900;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background grid */}
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
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-7xl w-full">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-bold font-mono tracking-tight animate-fade-in">
            Defense in Depth Architecture
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Complete cybersecurity organization showing all 40+ roles across 9 defense layers
          </p>
        </div>

        {/* Network Diagram SVG */}
        <div className={`w-full overflow-auto transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="rgba(100, 200, 255, 0.6)" />
              </marker>
            </defs>

            {/* CUSTOMERS SECTION */}
            <g>
              <rect
                x="30"
                y="350"
                width="140"
                height="180"
                fill="rgba(59, 130, 246, 0.1)"
                stroke="rgba(59, 130, 246, 0.5)"
                strokeWidth="2"
                rx="8"
              />
              <text
                x="100"
                y="375"
                textAnchor="middle"
                className="text-sm font-bold fill-blue-400"
                style={{ fontSize: "14px" }}
              >
                Customers
              </text>
              <circle
                cx="70"
                cy="420"
                r="20"
                fill="rgba(59, 130, 246, 0.3)"
                stroke="rgba(59, 130, 246, 0.8)"
                strokeWidth="2"
              />
              <text
                x="70"
                y="425"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-white font-bold"
              >
                👤
              </text>
              <circle
                cx="130"
                cy="420"
                r="20"
                fill="rgba(59, 130, 246, 0.3)"
                stroke="rgba(59, 130, 246, 0.8)"
                strokeWidth="2"
              />
              <text
                x="130"
                y="425"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-white font-bold"
              >
                👤
              </text>
              <circle
                cx="100"
                cy="480"
                r="20"
                fill="rgba(59, 130, 246, 0.3)"
                stroke="rgba(59, 130, 246, 0.8)"
                strokeWidth="2"
              />
              <text
                x="100"
                y="485"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-white font-bold"
              >
                👤
              </text>
            </g>

            {/* INTERNET SECTION */}
            <g>
              <rect
                x="200"
                y="300"
                width="160"
                height="300"
                fill="rgba(34, 211, 238, 0.08)"
                stroke="rgba(34, 211, 238, 0.4)"
                strokeWidth="2"
                rx="8"
                strokeDasharray="5,5"
              />
              <text
                x="280"
                y="330"
                textAnchor="middle"
                className="text-sm font-bold fill-cyan-400"
                style={{ fontSize: "14px" }}
              >
                Internet
              </text>
            </g>

            {/* DDoS PROTECTION */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredZone("ddos")}
              onMouseLeave={() => setHoveredZone(null)}
              onClick={() => setSelectedLayer(defenseMapData.find((l) => l.id === "internet")!)}
            >
              <rect
                x="380"
                y="320"
                width="110"
                height="90"
                fill={hoveredZone === "ddos" ? "rgba(34, 211, 238, 0.3)" : "rgba(34, 211, 238, 0.15)"}
                stroke={hoveredZone === "ddos" ? "rgba(34, 211, 238, 0.8)" : "rgba(34, 211, 238, 0.5)"}
                strokeWidth={hoveredZone === "ddos" ? "2" : "1"}
                rx="6"
                style={{
                  filter: hoveredZone === "ddos" ? "drop-shadow(0 0 15px rgba(34, 211, 238, 0.5))" : "none",
                }}
              />
              <text
                x="435"
                y="343"
                textAnchor="middle"
                className="text-xs font-bold fill-cyan-300"
                style={{ fontSize: "11px" }}
              >
                DDoS
              </text>
              <text
                x="435"
                y="358"
                textAnchor="middle"
                className="text-xs font-bold fill-cyan-300"
                style={{ fontSize: "11px" }}
              >
                Protection
              </text>
            </g>

            {/* WAF */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredZone("waf")}
              onMouseLeave={() => setHoveredZone(null)}
              onClick={() => setSelectedLayer(defenseMapData.find((l) => l.id === "dmz")!)}
            >
              <rect
                x="380"
                y="430"
                width="110"
                height="90"
                fill={hoveredZone === "waf" ? "rgba(249, 115, 22, 0.3)" : "rgba(249, 115, 22, 0.15)"}
                stroke={hoveredZone === "waf" ? "rgba(249, 115, 22, 0.8)" : "rgba(249, 115, 22, 0.5)"}
                strokeWidth={hoveredZone === "waf" ? "2" : "1"}
                rx="6"
                style={{
                  filter: hoveredZone === "waf" ? "drop-shadow(0 0 15px rgba(249, 115, 22, 0.5))" : "none",
                }}
              />
              <text
                x="435"
                y="453"
                textAnchor="middle"
                className="text-xs font-bold fill-orange-300"
                style={{ fontSize: "11px" }}
              >
                WAF
              </text>
              <text
                x="435"
                y="468"
                textAnchor="middle"
                className="text-xs font-bold fill-orange-300"
                style={{ fontSize: "11px" }}
              >
                Gateway
              </text>
            </g>

            {/* FIREWALL */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredZone("firewall")}
              onMouseLeave={() => setHoveredZone(null)}
              onClick={() => setSelectedLayer(defenseMapData.find((l) => l.id === "perimeter")!)}
            >
              <rect
                x="530"
                y="340"
                width="110"
                height="150"
                fill={hoveredZone === "firewall" ? "rgba(239, 68, 68, 0.3)" : "rgba(239, 68, 68, 0.15)"}
                stroke={hoveredZone === "firewall" ? "rgba(239, 68, 68, 0.8)" : "rgba(239, 68, 68, 0.5)"}
                strokeWidth={hoveredZone === "firewall" ? "2" : "1"}
                rx="6"
                style={{
                  filter: hoveredZone === "firewall" ? "drop-shadow(0 0 15px rgba(239, 68, 68, 0.5))" : "none",
                }}
              />
              <text
                x="585"
                y="368"
                textAnchor="middle"
                className="text-xs font-bold fill-red-300"
                style={{ fontSize: "11px" }}
              >
                Firewall
              </text>
              <text
                x="585"
                y="383"
                textAnchor="middle"
                className="text-xs font-bold fill-red-300"
                style={{ fontSize: "11px" }}
              >
                IDS/IPS
              </text>
            </g>

            {/* VPN GATEWAY */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredZone("vpn")}
              onMouseLeave={() => setHoveredZone(null)}
              onClick={() => setSelectedLayer(defenseMapData.find((l) => l.id === "perimeter")!)}
            >
              <rect
                x="530"
                y="510"
                width="110"
                height="90"
                fill={hoveredZone === "vpn" ? "rgba(239, 68, 68, 0.3)" : "rgba(239, 68, 68, 0.15)"}
                stroke={hoveredZone === "vpn" ? "rgba(239, 68, 68, 0.8)" : "rgba(239, 68, 68, 0.5)"}
                strokeWidth={hoveredZone === "vpn" ? "2" : "1"}
                rx="6"
                style={{
                  filter: hoveredZone === "vpn" ? "drop-shadow(0 0 15px rgba(239, 68, 68, 0.5))" : "none",
                }}
              />
              <text
                x="585"
                y="533"
                textAnchor="middle"
                className="text-xs font-bold fill-red-300"
                style={{ fontSize: "11px" }}
              >
                VPN
              </text>
              <text
                x="585"
                y="548"
                textAnchor="middle"
                className="text-xs font-bold fill-red-300"
                style={{ fontSize: "11px" }}
              >
                Gateway
              </text>
            </g>

            {/* COMPANY BOUNDARY */}
            <rect
              x="680"
              y="80"
              width="880"
              height="740"
              fill="rgba(147, 51, 234, 0.05)"
              stroke="rgba(147, 51, 234, 0.4)"
              strokeWidth="2"
              rx="8"
              strokeDasharray="8,4"
            />
            <text
              x="690"
              y="100"
              className="text-sm font-bold fill-purple-400"
              style={{ fontSize: "13px" }}
            >
              Company Boundary
            </text>

            {/* AWS CLOUD SECTION */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredZone("aws")}
              onMouseLeave={() => setHoveredZone(null)}
              onClick={() => setSelectedLayer(defenseMapData.find((l) => l.id === "cloud-infrastructure")!)}
            >
              <rect
                x="700"
                y="120"
                width="200"
                height="140"
                fill={hoveredZone === "aws" ? "rgba(99, 102, 241, 0.25)" : "rgba(99, 102, 241, 0.1)"}
                stroke={hoveredZone === "aws" ? "rgba(99, 102, 241, 0.7)" : "rgba(99, 102, 241, 0.4)"}
                strokeWidth={hoveredZone === "aws" ? "2" : "1"}
                rx="6"
                style={{
                  filter: hoveredZone === "aws" ? "drop-shadow(0 0 15px rgba(99, 102, 241, 0.4))" : "none",
                }}
              />
              <text
                x="800"
                y="140"
                textAnchor="middle"
                className="text-xs font-bold fill-indigo-300"
                style={{ fontSize: "12px" }}
              >
                AWS Cloud
              </text>
              <text
                x="800"
                y="155"
                textAnchor="middle"
                className="text-xs fill-indigo-200"
                style={{ fontSize: "9px" }}
              >
                EC2, RDS, S3, Lambda
              </text>
              <text
                x="800"
                y="170"
                textAnchor="middle"
                className="text-xs fill-indigo-200"
                style={{ fontSize: "9px" }}
              >
                IAM, KMS, GuardDuty
              </text>
            </g>

            {/* INTERNAL NETWORK SECTION */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredZone("internal")}
              onMouseLeave={() => setHoveredZone(null)}
              onClick={() => setSelectedLayer(defenseMapData.find((l) => l.id === "internal-network")!)}
            >
              <rect
                x="920"
                y="120"
                width="200"
                height="140"
                fill={hoveredZone === "internal" ? "rgba(147, 51, 234, 0.25)" : "rgba(147, 51, 234, 0.1)"}
                stroke={hoveredZone === "internal" ? "rgba(147, 51, 234, 0.7)" : "rgba(147, 51, 234, 0.4)"}
                strokeWidth={hoveredZone === "internal" ? "2" : "1"}
                rx="6"
                style={{
                  filter: hoveredZone === "internal" ? "drop-shadow(0 0 15px rgba(147, 51, 234, 0.4))" : "none",
                }}
              />
              <text
                x="1020"
                y="140"
                textAnchor="middle"
                className="text-xs font-bold fill-purple-300"
                style={{ fontSize: "12px" }}
              >
                Internal Network
              </text>
              <text
                x="1020"
                y="155"
                textAnchor="middle"
                className="text-xs fill-purple-200"
                style={{ fontSize: "9px" }}
              >
                Servers, Databases
              </text>
              <text
                x="1020"
                y="170"
                textAnchor="middle"
                className="text-xs fill-purple-200"
                style={{ fontSize: "9px" }}
              >
                SIEM, EDR, PAM
              </text>
            </g>

            {/* OFFICE EMPLOYEES */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredZone("office")}
              onMouseLeave={() => setHoveredZone(null)}
              onClick={() => setSelectedLayer(defenseMapData.find((l) => l.id === "employees")!)}
            >
              <rect
                x="700"
                y="280"
                width="200"
                height="140"
                fill={hoveredZone === "office" ? "rgba(34, 197, 94, 0.25)" : "rgba(34, 197, 94, 0.1)"}
                stroke={hoveredZone === "office" ? "rgba(34, 197, 94, 0.7)" : "rgba(34, 197, 94, 0.4)"}
                strokeWidth={hoveredZone === "office" ? "2" : "1"}
                rx="6"
                style={{
                  filter: hoveredZone === "office" ? "drop-shadow(0 0 15px rgba(34, 197, 94, 0.4))" : "none",
                }}
              />
              <text
                x="800"
                y="300"
                textAnchor="middle"
                className="text-xs font-bold fill-green-300"
                style={{ fontSize: "12px" }}
              >
                Office Employees
              </text>
              <text
                x="800"
                y="315"
                textAnchor="middle"
                className="text-xs fill-green-200"
                style={{ fontSize: "9px" }}
              >
                MDM, EDR, MFA
              </text>
              <text
                x="800"
                y="330"
                textAnchor="middle"
                className="text-xs fill-green-200"
                style={{ fontSize: "9px" }}
              >
                Zero Trust Access
              </text>
            </g>

            {/* REMOTE EMPLOYEES */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredZone("remote")}
              onMouseLeave={() => setHoveredZone(null)}
              onClick={() => setSelectedLayer(defenseMapData.find((l) => l.id === "employees")!)}
            >
              <rect
                x="920"
                y="280"
                width="200"
                height="140"
                fill={hoveredZone === "remote" ? "rgba(34, 197, 94, 0.25)" : "rgba(34, 197, 94, 0.1)"}
                stroke={hoveredZone === "remote" ? "rgba(34, 197, 94, 0.7)" : "rgba(34, 197, 94, 0.4)"}
                strokeWidth={hoveredZone === "remote" ? "2" : "1"}
                rx="6"
                style={{
                  filter: hoveredZone === "remote" ? "drop-shadow(0 0 15px rgba(34, 197, 94, 0.4))" : "none",
                }}
              />
              <text
                x="1020"
                y="300"
                textAnchor="middle"
                className="text-xs font-bold fill-green-300"
                style={{ fontSize: "12px" }}
              >
                Remote Employees
              </text>
              <text
                x="1020"
                y="315"
                textAnchor="middle"
                className="text-xs fill-green-200"
                style={{ fontSize: "9px" }}
              >
                VPN, ZTNA, MFA
              </text>
              <text
                x="1020"
                y="330"
                textAnchor="middle"
                className="text-xs fill-green-200"
                style={{ fontSize: "9px" }}
              >
                Device Posture Check
              </text>
            </g>

            {/* GOVERNANCE */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredZone("governance")}
              onMouseLeave={() => setHoveredZone(null)}
              onClick={() => setSelectedLayer(defenseMapData.find((l) => l.id === "governance")!)}
            >
              <rect
                x="700"
                y="440"
                width="420"
                height="140"
                fill={hoveredZone === "governance" ? "rgba(217, 119, 6, 0.25)" : "rgba(217, 119, 6, 0.1)"}
                stroke={hoveredZone === "governance" ? "rgba(217, 119, 6, 0.7)" : "rgba(217, 119, 6, 0.4)"}
                strokeWidth={hoveredZone === "governance" ? "2" : "1"}
                rx="6"
                style={{
                  filter: hoveredZone === "governance" ? "drop-shadow(0 0 15px rgba(217, 119, 6, 0.4))" : "none",
                }}
              />
              <text
                x="910"
                y="460"
                textAnchor="middle"
                className="text-xs font-bold fill-amber-300"
                style={{ fontSize: "12px" }}
              >
                Risk, Compliance & Governance
              </text>
              <text
                x="910"
                y="475"
                textAnchor="middle"
                className="text-xs fill-amber-200"
                style={{ fontSize: "9px" }}
              >
                CISO • GRC Analyst • IT Auditor • Risk Analyst • Third-Party Risk • AI Governance
              </text>
              <text
                x="910"
                y="490"
                textAnchor="middle"
                className="text-xs fill-amber-200"
                style={{ fontSize: "9px" }}
              >
                Compliance Frameworks • Risk Management • Vendor Risk • Board Reporting
              </text>
            </g>

            {/* INCIDENT RESPONSE */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredZone("incident")}
              onMouseLeave={() => setHoveredZone(null)}
              onClick={() => setSelectedLayer(defenseMapData.find((l) => l.id === "incident-response-layer")!)}
            >
              <rect
                x="700"
                y="600"
                width="420"
                height="140"
                fill={hoveredZone === "incident" ? "rgba(244, 63, 94, 0.25)" : "rgba(244, 63, 94, 0.1)"}
                stroke={hoveredZone === "incident" ? "rgba(244, 63, 94, 0.7)" : "rgba(244, 63, 94, 0.4)"}
                strokeWidth={hoveredZone === "incident" ? "2" : "1"}
                rx="6"
                style={{
                  filter: hoveredZone === "incident" ? "drop-shadow(0 0 15px rgba(244, 63, 94, 0.4))" : "none",
                }}
              />
              <text
                x="910"
                y="620"
                textAnchor="middle"
                className="text-xs font-bold fill-rose-300"
                style={{ fontSize: "12px" }}
              >
                Incident Response & Forensics
              </text>
              <text
                x="910"
                y="635"
                textAnchor="middle"
                className="text-xs fill-rose-200"
                style={{ fontSize: "9px" }}
              >
                Incident Responder • Forensics Analyst • Threat Intel Analyst • Detection Engineer
              </text>
              <text
                x="910"
                y="650"
                textAnchor="middle"
                className="text-xs fill-rose-200"
                style={{ fontSize: "9px" }}
              >
                Breach Containment • Evidence Handling • Attack Timeline • Lessons Learned
              </text>
            </g>

            {/* SOC / SIEM - Spanning across */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredZone("soc")}
              onMouseLeave={() => setHoveredZone(null)}
              onClick={() => setSelectedLayer(defenseMapData.find((l) => l.id === "internal-network")!)}
            >
              <rect
                x="1140"
                y="120"
                width="400"
                height="300"
                fill="rgba(168, 85, 247, 0.08)"
                stroke="rgba(168, 85, 247, 0.4)"
                strokeWidth="2"
                rx="6"
                strokeDasharray="5,5"
              />
              <text
                x="1340"
                y="145"
                textAnchor="middle"
                className="text-xs font-bold fill-purple-300"
                style={{ fontSize: "12px" }}
              >
                SOC / SIEM (Central Monitoring)
              </text>
              <text
                x="1340"
                y="160"
                textAnchor="middle"
                className="text-xs fill-purple-200"
                style={{ fontSize: "9px" }}
              >
                Splunk • Sentinel • QRadar
              </text>
              <text
                x="1340"
                y="175"
                textAnchor="middle"
                className="text-xs fill-purple-200"
                style={{ fontSize: "9px" }}
              >
                SOC Analyst (Tier 1, 2, 3) • Detection Engineer
              </text>
              <text
                x="1340"
                y="190"
                textAnchor="middle"
                className="text-xs fill-purple-200"
                style={{ fontSize: "9px" }}
              >
                Threat Hunter • Security Operations Manager
              </text>
              <text
                x="1340"
                y="210"
                textAnchor="middle"
                className="text-xs fill-purple-200"
                style={{ fontSize: "8px" }}
              >
                Monitors all logs from every layer
              </text>
              <text
                x="1340"
                y="225"
                textAnchor="middle"
                className="text-xs fill-purple-200"
                style={{ fontSize: "8px" }}
              >
                Real-time alerts • Incident investigation
              </text>
              <text
                x="1340"
                y="240"
                textAnchor="middle"
                className="text-xs fill-purple-200"
                style={{ fontSize: "8px" }}
              >
                Threat detection • Response coordination
              </text>
            </g>

            {/* DATA FLOW ARROWS */}
            <line
              x1="170"
              y1="440"
              x2="200"
              y2="440"
              stroke="rgba(100, 200, 255, 0.4)"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            <line
              x1="360"
              y1="365"
              x2="380"
              y2="365"
              stroke="rgba(100, 200, 255, 0.4)"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            <path
              d="M 435 410 Q 435 420 435 430"
              stroke="rgba(100, 200, 255, 0.4)"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            <line
              x1="490"
              y1="475"
              x2="530"
              y2="415"
              stroke="rgba(100, 200, 255, 0.4)"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            <line
              x1="640"
              y1="415"
              x2="680"
              y2="300"
              stroke="rgba(147, 51, 234, 0.4)"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            <path
              d="M 1200 280 Q 1100 280 585 510"
              stroke="rgba(34, 197, 94, 0.3)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
            />
          </svg>
        </div>

        {/* Instructions */}
        <div className="text-center text-sm text-muted-foreground max-w-2xl">
          <p>Click on any network component to explore security controls and the cybersecurity roles protecting that layer</p>
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
