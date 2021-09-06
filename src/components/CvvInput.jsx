import NumberFormat from 'react-number-format';
const CvvInput = ({ ...rest }) => {
	return <NumberFormat format='####' {...rest} />;
};

export default CvvInput;
