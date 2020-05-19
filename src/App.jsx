import React from 'react';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import api from './services/api';
//import ordering from './services/ordering';

import './App.scss';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchString: "",
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

	render() {
		return (
			<React.Fragment>
				<Topbar />
				<Filters searchString={this.state.searchString} />
				<Contacts
                    contacts={this.state.filteredContacts}
                    loading={this.state.loadingContacts}
                />
			</React.Fragment>
		)
	}
}

export default App;
