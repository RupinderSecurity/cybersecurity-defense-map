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
        name: "Identity & Access Management (IAM) Engineer",
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
        name: "Security Awareness Lead",
        description: "Educates users about security threats and best practices",
        responsibilities: [
          "Conduct phishing simulations",
          "Deliver security training programs",
          "Create awareness campaigns",
          "Track training completion and metrics",
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
          "Design overall network topology and DMZ layout",
        ],
      },
      {
        id: "cloud-security-engineer",
        name: "Cloud Security Engineer",
        description: "Manages cloud security, WAF rules, and CDN security",
        responsibilities: [
          "Manage WAF rules and CDN security policies",
          "Create DDoS response playbooks",
          "Monitor edge security alerts",
          "Tune cloud security services",
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
          "Design DMZ topology and segmentation strategy",
          "Plan security zones and boundaries",
          "Define security policies and standards",
          "Review threat models and architecture",
        ],
      },
      {
        id: "penetration-tester",
        name: "Penetration Tester / Ethical Hacker",
        description: "Tests security by simulating attacks",
        responsibilities: [
          "Conduct penetration tests from external perspective",
          "Identify misconfigurations before attackers",
          "Document findings and vulnerabilities",
          "Recommend remediations and improvements",
        ],
      },
      {
        id: "web-app-security",
        name: "AppSec Engineer",
        description: "Secures web applications and APIs",
        responsibilities: [
          "Perform threat modeling and code review",
          "Test for OWASP vulnerabilities",
          "Implement secure coding practices",
          "Manage SAST/DAST tools and testing",
        ],
      },
      {
        id: "network-architect",
        name: "Network Architect",
        description: "Designs overall network topology and secure connectivity",
        responsibilities: [
          "Design network topology and DMZ layout",
          "Plan secure connectivity between zones",
          "Define network segmentation strategy",
          "Architect disaster recovery and redundancy",
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
        examples: ["IPSec VPN", "SSL VPN", "Zero Trust Network Access (ZTNA)"],
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
        id: "network-security-engineer-perimeter",
        name: "Network Security Engineer",
        description: "Manages firewall rules, IPS, and network segmentation",
        responsibilities: [
          "Write and review firewall rules",
          "Manage IPS signatures and tuning",
          "Design network segmentation",
          "Monitor network flows and incidents",
          "Respond to network-based threats",
        ],
      },
      {
        id: "soc-analyst-tier1",
        name: "SOC Analyst (Tier 1)",
        description: "Monitors and responds to security incidents in real-time",
        responsibilities: [
          "Monitor edge and perimeter alerts in real-time",
          "Triage intrusion attempts and suspicious traffic",
          "Run incident response playbooks",
          "Escalate critical threats to senior analysts",
        ],
      },
      {
        id: "threat-intelligence-analyst",
        name: "Threat Intelligence Analyst",
        description: "Researches and tracks threats",
        responsibilities: [
          "Collect and analyze threat intelligence",
          "Research threat actors and TTPs",
          "Create threat reports and IOC feeds",
          "Update threat intelligence feeds",
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
        examples: ["EDR (Endpoint Detection & Response)", "Antivirus", "DLP"],
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
          "Deploy and patch systems regularly",
          "Manage user accounts and access",
          "Configure system security settings",
          "Maintain system availability and performance",
        ],
      },
      {
        id: "database-security",
        name: "Data Security Engineer",
        description: "Implements encryption, DLP, and data masking",
        responsibilities: [
          "Implement KMS encryption for databases",
          "Configure DLP policies",
          "Build data masking and anonymization",
          "Monitor data access and usage",
        ],
      },
      {
        id: "database-admin-security",
        name: "Database Administrator (Security)",
        description: "Manages database access and audit logging",
        responsibilities: [
          "Manage database access controls",
          "Configure audit logging and monitoring",
          "Validate backup integrity",
          "Implement database encryption",
        ],
      },
      {
        id: "incident-response",
        name: "Incident Responder",
        description: "Leads response to security incidents",
        responsibilities: [
          "Lead breach containment and response",
          "Conduct forensic analysis",
          "Create incident reports and timelines",
          "Implement remediation and recovery",
        ],
      },
      {
        id: "threat-hunter",
        name: "Threat Hunter",
        description: "Proactively searches for hidden threats",
        responsibilities: [
          "Conduct hypothesis-driven threat hunting",
          "Query SIEM and EDR for suspicious activity",
          "Identify advanced persistent threats",
          "Create detection rules from findings",
        ],
      },
      {
        id: "security-engineer",
        name: "Security Engineer",
        description: "Implements security solutions and tools",
        responsibilities: [
          "Deploy SIEM and PAM solutions",
          "Configure vulnerability management tools",
          "Implement security automation",
          "Troubleshoot security tool issues",
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
        examples: ["CloudTrail", "VPC Flow Logs", "CSPM"],
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
          "Design VPC topology and landing zones",
          "Plan encryption architecture",
          "Implement cloud access controls",
          "Review cloud compliance and security posture",
        ],
      },
      {
        id: "cloud-security-engineer-advanced",
        name: "Cloud Security Engineer",
        description: "Remediates CSPM findings and manages IAM",
        responsibilities: [
          "Remediate CSPM findings",
          "Manage IAM policies and permissions",
          "Tune GuardDuty and threat detection",
          "Implement cloud security best practices",
        ],
      },
      {
        id: "devops-security",
        name: "DevSecOps Engineer",
        description: "Implements security in CI/CD and deployments",
        responsibilities: [
          "Embed IaC scanning in CI/CD pipelines",
          "Manage container image scanning",
          "Implement OPA Gatekeeper policies",
          "Automate secrets rotation",
        ],
      },
      {
        id: "platform-security-engineer",
        name: "Platform Security Engineer",
        description: "Secures Kubernetes and container platforms",
        responsibilities: [
          "Secure Kubernetes clusters",
          "Manage pod security policies",
          "Implement service mesh security",
          "Monitor container runtime security",
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
        examples: ["Microsegmentation", "Continuous verification", "Least privilege"],
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
        id: "endpoint-security-engineer",
        name: "Endpoint Security Engineer",
        description: "Deploys EDR agents and manages MDM policies",
        responsibilities: [
          "Deploy EDR agents across endpoints",
          "Manage MDM policies and device compliance",
          "Monitor endpoint security posture",
          "Ensure remote device security",
        ],
      },
      {
        id: "security-operations-manager",
        name: "Security Operations Manager",
        description: "Oversees day-to-day security operations",
        responsibilities: [
          "Manage SOC operations and staffing",
          "Coordinate incident response",
          "Oversee security tools and platforms",
          "Report security metrics and KPIs",
        ],
      },
      {
        id: "insider-threat-investigator",
        name: "Insider Threat Investigator",
        description: "Investigates suspicious employee activity",
        responsibilities: [
          "Monitor user behavior and activities",
          "Investigate suspicious data access",
          "Coordinate with HR and legal teams",
          "Document findings and evidence",
        ],
      },
      {
        id: "iam-engineer",
        name: "IAM Engineer",
        description: "Manages identity lifecycle and access",
        responsibilities: [
          "Manage employee identity provisioning",
          "Configure SSO and MFA",
          "Implement conditional access policies",
          "Govern privileged admin access",
        ],
      },
      {
        id: "privacy-analyst",
        name: "Privacy Analyst / DPO",
        description: "Ensures GDPR and privacy compliance",
        responsibilities: [
          "Ensure GDPR compliance",
          "Define data retention policies",
          "Conduct privacy impact assessments",
          "Manage data subject requests",
        ],
      },
    ],
  },
  {
    id: "governance",
    name: "Risk, Compliance & Governance",
    displayName: "Governance",
    description: "GRC team manages security strategy, risk, audits, and compliance",
    position: "inner",
    color: "from-amber-400 to-amber-600",
    icon: "Shield",
    controls: [
      {
        id: "risk-management",
        name: "Risk Management",
        description: "Identifies and quantifies security risks",
        examples: ["Risk assessment", "Risk register", "FAIR methodology"],
      },
      {
        id: "compliance-frameworks",
        name: "Compliance Frameworks",
        description: "Implements security frameworks and standards",
        examples: ["ISO 27001", "NIST CSF", "SOC 2"],
      },
      {
        id: "audit-controls",
        name: "Audit & Controls",
        description: "Tests and validates security controls",
        examples: ["Control testing", "Audit reports", "Evidence collection"],
      },
      {
        id: "vendor-risk",
        name: "Vendor Risk Management",
        description: "Assesses third-party security",
        examples: ["SOC 2 reviews", "Security assessments", "Vendor scorecards"],
      },
    ],
    roles: [
      {
        id: "ciso",
        name: "CISO / Security Director",
        description: "Owns entire security program and strategy",
        responsibilities: [
          "Define security strategy and vision",
          "Manage security budget and resources",
          "Report to board and executives",
          "Align security with business goals",
        ],
      },
      {
        id: "grc-analyst",
        name: "GRC Analyst",
        description: "Maintains control matrices and compliance",
        responsibilities: [
          "Maintain control matrices",
          "Collect compliance evidence",
          "Manage compliance platform",
          "Track control remediation",
        ],
      },
      {
        id: "it-auditor",
        name: "IT Auditor",
        description: "Tests controls for design and effectiveness",
        responsibilities: [
          "Test control design and operating effectiveness",
          "Write audit reports",
          "Identify control gaps",
          "Recommend improvements",
        ],
      },
      {
        id: "risk-analyst",
        name: "Risk Analyst",
        description: "Quantifies enterprise risk using FAIR",
        responsibilities: [
          "Quantify enterprise risk (FAIR)",
          "Maintain risk register",
          "Brief leadership on risks",
          "Prioritize risk mitigation",
        ],
      },
      {
        id: "third-party-risk",
        name: "Third-Party Risk Analyst",
        description: "Assesses vendor and supplier security",
        responsibilities: [
          "Conduct vendor security assessments",
          "Review SOC 2 reports",
          "Monitor vendor security scores",
          "Manage vendor risk lifecycle",
        ],
      },
      {
        id: "ai-governance",
        name: "AI Governance Specialist",
        description: "Manages AI security and compliance",
        responsibilities: [
          "Maintain AI inventory",
          "Implement ISO 42001",
          "Ensure EU AI Act compliance",
          "Define responsible AI policies",
        ],
      },
    ],
  },
  {
    id: "incident-response-layer",
    name: "Incident Response & Forensics",
    displayName: "Incident Response",
    description: "Specialized team for breach response and forensic analysis",
    position: "inner",
    color: "from-rose-400 to-rose-600",
    icon: "AlertTriangle",
    controls: [
      {
        id: "incident-management",
        name: "Incident Management",
        description: "Processes and procedures for incident handling",
        examples: ["Incident playbooks", "Escalation procedures", "Communication plans"],
      },
      {
        id: "forensics",
        name: "Digital Forensics",
        description: "Investigates and preserves evidence",
        examples: ["Disk imaging", "Memory analysis", "Timeline reconstruction"],
      },
      {
        id: "threat-intel",
        name: "Threat Intelligence",
        description: "Analyzes threats and adversary tactics",
        examples: ["ATT&CK mapping", "IOC research", "Adversary profiling"],
      },
    ],
    roles: [
      {
        id: "incident-responder-advanced",
        name: "Incident Responder",
        description: "Leads active incidents and containment",
        responsibilities: [
          "Lead incident response and containment",
          "Handle evidence preservation",
          "Conduct post-mortems",
          "Implement remediation",
        ],
      },
      {
        id: "forensics-analyst",
        name: "Forensics Analyst",
        description: "Conducts digital forensics and analysis",
        responsibilities: [
          "Perform disk and memory analysis",
          "Reconstruct attack timelines",
          "Preserve legal evidence",
          "Document findings for legal proceedings",
        ],
      },
      {
        id: "threat-intel-analyst",
        name: "Threat Intel Analyst",
        description: "Researches adversary TTPs and IOCs",
        responsibilities: [
          "Research threat actor TTPs",
          "Create IOC reports",
          "Analyze malware and tools",
          "Inform defense improvements",
        ],
      },
      {
        id: "detection-engineer",
        name: "Detection Engineer",
        description: "Writes detection rules and improves coverage",
        responsibilities: [
          "Write Sigma/KQL detection rules",
          "Map ATT&CK coverage",
          "Reduce false positives",
          "Tune detection logic",
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
  "governance",
  "incident-response-layer",
];
