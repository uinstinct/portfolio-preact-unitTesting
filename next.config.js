const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    images: {
        domains: ["res.cloudinary.com"],
    },
    basePath: isProduction ? "/portfolio" : "",
}