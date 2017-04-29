import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: '' };
    }
    
    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term} //  search bar is now a controlled element which means that its value only changes when state changes
                onChange={(event) => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar; // will send to whichever file imports it