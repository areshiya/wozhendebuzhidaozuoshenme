# Global Governance Toolkit - Urban Digital Twins

## 📊 Overview

This toolkit implements executable visualizations reproducing Fig.2, Fig.4, and Fig.5 from the paper **"Urban Digital Twins for Collaborative Smart City Governance"** (Nature Cities), plus an interactive **City Assessment & Benchmarking System**.

## ✨ Key Features

### 1. **City Assessment Tool** 🎯
Input your city's governance scores (1-5 scale) across 6 dimensions:
- **Government Control**: Centralized oversight degree
- **Deployment Speed**: Infrastructure rollout velocity
- **Technology Agility**: Cutting-edge tech adoption capacity
- **Market Openness**: Private sector participation
- **Data Transparency**: Public data accessibility
- **Public Participation**: Citizen engagement depth

**Automated Outputs:**
- ✅ Governance paradigm classification (Gov-Led / PPP / Market-Driven)
- ✅ Governance maturity score (Emerging / Developing / Advanced)
- ✅ Power concentration index
- ✅ Sensor desert risk assessment
- ✅ Tailored governance recommendations
- ✅ SDG 11.3 alignment actions

### 2. **Fig. 2: Multi-dimensional Empirical Diagnostics**
- (a) Power–Actors–Process 3D Diagnostic Framework
- (b) City Power Concentration Ranking
- (c) Power Dynamics Across Governance Stages
- (d) Power Distribution Matrix: Public Service Distributive Justice
- (e) "Sensor Desert" Index Diagnosis
- (f) Governance Maturity Radar: Current vs. Ideal
- (g) Stakeholder Network Topology: Tech-Driven vs. Governance-Driven

### 3. **Fig. 4: Governance Diversity Atlas**
- (a) Governance Paradigm Fingerprints: Administrative Efficiency vs. Social Inclusion
- (b-k) Nightingale Rose Charts for 10 Global Representative Cities:
  - **Government-Led**: Xiong'an, Singapore, THE LINE
  - **PPP**: Barcelona, Amsterdam, Rotterdam, Minneapolis-St Paul
  - **Market-Driven**: New York, Toronto, Seoul

### 4. **Fig. 5: Lifecycle Roadmap**
- (a) Design Stage: Ethics by Design (Sankey Diagram)
- (b) Deployment Stage: Regulatory Sandbox & Interoperability (Radar)
- (c) Operation Stage: Public Real-Time Audit Dashboard (Trend Lines)
- (d) Algorithmic Authority Production Pipeline (Sankey)
- (e) Spatial Justice Matrix: SDG 11.3 Strategic Alignment (Heatmap)

### 5. **City Comparison & Benchmarking** 🔍
- Select multiple cities for side-by-side comparison
- View deviations from global mean benchmarks
- Identify strengths and weaknesses relative to paradigm peers

## 🚀 Quick Start

### Option 1: Direct Open (Recommended)
Simply double-click **`demo.html`** to open in your browser. No server required!

### Option 2: HTTP Server
1. Ensure Node.js is installed
2. Run: `npm install -g http-server`
3. Navigate to project root: `cd global-governance-toolkit`
4. Start server: `http-server -p 8080 -c-1`
5. Visit: `http://localhost:8080`

## 📁 Project Structure

```
global-governance-toolkit/
├── demo.html                  # 🎯 Interactive demo with assessment tool
├── standalone.html            # Figures only (standalone version)
├── index.html                 # Modular version (requires HTTP server)
├── data/
│   └── cityData.js            # 10 cities data + assessment engine
├── src/
│   ├── fig2.js                # Fig.2 visualization (modular)
│   ├── fig4.js                # Fig.4 visualization (modular)
│   └── fig5.js                # Fig.5 visualization (modular)
├── package.json
└── README.md
```

## 📈 Data & Methodology

### Scoring System (1-5 Scale)
All indicators are scored based on structured coding protocol from official policy white papers, technical documentation, and progress reports.

### Governance Paradigm Classification
The toolkit uses an algorithm to classify cities into three paradigms based on:
- **Administrative Efficiency** = (Government Control + Deployment Speed) / 2
- **Social Inclusion** = (Data Transparency + Public Participation) / 2
- **Market Orientation** = (Market Openness + Technology Agility) / 2

### Risk Metrics
- **Sensor Desert Index**: Weighted composite of data transparency, public participation, and market openness deficits
- **Power Concentration Index**: Weighted measure of government control vs. participatory governance

## 🎯 Use Cases

- **Academic Research**: Reproduce and extend paper's empirical findings
- **Policy Making**: Benchmark your city's governance against global peers
- **Teaching**: Visualize governance paradigm trade-offs
- **Urban Planning**: Generate tailored governance recommendations
- **SDG Alignment**: Map UDT interventions to SDG 11.3 targets

## 🔧 Technology Stack

- **Visualization**: Apache ECharts 5.4.3
- **Architecture**: Vanilla JavaScript (no build step required)
- **Styling**: CSS3 (Grid + Flexbox)
- **Server**: Optional http-server for modular version

## 📊 Adding New Cities

To add a new city to the benchmark dataset, edit `data/cityData.js`:

```javascript
yourCity: {
  name: 'City Name',
  paradigm: 'Gov-Led', // or 'PPP' or 'Market'
  type: 'Global Hub', // City type
  scores: {
    governmentControl: 3.5,
    deploymentSpeed: 3.5,
    techAgility: 3.5,
    marketOpenness: 3.5,
    dataTransparency: 3.5,
    publicParticipation: 3.5
  },
  sensorDesertIndex: 0.25,
  powerConcentration: 3.0
}
```

Or use the interactive **City Assessment Tool** in `demo.html` to input scores and receive automated recommendations!

## 📖 Citation

If you use this toolkit, please cite the original paper:

```
@article{UDT_Governance_2026,
  title={Urban Digital Twins for Collaborative Smart City Governance},
  journal={Nature Cities},
  year={2026}
}
```

## 🎓 Governance Recommendations Engine

The toolkit includes a built-in recommendations engine that provides:

### For Government-Led Cities:
- Implement "Ethics by Design" frameworks
- Establish independent algorithmic audits
- Create participatory feedback loops
- Deploy sensors equitably across neighborhoods

### For PPP Cities:
- Streamline decision-making while maintaining inclusivity
- Invest in interoperability standards (e.g., DUET)
- Develop capacity-building programs
- Implement privacy-preserving technologies

### For Market-Driven Cities:
- Implement robust data protection regulations
- Establish algorithmic accountability frameworks
- Create public interest oversight boards
- Ensure vendor diversity

## ⚖️ License

This toolkit is for academic research use only.

## 📧 Contact

For questions or contributions, please reach out to the development team.
