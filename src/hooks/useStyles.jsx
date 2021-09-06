import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	'@import': [
		'url("https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500,600,700|Source+Sans+Pro:400,600,700&display=swap")',
	],
	'@global': {
		'*, *:before, *:after': {
			fontFamily: '"Source Sans Pro", sans-serif',
			boxSizing: 'inherit',
			fontSize: 16,
		},
		html: {
			backgroundColor: '#ddeefc',
			boxSizing: 'border-box',
		},
		'input, select': {
			outline: 'none',
			padding: '14px 8px 14px 8px',
			borderRadius: 5,
			border: '1px solid #c9c9c9',
			width: '100%',
			marginBottom: 13,
			transition: 'border 0.4s',
			'&:hover, &:focus': {
				transition: 'border 0.4s',
				borderColor: '#3d9cff',
			},
		},
		label: { userSelect: 'none' },
	},
	submitButton: {
		backgroundColor: '#2364d2',
		outline: 'none',
		width: '100%',
		// border: 'none',
		padding: '14px 8px 14px 8px',
		color: 'white',
		borderRadius: 5,
		boxShadow: '0 4px 8px 0 rgba(35, 100, 210, 0.2), 0 6px 20px 0 rgba(35, 100, 210, 0.19)',
		marginTop: 20,
		userSelect: 'none',
		cursor: 'pointer',
		border: '2px solid #2364d2',
		transition: 'all .2s ease-out',

		'&:hover': {
			backgroundColor: '#b3cfff',
			color: 'black',
		},
		'&:active': {
			backgroundColor: '#0043b5',
			color: 'white',
		},
	},
	mainContainer: { width: '100%' },
	centerContainer: { display: 'table', margin: '0 auto' },
	formContainer: {
		backgroundColor: 'white',
		width: 550,
		padding: 30,
		paddingTop: 160,
		borderRadius: 10,
		boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
	},
	row: {
		display: 'flex',
		alignItems: 'flex-start',
	},
	col: {
		flex: 'auto',
	},
	inputGroup: {
		display: 'flex',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		'& > input, & > select': {
			flex: '1',
			marginRight: 10,
		},
		'& > label': {
			fontSize: 14,
			marginBottom: 5,
			fontWeight: 500,
			color: '#1a3b5d',
			width: '100%',
			display: 'block',
		},
	},
	expGroup: {
		marginRight: 30,
	},

	creditCardContainer: {
		width: '100%',
		fontFamily: `"Source Code Pro", monospace`,
	},
	creditCardItem: {
		borderRadius: 20,
		height: 270,
		width: 430,
		position: 'relative',
		marginRight: 'auto',
		marginLeft: 'auto',
		marginBottom: -130,
		boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
		padding: '20px 25px',
		background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('./assets/images/${
			Math.floor(Math.random() * 25) + 1
		}.jpeg')`,
	},
	creditCardItemBack: {
		padding: 0,
		paddingTop: 25,
	},
	chip: {
		width: 60,
		height: '100%',
		borderRadius: 10,
	},
	logo: {
		width: 85,
		float: 'right',
		maxWidth: '100%',
		objectFit: 'contain',
		maxHeight: '100%',
		objectPosition: 'top right',
		height: 45,
	},
	cardNumberRow: {
		marginTop: 50,
		color: 'white',
	},
	cardNumberItem: {
		fontSize: 22,
		margin: 2,
		font: 'inherit',
	},
	cardNumberSpace: {
		marginRight: 34,
	},
	cardLabel: {
		fontSize: 13,
		opacity: 0.7,
	},
	expiress: {
		float: 'right',
	},
	cvv: {
		float: 'right',
	},
	cardText: {
		color: 'white',
		fontFamily: `"Source Code Pro", monospace !important`,
		display: 'inline-block',
	},
	magneticBar: {
		width: '100%',
		height: 50,
		backgroundColor: 'black',
		opacity: 0.8,
	},
	cvvWrapper: {
		padding: '20px 25px',
		marginTop: 20,
	},
	cvvContainer: {
		width: '100%',
		height: 40,
		backgroundColor: 'white',
		borderRadius: 5,
		lineHeight: '40px',
		textAlign: 'right',
		paddingRight: 10,
	},
	logoBack: {
		marginTop: 25,
	},
	cardCvv: { color: 'black' },
	hidden: { display: 'none' },
	cardHolderContainer: {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		width: 310,
	},

	fadeOutUp: {
		animation: `$fade-out-up .2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
	},
	'@keyframes fade-out-up': {
		'0%': {
			transform: 'translate3d(0,0,0)',
		},
		'100%': {
			transform: 'translate3d(0,-10px,0)',
			opacity: 0,
		},
	},
	fadeInUp: {
		animation: `$fade-in-up .2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
	},
	'@keyframes fade-in-up': {
		'0%': {
			transform: 'translate3d(0,10px,0)',
			opacity: 0,
		},
		'100%': {
			transform: 'translate3d(0,0,0)',
			opacity: 1,
		},
	},

	fadeInRotate: {
		opacity: 0,

		animation: '$fade-in-rotate 0.2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
	},
	'@keyframes fade-in-rotate': {
		'0%': {
			transform: 'translateX(15px) rotate(45deg);',
			transformOrigin: 'center',
			opacity: 0,
		},
		'100%': {
			opacity: 1,
			transform: 'translateX(0px) rotate(0deg);',
			transformOrigin: 'center',
		},
	},
	fadeOutRotate: {
		opacity: 0,

		animation: '$fade-out-rotate 0.2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
	},
	'@keyframes fade-out-rotate': {
		'0%': {
			opacity: 1,
			transform: 'translateX(0px) rotate(0deg);',
			transformOrigin: 'center',
		},
		'100%': {
			transform: 'translateX(-15px) rotate(45deg);',
			transformOrigin: 'center',
			opacity: 0,
		},
	},

	pointer: {
		position: 'absolute',
		zIndex: 3,
		borderRadius: 5,
		left: 0,
		top: 0,
		width: '100%',
		height: '100%',
		transition: 'all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85)',
		opacity: 0,
		pointerEvents: 'none',
		overflow: 'hidden',
		border: '2px solid rgba(255, 255, 255, 0.65)',

		//this is the content overlay of the pointer
		'&:after': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			background: 'rgb(8, 20, 47)',
			height: '100%',
			borderRadius: 5,
			filter: 'blur(25px)',
			opacity: 0.5,
		},
	},
	pointerActive: {
		opacity: 1,
	},
});

export default useStyles;
