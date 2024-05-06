import moment from 'moment';

const nextMonthCalculation = () => {
	const today = moment().format('YYYY-MM-DD');
	const nextMonth = moment(today).add(1, 'month').format('YYYY-MM-DD');

	return [today, nextMonth];
};

const lastThreeMonthsCalculation = () => {
	const today = moment().format('YYYY-MM-DD');
	const lastThreeMonths = moment(today)
		.subtract(3, 'month')
		.format('YYYY-MM-DD');

	return [today, lastThreeMonths];
};

const lastMonthCalculation = () => {
	const today = moment().format('YYYY-MM-DD');
	const lastMonth = moment(today).subtract(1, 'month').format('YYYY-MM-DD');

	return [today, lastMonth];
};

const lastYearCalculation = () => {
	const today = moment().format('YYYY-MM-DD');
	const lastYear = moment(today).subtract(12, 'month').format('YYYY-MM-DD');

	return [today, lastYear];
};


export {
	nextMonthCalculation,
	lastThreeMonthsCalculation,
	lastMonthCalculation,
	lastYearCalculation,
};

// 2024-05-08,2024-05-30
