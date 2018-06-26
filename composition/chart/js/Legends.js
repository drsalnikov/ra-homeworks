'use strict';

const Legends = ({labels, colors}) => (
  <div className="Legend">
    { labels.map((label, labelIndex) => {
      return (
      <div>
        <span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
        <span className="Legend--label">{ label }</span>
      </div>
      );
    }) }
  </div>
);
