import React, {Component} from "react";
import { navigateTo } from "gatsby-link"

const findNearestBranch = (position, offices) => {
    let closest = {distance: 9999};
    offices.forEach((office) => {
        let x = Math.pow(office.coordinates.lat - position.coords.latitude, 2);
        let y = Math.pow(office.coordinates.lng - position.coords.longitude, 2);
        let h = Math.sqrt(x + y);
        if (closest.distance > h) {
            closest = {office: office, distance: h};
        }
    });
    return closest.office;
};

class FindNearestBranch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationSupported: false,
            buttonText: "Go to nearest branch"
        };
        this.getLocationClicked = this.getLocationClicked.bind(this);
    }

    componentDidMount() {
        if(navigator.geolocation) {
            this.setState({locationSupported: true});
        }
    }

    getLocationClicked() {
        this.setState({buttonText: "Searching for your position.."});
        navigator.geolocation.getCurrentPosition((position) => {
            const nearest = findNearestBranch(position, this.props.branchOffices);
            if(nearest) {
                navigateTo("/branches/"+nearest.id);
            }
        }, () => {
            this.setState({buttonText: "Position could not be determined"});
        });
    }

    render() {
        if(this.state.locationSupported === false) {
            return null;
        }
        return (
            <div className="card">
                <button onClick={this.getLocationClicked}>{this.state.buttonText}</button>
            </div>
        );
    }
}

export default FindNearestBranch;