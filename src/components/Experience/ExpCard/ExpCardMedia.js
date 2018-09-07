import React from 'react'
import Epropel from '../../../assets/img/exp/Epropel.png'
import QA from '../../../assets/img/exp/QPCL.png'
import Jrop from '../../../assets/img/exp/Jrop.png'
import QTMA from '../../../assets/img/exp/QTMA.png'
import P5K from '../../../assets/img/exp/P5k.png'
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";


const ExpCardMedia = (props) => {
	const style = {
		height: 300,
		backgroundSize: 'cover',
	}

	if (props.exp === 'Epropel') {
		return (
		    <CardMedia
			  style={style}
			  image={Epropel}
			  title={props.exp}
		    />
		)
	}
	if (props.exp === 'QA') {
		return (
		    <CardMedia
			  style={style}
			  image={QA}
			  title={props.exp}
		    />
		)
	}
	if (props.exp === 'Jrop') {
		return (
		    <CardMedia
			  style={style}
			  image={Jrop}
			  title={props.exp}
		    />
		)
	}
	if (props.exp === 'QTMA') {
		return (
		    <CardMedia
			  style={style}
			  image={QTMA}
			  title={props.exp}
		    />
		)
	}
	if (props.exp === 'P5K') {
		return (
		    <CardMedia
			  style={style}
			  image={P5K}
			  title={props.exp}
		    />
		)
	}
}

export default ExpCardMedia