// Digital Twin Governance Performance Data for 10 Representative Global Cities
// Based on structured coding protocol from the paper (1-5 scale)

export const cityData = {
  // Government-Led Paradigm
  xiongAn: {
    name: 'Xiong\'an New Area',
    nameEn: 'Xiong\'an',
    paradigm: 'Gov-Led',
    type: 'Tabula Rasa City',
    scores: {
      governmentControl: 4.75,
      deploymentSpeed: 4.80,
      techAgility: 4.20,
      marketOpenness: 2.50,
      dataTransparency: 2.25,
      publicParticipation: 2.00
    },
    macroData: {
      gdpPerCapita: 3.2,
      giniCoefficient: 0.38,
      egdi: 0.85
    },
    sensorDesertIndex: 0.35,
    powerConcentration: 4.5
  },
  
  singapore: {
    name: 'Singapore',
    nameEn: 'Singapore',
    paradigm: 'Gov-Led',
    type: 'Global Hub',
    scores: {
      governmentControl: 4.75,
      deploymentSpeed: 4.75,
      techAgility: 4.50,
      marketOpenness: 3.25,
      dataTransparency: 3.00,
      publicParticipation: 2.75
    },
    macroData: {
      gdpPerCapita: 65.2,
      giniCoefficient: 0.37,
      egdi: 0.90
    },
    sensorDesertIndex: 0.25,
    powerConcentration: 4.3
  },
  
  theLine: {
    name: 'THE LINE',
    nameEn: 'THE LINE',
    paradigm: 'Gov-Led',
    type: 'Tabula Rasa City',
    scores: {
      governmentControl: 4.50,
      deploymentSpeed: 3.80,
      techAgility: 4.60,
      marketOpenness: 2.80,
      dataTransparency: 2.50,
      publicParticipation: 1.80
    },
    macroData: {
      gdpPerCapita: 28.5,
      giniCoefficient: 0.42,
      egdi: 0.78
    },
    sensorDesertIndex: 0.40,
    powerConcentration: 4.6
  },
  
  // Public-Private Partnership (PPP)
  barcelona: {
    name: 'Barcelona',
    nameEn: 'Barcelona',
    paradigm: 'PPP',
    type: 'Historic City',
    scores: {
      governmentControl: 3.00,
      deploymentSpeed: 3.20,
      techAgility: 3.80,
      marketOpenness: 4.20,
      dataTransparency: 4.50,
      publicParticipation: 4.30
    },
    macroData: {
      gdpPerCapita: 35.8,
      giniCoefficient: 0.34,
      egdi: 0.88
    },
    sensorDesertIndex: 0.18,
    powerConcentration: 2.8
  },
  
  amsterdam: {
    name: 'Amsterdam',
    nameEn: 'Amsterdam',
    paradigm: 'PPP',
    type: 'Historic City',
    scores: {
      governmentControl: 2.80,
      deploymentSpeed: 3.50,
      techAgility: 4.00,
      marketOpenness: 4.50,
      dataTransparency: 4.60,
      publicParticipation: 4.40
    },
    macroData: {
      gdpPerCapita: 52.3,
      giniCoefficient: 0.28,
      egdi: 0.91
    },
    sensorDesertIndex: 0.15,
    powerConcentration: 2.5
  },
  
  rotterdam: {
    name: 'Rotterdam',
    nameEn: 'Rotterdam',
    paradigm: 'PPP',
    type: 'Port City',
    scores: {
      governmentControl: 3.20,
      deploymentSpeed: 3.40,
      techAgility: 3.90,
      marketOpenness: 4.10,
      dataTransparency: 4.20,
      publicParticipation: 4.00
    },
    macroData: {
      gdpPerCapita: 48.6,
      giniCoefficient: 0.30,
      egdi: 0.89
    },
    sensorDesertIndex: 0.20,
    powerConcentration: 2.9
  },
  
  minnStPaul: {
    name: 'Minneapolis-St Paul',
    nameEn: 'Minn-St Paul',
    paradigm: 'PPP',
    type: 'Twin Cities',
    scores: {
      governmentControl: 2.90,
      deploymentSpeed: 3.10,
      techAgility: 3.70,
      marketOpenness: 4.00,
      dataTransparency: 4.10,
      publicParticipation: 4.20
    },
    macroData: {
      gdpPerCapita: 58.4,
      giniCoefficient: 0.45,
      egdi: 0.87
    },
    sensorDesertIndex: 0.22,
    powerConcentration: 2.7
  },
  
  // Market-Driven Paradigm
  newYork: {
    name: 'New York',
    nameEn: 'New York',
    paradigm: 'Market',
    type: 'Global Hub',
    scores: {
      governmentControl: 3.50,
      deploymentSpeed: 3.80,
      techAgility: 4.30,
      marketOpenness: 4.60,
      dataTransparency: 3.50,
      publicParticipation: 3.20
    },
    macroData: {
      gdpPerCapita: 72.5,
      giniCoefficient: 0.51,
      egdi: 0.86
    },
    sensorDesertIndex: 0.28,
    powerConcentration: 3.2
  },
  
  toronto: {
    name: 'Toronto',
    nameEn: 'Toronto',
    paradigm: 'Market',
    type: 'Financial Center',
    scores: {
      governmentControl: 3.20,
      deploymentSpeed: 3.60,
      techAgility: 4.10,
      marketOpenness: 4.40,
      dataTransparency: 3.80,
      publicParticipation: 3.50
    },
    macroData: {
      gdpPerCapita: 48.2,
      giniCoefficient: 0.33,
      egdi: 0.89
    },
    sensorDesertIndex: 0.20,
    powerConcentration: 3.0
  },
  
  seoul: {
    name: 'Seoul',
    nameEn: 'Seoul',
    paradigm: 'Market',
    type: 'Global Hub',
    scores: {
      governmentControl: 3.80,
      deploymentSpeed: 4.00,
      techAgility: 4.40,
      marketOpenness: 4.20,
      dataTransparency: 3.40,
      publicParticipation: 3.10
    },
    macroData: {
      gdpPerCapita: 33.8,
      giniCoefficient: 0.35,
      egdi: 0.92
    },
    sensorDesertIndex: 0.24,
    powerConcentration: 3.4
  }
};

