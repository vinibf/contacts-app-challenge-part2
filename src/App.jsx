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
            sortingType: ""
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

	render() {
		return (
            <div className="app" data-testid="app">
                <Topbar />
				<Filters
                    handleChangeSearch={this.handleChangeSearch}
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
