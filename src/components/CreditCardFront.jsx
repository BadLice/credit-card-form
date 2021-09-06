import useStyles from '../hooks/useStyles';
import CreditCardExpiress from './CreditCardExpiress';
import CreditCardHolder from './CreditCardHolder';
import CreditCardNumber from './CreditCardNumber';

const CreditCardFront = ({ number, holder, expiress, logoPath, point }) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.row}>
				<div className={classes.col}>
					<img src='./assets/images/chip.png' alt='chip' className={classes.chip} />
				</div>
				<div className={classes.col}>
					<img src={logoPath} alt='logo' className={classes.logo} />
				</div>
			</div>
			<div
				className={`${classes.row} ${classes.cardNumberRow} ${classes.focus}`}
				onClick={point}
			>
				<div className={classes.col}>
					<CreditCardNumber number={number} />
				</div>
			</div>
			<div className={`${classes.row} ${classes.cardNumberRow}`}>
				<div className={classes.col}>
					<span className={classes.cardLabel}>Card Holder</span>
				</div>
				<div className={`${classes.col}`}>
					<span className={`${classes.cardLabel} ${classes.expiress}`}>Expiress</span>
				</div>
			</div>
			<div className={`${classes.row}`}>
				<div className={classes.col} onClick={point}>
					<CreditCardHolder holder={holder} />
				</div>
				<div className={`${classes.col}`} onClick={point}>
					<CreditCardExpiress expiress={expiress} />
				</div>
			</div>
		</>
	);
};

export default CreditCardFront;