// Governance Paradigm Classification
export const paradigms = {
  'Gov-Led': {
    label: 'Government-Led',
    labelEn: 'Government-Led',
    color: '#e74c3c',
    cities: ['xiongAn', 'singapore', 'theLine']
  },
  'PPP': {
    label: 'Public-Private Partnership',
    labelEn: 'Public-Private Partnership',
    color: '#3498db',
    cities: ['barcelona', 'amsterdam', 'rotterdam', 'minnStPaul']
  },
  'Market': {
    label: 'Market-Driven',
    labelEn: 'Market-Driven',
    color: '#2ecc71',
    cities: ['newYork', 'toronto', 'seoul']
  }
};

// Indicator definitions for assessment
export const indicators = {
  governmentControl: {
    name: 'Government Control',
    description: 'Degree of centralized government oversight in UDT deployment',
    subIndicators: [
      'Top-down policy directives',
      'Centralized decision-making authority',
      'Administrative coordination efficiency',
      'Regulatory framework strength'
    ]
  },
  deploymentSpeed: {
    name: 'Deployment Speed',
    description: 'Velocity of UDT infrastructure rollout across the city',
    subIndicators: [
      'Time to city-wide coverage',
      'Infrastructure installation rate',
      'Policy implementation timeline',
      'Resource mobilization speed'
    ]
  },
  techAgility: {
    name: 'Technology Agility',
    description: 'Capacity to adopt and iterate cutting-edge technologies',
    subIndicators: [
      'AI/ML integration level',
      'Real-time processing capability',
      'System upgrade frequency',
      'Innovation adoption rate'
    ]
  },
  marketOpenness: {
    name: 'Market Openness',
    description: 'Openness to private sector participation and competition',
    subIndicators: [
      'Vendor diversity index',
      'Public procurement transparency',
      'Startup ecosystem integration',
      'Market entry barriers'
    ]
  },
  dataTransparency: {
    name: 'Data Transparency',
    description: 'Accessibility and openness of urban data to public',
    subIndicators: [
      'Open data portal availability',
      'API accessibility',
      'Data documentation quality',
      'Privacy policy clarity'
    ]
  },
  publicParticipation: {
    name: 'Public Participation',
    description: 'Depth and breadth of citizen engagement in UDT governance',
    subIndicators: [
      'Participatory budgeting mechanisms',
      'Community feedback channels',
      'Minority group outreach',
      'Decision-making influence'
    ]
  }
};

