import React, {Component} from "react";

import SearchBranches from "../components/SearchBranches";

const FindNearest = ({branchOffices}) => {
    return null;
};

class Frontpage extends Component {

    render() {
        const {allOpBranchOffice} = this.props.data;
        const branchOffices =  allOpBranchOffice.edges.map(edge => edge.node);
        return (
            <div>
                <FindNearest branchOffices={branchOffices}/>
                <SearchBranches branchOffices={branchOffices}/>
            </div>
        );
    }
}

export default Frontpage;

export const pageQuery = graphql`
query Index {
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
`;