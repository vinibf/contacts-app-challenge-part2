import React from 'react';
import dayjs from 'dayjs';

class Contact extends React.Component {
	render() {
        const { data } = this.props;

        let date = data.admissionDate;
        if(date !== "Admissão") date = dayjs(date).format("DD/MM/YYYY");

		return (
			<article className="contact" data-testid="contact">
				<span className="contact__avatar" data-testid="contact-avatar">
                    <img src={data.avatar} alt={data.name} />
                </span>
				<span className="contact__data" data-testid="contact-name">
                    {data.name}
                </span>
				<span className="contact__data" data-testid="contact-phone">
                    {data.phone}
                </span>
				<span className="contact__data" data-testid="contact-country">
                    {data.country}
                </span>
				<span className="contact__data" data-testid="contact-date">
                    { date }
                </span>
				<span className="contact__data" data-testid="contact-company">
                    {data.company}
                </span>
				<span className="contact__data" data-testid="contact-department">
                    {data.department}
                </span>
			</article>
		);
	}
}

export default Contact;