// Governance recommendations engine
export const governanceRecommendations = {
  // For Government-Led paradigm
  'Gov-Led': {
    strengths: [
      'High administrative efficiency and coordination',
      'Rapid deployment and scaling capabilities',
      'Strong regulatory enforcement',
      'Clear accountability structures'
    ],
    risks: [
      'Limited public participation and democratic oversight',
      'Risk of "sensor deserts" in marginalized communities',
      'Potential for algorithmic authority concentration',
      'Data transparency deficits'
    ],
    recommendations: [
      'Implement "Ethics by Design" frameworks in early design stages',
      'Establish independent algorithmic audit mechanisms',
      'Create participatory feedback loops for marginalized communities',
      'Deploy sensor infrastructure equitably across all neighborhoods',
      'Enhance data transparency through open data portals',
      'Develop regulatory sandbox for testing governance innovations'
    ],
    sdgAlignment: {
      'SDG 11.3': 'Strengthen inclusive urbanization through public participation mechanisms',
      'SDG 16.6': 'Develop effective, accountable and transparent institutions',
      'SDG 10.2': 'Empower and promote social, economic and political inclusion'
    }
  },
  
  // For PPP paradigm
  'PPP': {
    strengths: [
      'Balanced multi-stakeholder governance',
      'High data transparency and openness',
      'Strong public participation mechanisms',
      'Equitable resource distribution'
    ],
    risks: [
      'Slower deployment due to consensus-building',
      'Coordination complexity across stakeholders',
      'Potential for vendor lock-in',
      'Interoperability challenges'
    ],
    recommendations: [
      'Streamline decision-making processes while maintaining inclusivity',
      'Establish clear data sovereignty frameworks',
      'Invest in interoperability standards (e.g., DUET framework)',
      'Create cross-boundary governance mechanisms for twin cities',
      'Develop capacity-building programs for community engagement',
      'Implement privacy-preserving technologies (e.g., federated learning)'
    ],
    sdgAlignment: {
      'SDG 11.3': 'Enhance participatory, integrated urban planning',
      'SDG 17.17': 'Encourage effective public-private-civil society partnerships',
      'SDG 16.7': 'Ensure responsive, inclusive, participatory decision-making'
    }
  },
  
  // For Market-Driven paradigm
  'Market': {
    strengths: [
      'High technological agility and innovation',
      'Strong market openness and competition',
      'Rapid iteration and scaling',
      'Access to cutting-edge solutions'
    ],
    risks: [
      'Data commodification concerns',
      'Privacy and security vulnerabilities',
      'Algorithmic bias and outlier discrimination',
      'Weakened public oversight'
    ],
    recommendations: [
      'Implement robust data protection regulations (e.g., GDPR-style)',
      'Establish algorithmic accountability frameworks',
      'Create public interest technology oversight boards',
      'Develop equity impact assessments for UDT deployments',
      'Ensure vendor diversity to prevent monopolistic practices',
      'Integrate community benefit agreements in tech contracts'
    ],
    sdgAlignment: {
      'SDG 11.3': 'Balance innovation with inclusive urbanization',
      'SDG 9.4': 'Upgrade infrastructure for sustainability with resource efficiency',
      'SDG 16.10': 'Ensure public access to information and protect fundamental freedoms'
    }
  }
};

