import { Fragment, useCallback, useEffect } from 'react';
import usePrevious from '../hooks/usePrevious';
import useStyles from '../hooks/useStyles';

const CreditCardExpiress = ({ expiress }) => {
	const classes = useStyles();

	const prevExpiress = usePrevious(expiress);

	const normalizeExpiress = () => {
		return {
			month: (expiress.month || 'MM').split(''),
			year: (expiress.year.slice(-2) || 'YY').split(''),
		};
	};

	const normalizePrevExpiress = () => {
		if (!prevExpiress) {
			return {
				month: 'MM',
				year: 'YY',
			};
		}
		return {
			month: (prevExpiress.month || 'MM').split(''),
			year: (prevExpiress.year.slice(-2) || 'YY').split(''),
		};
	};

	const animate = useCallback(
		(type) => {
			if (type === 'month') {
				let prevElement = document.querySelector('#prev-month');
				let curElement = document.querySelector('#cur-month');

				const clearAnimation = () => {
					prevElement.classList.remove(classes.fadeOutUp);
					curElement.classList.remove(classes.fadeInUp);
				};

				const animateCurrent = () => {
					prevElement.classList.add(classes.hidden);
					curElement.classList.add(classes.fadeInUp);
					curElement.classList.remove(classes.hidden);
					curElement.addEventListener('animationend', clearAnimation);
				};

				prevElement.classList.add(classes.fadeOutUp);
				prevElement.classList.remove(classes.hidden);
				curElement.classList.add(classes.hidden);
				prevElement.addEventListener('animationend', animateCurrent);

				return () => {
					prevElement.removeEventListener('animationend', animateCurrent);
					curElement.removeEventListener('animationend', clearAnimation);
				};
			}
			if (type === 'year') {
				let prevElement = document.querySelector('#prev-year');
				let curElement = document.querySelector('#cur-year');

				const clearAnimation = () => {
					prevElement.classList.remove(classes.fadeOutUp);
					curElement.classList.remove(classes.fadeInUp);
				};

				const animateCurrent = () => {
					prevElement.classList.add(classes.hidden);
					curElement.classList.add(classes.fadeInUp);
					curElement.classList.remove(classes.hidden);
					curElement.addEventListener('animationend', clearAnimation);
				};

				prevElement.classList.add(classes.fadeOutUp);
				prevElement.classList.remove(classes.hidden);
				curElement.classList.add(classes.hidden);
				prevElement.addEventListener('animationend', animateCurrent);

				return () => {
					prevElement.removeEventListener('animationend', animateCurrent);
					curElement.removeEventListener('animationend', clearAnimation);
				};
			}
		},
		[classes.fadeInUp, classes.fadeOutUp, classes.hidden]
	);

	useEffect(() => {
		if (expiress && prevExpiress) {
			if (expiress.month !== prevExpiress.month) {
				animate('month');
			}
			if (expiress.year !== prevExpiress.year) {
				animate('year');
			}
		}
	}, [animate, expiress, prevExpiress]);

	return (
		<Fragment>
			<span className={`${classes.expiress}`}>
				<span id={'cur-month'} className={classes.cardText}>
					{normalizeExpiress().month}
				</span>
				<span id={'prev-month'} className={`${classes.cardText} ${classes.hidden}`}>
					{normalizePrevExpiress().month}
				</span>
				<span className={classes.cardText}>/</span>
				<span id={'cur-year'} className={classes.cardText}>
					{normalizeExpiress().year}
				</span>
				<span id={'prev-year'} className={`${classes.cardText} ${classes.hidden}`}>
					{normalizePrevExpiress().year}
				</span>
			</span>
		</Fragment>
	);
};

export default CreditCardExpiress;
