'use strict';

function Stars({count}) {

  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  const li = [];

  while (count > 0) {
    li.push(<li><Star /></li>);
    count--;
  }

  return <ul className='card-body-stars u-clearfix'>{li}</ul>;
}
