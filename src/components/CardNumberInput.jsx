import NumberFormat from 'react-number-format';
const CardNumberInput = ({ ...rest }) => {
	return <NumberFormat format='#### #### #### ####' {...rest} />;
};

export default CardNumberInput;
