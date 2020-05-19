import React from 'react';
import dayjs from 'dayjs';

class Contact extends React.Component {
	render() {
        const {
            avatar,
            name,
            phone,
            country,
            admissionDate,
            company,
            department
        } = this.props.contact;

        const date = dayjs(admissionDate).format("DD/MM/YYYY");

		return (
			<article className="contact" data-testid="contact">
				<span className="contact__avatar">
                    <img src={avatar} alt={name} />
                </span>
				<span className="contact__data">
                    {name}
                </span>
				<span className="contact__data">
                    {phone}
                </span>
				<span className="contact__data">
                    {country}
                </span>
				<span className="contact__data">
                    { date === "Invalid Date" ? "Admissão" : date }
                </span>
				<span className="contact__data">
                    {company}
                </span>
				<span className="contact__data">
                    {department}
                </span>
			</article>
		);
	}
}

export default Contact;
