import React, {Component} from "react";
import Helmet from "react-helmet";
import GoogleMapReact from "google-map-react";

import MapMarker from "../components/MapMarker";

class BranchTemplate extends Component {
    render() {
        const branchOffice = this.props.data.opBranchOffice;
        return (
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className="text-center">{branchOffice.name}</h1>
                    <div className="card">
                        <Helmet>
                            <title>{branchOffice.name}</title>
                        </Helmet>
                        <ul>
                            <li>Address: {branchOffice.address}</li>
                            <li>Open: {branchOffice.openingHours}</li>
                        </ul>
                    </div>
                    <div className="card" style={{height: "60vh"}}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyCVVkP8-eKccKYE6hmxffBEM4fu2Rc6LPU" }}
                            defaultCenter={{lat: branchOffice.coordinates.lat, lng: branchOffice.coordinates.lng}}
                            defaultZoom={10}
                        >
                            <MapMarker branchOffice={branchOffice} lat={branchOffice.coordinates.lat} lng={branchOffice.coordinates.lng}/>
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        );
    }
}

export default BranchTemplate;

export const pageQuery = graphql`
  query opBranchOfficeById($id: String!) {
    opBranchOffice(id: { eq: $id }) {
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
`;