// Scoring assessment tool for new cities
export function assessCity(scores) {
  const {
    governmentControl,
    deploymentSpeed,
    techAgility,
    marketOpenness,
    dataTransparency,
    publicParticipation
  } = scores;

  // Validate scores
  Object.entries(scores).forEach(([key, value]) => {
    if (value < 1 || value > 5) {
      throw new Error(`${key} must be between 1 and 5`);
    }
  });

  // Calculate paradigm classification
  const adminEfficiency = (governmentControl + deploymentSpeed) / 2;
  const socialInclusion = (dataTransparency + publicParticipation) / 2;
  const marketOrientation = (marketOpenness + techAgility) / 2;

  let paradigm, paradigmConfidence;
  if (adminEfficiency > 4.0 && socialInclusion < 3.5) {
    paradigm = 'Gov-Led';
    paradigmConfidence = ((adminEfficiency - socialInclusion) / 4 * 100).toFixed(1);
  } else if (socialInclusion > 4.0 && marketOrientation > 3.5) {
    paradigm = 'PPP';
    paradigmConfidence = ((socialInclusion + marketOrientation) / 8 * 100).toFixed(1);
  } else if (marketOrientation > 4.0 && socialInclusion < 3.8) {
    paradigm = 'Market';
    paradigmConfidence = ((marketOrientation - socialInclusion) / 4 * 100).toFixed(1);
  } else {
    // Determine closest paradigm
    const govScore = adminEfficiency - socialInclusion;
    const pppScore = (socialInclusion + marketOrientation) / 2;
    const marketScore = marketOrientation - socialInclusion;
    
    if (govScore > marketScore && govScore > (pppScore - 3)) {
      paradigm = 'Gov-Led';
    } else if (pppScore > govScore && pppScore > marketScore) {
      paradigm = 'PPP';
    } else {
      paradigm = 'Market';
    }
    paradigmConfidence = 'Mixed';
  }

  // Calculate sensor desert risk
  const sensorDesertIndex = (
    (5 - dataTransparency) * 0.3 +
    (5 - publicParticipation) * 0.4 +
    (5 - marketOpenness) * 0.3
  ) / 5;

  // Calculate power concentration
  const powerConcentration = (
    governmentControl * 0.5 +
    (5 - publicParticipation) * 0.3 +
    (5 - dataTransparency) * 0.2
  );

  // Generate recommendations
  const recommendations = governanceRecommendations[paradigm];

  // Calculate overall governance maturity
  const maturityScore = Object.values(scores).reduce((a, b) => a + b, 0) / 6;
  const maturityLevel = maturityScore >= 4.0 ? 'Advanced' :
                        maturityScore >= 3.0 ? 'Developing' : 'Emerging';

  return {
    scores,
    paradigm,
    paradigmConfidence,
    sensorDesertIndex: sensorDesertIndex.toFixed(2),
    powerConcentration: powerConcentration.toFixed(2),
    maturityScore: maturityScore.toFixed(2),
    maturityLevel,
    recommendations,
    timestamp: new Date().toISOString()
  };
}

// Calculate global mean scores
export const calculateGlobalMean = () => {
  const cities = Object.values(cityData);
  const indicatorKeys = Object.keys(indicators);
  
  const mean = {};
  indicatorKeys.forEach(ind => {
    mean[ind] = cities.reduce((sum, city) => sum + city.scores[ind], 0) / cities.length;
  });
  
  return mean;
};

// Calculate deviation from global mean
export const calculateDeviation = (scores) => {
  const mean = calculateGlobalMean();
  const deviation = {};

  Object.keys(scores).forEach(key => {
    if (mean[key] !== undefined) {
      deviation[key] = scores[key] - mean[key];
    }
  });

  return deviation;
};

// Compare city with global benchmarks
export function compareWithBenchmarks(scores) {
  const mean = calculateGlobalMean();
  const deviation = calculateDeviation(scores);
  
  const comparison = {};
  Object.keys(scores).forEach(key => {
    const diff = deviation[key];
    comparison[key] = {
      cityScore: scores[key],
      globalMean: mean[key].toFixed(2),
      deviation: diff.toFixed(2),
      percentile: diff > 0 ? 'Above Average' : diff < 0 ? 'Below Average' : 'Average'
    };
  });
  
  return comparison;
}
