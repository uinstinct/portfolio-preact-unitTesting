const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    webpack: (config, { dev }) => {
        config.optimization.minimize = isProduction;
        return config;
    },
    reactStrictMode: isProduction,
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
}