import React from 'react'
import { useSelector } from 'react-redux'
import { isSunk } from '../utils/sunk'

const YourShip = ({ ship, index }) => {
	const start = useSelector((state) => state.start)
	const startBoard = useSelector((state) => state.startBoard)
	const yourCurrentShip = useSelector((state) => state.yourCurrentShip)
	let color
	if (isSunk({ ship })) color = '#FF49491A'
	else {
		if (index <= yourCurrentShip || start === true) color = '#22D0B81A'
		else color = '#DDDDDD'
	}
	
	let borderColor
	if (isSunk({ ship })) borderColor = '#FF4949'
	else {
		if (index <= yourCurrentShip || start === true) borderColor = '#22D0B8'
		else borderColor = '#DDDDDD'
	}
	
	return (
		<div
			style={{
				backgroundColor: `${color}`,
				borderColor: `${borderColor}`,
				width: `${ship.size * 10}px`
			}}
		></div>
	)
}

export default YourShip
