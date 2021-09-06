import { useCallback, useEffect, useState } from 'react';
import usePrevious from '../hooks/usePrevious';
import useStyles from '../hooks/useStyles';

const CreditCardHolder = ({ holder }) => {
	const classes = useStyles();

	const prevHolder = usePrevious(holder);
	const [removedChar, setRemovedChar] = useState('');
	const [isRemoving, setIsRemoving] = useState(false);

	const normalizeValue = () => {
		return holder ? holder.toUpperCase().split('') : 'FULL NAME'.split('');
	};

	const removeAnimation = (e) => {
		let element = e.target;
		element.classList.remove(classes.fadeInRotate);
		element.classList.remove(classes.fadeOutRotate);
		setIsRemoving(false);
	};

	const animate = useCallback(
		(type) => {
			if (type === 'empty') {
				let element = document.querySelector('#empty-holder');
				element.classList.remove(classes.hidden);
				element.classList.add(classes.fadeInUp);
				return;
			}
			let element = document.querySelector(`#hd-${holder.length - 1}`);

			if (type === 'add') {
				element.classList.add(classes.fadeInRotate);
			}
			if (type === 'remove') {
				if (isRemoving) {
					console.log(holder.length);
					let element = document.querySelector(`#hd-${holder.length}`);
					element.classList.add(classes.fadeOutRotate);
				}
			}
		},
		[
			classes.fadeInRotate,
			classes.fadeInUp,
			classes.fadeOutRotate,
			classes.hidden,
			holder.length,
			isRemoving,
		]
	);

	useEffect(() => {
		if (holder) {
			if (holder.length > prevHolder.length) {
				animate('add');
			} else {
				animate('remove');
			}
		} else {
			animate('empty');
		}
	}, [animate, holder, prevHolder]);

	useEffect(() => {
		if (holder) {
			if (holder.length < prevHolder.length) {
				setRemovedChar(prevHolder.slice(-1));
				setIsRemoving(true);
			}
		}
		if (!holder) {
			setRemovedChar('');
		}
	}, [holder, prevHolder]);

	return (
		<div className={classes.cardHolderContainer}>
			{holder ? (
				<>
					{normalizeValue().map((char, i) => (
						<span key={i} id={`hd-${i}`} className={classes.cardText}>
							{char === ' ' ? <>&nbsp;</> : char}
						</span>
					))}
					{isRemoving && (
						<span
							id={`hd-${holder.length}`}
							className={classes.cardText}
							onAnimationEnd={removeAnimation}
						>
							{removedChar === ' ' ? <>&nbsp;</> : removedChar.toUpperCase()}
						</span>
					)}
				</>
			) : (
				<span id='empty-holder' className={classes.cardText}>
					FULL NAME
				</span>
			)}
		</div>
	);
};

export default CreditCardHolder;
