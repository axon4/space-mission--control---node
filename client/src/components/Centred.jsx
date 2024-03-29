import { withStyles } from 'arwes';

const styles = () => ({
	root: {
		margin: '0 auto',
		maxWidth: 800
	},
	'@media (max-width: 800px)': {
		root: {
			margin: '0 12px'
		}
	}
});

function Centred(props) {
	const { className, classes, children, ...rest } = props;

	return (
		<div className={`${classes.root} ${className}`} {...rest}>
			{children}
		</div>
	);
};

export default withStyles(styles)(Centred);