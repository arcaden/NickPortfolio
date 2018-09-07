import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import css from './ExpCard.module.css'
import ExpCardMedia from "./ExpCardMedia";
import Col from "react-bootstrap/es/Col";

const styles = {
	card: {
		width: 400,
		margin: 20,
		boxShadow: '0px 0px 12px 4px  #cccccc',
		borderRadius: 5,
		'&:hover': {
			transform: 'scale(1.1)',
			boxShadow: '0px 0px 18px 4px  #cccccc',
		}
	},

	media: {
		height: 250,
	},
	Disc: {
		fontSize: 16,
	},
	'@media (max-width: 499px)': {
		card: {
			width: 300
		}
	}
};

function ExpCard(props) {
	const { classes } = props;
	return (
		    <div>
			    <Card className={classes.card}>
				    <div className={css.HiddenContent}>
					    <h4>
						    {props.title}
					    </h4>
					    <hr style ={{
						marginTop: 5
					    }}/>
					    {props.children}
				    </div>
				    <ExpCardMedia exp = {props.title}/>
			    </Card>
		    </div>
	);
}

ExpCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpCard);