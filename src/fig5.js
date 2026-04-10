// Fig.5: 负责任城市数字孪生治理的全生命周期协同路线图
import { cityData, paradigms } from '../data/cityData.js';

export function renderFig5(container) {
  const fig5Container = document.createElement('div');
  fig5Container.className = 'fig5-container';
  fig5Container.innerHTML = `
    <h2>Fig. 5 | 负责任城市数字孪生治理的全生命周期协同路线图</h2>
    <div class="fig5-panels">
      <div id="panel-5a" class="panel"></div>
      <div id="panel-5b" class="panel"></div>
      <div id="panel-5c" class="panel"></div>
      <div id="panel-5d" class="panel"></div>
      <div id="panel-5e" class="panel"></div>
    </div>
  `;
  container.appendChild(fig5Container);

  renderPanel5a();
  renderPanel5b();
  renderPanel5c();
  renderPanel5d();
  renderPanel5e();
}

// Panel 5a: 设计阶段 - 嵌入式伦理
function renderPanel5a() {
  const chart = echarts.init(document.getElementById('panel-5a'));
  
  const option = {
    title: {
      text: '(a) 设计阶段: 嵌入式伦理 (Ethics by Design)',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: {},
    series: [{
      type: 'sankey',
      layout: 'none',
      emphasis: { focus: 'adjacency' },
      data: [
        { name: '城市功能定位', itemStyle: { color: '#3498db' } },
        { name: '港口型城市', itemStyle: { color: '#2ecc71' } },
        { name: '金融中心', itemStyle: { color: '#e74c3c' } },
        { name: '历史名城', itemStyle: { color: '#f39c12' } },
        { name: '白纸造城', itemStyle: { color: '#9b59b6' } },
        { name: '公平性约束预设', itemStyle: { color: '#1abc9c' } },
        { name: '数据主权保护', itemStyle: { color: '#e67e22' } },
        { name: '文化遗产保护', itemStyle: { color: '#34495e' } },
        { name: '传感器沙漠预防', itemStyle: { color: '#16a085' } }
      ],
      links: [
        { source: '城市功能定位', target: '港口型城市', value: 3 },
        { source: '城市功能定位', target: '金融中心', value: 3 },
        { source: '城市功能定位', target: '历史名城', value: 3 },
        { source: '城市功能定位', target: '白纸造城', value: 3 },
        { source: '港口型城市', target: '公平性约束预设', value: 2 },
        { source: '金融中心', target: '数据主权保护', value: 3 },
        { source: '历史名城', target: '文化遗产保护', value: 3 },
        { source: '白纸造城', target: '传感器沙漠预防', value: 3 }
      ],
      lineStyle: { curveness: 0.5, opacity: 0.6 },
      label: { fontSize: 10 }
    }]
  };

  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
}

// Panel 5b: 部署阶段 - 监管沙盒
function renderPanel5b() {
  const chart = echarts.init(document.getElementById('panel-5b'));
  
  const stages = ['需求分析', '系统设计', '沙盒测试', '互操作性验证', '隐私评估', '部署上线'];
  const metrics = ['政府引领型', 'PPP模式', '市场驱动型'];
  
  const data = {
    '政府引领型': [4.5, 4.2, 3.8, 3.5, 3.2, 4.0],
    'PPP模式': [3.5, 3.8, 4.2, 4.5, 4.3, 3.8],
    '市场驱动型': [3.8, 4.0, 3.9, 3.7, 3.5, 4.2]
  };

  const option = {
    title: {
      text: '(b) 部署阶段: 监管沙盒与互操作性测试',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: { trigger: 'axis' },
    legend: {
      data: metrics,
      bottom: 10
    },
    radar: {
      indicator: stages.map(s => ({ name: s, max: 5 })),
      radius: '65%',
      center: ['50%', '50%']
    },
    series: [{
      type: 'radar',
      data: metrics.map((m, i) => ({
        value: data[m],
        name: m,
        areaStyle: { 
          color: i === 0 ? 'rgba(231, 76, 60, 0.2)' : 
                 i === 1 ? 'rgba(52, 152, 219, 0.2)' : 'rgba(46, 204, 113, 0.2)'
        },
        lineStyle: { 
          color: i === 0 ? '#e74c3c' : i === 1 ? '#3498db' : '#2ecc71' 
        },
        itemStyle: { 
          color: i === 0 ? '#e74c3c' : i === 1 ? '#3498db' : '#2ecc71' 
        }
      }))
    }]
  };

  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
}

// Panel 5c: 运营阶段 - 公众审计仪表盘
function renderPanel5c() {
  const chart = echarts.init(document.getElementById('panel-5c'));
  
  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  
  const option = {
    title: {
      text: '(c) 运营阶段: 公众实时审计仪表盘',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: { trigger: 'axis' },
    legend: {
      data: ['公众参与度', '算法透明度', '数据开放率', '公平性指数'],
      bottom: 10
    },
    grid: { left: 60, right: 40, top: 60, bottom: 60 },
    xAxis: {
      type: 'category',
      data: months,
      axisLabel: { fontSize: 10 }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      name: '百分比 (%)'
    },
    series: [
      {
        name: '公众参与度',
        type: 'line',
        data: [45, 48, 52, 58, 62, 68, 72, 75, 78, 82, 85, 88],
        smooth: true,
        areaStyle: { opacity: 0.1 },
        lineStyle: { width: 3 },
        itemStyle: { color: '#3498db' }
      },
      {
        name: '算法透明度',
        type: 'line',
        data: [50, 53, 56, 60, 64, 67, 70, 73, 76, 78, 80, 83],
        smooth: true,
        areaStyle: { opacity: 0.1 },
        lineStyle: { width: 3 },
        itemStyle: { color: '#2ecc71' }
      },
      {
        name: '数据开放率',
        type: 'line',
        data: [55, 58, 62, 66, 70, 74, 77, 80, 82, 85, 87, 90],
        smooth: true,
        areaStyle: { opacity: 0.1 },
        lineStyle: { width: 3 },
        itemStyle: { color: '#f39c12' }
      },
      {
        name: '公平性指数',
        type: 'line',
        data: [40, 43, 47, 52, 56, 60, 65, 68, 72, 75, 78, 82],
        smooth: true,
        areaStyle: { opacity: 0.1 },
        lineStyle: { width: 3 },
        itemStyle: { color: '#e74c3c' }
      }
    ]
  };

  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
}

// Panel 5d: 算法权威生产管线
function renderPanel5d() {
  const chart = echarts.init(document.getElementById('panel-5d'));
  
  const option = {
    title: {
      text: '(d) G-tech核心与算法权威生产管线',
      subtext: '揭示权力从行政决策向算法逻辑的隐性迁移',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' },
      subtextStyle: { fontSize: 10 }
    },
    tooltip: {},
    series: [{
      type: 'sankey',
      layout: 'none',
      emphasis: { focus: 'adjacency' },
      data: [
        { name: '物理城市感知', itemStyle: { color: '#3498db' } },
        { name: '选择性感知过滤', itemStyle: { color: '#e74c3c' } },
        { name: '数据聚合清洗', itemStyle: { color: '#2ecc71' } },
        { name: '语义标注映射', itemStyle: { color: '#f39c12' } },
        { name: '黑箱仿真建模', itemStyle: { color: '#9b59b6' } },
        { name: '算法决策输出', itemStyle: { color: '#e67e22' } },
        { name: '权力隐性重组', itemStyle: { color: '#c0392b' } }
      ],
      links: [
        { source: '物理城市感知', target: '选择性感知过滤', value: 5 },
        { source: '选择性感知过滤', target: '数据聚合清洗', value: 4 },
        { source: '数据聚合清洗', target: '语义标注映射', value: 4 },
        { source: '语义标注映射', target: '黑箱仿真建模', value: 4 },
        { source: '黑箱仿真建模', target: '算法决策输出', value: 4 },
        { source: '算法决策输出', target: '权力隐性重组', value: 5 }
      ],
      lineStyle: { 
        curveness: 0.5, 
        opacity: 0.6,
        color: 'gradient'
      },
      label: { fontSize: 11, fontWeight: 'bold' }
    }]
  };

  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
}

// Panel 5e: 空间正义翻译矩阵(SDG 11.3对齐)
function renderPanel5e() {
  const chart = echarts.init(document.getElementById('panel-5e'));
  
  const sdgPillars = [
    '包容性城市化',
    '可持续人居规划',
    '参与式治理',
    '边缘群体保护'
  ];
  
  const interventionPoints = ['数据感知', '仿真建模', '决策执行', '反馈审计'];
  
  const calibrationMaturity = [
    // [x, y, value] - value代表成熟度(1-5),色彩从橙色(高风险)到蓝色(公平对齐)
    [0, 0, 2], [1, 0, 3], [2, 0, 4], [3, 0, 3],  // 包容性城市化
    [0, 1, 2], [1, 1, 2], [2, 1, 3], [3, 1, 4],  // 可持续人居规划
    [0, 2, 3], [1, 2, 3], [2, 2, 4], [3, 2, 5],  // 参与式治理
    [0, 3, 1], [1, 3, 2], [2, 3, 3], [3, 3, 4]   // 边缘群体保护
  ];

  const option = {
    title: {
      text: '(e) 空间正义翻译矩阵: SDG 11.3战略对齐',
      subtext: '校准成熟度色彩梯度: 橙色(高风险/感知端) → 蓝色(公平对齐/执行端)',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' },
      subtextStyle: { fontSize: 9 }
    },
    tooltip: {
      position: 'top',
      formatter: function(params) {
        const actions = {
          1: '补全边缘社区数据鸿沟',
          2: '建立数据准入标准',
          3: '实施算法审计',
          4: '确保分配正义',
          5: '实现完全公平对齐'
        };
        return `${sdgPillars[params.value[1]]} × ${interventionPoints[params.value[0]]}<br/>成熟度: ${params.value[2]}/5<br/>动作: ${actions[params.value[2]]}`;
      }
    },
    grid: { left: 120, right: 80, top: 80, bottom: 80 },
    xAxis: {
      type: 'category',
      data: interventionPoints,
      axisLabel: { fontSize: 11, rotate: 30 },
      name: 'UDT技术干预点',
      nameLocation: 'middle',
      nameGap: 35
    },
    yAxis: {
      type: 'category',
      data: sdgPillars,
      axisLabel: { fontSize: 11 },
      name: 'SDG 11.3支柱',
      nameLocation: 'end'
    },
    visualMap: {
      min: 1,
      max: 5,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 10,
      text: ['公平对齐', '高风险'],
      inRange: {
        color: ['#e74c3c', '#f39c12', '#f1c40f', '#3498db', '#2980b9']
      }
    },
    series: [{
      type: 'heatmap',
      data: calibrationMaturity,
      label: { 
        show: true, 
        fontSize: 12,
        fontWeight: 'bold',
        formatter: function(p) {
          return p.value[2] + '/5';
        }
      },
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
