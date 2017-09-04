const Calendar = ({ date }) => {

  const getGenitiveMonth = {
    'январь': 'января',
		'февраль': 'февраля',
		'март': 'марта',
		'апрель': 'апреля',
		'май': 'мая',
		'июнь': 'июня',
		'июль': 'июля',
		'август': 'августа',
		'сентябрь': 'сентября',
		'октябрь': 'октября',
		'ноябрь': 'ноября',
		'декабрь': 'декабря'
  };

  const day = date.toLocaleString('ru', {weekday: 'long'});
  const dayNum = date.getDate();
  const month = date.toLocaleString('ru', {month: 'long'}); 
  const genetiveMonth = getGenitiveMonth[month];
  const year = date.getFullYear();
  const firstDayOfMonth = date.getDate();

  // ui-datepicker-other-month
  // ui-datepicker-today
  
  const _days = [];

  const generateWeek = (i) => {
    const week = [];

    for (let j = 1; j <= 7; j++) {
      
      week.push(<td>{j + i * 7 }</td>);
    }

    return week;
  };

  const generateMonth = () => {
    const month = [];

    for ( let i = 0; i < 5; i++) {
      month.push(<tr>{generateWeek(i)}</tr>);
    }

    return month;
  };

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{day}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{dayNum}</div>
          <div className="ui-datepicker-material-month">{genetiveMonth}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          {generateMonth()}
        </tbody>
      </table>
    </div>
  );
}


