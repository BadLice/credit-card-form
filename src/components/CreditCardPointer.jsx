import React, { useEffect, useRef, useState } from 'react';
import useStyles from '../hooks/useStyles';

const CreditCardPointer = ({ children }) => {
	const classes = useStyles();
	const pointerRef = useRef();
	const containerRef = useRef();
	const [style, setStyle] = useState(null);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (!style) {
			setStyle({
				top: 0,
				bottom: 0,
				width: containerRef.current.offsetWidth,
				height: containerRef.current.offsetHeight,
			});
		}

		const clearPointer = () => {
			if (isActive) {
				setIsActive(false);
				setStyle({
					top: 0,
					bottom: 0,
					width: containerRef.current.offsetWidth,
					height: containerRef.current.offsetHeight,
				});
			}
		};

		document.addEventListener('click', clearPointer);
		return () => {
			document.removeEventListener('click', clearPointer);
		};
	}, [isActive, style]);

	const point = (e) => {
		e.stopPropagation();
		e.preventDefault();

		let target = e.currentTarget;
		setIsActive(true);
		setStyle({
			width: `${target.offsetWidth + 10}px`,
			height: `${target.offsetHeight + 10}px`,
			transform: `translateX(${target.offsetLeft - 5}px) translateY(${
				target.offsetTop - 5
			}px)`,
		});
	};

	const childrenWithProps = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, { point });
		}
		return child;
	});

	return (
		<>
			<div className={classes.creditCardItem} ref={containerRef}>
				<div
					className={`${classes.pointer} ${isActive && classes.pointerActive}`}
					style={style}
					ref={pointerRef}
				/>
				{childrenWithProps}
			</div>
		</>
	);
};

export default CreditCardPointer;
