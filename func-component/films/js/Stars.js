'use strict';

function Stars({count}) {

  if ( typeof count !== 'number' || count < 1 || count > 5 ) {
    return null;
  }

  const li = [];

  for (let i = 0; i < count; i++) {
    li.push(<li><Star /></li>);
  }

  return <ul className="card-body-stars u-clearfix">{ li }</ul>;
}
