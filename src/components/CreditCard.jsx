import ReactCardFlip from 'react-card-flip';
import useStyles from '../hooks/useStyles';
import CreditCardBack from './CreditCardBack';
import CreditCardFront from './CreditCardFront';
import CreditCardPointer from './CreditCardPointer';

const CreditCard = ({ number, holder, expiress, cvv, isFlipped, logoPath }) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.creditCardContainer}>
				<ReactCardFlip isFlipped={isFlipped}>
					<CreditCardPointer>
						<CreditCardFront
							number={number}
							holder={holder}
							expiress={expiress}
							logoPath={logoPath}
						/>
					</CreditCardPointer>
					<CreditCardBack cvv={cvv} logoPath={logoPath} />
				</ReactCardFlip>
			</div>
		</>
	);
};

export default CreditCard;
