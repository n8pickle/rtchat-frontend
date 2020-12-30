import { Paper, Typography, withStyles } from "@material-ui/core";

const ErrorBannerComponent = ({classes, children}) => {
	return(
		<Paper className={classes.paperBackground}>
			<Typography>{children}</Typography>
		</Paper>
	);
}

const styles = {
	paperBackground: {
		background: '#CF6679'
	}
}

export const ErrorBanner = withStyles(styles)(ErrorBannerComponent);