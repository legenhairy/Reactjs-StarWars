import React from 'react';
import Card from './Card';

const CardList = ({people}) => { /*pass in the character info from the generated state array*/
	return (
		people.map((url, index) => {
			if(people[index].name === undefined) {
				return null;
			}
		return(
		<Card 
		key = {index}
		people = {people[index].name}
		height = {people[index].height}
		mass = {people[index].mass}
		hair_color = {people[index].hair_color}
		skin_color = {people[index].skin_color}
		eye_color = {people[index].eye_color}
		birth_year = {people[index].birth_year}
		gender = {people[index].gender}
		homeworld = {people[index].homeworld}
		/>

		);


		
		})
	);
}

export default CardList;