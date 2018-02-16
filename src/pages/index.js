import React, {Component} from "react";

import SearchBranches from "../components/SearchBranches";
import FindNearestBranch from "../components/FindNearestBranch";
import Helmet from "react-helmet";

class Frontpage extends Component {

    render() {
        const {allOpBranchOffice} = this.props.data;
        const branchOffices =  allOpBranchOffice.edges.map(edge => edge.node);
        return (
            <div>
                <header>
                    <h1 className="text-center">Find your OP branch</h1>
                </header>
                <Helmet>
                    <title>Find your OP Branch</title>
                </Helmet>
                <FindNearestBranch branchOffices={branchOffices}/>
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