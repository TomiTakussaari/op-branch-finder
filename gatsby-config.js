module.exports = {
    siteMetadata: {
        title: "Find my OP Branch",
        siteUrl: `https://objective-snyder-a14c00.netlify.com/`,
        description: `Find your OP branch`,
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