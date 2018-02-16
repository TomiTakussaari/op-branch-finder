module.exports = {
    siteMetadata: {
        title: "Find my OP Branch",
        siteUrl: `https://find-op-branch.netlify.com/`,
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