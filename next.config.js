const webpack = require("webpack");

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    webpack: (config, { dev }) => {
        config.optimization.minimize = isProduction ? true : false;
        return config;
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
    basePath: "",
    i18n: {
        locales: ['en'],
        defaultLocale: 'en'
    },
}