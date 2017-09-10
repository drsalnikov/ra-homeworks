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

  const today = date.getDate();
  const dayTxt = date.toLocaleString('ru', {weekday: 'long'}).toUpperCase();
  const monthTxt = date.toLocaleString('ru', {month: 'long'}); 
  const dayNum = date.getDate();
  const monthNum = date.getMonth();
  const yearNum = date.getFullYear();
  const genetiveMonth = getGenitiveMonth[monthTxt];
  const firstDayOfMonth = new Date(yearNum, monthNum, 1).getDay();

  let currentDay = 2 - firstDayOfMonth;  
  let weekInMonth = 5;

  // исключение для воскресенья
  if (firstDayOfMonth === 0) {
    currentDay = -5;
  }

  // исключение по количеству недель в месяце
  if (firstDayOfMonth === 0 && monthNum !== 1 ) {
    weekInMonth++;
  }

  const generateMonth = (date) => {
    const month = [];

    // для каждой недели в месяце
    for (let i = 0; i < weekInMonth; i++) {
      const week = [];

      // для каждого дня недели 
      for (let j = 1; j <= 7; j++) {
        const currentDate = new Date(yearNum, monthNum, currentDay).getDate();
        const currentMonth = new Date(yearNum, monthNum, currentDay).getMonth();
  
        if (date.getMonth() !== currentMonth) {
          week.push(<td className='ui-datepicker-other-month'>{currentDate}</td>);

        } else if (today === currentDate) {
          week.push(<td className='ui-datepicker-today'>{currentDate}</td>);

        } else {
          week.push(<td>{currentDate}</td>);

        }
        currentDay++;
      }

      month.push(<tr>{week}</tr>);
    }

    return month;
  };

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{dayTxt}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{dayNum}</div>
          <div className="ui-datepicker-material-month">{genetiveMonth}</div>
          <div className="ui-datepicker-material-year">{yearNum}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{monthTxt}</span>&nbsp;<span className="ui-datepicker-year">{yearNum}</span>
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
          {generateMonth(date)}
        </tbody>
      </table>
    </div>
  );
}
