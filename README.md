# 🛡️ Interactive Defense in Depth Map
### *Cybersecurity Careers Without the Hype & The UNICORN Framework*

An interactive, technical visualization of modern cybersecurity architecture, designed to bridge the gap between "Defense in Depth" theory, real-world career paths, and AI governance. 

This project was developed for **BSides San Diego 2026** and **BSides SLC**.

**🌐 [View the Live Interactive Map](https://RupinderSecurity.github.io/cybersecurity-defense-map)**

---

## 🎯 Overview
This application provides a "SOC-aesthetic" concentric visualization of a modern enterprise security stack. It moves beyond static diagrams by allowing users to explore the relationship between **Technical Controls**, the **Human Intelligence** required to manage them, and the emerging world of **AI Guardrails**.

### Key Features:
* **Concentric Architecture:** Visualizes security from the Customer/Edge layers down to the Core Data layer.
* **Role-Based Insights:** Clickable layers reveal specific cybersecurity roles (SOC, GRC, Engineering) responsible for that domain.
* **Career Logic:** Includes salary ranges (2025 estimates), day-in-the-life summaries, and realistic entry/exit career paths for every role.
* **Technical Deep-Dives:** Explores specific controls like WAF, EDR, IAM, and Zero Trust Architecture.

---

## 🦄 The UNICORN Framework Integration
This project serves as a visual companion to the **UNICORN Framework** (Universal Network for Intelligent Control & Oversight in Robotic Nodes), specifically focusing on auditing and evaluating guardrails in enterprise LLM assistants.

As AI models move into the "Core Data" and "Application" layers of the map, the UNICORN framework provides the governance structure to ensure these models operate within safety parameters. The map helps practitioners visualize where AI guardrails sit within the traditional defense-in-depth model.

---

## 🛠️ Tech Stack
* **Framework:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Components:** [Radix UI](https://www.radix-ui.com/) + [Shadcn UI](https://ui.shadcn.com/)
* **Routing:** [Wouter](https://github.com/molecula-js/wouter)
* **Icons & Motion:** [Lucide React](https://lucide.dev/) + [tw-animate-css](https://github.com/m-p-p-p/tw-animate-css)
* **Deployment:** GitHub Actions + GitHub Pages

---

## 🚀 Local Development

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/RupinderSecurity/cybersecurity-defense-map.git](https://github.com/RupinderSecurity/cybersecurity-defense-map.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```

---

## ✒️ Author
**Rupinder Pal Singh** *Information Security, Audit, and Compliance Leader*

Built at the intersection of **Clinical Psychology** and **Cybersecurity Governance** to provide a more human-centric view of our technical defense layers. This visualization is part of a larger research effort into **Cognitive GRC** and **AI Safety**.

---
*Note: If the map does not load correctly or shows a 404, ensure you are visiting the URL with the trailing slash: `/cybersecurity-defense-map/`.*
