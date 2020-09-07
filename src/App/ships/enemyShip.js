import React from 'react'
import { useSelector } from 'react-redux'
import { isSunk } from '../utils/sunk'

const EnemyShip = ({ ship }) => {
	let color
	if (isSunk({ ship })) color = '#FF49491A'
	else {
		color = '#22D0B81A'
	}
	
	let borderColor
	if (isSunk({ ship })) borderColor = '#FF4949'
	else {
		borderColor = '#22D0B8'
	}
	
	return (
		<div
			style={{
				backgroundColor: `${color}`,
				borderColor: `${borderColor}`,
				width: `${ship.size * 10}px`,
			}}
		></div>
	)
}

export default EnemyShip
