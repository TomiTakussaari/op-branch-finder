import React, {Component} from "react";

import Helmet from "react-helmet";
import GoogleMapReact from "google-map-react";

import MapMarker from "../components/MapMarker";

class Branches extends Component {
    render() {
        const {allOpBranchOffice} = this.props.data;
        const branchOffices = allOpBranchOffice.edges.map(edge => edge.node);
        return (
            <div className="row justify-content-center">
                <Helmet>
                    <title>List of OP branches</title>
                </Helmet>
                <div className="col-12">
                    <h1 className="text-center">All OP branches</h1>
                    <div className="card" style={{height: "100vh"}}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyCVVkP8-eKccKYE6hmxffBEM4fu2Rc6LPU" }}
                            defaultCenter={{lat: 60.192059, lng: 24.945831}}
                            defaultZoom={10}
                        >
                            {branchOffices.map((branchOffice,i) => {
                                return <MapMarker branchOffice={branchOffice} key={i} lat={branchOffice.coordinates.lat} lng={branchOffice.coordinates.lng}/>
                            })}
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        )
    }
}

export default Branches;

export const pageQuery = graphql`
query Branches {
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