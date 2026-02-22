export interface RevJetService {
    id: string;
    name: string;
    description: string;
    metric: string;
    image: string;
    features: string[];
}

export const revjetServices: RevJetService[] = [
    {
        id: 'pipeline',
        name: 'Pipeline Optimization',
        description: 'Eliminate leakage and friction across your revenue pipeline.',
        metric: '+27% conversion lift',
        image: '/revjet/pipeline.jpg',
        features: ['Deal velocity', 'Stage conversion', 'Revenue flow']
    },
    {
        id: 'forecasting',
        name: 'Forecast Accuracy',
        description: 'Predict revenue with confidence using clean RevOps signals.',
        metric: '98% forecast accuracy',
        image: '/revjet/forecast.jpg',
        features: ['Revenue modeling', 'Cohort analysis', 'Predictive insights']
    },
    {
        id: 'automation',
        name: 'Revenue Automation',
        description: 'Automate GTM workflows across Sales, Marketing, and CS.',
        metric: '-42% manual ops',
        image: '/revjet/automation.jpg',
        features: ['CRM automation', 'Routing logic', 'Ops workflows']
    }
];

export interface FeatureHighlight {
    title: string;
    description: string;
    position: 'left' | 'right';
}

export const features: FeatureHighlight[] = [
    {
        title: 'Unified Revenue Engine',
        description: 'All revenue operations connected into a single high-performance system.',
        position: 'left'
    },
    {
        title: 'Zero Revenue Leakage',
        description: 'Identify and seal revenue loss across every GTM stage.',
        position: 'right'
    },
    {
        title: 'Forecast With Confidence',
        description: 'Real-time revenue intelligence across your pipeline.',
        position: 'left'
    },
    {
        title: 'Automated GTM Execution',
        description: 'Scale operations without scaling headcount.',
        position: 'right'
    }
];
