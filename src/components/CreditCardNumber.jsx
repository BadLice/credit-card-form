import { Fragment, useCallback, useEffect } from 'react';
import usePrevious from '../hooks/usePrevious';
import useStyles from '../hooks/useStyles';

const CreditCardNumber = ({ number }) => {
	const classes = useStyles();

	const prevNumber = usePrevious(number);

	const normalize = (value) => {
		let def = '#### #### #### ####'.split('');
		if (value) {
			value.split('').forEach((char, i) => {
				if (!(i === 4 || i === 9 || i === 14) && char !== ' ') {
					def[i] = i >= 5 && i <= 13 ? '*' : char;
				}
			});
		}
		return def;
	};

	const normalizeNumber = () => {
		return normalize(number);
	};

	const normalizePrevNumber = () => {
		return normalize(prevNumber);
	};

	const animate = useCallback(
		(i) => {
			let curElement = document.querySelector(`#cur-cn-${i}`);
			let prevElement = document.querySelector(`#prev-cn-${i}`);

			const clearAnimation = () => {
				prevElement.classList.remove(classes.fadeOutUp);
				curElement.classList.remove(classes.fadeInUp);
			};

			const animateCurrent = () => {
				prevElement.classList.add(classes.hidden);
				curElement.classList.remove(classes.hidden);
				curElement.classList.add(classes.fadeInUp);
				curElement.addEventListener('animationend', clearAnimation);
			};

			curElement.classList.add(classes.hidden);
			prevElement.classList.remove(classes.hidden);
			prevElement.classList.add(classes.fadeOutUp);
			prevElement.addEventListener('animationend', animateCurrent);

			return () => {
				prevElement.removeEventListener('animationend', animateCurrent);
				curElement.removeEventListener('animationend', clearAnimation);
			};
		},
		[classes.fadeInUp, classes.fadeOutUp, classes.hidden]
	);

	useEffect(() => {
		if (number && prevNumber) {
			let na = number.split('');
			let pa = prevNumber.split('');

			na.forEach((char, i) => {
				if (char !== pa[i]) {
					animate(i);
				}
			});
		} else {
			if ((number && !prevNumber) || (!number && prevNumber)) {
				animate(0);
			}
		}
	}, [animate, number, prevNumber]);

	const normalizedPrev = normalizePrevNumber();

	return normalizeNumber().map((char, i) => (
		<Fragment key={i}>
			{char === ' ' ? (
				<span className={`${classes.cardText} ${classes.cardNumberSpace}`}>{char}</span>
			) : (
				<>
					<span
						id={`cur-cn-${i}`}
						className={`
										${classes.cardText} 
										${char === ' ' ? classes.cardNumberSpace : classes.cardNumberItem} 
										${classes.hidden}`}
					>
						{char}
					</span>

					<span
						id={`prev-cn-${i}`}
						className={`
										${classes.cardText}
										${char === ' ' ? classes.cardNumberSpace : classes.cardNumberItem}`}
					>
						{normalizedPrev[i]}
					</span>
				</>
			)}
		</Fragment>
	));
};

export default CreditCardNumber;
