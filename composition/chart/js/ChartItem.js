'use strict';

const ChartItem = ({ className, values, item, max, color, children }) => {

  const sortedSerie = values.slice(0).sort((a, b) => (a - b));
  const sum = values.reduce((carry, current) => carry + current, 0);
  let size = item / (max) * 100;
  let style = {
    backgroundColor: color,
    opacity: item/max + .05,
    zIndex: item,
    height: size + '%'
  };

  switch (className) {
    case 'Charts--item stacked':
      size = item / sum * 100;
      style.opacity = 1;
      break;
    case 'Charts--item layered':
      style.height = '';
      style.right = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
      break;
    case 'Charts--item horizontal':
      style.height = '';
      style.width = size + '%';
      break;
  }

  return (
  <div className={className} style={style} >
    <b style={{color: color}}>{children}</b>
  </div>
  );
}

