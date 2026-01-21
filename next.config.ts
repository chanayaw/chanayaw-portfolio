import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      // Transform .svg into React components with SVGR.
      // Doc: https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#configuring-webpack-loaders
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              // Make icons scale naturally with font-size utilities
              icon: true,
              // Provide default props so color can be controlled via CSS
              svgProps: {
                // Use CSS currentColor by default
                fill: 'currentColor',
                stroke: 'currentColor',
                // Preserve the viewBox for proper scaling
                focusable: 'false',
                role: 'img',
                'aria-hidden': 'true',
              },
              svgo: true,
              svgoConfig: {
                plugins: [
                  // Keep viewBox so the SVG scales correctly
                  { name: 'removeViewBox', active: false },
                  // Remove width/height so Tailwind sizing applies
                  { name: 'removeDimensions', active: true },
                  // Strip any hardcoded fill/stroke so CSS can take over
                  {
                    name: 'removeAttrs',
                    params: { attrs: '(fill|stroke)' },
                  },
                ],
              },
            },
          },
        ],
        // Tell Turbopack the loader outputs JS (a React component)
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
