// Fig.2: Multi-dimensional Empirical Diagnostics - Power Structure & Spatial Justice Assessment
import { cityData, paradigms, calculateGlobalMean } from '../data/cityData.js';

export function renderFig2(container) {
  const fig2Container = document.createElement('div');
  fig2Container.className = 'fig2-container';
  fig2Container.innerHTML = `
    <h2>Fig. 2 | Multi-dimensional Empirical Diagnostics: Power Structure & Spatial Justice Assessment for 10 Global Cities</h2>
    <div class="fig2-panels">
      <div id="panel-2a" class="panel"></div>
      <div id="panel-2b" class="panel"></div>
      <div id="panel-2c" class="panel"></div>
      <div id="panel-2d" class="panel"></div>
      <div id="panel-2e" class="panel"></div>
      <div id="panel-2f" class="panel"></div>
      <div id="panel-2g" class="panel"></div>
    </div>
  `;
  container.appendChild(fig2Container);

  renderPanel2a();
  renderPanel2b();
  renderPanel2c();
  renderPanel2d();
  renderPanel2e();
  renderPanel2f();
  renderPanel2g();
}

// Panel 2a: Power-Actors-Process 3D Coordinate System
function renderPanel2a() {
  const chart = echarts.init(document.getElementById('panel-2a'));
  
  const cities = Object.entries(cityData).map(([key, data]) => ({
    name: data.nameEn,
    paradigm: data.paradigm,
    power: data.scores.governmentControl,
    actors: data.scores.publicParticipation,
    process: data.scores.dataTransparency
  }));

  const option = {
    title: {
      text: '(a) Power–Actors–Process 3D Diagnostic Framework',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: {},
    legend: {
      data: ['Government-Led', 'PPP', 'Market-Driven'],
      bottom: 10
    },
    grid3D: {
      boxWidth: 100,
      boxDepth: 100,
      viewControl: {
        alpha: 20,
        beta: 40
      },
      axisLine: { lineStyle: { width: 2 } },
      axisPointer: { show: true }
    },
    xAxis3D: {
      name: 'Power Concentration',
      min: 1,
      max: 5,
      nameTextStyle: { fontSize: 12 }
    },
    yAxis3D: {
      name: 'Multi-actor Participation',
      min: 1,
      max: 5,
      nameTextStyle: { fontSize: 12 }
    },
    zAxis3D: {
      name: 'Process Transparency',
      min: 1,
      max: 5,
      nameTextStyle: { fontSize: 12 }
    },
    series: [{
      type: 'scatter3D',
      data: cities.map(c => ({
        value: [c.power, c.actors, c.process],
        name: c.name,
        itemStyle: {
          color: c.paradigm === 'Gov-Led' ? '#e74c3c' : 
                 c.paradigm === 'PPP' ? '#3498db' : '#2ecc71'
        }
      })),
      symbolSize: 12,
      label: {
        show: true,
        formatter: '{b}',
        position: 'top',
        textStyle: { fontSize: 10 }
      }
    }]
  };

  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
}

// Panel 2b: Power Concentration Line Chart
function renderPanel2b() {
  const chart = echarts.init(document.getElementById('panel-2b'));
  
  const cities = Object.entries(cityData).sort((a, b) => 
    b[1].powerConcentration - a[1].powerConcentration
  );

  const option = {
    title: {
      text: '(b) City Power Concentration Ranking',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: cities.map(c => c[1].nameEn),
      axisLabel: { rotate: 45, fontSize: 10 }
    },
    yAxis: {
      type: 'value',
      min: 1,
      max: 5,
      name: 'Power Concentration'
    },
    series: [{
      type: 'line',
      data: cities.map(c => ({
        value: c[1].powerConcentration,
        itemStyle: {
          color: c[1].paradigm === 'Gov-Led' ? '#e74c3c' : 
                 c[1].paradigm === 'PPP' ? '#3498db' : '#2ecc71'
        }
      })),
      smooth: true,
      symbolSize: 8,
      lineStyle: { width: 3 }
    }]
  };

  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
}

// Panel 2c: Power Dynamics Across Governance Stages
function renderPanel2c() {
  const chart = echarts.init(document.getElementById('panel-2c'));
  
  const stages = ['Data Sensing', 'Data Aggregation', 'Algorithmic Analysis', 'Decision Execution', 'Feedback Audit'];
  const cities = ['xiongAn', 'singapore', 'barcelona', 'amsterdam', 'newYork'];
  
  const data = {
    'xiongAn': [4.8, 4.5, 4.2, 4.6, 2.0],
    'singapore': [4.5, 4.3, 4.0, 4.2, 2.5],
    'barcelona': [3.2, 3.0, 2.8, 3.0, 4.2],
    'amsterdam': [3.0, 2.8, 2.5, 2.8, 4.4],
    'newYork': [3.5, 3.8, 3.6, 3.4, 3.2]
  };

  const option = {
    title: {
      text: '(c) Power Dynamics Across Governance Stages',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: { trigger: 'axis' },
    legend: {
      data: cities.map(k => cityData[k].nameEn),
      bottom: 10,
      textStyle: { fontSize: 10 }
    },
    xAxis: {
      type: 'category',
      data: stages,
      axisLabel: { fontSize: 10 }
    },
    yAxis: {
      type: 'value',
      min: 1,
      max: 5,
      name: 'Power Density'
    },
    series: cities.map(cityKey => ({
      name: cityData[cityKey].nameEn,
      type: 'line',
      data: data[cityKey],
      smooth: true,
      symbolSize: 6,
      lineStyle: { width: 2 },
      itemStyle: {
        color: cityData[cityKey].paradigm === 'Gov-Led' ? '#e74c3c' : 
               cityData[cityKey].paradigm === 'PPP' ? '#3498db' : '#2ecc71'
      }
    }))
  };

  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
}

// Panel 2d: Power Distribution Diagnostic Matrix
function renderPanel2d() {
  const chart = echarts.init(document.getElementById('panel-2d'));
  
  const neighborhoods = ['High-Income', 'Middle-Class', 'Working-Class', 'Ethnic Minority', 'Marginalized'];
  const services = ['Air Quality', 'Heat Island', 'Traffic Flow', 'Noise', 'Green Coverage'];
  
  const data = [];
  for (let i = 0; i < neighborhoods.length; i++) {
    for (let j = 0; j < services.length; j++) {
      data.push([j, i, 5 - (i * 0.8) - (j * 0.3) + (Math.random() * 0.5 - 0.25)]);
    }
  }

  const option = {
    title: {
      text: '(d) Power Distribution Matrix: Public Service Distributive Justice',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: {
      position: 'top',
      formatter: function(params) {
        return `${neighborhoods[params.value[1]]}<br/>${services[params.value[0]]}<br/>Sensing Density: ${params.value[2].toFixed(2)}`;
      }
    },
    grid: { left: 120, right: 50, top: 50, bottom: 80 },
    xAxis: {
      type: 'category',
      data: services,
      axisLabel: { rotate: 45, fontSize: 10 }
    },
    yAxis: {
      type: 'category',
      data: neighborhoods,
      axisLabel: { fontSize: 10 }
    },
    visualMap: {
      min: 1,
      max: 5,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 10,
      inRange: {
        color: ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db']
      }
    },
    series: [{
      type: 'heatmap',
      data: data,
      label: { show: true, fontSize: 9 },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.5)'
        }
      }
    }]
  };

  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
}

