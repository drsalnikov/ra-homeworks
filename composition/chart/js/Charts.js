'use strict';

const Charts = ({data, className, children}) => {
	const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
	const style = className.includes('horizontal') ? { height: 'auto' } : { height: 250 };

	return (
		<div className={className}>
			{children({data, max, style})};
		</div>
	);
};
