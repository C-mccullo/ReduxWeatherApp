import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

function average(data) {
	let count = data.length;
	let total = data.reduce((runningTotal, current) => current += runningTotal);
	let avg = total /= count;
	let average = Math.round(avg);
	return average
}

export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={ props.data }>
				<SparklinesLine color={ props.color }/>
				<SparklinesReferenceLine type="avg"/>
			</Sparklines>
			<div>{ average(props.data) } { props.units }</div>
		</div>
	);
}