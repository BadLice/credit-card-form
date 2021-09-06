import { useEffect, useState } from 'react';
import useStyles from '../hooks/useStyles';
import CardNumberInput from './CardNumberInput';
import CreditCard from './CreditCard';
import CvvInput from './CvvInput';

const twoDigits = (num) => {
	num = '' + num;
	return num.length >= 2 ? num : '0' + num;
};

function getCardType(number) {
	let path = '/assets/images/';
	// visa
	var re = new RegExp('^4');
	if (number.match(re) != null) return path + 'visa.png';

	// Mastercard
	// Updated for Mastercard 2017 BINs expansion
	re = new RegExp('^5[1-5]');
	if (number.match(re) != null) return path + 'mastercard.png';

	// AMEX
	re = new RegExp('^3[47]');
	if (number.match(re) != null) return path + 'amex.png';

	// Discover
	re = new RegExp(
		'^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)'
	);
	if (number.match(re) != null) return path + 'discover.png';

	// Diners
	re = new RegExp('^36');
	if (number.match(re) != null) return path + 'dinersclub.png';

	// Diners - Carte Blanche
	re = new RegExp('^30[0-5]');
	if (number.match(re) != null) return path + 'dinersclub.png';

	// JCB
	re = new RegExp('^35(2[89]|[3-8][0-9])');
	if (number.match(re) != null) return path + 'jcb.png';

	// Visa Electron
	re = new RegExp('^(4026|417500|4508|4844|491(3|7))');
	if (number.match(re) != null) return path + 'visa.png';

	re = new RegExp('^9792');
	if (number.match(re) != null) return path + 'troy.png';

	return path + 'visa.png';
}

function Form() {
	const classes = useStyles();
	const [number, setNumber] = useState('');
	const [holder, setHolder] = useState('');
	const [cvv, setCvv] = useState('');
	const [expiress, setExpiress] = useState({ month: '', year: '' });
	const [isFlipped, setIsFlipped] = useState(false); //false -> back, true -> front
	const [logoPath, setLogoPath] = useState(getCardType(number));

	useEffect(() => {
		if (number) {
			setLogoPath(getCardType(number));
		}
	}, [number]);

	return (
		<>
			<div className={classes.mainContainer}>
				<div className={classes.centerContainer}>
					<div className={classes.row}>
						<div className={classes.col}>
							<CreditCard
								number={number}
								holder={holder}
								expiress={expiress}
								cvv={cvv}
								isFlipped={isFlipped}
								logoPath={logoPath}
							/>
						</div>
					</div>
					<div className={classes.row}>
						<div className={classes.col}>
							<form
								className={classes.formContainer}
								onSubmit={(e) => e.preventDefault()}
							>
								<label htmlFor='cardNumber'>Card Number</label>
								<CardNumberInput
									id='cardNumber'
									title='Card Number'
									value={number}
									onChange={(e) => setNumber(e.target.value)}
									onFocus={() => setIsFlipped(false)}
								/>
								<label>Card Holders</label>
								<input
									type='text'
									id='cardHolders'
									title='Card Holders'
									value={holder}
									onChange={(e) => setHolder(e.target.value)}
									onFocus={() => setIsFlipped(false)}
								/>
								<div className={classes.row}>
									<div className={classes.col}>
										<div
											className={`${classes.inputGroup} ${classes.expGroup}`}
										>
											<label htmlFor='expMonth'>Expiration Date</label>
											<select
												id='expMonth'
												title='Expiration month'
												value={expiress.month}
												onChange={(e) =>
													setExpiress({
														...expiress,
														month: e.target.value,
													})
												}
												onFocus={() => setIsFlipped(false)}
											>
												<option disabled value=''>
													Month
												</option>
												{Array.from({ length: 12 })
													.fill(0)
													.map((_, i) => (
														<option
															key={i}
															value={twoDigits(i + 1)}
														>
															{twoDigits(i + 1)}
														</option>
													))}
											</select>
											<select
												id='expYear'
												title='Expiration year'
												value={expiress.year}
												onChange={(e) =>
													setExpiress({
														...expiress,
														year: e.target.value,
													})
												}
												onFocus={() => setIsFlipped(false)}
											>
												<option disabled value=''>
													Year
												</option>
												{Array.from({ length: 12 })
													.fill(0)
													.map((_, i) => (
														<option
															key={i}
															value={new Date().getFullYear() + i}
														>
															{new Date().getFullYear() + i}
														</option>
													))}
											</select>
										</div>
									</div>
									<div className={classes.col}>
										<div className={classes.inputGroup}>
											<label htmlFor='cvv'>CVV</label>
											<CvvInput
												id='cvv'
												title='CVV'
												onChange={(e) => setCvv(e.target.value)}
												onFocus={() => setIsFlipped(true)}
											/>
										</div>
									</div>
								</div>
								<button className={classes.submitButton}>Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Form;
