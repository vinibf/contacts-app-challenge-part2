import React from 'react';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import api from './services/api';
import filterContactsByName from './services/filtering';
import sortContactsBy from './services/sorting';

import './App.scss';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            contactList: [],
            filteredContacts: [],
            loadingContacts: false,
            sortingCategory: "",
            sortingDirection: ""
        };
    }

    componentDidMount() {
        this.setState({
            loadingContacts: true
        });

        api.get("contacts").then(data => {
            setTimeout(() => {
                this.setState({
                    contactList: data,
                    filteredContacts: data,
                    loadingContacts: false
                });
            }, 500);
            // Ordenar por 'nome' ao carregar
        });
    }

    handleChangeSearch = (searchString) => {
        const searchResults = filterContactsByName(this.state.contactList, searchString);

        this.setState({
            filteredContacts: searchResults
        });
    };

    handleClickSort = (category) => {
        let newDirection = "";
        const currentDirection = this.state.sortingDirection;

        if (this.state.sortingCategory === category) {
            currentDirection === "ASC" ? newDirection = "DESC" : newDirection = "ASC";
        } else {
            newDirection = "ASC";
        }

        const sortingResults = sortContactsBy(this.state.filteredContacts, category, newDirection);

        this.setState({
            filteredContacts: sortingResults,
            sortingCategory: category,
            sortingDirection: newDirection
        });
    };

	render() {
		return (
            <div className="app" data-testid="app">
                <Topbar />
				<Filters
                    sortingCategory={this.state.sortingCategory}
                    handleChangeSearch={this.handleChangeSearch}
                    handleClickSort={this.handleClickSort}
                />
				<Contacts
                    contacts={this.state.filteredContacts}
                    loading={this.state.loadingContacts}
                />
            </div>
		)
	}
}

export default App;
