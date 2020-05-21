import React from 'react';

import Loading from './Loading';
import Contact from './Contact';

class Contacts extends React.Component {
	render() {
        const contacts = this.props.contacts;
        const loading = this.props.loading;

        const labelObj = {
            id: 0,
            name: "Nome",
            avatar: "",
            company: "Empresa",
            department: "Departamento",
            admissionDate: "Admissão",
            phone: "Telefone",
            country: "País"
        };

		return (
			<div className="container" data-testid="contacts">
                { loading ? <Loading /> : null }
                
				<section className="contacts">
                    { contacts.length === 0 ? null : <Contact key={labelObj.id} data={labelObj} /> }
					{ contacts.map(contact => {
                        return <Contact key={contact.id} data={contact} />
                    }) }
				</section>
			</div>
		);
	}
}

export default Contacts;
