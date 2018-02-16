const path = require("path");

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators;
    return new Promise((resolve, reject) => {
        const branchOfficeTemplate = path.resolve(`src/templates/Branch.js`);
        // Query for markdown nodes to use in creating pages.
        resolve(
            graphql(`{
              allOpBranchOffice {
                edges {
                  node {
                    id
                    openingHours
                    name
                    address
                    coordinates {
                        lat
                        lng
                    }
                  }
                }
              }
          }
        `).then(result => {
                    if (result.errors) {
                        reject(result.errors)
                    }
                    result.data.allOpBranchOffice.edges.forEach((edge) => {
                        const branch = edge.node;
                        createPage({
                            path: `/branches/${branch.id}`,
                            component: branchOfficeTemplate,
                            context: {
                                id: branch.id,
                            },
                        })
                    });
                }
            )
        )
    })
};