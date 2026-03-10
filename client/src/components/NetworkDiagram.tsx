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

  const svgWidth = 1400;
  const svgHeight = 600;

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
            Network diagram showing data flow and security layers from customers to internal systems
          </p>
        </div>

        {/* Network Diagram SVG */}
        <div className={`w-full overflow-x-auto transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="min-w-full drop-shadow-2xl"
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
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* CUSTOMERS SECTION */}
            <g>
              <rect
                x="30"
                y="180"
                width="140"
                height="180"
                fill="rgba(59, 130, 246, 0.1)"
                stroke="rgba(59, 130, 246, 0.5)"
                strokeWidth="2"
                rx="8"
              />
              <text
                x="100"
                y="210"
                textAnchor="middle"
                className="text-sm font-bold fill-blue-400"
                style={{ fontSize: "14px" }}
              >
                Customers
              </text>
              <circle
                cx="70"
                cy="260"
                r="20"
                fill="rgba(59, 130, 246, 0.3)"
                stroke="rgba(59, 130, 246, 0.8)"
                strokeWidth="2"
              />
              <text
                x="70"
                y="265"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-white font-bold"
              >
                👤
              </text>
              <circle
                cx="130"
                cy="260"
                r="20"
                fill="rgba(59, 130, 246, 0.3)"
                stroke="rgba(59, 130, 246, 0.8)"
                strokeWidth="2"
              />
              <text
                x="130"
                y="265"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-white font-bold"
              >
                👤
              </text>
              <circle
                cx="100"
                cy="320"
                r="20"
                fill="rgba(59, 130, 246, 0.3)"
                stroke="rgba(59, 130, 246, 0.8)"
                strokeWidth="2"
              />
              <text
                x="100"
                y="325"
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
                y="120"
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
                y="150"
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
                y="160"
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
                y="185"
                textAnchor="middle"
                className="text-xs font-bold fill-cyan-300"
                style={{ fontSize: "11px" }}
              >
                DDoS
              </text>
              <text
                x="435"
                y="200"
                textAnchor="middle"
                className="text-xs font-bold fill-cyan-300"
                style={{ fontSize: "11px" }}
              >
                Protection
              </text>
              <text
                x="435"
                y="225"
                textAnchor="middle"
                className="text-xs fill-cyan-200"
                style={{ fontSize: "9px" }}
              >
                CDN, Rate Limit
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
                y="270"
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
                y="295"
                textAnchor="middle"
                className="text-xs font-bold fill-orange-300"
                style={{ fontSize: "11px" }}
              >
                WAF
              </text>
              <text
                x="435"
                y="310"
                textAnchor="middle"
                className="text-xs font-bold fill-orange-300"
                style={{ fontSize: "11px" }}
              >
                Gateway
              </text>
              <text
                x="435"
                y="335"
                textAnchor="middle"
                className="text-xs fill-orange-200"
                style={{ fontSize: "9px" }}
              >
                App Protection
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
                y="180"
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
                y="215"
                textAnchor="middle"
                className="text-xs font-bold fill-red-300"
                style={{ fontSize: "11px" }}
              >
                Firewall
              </text>
              <text
                x="585"
                y="230"
                textAnchor="middle"
                className="text-xs font-bold fill-red-300"
                style={{ fontSize: "11px" }}
              >
                IDS/IPS
              </text>
              <text
                x="585"
                y="255"
                textAnchor="middle"
                className="text-xs fill-red-200"
                style={{ fontSize: "9px" }}
              >
                Network
              </text>
              <text
                x="585"
                y="268"
                textAnchor="middle"
                className="text-xs fill-red-200"
                style={{ fontSize: "9px" }}
              >
                Perimeter
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
                y="350"
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
                y="375"
                textAnchor="middle"
                className="text-xs font-bold fill-red-300"
                style={{ fontSize: "11px" }}
              >
                VPN
              </text>
              <text
                x="585"
                y="390"
                textAnchor="middle"
                className="text-xs font-bold fill-red-300"
                style={{ fontSize: "11px" }}
              >
                Gateway
              </text>
              <text
                x="585"
                y="415"
                textAnchor="middle"
                className="text-xs fill-red-200"
                style={{ fontSize: "9px" }}
              >
                Remote Access
              </text>
            </g>

            {/* COMPANY BOUNDARY */}
            <rect
              x="670"
              y="100"
              width="520"
              height="420"
              fill="rgba(147, 51, 234, 0.05)"
              stroke="rgba(147, 51, 234, 0.4)"
              strokeWidth="2"
              rx="8"
              strokeDasharray="8,4"
            />
            <text
              x="680"
              y="120"
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
                x="690"
                y="140"
                width="220"
                height="160"
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
                y="165"
                textAnchor="middle"
                className="text-xs font-bold fill-indigo-300"
                style={{ fontSize: "12px" }}
              >
                AWS Cloud
              </text>
              <rect
                x="705"
                y="180"
                width="80"
                height="35"
                fill="rgba(99, 102, 241, 0.2)"
                stroke="rgba(99, 102, 241, 0.6)"
                strokeWidth="1"
                rx="4"
              />
              <text
                x="745"
                y="202"
                textAnchor="middle"
                className="text-xs fill-indigo-200"
                style={{ fontSize: "9px" }}
              >
                EC2/RDS
              </text>
              <rect
                x="800"
                y="180"
                width="95"
                height="35"
                fill="rgba(99, 102, 241, 0.2)"
                stroke="rgba(99, 102, 241, 0.6)"
                strokeWidth="1"
                rx="4"
              />
              <text
                x="847"
                y="202"
                textAnchor="middle"
                className="text-xs fill-indigo-200"
                style={{ fontSize: "9px" }}
              >
                S3/Lambda
              </text>
              <rect
                x="705"
                y="225"
                width="190"
                height="35"
                fill="rgba(99, 102, 241, 0.2)"
                stroke="rgba(99, 102, 241, 0.6)"
                strokeWidth="1"
                rx="4"
              />
              <text
                x="800"
                y="247"
                textAnchor="middle"
                className="text-xs fill-indigo-200"
                style={{ fontSize: "9px" }}
              >
                Encryption, IAM, CloudTrail
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
                x="930"
                y="140"
                width="220"
                height="160"
                fill={hoveredZone === "internal" ? "rgba(147, 51, 234, 0.25)" : "rgba(147, 51, 234, 0.1)"}
                stroke={hoveredZone === "internal" ? "rgba(147, 51, 234, 0.7)" : "rgba(147, 51, 234, 0.4)"}
                strokeWidth={hoveredZone === "internal" ? "2" : "1"}
                rx="6"
                style={{
                  filter: hoveredZone === "internal" ? "drop-shadow(0 0 15px rgba(147, 51, 234, 0.4))" : "none",
                }}
              />
              <text
                x="1040"
                y="165"
                textAnchor="middle"
                className="text-xs font-bold fill-purple-300"
                style={{ fontSize: "12px" }}
              >
                Internal Network
              </text>
              <rect
                x="945"
                y="180"
                width="80"
                height="35"
                fill="rgba(147, 51, 234, 0.2)"
                stroke="rgba(147, 51, 234, 0.6)"
                strokeWidth="1"
                rx="4"
              />
              <text
                x="985"
                y="202"
                textAnchor="middle"
                className="text-xs fill-purple-200"
                style={{ fontSize: "9px" }}
              >
                Servers
              </text>
              <rect
                x="1040"
                y="180"
                width="95"
                height="35"
                fill="rgba(147, 51, 234, 0.2)"
                stroke="rgba(147, 51, 234, 0.6)"
                strokeWidth="1"
                rx="4"
              />
              <text
                x="1087"
                y="202"
                textAnchor="middle"
                className="text-xs fill-purple-200"
                style={{ fontSize: "9px" }}
              >
                Database
              </text>
              <rect
                x="945"
                y="225"
                width="190"
                height="35"
                fill="rgba(147, 51, 234, 0.2)"
                stroke="rgba(147, 51, 234, 0.6)"
                strokeWidth="1"
                rx="4"
              />
              <text
                x="1040"
                y="247"
                textAnchor="middle"
                className="text-xs fill-purple-200"
                style={{ fontSize: "9px" }}
              >
                EDR, SIEM, Encryption
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
                x="690"
                y="320"
                width="220"
                height="160"
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
                y="345"
                textAnchor="middle"
                className="text-xs font-bold fill-green-300"
                style={{ fontSize: "12px" }}
              >
                Office Employees
              </text>
              <circle
                cx="730"
                cy="390"
                r="18"
                fill="rgba(34, 197, 94, 0.2)"
                stroke="rgba(34, 197, 94, 0.6)"
                strokeWidth="1"
              />
              <text
                x="730"
                y="395"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-green-200"
              >
                💻
              </text>
              <circle
                cx="800"
                cy="390"
                r="18"
                fill="rgba(34, 197, 94, 0.2)"
                stroke="rgba(34, 197, 94, 0.6)"
                strokeWidth="1"
              />
              <text
                x="800"
                y="395"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-green-200"
              >
                💻
              </text>
              <circle
                cx="870"
                cy="390"
                r="18"
                fill="rgba(34, 197, 94, 0.2)"
                stroke="rgba(34, 197, 94, 0.6)"
                strokeWidth="1"
              />
              <text
                x="870"
                y="395"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-green-200"
              >
                💻
              </text>
              <text
                x="800"
                y="430"
                textAnchor="middle"
                className="text-xs fill-green-200"
                style={{ fontSize: "9px" }}
              >
                MDM, Zero Trust, DLP
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
                x="930"
                y="320"
                width="220"
                height="160"
                fill={hoveredZone === "remote" ? "rgba(34, 197, 94, 0.25)" : "rgba(34, 197, 94, 0.1)"}
                stroke={hoveredZone === "remote" ? "rgba(34, 197, 94, 0.7)" : "rgba(34, 197, 94, 0.4)"}
                strokeWidth={hoveredZone === "remote" ? "2" : "1"}
                rx="6"
                style={{
                  filter: hoveredZone === "remote" ? "drop-shadow(0 0 15px rgba(34, 197, 94, 0.4))" : "none",
                }}
              />
              <text
                x="1040"
                y="345"
                textAnchor="middle"
                className="text-xs font-bold fill-green-300"
                style={{ fontSize: "12px" }}
              >
                Remote Employees
              </text>
              <circle
                cx="970"
                cy="390"
                r="18"
                fill="rgba(34, 197, 94, 0.2)"
                stroke="rgba(34, 197, 94, 0.6)"
                strokeWidth="1"
              />
              <text
                x="970"
                y="395"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-green-200"
              >
                🏠
              </text>
              <circle
                cx="1040"
                cy="390"
                r="18"
                fill="rgba(34, 197, 94, 0.2)"
                stroke="rgba(34, 197, 94, 0.6)"
                strokeWidth="1"
              />
              <text
                x="1040"
                y="395"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-green-200"
              >
                🏠
              </text>
              <circle
                cx="1110"
                cy="390"
                r="18"
                fill="rgba(34, 197, 94, 0.2)"
                stroke="rgba(34, 197, 94, 0.6)"
                strokeWidth="1"
              />
              <text
                x="1110"
                y="395"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-green-200"
              >
                🏠
              </text>
              <text
                x="1040"
                y="430"
                textAnchor="middle"
                className="text-xs fill-green-200"
                style={{ fontSize: "9px" }}
              >
                VPN, MFA, Device Security
              </text>
            </g>

            {/* DATA FLOW ARROWS */}
            {/* Customer to Internet */}
            <line
              x1="170"
              y1="270"
              x2="200"
              y2="270"
              stroke="rgba(100, 200, 255, 0.4)"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* Internet to DDoS */}
            <line
              x1="360"
              y1="205"
              x2="380"
              y2="205"
              stroke="rgba(100, 200, 255, 0.4)"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* DDoS to WAF */}
            <path
              d="M 435 250 Q 435 260 435 270"
              stroke="rgba(100, 200, 255, 0.4)"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />

            {/* WAF to Firewall */}
            <line
              x1="490"
              y1="315"
              x2="530"
              y2="255"
              stroke="rgba(100, 200, 255, 0.4)"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* Firewall to Company Boundary */}
            <line
              x1="640"
              y1="255"
              x2="670"
              y2="310"
              stroke="rgba(147, 51, 234, 0.4)"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* Remote to VPN */}
            <path
              d="M 1200 400 Q 1100 400 585 440"
              stroke="rgba(34, 197, 94, 0.3)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
            />

            {/* VPN to Company Boundary */}
            <line
              x1="585"
              y1="350"
              x2="670"
              y2="310"
              stroke="rgba(147, 51, 234, 0.4)"
              strokeWidth="2"
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
