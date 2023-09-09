import PropTypes from 'prop-types';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

export function Product(props) {
	const { price, title } = props;

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{{ title }}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" variant='contained'>{{ price }}</Button>
			</CardActions>
		</Card>
	)
}

Product.propTypes = {
	price: PropTypes.number,
	title: PropTypes.string,
};