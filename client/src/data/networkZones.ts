/**
 * Network Diagram Zones
 * Defines clickable areas and their associated security layers
 * Author: Rupinder Pal Singh
 */

export interface NetworkZone {
  id: string;
  name: string;
  layerId: string;
  description: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

export const networkZones: NetworkZone[] = [
  {
    id: "customers-zone",
    name: "Customers & Users",
    layerId: "customers",
    description: "End users accessing company services",
    x: 50,
    y: 200,
    width: 120,
    height: 150,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "internet-zone",
    name: "Internet",
    layerId: "internet",
    description: "Public internet and external network",
    x: 200,
    y: 150,
    width: 150,
    height: 250,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    id: "ddos-zone",
    name: "DDoS Protection",
    layerId: "internet",
    description: "DDoS mitigation and CDN",
    x: 380,
    y: 180,
    width: 100,
    height: 80,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    id: "waf-zone",
    name: "WAF",
    layerId: "dmz",
    description: "Web Application Firewall",
    x: 380,
    y: 280,
    width: 100,
    height: 80,
    color: "from-orange-400 to-orange-600",
  },
  {
    id: "firewall-zone",
    name: "Firewall",
    layerId: "perimeter",
    description: "Perimeter firewall and IDS/IPS",
    x: 520,
    y: 200,
    width: 100,
    height: 150,
    color: "from-red-400 to-red-600",
  },
  {
    id: "company-boundary",
    name: "Company Boundary",
    layerId: "internal-network",
    description: "Company network perimeter",
    x: 650,
    y: 100,
    width: 500,
    height: 400,
    color: "from-purple-400 to-purple-600",
  },
  {
    id: "aws-zone",
    name: "AWS Cloud",
    layerId: "cloud-infrastructure",
    description: "Cloud infrastructure and services",
    x: 680,
    y: 130,
    width: 200,
    height: 160,
    color: "from-indigo-400 to-indigo-600",
  },
  {
    id: "internal-network-zone",
    name: "Internal Network",
    layerId: "internal-network",
    description: "On-premise servers and systems",
    x: 900,
    y: 130,
    width: 200,
    height: 160,
    color: "from-purple-400 to-purple-600",
  },
  {
    id: "office-employees-zone",
    name: "Office Employees",
    layerId: "employees",
    description: "Employees in office",
    x: 680,
    y: 310,
    width: 200,
    height: 160,
    color: "from-green-400 to-green-600",
  },
  {
    id: "remote-employees-zone",
    name: "Remote Employees",
    layerId: "employees",
    description: "Remote employees via VPN",
    x: 900,
    y: 310,
    width: 200,
    height: 160,
    color: "from-green-400 to-green-600",
  },
  {
    id: "vpn-zone",
    name: "VPN Gateway",
    layerId: "perimeter",
    description: "VPN access for remote users",
    x: 520,
    y: 380,
    width: 100,
    height: 80,
    color: "from-red-400 to-red-600",
  },
];
