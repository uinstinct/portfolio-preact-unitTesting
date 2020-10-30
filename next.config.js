const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    images: {
        domains: ["res.cloudinary.com"],
        loader: "cloudinary",
        path: "https://res.cloudinary.com/gamersinstinct7/",
    },
    basePath: isProduction ? "/portfolio" : "/",
}