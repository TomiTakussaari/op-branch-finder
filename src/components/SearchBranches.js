import React, {Component} from "react";
import Link from "gatsby-link";

const findMatchingOffices = (branchOffices, searchTerm) => {
    const sortByMatches = (branchWithMatchesA, branchWithMatchesB) => branchWithMatchesA.matches - branchWithMatchesB.matches;
    const searchTerms = searchTerm.toLowerCase().split(" ");
    return branchOffices
        .map(branch => {
            let matches = 0;
            searchTerms.forEach(searchTerm => {
                const branchName = branch.name.toLowerCase().split(",").join(", ");
                if (branchName.includes(searchTerm)) {
                    matches++;
                }
                if(branch.address.toLowerCase().includes(searchTerm)) {
                    matches++;
                }
            });
            return {branch: branch, matchCount: matches};
        })
        .filter((branchWithMatches) => branchWithMatches.matchCount >= searchTerms.length)
        .sort(sortByMatches)
        .map(branchWithMatches => branchWithMatches.branch);
};

const SearchBox = ({searchTerm, updateSearchTerm}) => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <input type="text" value={searchTerm} className="form-control" placeholder="Search by name or address" onChange={updateSearchTerm}/>
                </div>
            </form>
        </div>
    );
};

const SearchResults = ({searchTerm, results}) => {
    if (searchTerm.length < 3 || (!results || results.length === 0)) {
        return <div>No results</div>
    }
    return (
        <div>
            {results.map((branchOffice, i) => {
                return (
                    <Link key={i} to={"/branches/"+branchOffice.id} className="link-unstyled">
                        <div className="card" style={{marginTop: "2em", padding: "0.5em"}}>
                            <h6>Name: {branchOffice.name}</h6>
                            <p>Address: {branchOffice.address}</p>
                            <p>Open: {branchOffice.openingHours}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };
        this.findOffices = this.findOffices.bind(this);
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }

    updateSearchTerm(event) {
        this.setState({searchTerm: event.target.value})
    }

    findOffices() {
        const {branchOffices} = this.props;
        return findMatchingOffices(branchOffices, this.state.searchTerm);
    }

    render() {
        return (
            <div>
                <SearchBox searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>
                <SearchResults searchTerm={this.state.searchTerm} results={this.findOffices()}/>
            </div>
        );
    }
}

export default Search;