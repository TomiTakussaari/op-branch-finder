import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../findMyOp.css";
import Link from "gatsby-link";

const pages = [{path: "/", name: "Search"}, {path: "/branches", name: "Branches in map"}];

const Navi = () => {
    return <header className="container">
        <div className="row justify-content-center">
            <div className="col-12">
                <ul className="list-inline">
                    {pages.map((page, i) => {
                        return <li className="list-inline-item">
                            <Link to={page.path}>
                                {page.name}
                            </Link>
                        </li>

                    })}
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
                <footer>
                    <p>
                        Disclaimer: This site is not affiliated with OP group in anyway.
                        But it does use OP data from <a href="https://op-developer.fi">OP Developer</a> sandbox.
                    </p>
                </footer>
            </div>
        )
    }
}

export default Template