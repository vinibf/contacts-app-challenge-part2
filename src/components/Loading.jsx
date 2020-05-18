import React from 'react';

class Loading extends React.Component {
	render() {
		return (
			<div className="loading">
                <i class="fas fa-spinner fa-pulse fa-3x"></i>
            </div>
		);
	}
}

export default Loading;