import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../findMyOp.css";
import Link from "gatsby-link";

const pages = [{path: "/", name: "Search for a branch"}, {path: "/branches", name: "Branches on a map"}];

const Navi = () => {
    return <header className="container">
        <div className="row justify-content-center">
            <div className="col-12">
                <ul className="list-inline">
                    {pages.map((page, i) =>
                        <li key={i} className="list-inline-item">
                            <Link to={page.path}>
                                {page.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </header>
};

class Template extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="container-fluid">
                <Navi/>
                {children()}
                <footer style={{marginTop: "3em"}}>
                    <p>
                        Disclaimer: This site uses OP data from <a href="https://op-developer.fi">OP Developer</a> sandbox.
                    </p>
                </footer>
            </div>
        )
    }
}

export default Template