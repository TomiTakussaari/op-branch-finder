import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../findMyOp.css";
import Link from "gatsby-link";

class Template extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="container-fluid">
                {children()}
                <footer className="container" style={{marginTop: "10em"}}>
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <ul>
                                <li>
                                    <Link to="/" className="link-unstyled text-center">
                                        Search
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/branches" className="link-unstyled text-center">
                                        All branches
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Template