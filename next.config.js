const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    images: {
        deviceSizes: [320, 420, 768, 1024, 1200],
        iconSizes: [],
        domains: [],
        path: '/_next/image',
        loader: 'default',
    },
    basePath: isProduction ? '/portfolio' : '',
    assetPrefix: isProduction ? '/portfolio/' : '',
}