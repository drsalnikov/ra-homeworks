const Calendar = ({ date }) => {
  const options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  return (
    <div>{ date.toLocaleString("ru", options) }</div>
  );
}


