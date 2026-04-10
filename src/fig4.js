// Fig.4: 全球典型城市数字孪生治理的多样性图谱与范式特征
import { cityData, paradigms, calculateGlobalMean, calculateDeviation } from '../data/cityData.js';

export function renderFig4(container) {
  const fig4Container = document.createElement('div');
  fig4Container.className = 'fig4-container';
  fig4Container.innerHTML = `
    <h2>Fig. 4 | 全球典型城市数字孪生治理的多样性图谱与范式特征</h2>
    <div class="fig4-panels">
      <div id="panel-4a" class="panel panel-4a"></div>
      <div id="panel-4b-k" class="panel panel-4b-k"></div>
    </div>
  `;
  container.appendChild(fig4Container);

  renderPanel4a();
  renderPanel4b_k();
}

// Panel 4a: 治理范式指纹分析(离差条形图)
function renderPanel4a() {
  const chart = echarts.init(document.getElementById('panel-4a'));
  
  const mean = calculateGlobalMean();
  const indicators = {
    governmentControl: '政府管控',
    deploymentSpeed: '部署速度',
    techAgility: '技术敏捷',
    marketOpenness: '市场开放',
    dataTransparency: '数据透明',
    publicParticipation: '公众参与'
  };
  
  const indicatorKeys = Object.keys(indicators);
  
  // 计算每种范式的平均离差
  const paradigmDeviation = {};
  Object.keys(paradigms).forEach(pKey => {
    paradigmDeviation[pKey] = {};
    indicatorKeys.forEach(key => {
      const cities = paradigms[pKey].cities;
      paradigmDeviation[pKey][key] = cities.reduce((sum, cityKey) => {
        return sum + (cityData[cityKey].scores[key] - mean[key]);
      }, 0) / cities.length;
    });
  });

  const option = {
    title: {
      text: '(a) 治理范式指纹分析: 行政效能 vs 社会包容',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: function(params) {
        let result = params[0].name + '<br/>';
        params.forEach(p => {
          result += `${p.seriesName}: ${p.value > 0 ? '+' : ''}${p.value.toFixed(2)}<br/>`;
        });
        return result;
      }
    },
    legend: {
      data: ['政府引领型', 'PPP模式', '市场驱动型'],
      bottom: 10
    },
    grid: { left: 100, right: 50, top: 60, bottom: 60 },
    xAxis: {
      type: 'value',
      name: '离差值 (相对于全球均值)',
      nameLocation: 'middle',
      nameGap: 30,
      axisLine: { lineStyle: { color: '#333' } },
      splitLine: { lineStyle: { type: 'dashed' } }
    },
    yAxis: {
      type: 'category',
      data: indicatorKeys.map(k => indicators[k]),
      axisLabel: { fontSize: 11 }
    },
    series: [
      {
        name: '政府引领型',
        type: 'bar',
        data: indicatorKeys.map(key => paradigmDeviation['Gov-Led'][key]),
        itemStyle: { color: '#e74c3c' },
        label: {
          show: true,
          position: 'right',
          formatter: function(p) { return p.value > 0 ? '+' + p.value.toFixed(2) : p.value.toFixed(2); },
          fontSize: 9
        }
      },
      {
        name: 'PPP模式',
        type: 'bar',
        data: indicatorKeys.map(key => paradigmDeviation['PPP'][key]),
        itemStyle: { color: '#3498db' },
        label: {
          show: true,
          position: 'right',
          formatter: function(p) { return p.value > 0 ? '+' + p.value.toFixed(2) : p.value.toFixed(2); },
          fontSize: 9
        }
      },
      {
        name: '市场驱动型',
        type: 'bar',
        data: indicatorKeys.map(key => paradigmDeviation['Market'][key]),
        itemStyle: { color: '#2ecc71' },
        label: {
          show: true,
          position: 'right',
          formatter: function(p) { return p.value > 0 ? '+' + p.value.toFixed(2) : p.value.toFixed(2); },
          fontSize: 9
        }
      }
    ],
    visualMap: {
      show: false,
      dimension: 0,
      pieces: [{
        lte: 0,
        color: '#95a5a6'
      }, {
        gt: 0,
        color: '#3498db'
      }]
    }
  };

  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
}

// Panel 4b-k: 10个城市的南丁格尔玫瑰图
function renderPanel4b_k() {
  const container = document.getElementById('panel-4b-k');
  const cityKeys = Object.keys(cityData);
  
  // 创建3x4网格布局
  const grid = document.createElement('div');
  grid.className = 'rose-grid';
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
  grid.style.gap = '15px';
  grid.style.padding = '10px';
  
  cityKeys.forEach((cityKey, index) => {
    const chartDiv = document.createElement('div');
    chartDiv.id = `panel-4${String.fromCharCode(98 + index)}`;
    chartDiv.style.width = '100%';
    chartDiv.style.height = '300px';
    grid.appendChild(chartDiv);
    
    renderRoseChart(chartDiv.id, cityKey);
  });
  
  container.appendChild(grid);
}

function renderRoseChart(chartId, cityKey) {
  const chart = echarts.init(document.getElementById(chartId));
  const city = cityData[cityKey];
  const paradigmColor = paradigms[city.paradigm].color;
  
  const indicators = {
    governmentControl: '政府管控',
    deploymentSpeed: '部署速度',
    techAgility: '技术敏捷',
    marketOpenness: '市场开放',
    dataTransparency: '数据透明',
    publicParticipation: '公众参与'
  };
  
  const option = {
    title: {
      text: `(${chartId.split('-')[1].toUpperCase()}) ${city.name} (${city.type})`,
      subtext: `${paradigms[city.paradigm].label} | 范式: ${city.paradigm}`,
      left: 'center',
      textStyle: { 
        fontSize: 12, 
        fontWeight: 'bold',
        color: paradigmColor
      },
      subtextStyle: { fontSize: 9 }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}分'
    },
    polar: {
      radius: ['15%', '75%'],
      center: ['50%', '55%']
    },
    angleAxis: {
      type: 'category',
      data: Object.values(indicators),
      startAngle: 75,
      axisLabel: { 
        fontSize: 9,
        interval: 0,
        rotate: 30
      }
    },
    radiusAxis: {
      min: 0,
      max: 5,
      axisLabel: { fontSize: 9 }
    },
    series: [{
      type: 'bar',
      data: Object.keys(indicators).map(key => ({
        value: city.scores[key],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: paradigmColor },
            { offset: 1, color: paradigmColor + '60' }
          ])
        }
      })),
      coordinateSystem: 'polar',
      barMaxWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
        fontSize: 10,
        fontWeight: 'bold'
      },
      itemStyle: {
        borderRadius: 3
      }
    }]
  };

  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
}
