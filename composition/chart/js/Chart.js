'use strict';

const Chart = ({className, values, max, style, label, children}) => {
    return (
      <div className={className} style={style}>
        <label>{ label }</label>
        {children({ values, max })}
      </div>
    );
  };
