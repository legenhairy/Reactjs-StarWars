import React, {Component} from 'react';


class Card extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render(){
	return (
		<div className = "bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5 container">
			<div className='person-name'><h1>{this.props.people}</h1></div>
				<div className = 'card-image'>
			  		<img alt='hot' src='' />
			  	</div>
			 	<div className='person-details'>
			 		<ul> 
			 			<li>{this.props.height} cm</li>
						<br />
						<li>{`Hair color: ${this.props.hair_color}`}</li>
						<br />
						<li>{`Skin color: ${this.props.skin_color}`}</li>
						<br />
						<li>{`Eye color: ${this.props.eye_color}`}</li>
						<br />
						<li>{`Skin color: ${this.props.skin_color}`}</li>
						<br />
					</ul>
			 	</div>
		</div>
	);
  }
}

export default Card;