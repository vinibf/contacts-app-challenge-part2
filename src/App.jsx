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
            console.log(data);

            this.setState({
                contactList: data,
                filteredContacts: data,
                loadingContacts: false
            });
            // Ordenar por 'nome' ao carregar
        });
    }

	render() {
		return (
			<React.Fragment>
				<Topbar />
				<Filters />
				<Contacts />
			</React.Fragment>
		)
	}
}

export default App;
