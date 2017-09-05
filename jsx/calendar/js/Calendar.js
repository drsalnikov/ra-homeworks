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

  const dayTxt = date.toLocaleString('ru', {weekday: 'long'});
  const monthTxt = date.toLocaleString('ru', {month: 'long'}); 
  const dayNum = date.getDate();
  const monthNum = date.getMonth();
  const yearNum = date.getFullYear();
  const genetiveMonth = getGenitiveMonth[monthTxt];

  const firstDayOfMonth = new Date(yearNum, monthNum, 1).getDate();
  const lastDayOfMonth = new Date(yearNum, monthNum + 1, 0).getDate();

  let firstDayOfTheWeek = new Date(yearNum, monthNum, 1).getDay();
  let lastDayOfTheWeek = new Date(yearNum, monthNum + 1, 0).getDay();

  console.log('firstDayOfMonth', firstDayOfMonth);
  console.log('lastDayOfMonth', lastDayOfMonth);
  

  // ui-datepicker-other-month
  // ui-datepicker-today
  
  const generateMonth = (date) => {
    const month = [];

    if (firstDayOfTheWeek === 0) {
      firstDayOfTheWeek = 7;
    }

    for (let i = 0; i < 5; i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        
        for (firstDayOfTheWeek; firstDayOfTheWeek > 0; firstDayOfTheWeek--) {
          console.log('firstDayOfTheWeek', firstDayOfTheWeek);
        }

        const currentDay = j + i * 7;

        week.push(<td>{currentDay}</td>);
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


