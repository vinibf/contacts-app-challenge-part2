import React from 'react';
import dayjs from 'dayjs';

class Contact extends React.Component {
	render() {
        const { contact } = this.props;

        let date = contact.admissionDate;
        if(date !== "Admissão") date = dayjs(date).format("DD/MM/YYYY");

		return (
			<article className="contact" data-testid="contact">
				<span className="contact__avatar" data-testid="contact-avatar">
                    <img src={contact.avatar} alt={contact.name} />
                </span>
				<span className="contact__data" data-testid="contact-name">
                    {contact.name}
                </span>
				<span className="contact__data" data-testid="contact-phone">
                    {contact.phone}
                </span>
				<span className="contact__data" data-testid="contact-country">
                    {contact.country}
                </span>
				<span className="contact__data" data-testid="contact-date">
                    { date }
                </span>
				<span className="contact__data" data-testid="contact-company">
                    {contact.company}
                </span>
				<span className="contact__data" data-testid="contact-department">
                    {contact.department}
                </span>
			</article>
		);
	}
}

export default Contact;
