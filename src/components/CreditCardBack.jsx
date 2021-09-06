import useStyles from '../hooks/useStyles';

const CreditCardBack = ({ cvv, logoPath }) => {
	const classes = useStyles();

	const normalizeCvv = () => {
		return Array.from({ length: cvv.split('').filter((char) => char !== ' ').length }).fill(
			'*'
		);
	};

	return (
		<div className={`${classes.creditCardItem} ${classes.creditCardItemBack}`}>
			<div className={classes.magneticBar}></div>
			<div className={classes.cvvWrapper}>
				<div className={classes.row}>
					<div className={classes.col}>
						<label className={`${classes.cardText} ${classes.cvv}`}>CVV</label>
					</div>
				</div>
				<div className={classes.row}>
					<div className={classes.col}>
						<div className={classes.cvvContainer}>
							{normalizeCvv().map((char, i) => (
								<span
									key={i}
									className={`${classes.cardText} ${classes.cardCvv}`}
								>
									{char}
								</span>
							))}
						</div>
					</div>
				</div>
				<div className={classes.row}>
					<div className={`${classes.col} ${classes.logoBack}`}>
						<img src={logoPath} alt='logo' className={classes.logo} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreditCardBack;
