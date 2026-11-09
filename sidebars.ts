import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  docs: [
    'overview',
    'getting-started',
    {
      type: 'category',
      label: 'Core concepts',
      items: ['actors/fire-and-forget', 'actors/request-response', 'actors/context', 'actors/behavior'],
    },
    {
      type: 'category',
      label: 'Production patterns',
      items: [
        'patterns/backpressure',
        'patterns/struct-and-aggregate-actors',
        'patterns/routers',
        'patterns/lifecycle-and-scheduling',
        'patterns/dependency-injection',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/api-map', 'reference/release-notes'],
    },
  ],
};

export default sidebars;
