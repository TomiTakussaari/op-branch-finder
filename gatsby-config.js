module.exports = {
    siteMetadata: {
        title: "Find my OP Branch"
    },
    plugins: [
        "op-branches",
        {
            resolve: "gatsby-plugin-offline",
            options: {
                navigateFallback: null,
                navigateFallbackWhitelist: []
            }
        },
        "gatsby-plugin-sitemap"
    ]
};