const SDK = require('@op/api-sdk');
const crypto = require("crypto");

const options = {
    headers: {
        'x-api-key': process.env.OP_API_key || "qVAsAFFDhcmLw42ngJF51eeB585EUVp4"
    }
};
const client = new SDK.Client(options);

exports.sourceNodes = ({ boundActionCreators }) => {
    const { createNode } = boundActionCreators;
    return client.getBranchesAsJson().then(branches => {
        branches.data.payload.forEach(branch => {
            const newNode = {
                openingHours: branch.openingHours,
                name: branch.name,
                address: branch.street + " "+ branch.town + " " + branch.postcode,
                id: branch._id,
                coordinates: {
                    lng: branch.location.coordinates[0],
                    lat: branch.location.coordinates[1]
                },
                parent: null,
                children: [],
                internal: {
                    type: "OpBranchOffice",
                    contentDigest: crypto
                        .createHash(`md5`)
                        .update(JSON.stringify(branch))
                        .digest(`hex`),
                }
            };
            createNode(newNode);
        })
    })
};