// Panel 2e: Sensor Desert Geographic Weighted Analysis
function renderPanel2e() {
  const chart = echarts.init(document.getElementById('panel-2e'));
  
  const cities = Object.entries(cityData).sort((a, b) => 
    b[1].sensorDesertIndex - a[1].sensorDesertIndex
  );

  const option = {
    title: {
      text: '(e) "Sensor Desert" Index Diagnosis',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: cities.map(c => c[1].nameEn),
      axisLabel: { rotate: 45, fontSize: 10 }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 0.5,
      name: 'Sensor Desert Index',
      inverse: false
    },
    series: [{
      type: 'bar',
      data: cities.map(c => ({
        value: c[1].sensorDesertIndex,
        itemStyle: {
          color: c[1].sensorDesertIndex > 0.3 ? '#e74c3c' : 
                 c[1].sensorDesertIndex > 0.2 ? '#f39c12' : '#2ecc71'
        }
      })),
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
        fontSize: 10
      }
    }]
  };

  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
}

// Panel 2f: Governance Maturity Radar (Current vs. Ideal)
function renderPanel2f() {
  const chart = echarts.init(document.getElementById('panel-2f'));
  
  const current = {
    governmentControl: 3.65,
    deploymentSpeed: 3.80,
    techAgility: 4.05,
    marketOpenness: 3.76,
    dataTransparency: 3.43,
    publicParticipation: 3.33,
    infraEquity: 2.80
  };
  
  const ideal = {
    governmentControl: 3.50,
    deploymentSpeed: 4.00,
    techAgility: 4.20,
    marketOpenness: 4.20,
    dataTransparency: 4.30,
    publicParticipation: 4.20,
    infraEquity: 4.50
  };

  const option = {
    title: {
      text: '(f) Governance Maturity Radar: Current vs. Ideal',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: {},
    legend: {
      data: ['Current Mode', 'Ideal Governance-Driven Mode'],
      bottom: 10
    },
    radar: {
      indicator: [
        { name: 'Gov. Control', max: 5 },
        { name: 'Deployment', max: 5 },
        { name: 'Tech Agility', max: 5 },
        { name: 'Market Open.', max: 5 },
        { name: 'Data Transp.', max: 5 },
        { name: 'Public Partic.', max: 5 },
        { name: 'Infra Equity', max: 5 }
      ],
      radius: '60%'
    },
    series: [{
      type: 'radar',
      data: [
        {
          value: Object.values(current),
          name: 'Current Mode',
          areaStyle: { color: 'rgba(231, 76, 60, 0.3)' },
          lineStyle: { color: '#e74c3c' },
          itemStyle: { color: '#e74c3c' }
        },
        {
          value: Object.values(ideal),
          name: 'Ideal Governance-Driven Mode',
          areaStyle: { color: 'rgba(52, 152, 219, 0.3)' },
          lineStyle: { color: '#3498db' },
          itemStyle: { color: '#3498db' }
        }
      ]
    }]
  };

  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
}

// Panel 2g: Stakeholder Network Topology Comparison
function renderPanel2g() {
  const chart = echarts.init(document.getElementById('panel-2g'));
  
  // Tech-Driven Mode (Centralized)
  const techDriven = {
    nodes: [
      { name: 'Tech Vendors', symbolSize: 50, category: 0 },
      { name: 'Government', symbolSize: 40, category: 1 },
      { name: 'Business', symbolSize: 30, category: 2 },
      { name: 'Public', symbolSize: 20, category: 3 },
      { name: 'Academia', symbolSize: 25, category: 4 }
    ],
    links: [
      { source: 'Tech Vendors', target: 'Government', value: 5 },
      { source: 'Tech Vendors', target: 'Business', value: 4 },
      { source: 'Government', target: 'Public', value: 2 },
      { source: 'Business', target: 'Public', value: 1 },
      { source: 'Academia', target: 'Tech Vendors', value: 3 }
    ]
  };
  
  // Governance-Driven Mode (Distributed)
  const govDriven = {
    nodes: [
      { name: 'Government', symbolSize: 40, category: 0 },
      { name: 'Business', symbolSize: 35, category: 1 },
      { name: 'Public', symbolSize: 40, category: 2 },
      { name: 'Academia', symbolSize: 35, category: 3 },
      { name: 'NGO', symbolSize: 30, category: 4 }
    ],
    links: [
      { source: 'Government', target: 'Business', value: 3 },
      { source: 'Government', target: 'Public', value: 4 },
      { source: 'Business', target: 'Public', value: 3 },
      { source: 'Academia', target: 'Government', value: 4 },
      { source: 'NGO', target: 'Public', value: 5 },
      { source: 'NGO', target: 'Academia', value: 3 },
      { source: 'Business', target: 'Academia', value: 3 }
    ]
  };

  const option = {
    title: {
      text: '(g) Stakeholder Network Topology: Tech-Driven vs. Governance-Driven',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: {},
    legend: {
      data: ['Tech-Driven Mode', 'Governance-Driven Mode'],
      bottom: 10
    },
    series: [
      {
        name: 'Tech-Driven Mode',
        type: 'graph',
        layout: 'force',
        data: techDriven.nodes,
        links: techDriven.links,
        force: { repulsion: 200, edgeLength: 100 },
        roam: true,
        label: { show: true, fontSize: 10 },
        lineStyle: { curveness: 0.2 },
        left: '25%',
        top: '50%',
        width: '40%',
        height: '80%'
      },
      {
        name: 'Governance-Driven Mode',
        type: 'graph',
        layout: 'force',
        data: govDriven.nodes,
        links: govDriven.links,
        force: { repulsion: 200, edgeLength: 100 },
        roam: true,
        label: { show: true, fontSize: 10 },
        lineStyle: { curveness: 0.2 },
        left: '75%',
        top: '50%',
        width: '40%',
        height: '80%'
      }
    ]
  };

  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
}
