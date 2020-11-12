const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const withPreact = require('next-plugin-preact')

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withPreact({
    webpack: (config, { dev }) => {
        if (isProduction) {
            config.optimization.minimize = isProduction;
            config.plugins.push(new DuplicatePackageCheckerPlugin());
        }
        return config;
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
    basePath: "",
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return { ...defaultPathMap, };
    },
    reactStrictMode: !isProduction,
});