/**
 * Defense in Depth Architecture Map
 * Defines all layers of cybersecurity, controls, and responsible roles
 * Author: Rupinder Pal Singh
 */

export interface SecurityRole {
  id: string;
  name: string;
  description: string;
  responsibilities: string[];
}

export interface SecurityControl {
  id: string;
  name: string;
  description: string;
  examples: string[];
}

export interface DefenseLayer {
  id: string;
  name: string;
  displayName: string;
  description: string;
  position: "outer" | "mid" | "inner";
  color: string;
  icon: string;
  controls: SecurityControl[];
  roles: SecurityRole[];
}

export const defenseMapData: DefenseLayer[] = [
  {
    id: "customers",
    name: "Customers & External Users",
    displayName: "Customers",
    description: "End users and external parties interacting with your services",
    position: "outer",
    color: "from-blue-400 to-blue-600",
    icon: "Users",
    controls: [
      {
        id: "auth-mfa",
        name: "Authentication & MFA",
        description: "Multi-factor authentication for user access",
        examples: ["2FA", "TOTP", "Biometric authentication"],
      },
      {
        id: "account-security",
        name: "Account Security",
        description: "Password policies and account recovery mechanisms",
        examples: ["Password complexity requirements", "Account lockout policies"],
      },
      {
        id: "user-awareness",
        name: "User Awareness",
        description: "Training and education for safe practices",
        examples: ["Phishing awareness", "Security best practices"],
      },
    ],
    roles: [
      {
        id: "identity-access-mgmt",
        name: "Identity & Access Management (IAM) Specialist",
        description: "Manages user identities, access policies, and authentication systems",
        responsibilities: [
          "Configure MFA and authentication methods",
          "Manage user provisioning and deprovisioning",
          "Enforce password policies",
          "Monitor access logs and anomalies",
        ],
      },
      {
        id: "security-awareness-trainer",
        name: "Security Awareness Trainer",
        description: "Educates users about security threats and best practices",
        responsibilities: [
          "Conduct phishing simulations",
          "Deliver security training programs",
          "Create awareness campaigns",
          "Track training completion",
        ],
      },
    ],
  },
  {
    id: "internet",
    name: "Internet & External Network",
    displayName: "Internet",
    description: "Public internet and external network connections",
    position: "outer",
    color: "from-cyan-400 to-cyan-600",
    icon: "Globe",
    controls: [
      {
        id: "ddos-protection",
        name: "DDoS Protection",
        description: "Defense against distributed denial of service attacks",
        examples: ["Rate limiting", "Traffic filtering", "Anycast networks"],
      },
      {
        id: "cdn-waf",
        name: "CDN & WAF",
        description: "Content delivery and web application firewall",
        examples: ["Cloudflare", "AWS WAF", "Akamai"],
      },
      {
        id: "tls-encryption",
        name: "TLS/SSL Encryption",
        description: "Encrypted communication channels",
        examples: ["HTTPS", "TLS 1.3", "Certificate management"],
      },
    ],
    roles: [
      {
        id: "network-security-engineer",
        name: "Network Security Engineer",
        description: "Designs and maintains network security infrastructure",
        responsibilities: [
          "Configure firewalls and network segmentation",
          "Implement DDoS protection",
          "Monitor network traffic",
          "Manage VPNs and secure tunnels",
        ],
      },
      {
        id: "infrastructure-security",
        name: "Infrastructure Security Specialist",
        description: "Secures cloud and on-premise infrastructure",
        responsibilities: [
          "Deploy and manage CDN/WAF",
          "Configure TLS certificates",
          "Implement load balancing",
          "Monitor infrastructure health",
        ],
      },
    ],
  },
  {
    id: "dmz",
    name: "DMZ (Demilitarized Zone)",
    displayName: "DMZ",
    description: "Perimeter network hosting public-facing services",
    position: "mid",
    color: "from-orange-400 to-orange-600",
    icon: "Shield",
    controls: [
      {
        id: "reverse-proxy",
        name: "Reverse Proxy",
        description: "Routes and filters external requests",
        examples: ["Nginx", "Apache", "HAProxy"],
      },
      {
        id: "api-gateway",
        name: "API Gateway",
        description: "Controls and monitors API access",
        examples: ["API rate limiting", "Request validation", "API versioning"],
      },
      {
        id: "intrusion-detection",
        name: "Intrusion Detection",
        description: "Detects suspicious network activity",
        examples: ["IDS/IPS", "Snort", "Suricata"],
      },
      {
        id: "vulnerability-scanning",
        name: "Vulnerability Scanning",
        description: "Regular scanning for security weaknesses",
        examples: ["Nessus", "OpenVAS", "Qualys"],
      },
    ],
    roles: [
      {
        id: "security-architect",
        name: "Security Architect",
        description: "Designs overall security architecture and strategies",
        responsibilities: [
          "Design DMZ architecture",
          "Plan security zones",
          "Define security policies",
          "Review threat models",
        ],
      },
      {
        id: "penetration-tester",
        name: "Penetration Tester / Ethical Hacker",
        description: "Tests security by simulating attacks",
        responsibilities: [
          "Conduct penetration tests",
          "Identify vulnerabilities",
          "Document findings",
          "Recommend remediations",
        ],
      },
      {
        id: "web-app-security",
        name: "Web Application Security Engineer",
        description: "Secures web applications and APIs",
        responsibilities: [
          "Review application code",
          "Test for OWASP vulnerabilities",
          "Implement secure coding practices",
          "Manage API security",
        ],
      },
    ],
  },
  {
    id: "perimeter",
    name: "Perimeter & Firewall",
    displayName: "Perimeter",
    description: "Boundary between external and internal networks",
    position: "mid",
    color: "from-red-400 to-red-600",
    icon: "Lock",
    controls: [
      {
        id: "firewall",
        name: "Firewall",
        description: "Controls inbound and outbound traffic",
        examples: ["Palo Alto", "Fortinet", "Cisco ASA"],
      },
      {
        id: "vpn",
        name: "VPN & Secure Access",
        description: "Encrypted remote access to internal network",
        examples: ["IPSec VPN", "SSL VPN", "Zero Trust Network Access"],
      },
      {
        id: "network-segmentation",
        name: "Network Segmentation",
        description: "Divides network into security zones",
        examples: ["VLAN", "Microsegmentation", "Air-gapped networks"],
      },
      {
        id: "threat-intelligence",
        name: "Threat Intelligence",
        description: "Monitors and blocks known threats",
        examples: ["IP reputation", "Malware signatures", "C2 detection"],
      },
    ],
    roles: [
      {
        id: "network-security-engineer",
        name: "Network Security Engineer",
        description: "Designs and maintains network security infrastructure",
        responsibilities: [
          "Configure and manage firewalls",
          "Implement network segmentation",
          "Monitor network flows",
          "Respond to network incidents",
        ],
      },
      {
        id: "soc-analyst",
        name: "SOC Analyst (Security Operations Center)",
        description: "Monitors and responds to security incidents",
        responsibilities: [
          "Monitor security alerts",
          "Investigate incidents",
          "Respond to threats",
          "Escalate critical issues",
        ],
      },
      {
        id: "threat-intelligence-analyst",
        name: "Threat Intelligence Analyst",
        description: "Researches and tracks threats",
        responsibilities: [
          "Collect threat intelligence",
          "Analyze threat actors",
          "Create threat reports",
          "Update threat feeds",
        ],
      },
    ],
  },
  {
    id: "internal-network",
    name: "Company Internal Network",
    displayName: "Internal Network",
    description: "On-premise network infrastructure and systems",
    position: "inner",
    color: "from-purple-400 to-purple-600",
    icon: "Network",
    controls: [
      {
        id: "endpoint-protection",
        name: "Endpoint Protection",
        description: "Protects individual computers and devices",
        examples: ["Antivirus", "EDR (Endpoint Detection & Response)", "DLP"],
      },
      {
        id: "access-control",
        name: "Access Control",
        description: "Limits user access to resources",
        examples: ["RBAC", "ABAC", "Least privilege"],
      },
      {
        id: "data-encryption",
        name: "Data Encryption",
        description: "Encrypts data at rest and in transit",
        examples: ["Full disk encryption", "Database encryption", "TDE"],
      },
      {
        id: "monitoring-logging",
        name: "Monitoring & Logging",
        description: "Tracks system activities and events",
        examples: ["SIEM", "Log aggregation", "Audit trails"],
      },
    ],
    roles: [
      {
        id: "system-administrator",
        name: "System Administrator",
        description: "Manages servers and internal systems",
        responsibilities: [
          "Deploy and patch systems",
          "Manage user accounts",
          "Configure system security",
          "Maintain system availability",
        ],
      },
      {
        id: "database-security",
        name: "Database Security Engineer",
        description: "Secures databases and data",
        responsibilities: [
          "Implement database encryption",
          "Manage database access",
          "Monitor database activity",
          "Perform database backups",
        ],
      },
      {
        id: "incident-response",
        name: "Incident Response Manager",
        description: "Leads response to security incidents",
        responsibilities: [
          "Coordinate incident response",
          "Conduct forensic analysis",
          "Create incident reports",
          "Implement remediation",
        ],
      },
    ],
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud Infrastructure (Hybrid)",
    displayName: "Cloud",
    description: "AWS, Azure, GCP, or private cloud within company boundary",
    position: "inner",
    color: "from-indigo-400 to-indigo-600",
    icon: "Cloud",
    controls: [
      {
        id: "cloud-access-control",
        name: "Cloud Access Control",
        description: "IAM policies for cloud resources",
        examples: ["AWS IAM", "Azure RBAC", "Service accounts"],
      },
      {
        id: "cloud-encryption",
        name: "Cloud Encryption",
        description: "Encryption for cloud data and services",
        examples: ["KMS", "Customer-managed keys", "Encryption at rest"],
      },
      {
        id: "cloud-monitoring",
        name: "Cloud Monitoring",
        description: "Observability and threat detection in cloud",
        examples: ["CloudTrail", "VPC Flow Logs", "Cloud Security Posture Management"],
      },
      {
        id: "container-security",
        name: "Container & Kubernetes Security",
        description: "Secures containerized applications",
        examples: ["Image scanning", "Pod security policies", "Network policies"],
      },
    ],
    roles: [
      {
        id: "cloud-security-architect",
        name: "Cloud Security Architect",
        description: "Designs secure cloud infrastructure",
        responsibilities: [
          "Design cloud security architecture",
          "Implement cloud access controls",
          "Plan cloud compliance",
          "Review cloud configurations",
        ],
      },
      {
        id: "devops-security",
        name: "DevOps / Cloud Engineer (Security Focus)",
        description: "Implements security in CI/CD and cloud deployments",
        responsibilities: [
          "Implement infrastructure as code security",
          "Secure CI/CD pipelines",
          "Deploy containers securely",
          "Manage cloud resources",
        ],
      },
      {
        id: "cloud-compliance",
        name: "Cloud Compliance Officer",
        description: "Ensures cloud compliance with regulations",
        responsibilities: [
          "Monitor cloud compliance",
          "Audit cloud resources",
          "Manage cloud security policies",
          "Report on cloud security posture",
        ],
      },
    ],
  },
  {
    id: "employees",
    name: "Employees (Office & Remote)",
    displayName: "Employees",
    description: "Internal users accessing company resources from office or remote",
    position: "inner",
    color: "from-green-400 to-green-600",
    icon: "Users",
    controls: [
      {
        id: "device-management",
        name: "Device Management",
        description: "Manages and secures employee devices",
        examples: ["MDM", "Mobile Device Management", "Device compliance"],
      },
      {
        id: "zero-trust",
        name: "Zero Trust Architecture",
        description: "Assumes no trust, verifies all access",
        examples: ["Micro-segmentation", "Continuous verification", "Least privilege"],
      },
      {
        id: "secure-communication",
        name: "Secure Communication",
        description: "Encrypted messaging and collaboration",
        examples: ["Encrypted email", "Secure chat", "VPN for remote access"],
      },
      {
        id: "insider-threat",
        name: "Insider Threat Detection",
        description: "Monitors for malicious insider activity",
        examples: ["User behavior analytics", "DLP", "Privileged access monitoring"],
      },
    ],
    roles: [
      {
        id: "security-operations",
        name: "Security Operations Manager",
        description: "Oversees day-to-day security operations",
        responsibilities: [
          "Manage SOC operations",
          "Coordinate incident response",
          "Oversee security tools",
          "Report security metrics",
        ],
      },
      {
        id: "insider-threat-investigator",
        name: "Insider Threat Investigator",
        description: "Investigates suspicious employee activity",
        responsibilities: [
          "Monitor user behavior",
          "Investigate suspicious activities",
          "Coordinate with HR and legal",
          "Document findings",
        ],
      },
      {
        id: "security-engineer",
        name: "Security Engineer",
        description: "Implements security solutions and tools",
        responsibilities: [
          "Deploy security tools",
          "Configure security policies",
          "Troubleshoot security issues",
          "Develop security automation",
        ],
      },
      {
        id: "compliance-officer",
        name: "Compliance Officer",
        description: "Ensures compliance with regulations",
        responsibilities: [
          "Monitor compliance",
          "Audit security controls",
          "Manage compliance documentation",
          "Report to regulators",
        ],
      },
    ],
  },
];

export const allRoles: SecurityRole[] = Array.from(
  new Map(
    defenseMapData
      .flatMap((layer) => layer.roles)
      .map((role) => [role.id, role])
  ).values()
);

export const layerOrder: string[] = [
  "customers",
  "internet",
  "dmz",
  "perimeter",
  "internal-network",
  "cloud-infrastructure",
  "employees",
];
