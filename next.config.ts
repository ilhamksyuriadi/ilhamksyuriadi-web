import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              exportType: 'default',
              icon: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
